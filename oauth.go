package main

import (
	"fmt"
	"net/http"

	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

func setupProviders() {
	//TODO: remove secrets from code
	clientid := "736892386107-pik68apgj7acgdigkutg25c075qat9nu.apps.googleusercontent.com"
	secret := "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"

	goth.UseProviders(
		// google.New(os.Getenv("GOOGLE_KEY"), os.Getenv("GOOGLE_SECRET"), "http://localhost:3000/callback/oauth/google"),
		google.New(
			clientid,
			secret,
			"http://localhost:8000/callback/oauth",
			"email", // TODO: check
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		),
	)
}

func oauthCallback(w http.ResponseWriter, r *http.Request) {
	oauthUser, err := gothic.CompleteUserAuth(w, r)
	if err != nil {
		fmt.Fprintln(w, err)
		return
	}
	user := authUser{
		Name:     oauthUser.FirstName,
		Lastname: oauthUser.LastName,
		Email:    oauthUser.Email,
	}
	authCallback(&user)(w, r)
}
