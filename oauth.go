package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/CoPhi/cophi-auth-service/auth"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
	"github.com/gorilla/sessions"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

func setupProviders(rootURL, googleClientID, googleSecret string) {
	gothic.Store = sessions.NewCookieStore([]byte("<your secret here>")) // TODO: this is unused, it just avoid warning messages
	goth.UseProviders(
		google.New(
			googleClientID,
			googleSecret,
			rootURL+"/callback/oauth",
			"email", // TODO: check, maybe userinf.email is enough
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		),
	)
}

func oauthCallback(privKey, domain string, rts refreshtoken.Store, jwtExpiration time.Duration) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		oauthUser, err := gothic.CompleteUserAuth(w, r)
		if err != nil {
			fmt.Fprintln(w, err)
			return
		}
		user := auth.AuthUser{
			Email:    oauthUser.Email,
			Name:     oauthUser.FirstName,
			LastName: oauthUser.LastName,
		}
		referer, err := r.Cookie("referer")
		if err != nil {
			fmt.Fprintln(w, err)
			return
		}
		auth.AuthCallback(referer.Value, rts, &user, privKey, domain, jwtExpiration)(w, r)
	}
}
