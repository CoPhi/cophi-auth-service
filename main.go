package main

import (
	"context"
	"crypto/sha256"
	"embed"
	"errors"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/CoPhi/cophi-auth-service/apikey"
	openapi "github.com/CoPhi/cophi-auth-service/go"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
	"github.com/CoPhi/cophi-auth-service/user"
	"github.com/go-chi/cors"
	"github.com/gorilla/mux"
	"github.com/markbates/goth/gothic"
)

var (
	ErrMalformedParameter = errors.New("malformed error parameter")
	ErrParseIntError      = errors.New("unable to parse int")
	ErrUnrecognizedUnit   = errors.New("unrecognized time unit")
)

const VERSION = "0.0.6"

//go:embed templates/*
var templates embed.FS

// RS256.key.pub
//
//go:embed jwtRS256.key.pub
var pubKey string

// RS256.key
//
//go:embed jwtRS256.key
var privKey string

// gsservice.cert
//
//go:embed gs-saml.cert
var cert string

// gsservice.key
//
//go:embed gs-saml.key
var certKey string

func getEnvOrDefault(envname, defaultVal string) string {
	e := os.Getenv(envname)
	if e == "" {
		e = defaultVal
	}
	return e
}

type conf struct {
	domain                                string
	adminApiKey                           string
	rs256PrivKey, rs256PubKey             string
	corsList                              []string //e.g. for the data service
	port                                  string
	jwtExpiration, refreshTokenExpiration time.Duration

	idpURL, rootURL string
	cert, cerKey    string

	googleClientID string
	googleSecret   string
}

func main() {
	log.Println("CophiAUTH " + VERSION)

	rtExpiration, err := parsePeriod(getEnvOrDefault("REFRESH_TOKEN_EXPIRATION", "1460 h")) // 2 months
	if err != nil {
		panic(err)
	}
	jwtExpiration, err := parsePeriod(getEnvOrDefault("JWT_EXPIRATION", "1 h"))
	if err != nil {
		panic(err)
	}

	conf := conf{
		domain:                 os.Getenv("DOMAIN"),
		port:                   getEnvOrDefault("PORT", "8000"),
		adminApiKey:            getEnvOrDefault("ADMIN_APIKEY", "admin"),
		corsList:               strings.Split(getEnvOrDefault("CORS", "http://localhost:4200"), ","),
		jwtExpiration:          jwtExpiration,
		refreshTokenExpiration: rtExpiration,
		rs256PrivKey:           getEnvOrDefault("RS256_PRIV", privKey),
		rs256PubKey:            getEnvOrDefault("RS256_PUB", pubKey),

		idpURL:  getEnvOrDefault("IDP_URL", "https://samltest.id/saml/idp"),
		rootURL: getEnvOrDefault("ROOT_URL", "http://localhost:8000"),
		cert:    getEnvOrDefault("CERT", cert),
		cerKey:  getEnvOrDefault("CERT_KEY", certKey),

		googleClientID: getEnvOrDefault("GOOGLE_CLIENT_ID", "736892386107-pik68apgj7acgdigkutg25c075qat9nu.apps.googleusercontent.com"), // TODO: remove this default
		googleSecret:   getEnvOrDefault("GOOGLE_SECRET", "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"),                                         // TODO: remove this default
	}

	rts := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(5 * time.Hour))

	DefaultApiService := openapi.NewDefaultApiService(
		conf.rs256PubKey,
		conf.rs256PrivKey,
		rts,
	)
	DefaultApiController := openapi.NewDefaultApiController(DefaultApiService)

	userdb := user.NewInMemoryDB()
	apikeys := apikey.NewInMemoryStore(conf.adminApiKey)

	UsersApiService := openapi.NewUsersApiService(userdb, apikeys)
	UsersApiController := openapi.NewUsersApiController(UsersApiService)

	router := openapi.NewRouter(DefaultApiController, UsersApiController)

	setupProviders(conf.rootURL, conf.googleClientID, conf.googleSecret)

	//router.Handle("/", mustAuth(http.FileServer(getFileSystem())))
	router.Handle("/login", &templateHandler{filename: "login.html"})

	// path must have provider as query parameter e.g. /login/oauth?provider=google
	router.HandleFunc("/login/oauth", setReturnURL(gothic.BeginAuthHandler))
	router.HandleFunc("/callback/oauth", oauthCallback(conf.rs256PrivKey, conf.domain, rts, conf.jwtExpiration))

	handleSaml(router, &conf, rts)

	c := cors.New(cors.Options{
		AllowedOrigins:   conf.corsList,
		AllowCredentials: true,
	})

	// start the web server
	log.Println("Start listening")
	log.Fatal(http.ListenAndServe(":"+conf.port, c.Handler(router)))
}

func handleSaml(router *mux.Router, c *conf, rts refreshtoken.Store) {
	sp, err := NewSP(
		c.cert,
		c.cerKey,
		c.idpURL,
		c.rootURL,
		context.Background(),
		http.DefaultClient,
	)

	if err == nil {
		router.Handle("/saml/", sp)
		router.Handle("/saml/acs", http.HandlerFunc(sp.ServeACS))
		router.Handle("/saml/metadata", http.HandlerFunc(sp.ServeMetadata))
		router.HandleFunc("/login/saml", setReturnURL(sp.RequireAccount(http.HandlerFunc(samlSPCallback(c.rs256PrivKey, c.domain, rts, c.jwtExpiration))).ServeHTTP))
	}
}

// TODO: check if a cookie for the host should be set explicitly in case of sharing cookies between x.domain.com, domain.com, y.domain.com
func setReturnURL(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		http.SetCookie(w, &http.Cookie{
			Name:     "referer",
			Value:    r.URL.Query().Get("url"),
			Path:     "/",
			HttpOnly: true,
			Secure:   true,
		})

		next.ServeHTTP(w, r)
	}
}

type templateHandler struct {
	once     sync.Once
	filename string
	templ    *template.Template
}

func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t.once.Do(func() {
		t.templ = template.Must(template.ParseFS(templates, "templates/"+t.filename))
	})
	t.templ.Execute(w, r)
}

func hash(s string) string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
}

func parsePeriod(duration string) (time.Duration, error) {
	d := strings.Split(duration, " ")
	if len(d) != 2 {
		return time.Second, ErrMalformedParameter
	}

	n, err := strconv.Atoi(d[0])
	if err != nil {
		return time.Second, ErrParseIntError
	}
	switch d[1] {
	case "s":
		return time.Duration(n) * time.Second, nil
	case "m":
		return time.Duration(n) * time.Minute, nil
	case "h":
		return time.Duration(n) * time.Hour, nil
	default:
		return time.Second, ErrUnrecognizedUnit
	}
}
