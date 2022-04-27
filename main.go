package main

import (
	"context"
	"crypto/sha256"
	"embed"
	"fmt"
	"html/template"
	"io/fs"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/CoPhi/cophi-auth-service/apikey"
	"github.com/CoPhi/cophi-auth-service/auth"
	openapi "github.com/CoPhi/cophi-auth-service/go"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
	"github.com/CoPhi/cophi-auth-service/user"
	"github.com/google/uuid"
	"github.com/markbates/goth/gothic"
)

//go:embed templates/*
var templates embed.FS

//go:embed cophi-ui/*
var dist embed.FS

//go:embed RS256.key.pub
var pubKey string // TODO: make env variable

//go:embed RS256.key
var privKey string // TODO: make env variable

func main() {
	log.Printf("Server started")

	rts := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(5 * time.Hour))

	DefaultApiService := openapi.NewDefaultApiService(
		pubKey,
		privKey,
		rts,
	)
	DefaultApiController := openapi.NewDefaultApiController(DefaultApiService)

	userdb := user.NewInMemoryDB()
	apikeys := apikey.NewInMemoryStore("admin") // TODO: make key environment variable

	UsersApiService := openapi.NewUsersApiService(userdb, apikeys)
	UsersApiController := openapi.NewUsersApiController(UsersApiService)

	router := openapi.NewRouter(DefaultApiController, UsersApiController)

	sp, err := NewSP(
		"gsservice.cert",               // TODO embed?
		"gsservice.key",                // TODO: embed?
		"https://samltest.id/saml/idp", // TODO: os.getevn
		"http://localhost:8000",        // TODO: os.getevn
		context.Background(),
		http.DefaultClient,
	)
	if err != nil {
		panic(err) // TODO handle error
	}

	setupProviders()

	//router.Handle("/", mustAuth(http.FileServer(getFileSystem())))
	router.Handle("/login", &templateHandler{filename: "login.html"})

	//router.Handle("/", mustAuth(&templateHandler{filename: "app.html"})) // TODO: replace with the actual application

	// path must have provider as query parameter e.g. /login/oauth?provider=google
	router.HandleFunc("/login/oauth", gothic.BeginAuthHandler)
	router.HandleFunc("/callback/oauth", oauthCallback(privKey, rts))

	router.Handle("/saml/", sp)
	router.Handle("/callback/saml", sp.RequireAccount(http.HandlerFunc(samlSPCallback(privKey, rts))))

	router.PathPrefix("/").Handler(auth.MustAuth(http.FileServer(getFileSystem())))

	// start the web server
	log.Println("Start listening")
	log.Fatal(http.ListenAndServe(":8000", router))
}

func tokenGenerator() string {
	// b := make([]byte, 4)
	// rand.Read(b)
	// return fmt.Sprintf("%x", b)
	return uuid.New().String()
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

func getFileSystem() http.FileSystem {
	fsys, err := fs.Sub(dist, "cophi-ui")
	if err != nil {
		log.Fatal(err)
	}
	return http.FS(fsys)
}

func hash(s string) string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
}
