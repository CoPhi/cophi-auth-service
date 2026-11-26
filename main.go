package main

import (
	"context"
	"crypto/sha256"
	"embed"
	"errors"
	"fmt"
	"html/template"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"

	firebase "firebase.google.com/go"
	"github.com/CoPhi/cophi-auth-service/apikey"
	"github.com/CoPhi/cophi-auth-service/auth"
	openapi "github.com/CoPhi/cophi-auth-service/go"
	"github.com/CoPhi/cophi-auth-service/logging"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
	"github.com/CoPhi/cophi-auth-service/user"
	"github.com/go-chi/cors"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/markbates/goth/gothic"
	"github.com/rs/zerolog"
)

var (
	ErrMalformedParameter = errors.New("malformed error parameter")
	ErrParseIntError      = errors.New("unable to parse int")
	ErrUnrecognizedUnit   = errors.New("unrecognized time unit")
)

const VERSION = "0.0.14"

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
	prodMode := os.Getenv("PROD")
	if prodMode == "" {
		if err := godotenv.Load("local.env"); err != nil {
			logging.Init(false)
			logging.Component("main").Fatal().Err(err).Str("file", "local.env").Msg("failed to load local env file")
		}
	}

	logging.Init(prodMode != "")
	logger := logging.Component("main")
	logger.Info().Str("version", VERSION).Bool("prod", prodMode != "").Msg("starting CophiAUTH")
	if prodMode == "" {
		logger.Debug().Str("file", "local.env").Msg("loaded local env from file")
	}

	createFirebaseConfFile("firebase-conf.json", os.Getenv("FIREBASE_CONF"), logger)

	rtExpiration, err := parsePeriod(os.Getenv("REFRESH_TOKEN_EXPIRATION"))
	if err != nil {
		logger.Fatal().Err(err).Msg("invalid REFRESH_TOKEN_EXPIRATION")
	}
	jwtExpiration, err := parsePeriod(os.Getenv("JWT_EXPIRATION"))
	if err != nil {
		logger.Fatal().Err(err).Msg("invalid JWT_EXPIRATION")
	}

	conf := conf{
		domain:                 os.Getenv("DOMAIN"),
		port:                   os.Getenv("PORT"),
		adminApiKey:            os.Getenv("ADMIN_APIKEY"),
		corsList:               strings.Split(os.Getenv("CORS"), ","),
		jwtExpiration:          jwtExpiration,
		refreshTokenExpiration: rtExpiration,
		rs256PrivKey:           "",
		rs256PubKey:            "",

		idpURL:  os.Getenv("IDP_URL"),
		rootURL: os.Getenv("ROOT_URL"),
		cert:    "",
		cerKey:  "",

		googleClientID: os.Getenv("GOOGLE_CLIENT_ID"),
		googleSecret:   os.Getenv("GOOGLE_SECRET"),
	}

	keyDir := os.Getenv("AUTH_KEYS_DIR")
	if keyDir == "" {
		if prodMode == "" {
			keyDir = "./auth-keys"
		} else {
			keyDir = "/var/lib/cophi-auth"
		}
	}
	keys, err := loadOrCreateKeyMaterial(keyDir)
	if err != nil {
		logger.Fatal().Err(err).Str("key_dir", keyDir).Msg("unable to load auth keys")
	}
	conf.rs256PrivKey = keys.jwtPrivate
	conf.rs256PubKey = keys.jwtPublic
	conf.cert = keys.samlCertificate
	conf.cerKey = keys.samlPrivate

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

	// handleSaml(router, &conf, rts)

	ctx := context.Background()

	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		logger.Fatal().Err(err).Msg("error initializing firebase app")
	}
	router.HandleFunc("/login/firebase", handleFirebase(app, ctx, conf.rs256PrivKey, conf.domain, rts, conf.jwtExpiration))

	c := cors.New(cors.Options{
		AllowedOrigins:   conf.corsList,
		AllowCredentials: true,
	})

	srv := &http.Server{
		Addr:    ":" + conf.port,
		Handler: c.Handler(router),
	}

	sigCtx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	go func() {
		logger.Info().Str("addr", srv.Addr).Msg("start listening")
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logger.Fatal().Err(err).Str("addr", srv.Addr).Msg("http server failed")
		}
	}()

	<-sigCtx.Done()
	logger.Info().Msg("shutting down server")

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		logger.Error().Err(err).Msg("graceful shutdown failed")
	} else {
		logger.Info().Msg("server stopped")
	}
}

func createFirebaseConfFile(path, content string, logger *zerolog.Logger) {
	err := os.WriteFile(path, []byte(content), 0644)
	if err != nil {
		logger.Fatal().Err(err).Str("path", path).Msg("failed to write firebase config file")
	}
}

func handleFirebase(app *firebase.App, ctx context.Context, privKey, domain string, rts refreshtoken.Store, jwtExpiration time.Duration) func(w http.ResponseWriter, r *http.Request) {
	logger := logging.Component("firebase")
	return func(w http.ResponseWriter, r *http.Request) {
		client, err := app.Auth(ctx)
		if err != nil {
			logger.Error().Err(err).Msg("failed to get firebase auth client")
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		idToken := r.URL.Query().Get("token")
		email := r.URL.Query().Get("email")
		name := r.URL.Query().Get("name")
		lastname := r.URL.Query().Get("lastname")

		if idToken == "" || email == "" || name == "" || lastname == "" {
			logger.Warn().
				Bool("has_token", idToken != "").
				Bool("has_email", email != "").
				Bool("has_name", name != "").
				Bool("has_lastname", lastname != "").
				Msg("empty user data in firebase login request")
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		token, err := client.VerifyIDToken(ctx, idToken)
		if err != nil {
			logger.Warn().Err(err).Msg("failed to verify firebase ID token")
			w.WriteHeader(http.StatusForbidden)
			return
		}

		logger.Debug().Str("uid", token.UID).Msg("verified firebase ID token")

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
