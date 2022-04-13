package main

import (
	"testing"

	"github.com/markbates/goth"
)

func TestServiceConfiguration(t *testing.T) {
	serviceAPIKey := "serviceKey"
	securedPath := "/"
	oauthProviders := []goth.Provider{}

	var v AuthService = newInMemoryService(
		serviceAPIKey,
		securedPath,
		oauthProviders,
	)

}
