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

	"github.com/google/uuid"
	"github.com/markbates/goth/gothic"
)

//go:embed templates/*
var templates embed.FS

//go:embed cophi-ui/*
var dist embed.FS

func main() {

	// setup service provider
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

	http.Handle("/", mustAuth(http.FileServer(getFileSystem())))
	http.Handle("/login", &templateHandler{filename: "login.html"})

	// http.Handle("/app", mustAuth(&templateHandler{filename: "app.html"})) // TODO: replace with the actual application

	// path must have provider as query parameter e.g. /login/oauth?provider=google
	http.HandleFunc("/login/oauth", gothic.BeginAuthHandler)
	http.HandleFunc("/callback/oauth", oauthCallback)

	http.Handle("/saml/", sp)
	http.Handle("/callback/saml", sp.RequireAccount(http.HandlerFunc(samlSPCallback)))

	// start the web server
	log.Println("Starting web server")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
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
