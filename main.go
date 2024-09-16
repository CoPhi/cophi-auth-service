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

	firebase "firebase.google.com/go"
	"github.com/CoPhi/cophi-auth-service/apikey"
	"github.com/CoPhi/cophi-auth-service/auth"
	openapi "github.com/CoPhi/cophi-auth-service/go"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
	"github.com/CoPhi/cophi-auth-service/user"
	"github.com/go-chi/cors"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/markbates/goth/gothic"
)

var (
	ErrMalformedParameter = errors.New("malformed error parameter")
	ErrParseIntError      = errors.New("unable to parse int")
	ErrUnrecognizedUnit   = errors.New("unrecognized time unit")
)

const VERSION = "0.0.8"

//go:embed templates/*
var templates embed.FS

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

	prodMode := os.Getenv("PROD")
	if prodMode == "" {
		log.Println("Loading local env from file")
		err := godotenv.Load("local.env")
		if err != nil {
			log.Fatalf("Some error occured. Err: %s", err)
		}
	}

	createFirebaseConfFile("firebase-conf.json", os.Getenv("FIREBASE_CONF"))

	rtExpiration, err := parsePeriod(os.Getenv("REFRESH_TOKEN_EXPIRATION"))
	if err != nil {
		panic(err)
	}
	jwtExpiration, err := parsePeriod(os.Getenv("JWT_EXPIRATION"))
	if err != nil {
		panic(err)
	}

	conf := conf{
		domain:                 os.Getenv("DOMAIN"),
		port:                   os.Getenv("PORT"),
		adminApiKey:            os.Getenv("ADMIN_APIKEY"),
		corsList:               strings.Split(os.Getenv("CORS"), ","),
		jwtExpiration:          jwtExpiration,
		refreshTokenExpiration: rtExpiration,
		rs256PrivKey:           os.Getenv("RS256_PRIV"),
		rs256PubKey:            os.Getenv("RS256_PUB"),

		idpURL:  os.Getenv("IDP_URL"),
		rootURL: os.Getenv("ROOT_URL"),
		cert:    os.Getenv("CERT"),
		cerKey:  os.Getenv("CERT_KEY"),

		googleClientID: os.Getenv("GOOGLE_CLIENT_ID"),
		googleSecret:   os.Getenv("GOOGLE_SECRET"),
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

	ctx := context.Background()

	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	router.HandleFunc("/login/firebase", handleFirebase(app, ctx, conf.rs256PrivKey, conf.domain, rts, conf.jwtExpiration))

	c := cors.New(cors.Options{
		AllowedOrigins:   conf.corsList,
		AllowCredentials: true,
	})
	// start the web server
	log.Println("Start listening")
	log.Fatal(http.ListenAndServe(":"+conf.port, c.Handler(router)))
}

func createFirebaseConfFile(path, content string) {
	err := os.WriteFile(path, []byte(content), 0644)
	if err != nil {
		log.Fatal(err)
	}
}

func handleFirebase(app *firebase.App, ctx context.Context, privKey, domain string, rts refreshtoken.Store, jwtExpiration time.Duration) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		client, err := app.Auth(ctx)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		idToken := r.URL.Query().Get("token")
		email := r.URL.Query().Get("email")
		name := r.URL.Query().Get("name")
		lastname := r.URL.Query().Get("lastname")

		if idToken == "" || email == "" || name == "" || lastname == "" {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		token, err := client.VerifyIDToken(ctx, idToken)
		if err != nil {
			fmt.Println("Error verifying token " + idToken)
			w.WriteHeader(http.StatusForbidden)
			return
		}

		log.Printf("Verified ID token: %v\n", token)

		user := auth.AuthUser{
			Name:     name,
			LastName: lastname,
			Email:    email,
		}
		http.SetCookie(w, &http.Cookie{
			Name:     "token",
			Value:    "",
			Path:     "/",
			MaxAge:   -1,
			HttpOnly: true,
		})
		returnURL := r.URL.Query().Get("url")
		auth.AuthCallback(returnURL, rts, &user, privKey, domain, jwtExpiration)(w, r)
	}
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
