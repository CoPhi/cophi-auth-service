package main

import (
	"net/http"
)

type authUser struct{ name, lastname, email string }
type authHandler struct{ next http.Handler }

func authCallback(u *authUser) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		http.SetCookie(w, &http.Cookie{
			Name:  "auth",
			Value: u.email + u.name + u.lastname,
			Path:  "/",
		})

		w.Header().Set("Location", "/") // TODO: make /app redirection parametric to go back to the actual page
		w.WriteHeader(http.StatusTemporaryRedirect)
	}
}

func (h *authHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("auth")
	// TODO: use http.Get to check if the session is still active/valid in the backend
	if err == http.ErrNoCookie || cookie.Value == "" {
		// not authenticated
		w.Header().Set("Location", "/login") // TODO: make login path parametric
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
