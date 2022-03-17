package main

import (
	"embed"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"sync"

	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

//go:embed templates/*
var templates embed.FS

func main() {

	// clientid: 736892386107-pik68apgj7acgdigkutg25c075qat9nu.apps.googleusercontent.com
	// secret: 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

	clientid := "736892386107-pik68apgj7acgdigkutg25c075qat9nu.apps.googleusercontent.com"
	secret := "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"

	goth.UseProviders(
		// google.New(os.Getenv("GOOGLE_KEY"), os.Getenv("GOOGLE_SECRET"), "http://localhost:3000/callback/oauth/google"),
		google.New(clientid, secret, "http://localhost:8000/callback/oauth/google", "email",
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		),
	)
	http.Handle("/", &templateHandler{filename: "login.html"})
	http.Handle("/app", mustAuth(&templateHandler{filename: "app.html"}))

	// path must have provider as query parameter e.g. /login/oauth?provider=google
	http.HandleFunc("/login/oauth", gothic.BeginAuthHandler)

	http.HandleFunc("/callback/oauth/google", func(w http.ResponseWriter, r *http.Request) {
		user, err := gothic.CompleteUserAuth(w, r)
		if err != nil {
			fmt.Fprintln(w, err)
			return
		}

		fmt.Println(user)
		http.SetCookie(w, &http.Cookie{
			Name:  "auth",
			Value: user.Email + user.FirstName + user.LastName,
			Path:  "/"})

		w.Header().Set("Location", "/app")
		w.WriteHeader(http.StatusTemporaryRedirect)
	})

	// http.HandleFunc("/app", func(w http.ResponseWriter, r *http.Request) {
	// 	mustAuth(&templateHandler{filename: "chat.html"})
	// })

	// TODO: login/oauth/{provider}
	// TODO: callback/oauth/{provider}

	// TODO: login/saml
	// TODO: callback/saml

	// callback redirects to app

	// http.Handle("/login", &templateHandler{filename: "login.html"})
	// http.HandleFunc("/auth/", loginHandler)
	// http.Handle("/room", r)
	// http.HandleFunc("/logout", func(w http.ResponseWriter, r *http.Request) {
	// 	http.SetCookie(w, &http.Cookie{
	// 		Name:   "auth",
	// 		Value:  "",
	// 		Path:   "/",
	// 		MaxAge: -1,
	// 	})
	// 	w.Header().Set("Location", "/chat")
	// 	w.WriteHeader(http.StatusTemporaryRedirect)
	// })
	// http.Handle("/upload", &templateHandler{filename: "upload.html"})
	// http.HandleFunc("/uploader", uploaderHandler)

	// http.Handle("/avatars/",
	// 	http.StripPrefix("/avatars/",
	// 		http.FileServer(http.Dir("./avatars"))))

	// // get the room going
	// go r.run()

	// start the web server
	log.Println("Starting web server")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

type authHandler struct {
	next http.Handler
}

func (h *authHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("auth")
	// TODO: use http.Get to check if the session is still active
	if err == http.ErrNoCookie || cookie.Value == "" {
		// not authenticated
		w.Header().Set("Location", "/login")
		w.WriteHeader(http.StatusTemporaryRedirect)
		return
	}
	if err != nil {
		// some other error
		panic(err.Error())
		// return
	}
	// success - call the next handler
	h.next.ServeHTTP(w, r)
}

func mustAuth(handler http.Handler) http.Handler {
	return &authHandler{next: handler}
}

// templ represents a single template
type templateHandler struct {
	once     sync.Once
	filename string
	templ    *template.Template
}

// ServeHTTP handles the HTTP request.
func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t.once.Do(func() {
		t.templ = template.Must(template.ParseFS(templates, "templates/"+t.filename))
	})
	t.templ.Execute(w, r)
}
