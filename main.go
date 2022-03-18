package main

import (
	"context"
	"embed"
	"html/template"
	"log"
	"net/http"
	"sync"

	"github.com/markbates/goth/gothic"
)

//go:embed templates/*
var templates embed.FS

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

	http.Handle("/", &templateHandler{filename: "login.html"})
	http.Handle("/app", mustAuth(&templateHandler{filename: "app.html"})) // TODO: replace with the actual application

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
