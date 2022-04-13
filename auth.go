package main

import (
	"encoding/json"
	"math/rand"
	"net/http"
	"net/url"
)

type authUser struct {
	Name     string `json:"name"`
	Lastname string `json:"lastname"`
	Email    string `json:"email"`
}
type authHandler struct{ next http.Handler }

func authCallback(u *authUser) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		data, err := json.Marshal(u)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		http.SetCookie(w, &http.Cookie{
			Name:  "auth",
			Value: url.QueryEscape(string(data)),
			Path:  "/",
		})
		http.SetCookie(w, &http.Cookie{
			Name:     "gsauth",
			Value:    randomString(32),
			Path:     "/",
			HttpOnly: true,
			Secure:   true,
		})
		w.Header().Set("Authorization", url.QueryEscape(string(data)))
		w.Header().Set("Location", "/") // TODO: make /app redirection parametric to go back to the actual page
		w.WriteHeader(http.StatusTemporaryRedirect)
		w.Write(data)
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

func randomString(n int) string {
	var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

	s := make([]rune, n)
	for i := range s {
		s[i] = letters[rand.Intn(len(letters))]
	}
	return string(s)
}
