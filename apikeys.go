package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
)

func verify() {
	keyData, _ := ioutil.ReadFile("test/sample_key.pub")
	key, _ := jwt.ParseRSAPublicKeyFromPEM(keyData)

	token := "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmb28iOiJiYXIifQ.FhkiHkoESI_cG3NPigFrxEk9Z60_oXrOT2vGm9Pn6RDgYNovYORQmmA0zs1AoAOf09ly2Nx2YAg6ABqAYga1AcMFkJljwxTT5fYphTuqpWdy4BELeSYJx5Ty2gmr8e7RonuUztrdD5WfPqLKMm1Ozp_T6zALpRmwTIW0QPnaBXaQD90FplAg46Iy1UlDKr-Eupy0i5SLch5Q-p2ZpaL_5fnTIUDlxC3pWhJTyx_71qDI-mAA_5lE_VdroOeflG56sSmDxopPEG3bFlSu1eowyBfxtu0_CuVd-M42RU75Zc4Gsj6uV77MBtbMrf4_7M_NUTSgoIF3fRqxrj0NzihIBg"

	parts := strings.Split(token, ".")

	method := jwt.GetSigningMethod("RS256")
	err := method.Verify(strings.Join(parts[0:2], "."), parts[2], key)
	if err != nil { // Invalid Token
		log.Fatalf("Error while verifying key: %v", err)
	}
}

type Claims struct {
	Email    string `json:"email,omitempty"`
	Name     string `json:"name,omitempty"`
	LastName string `json:"lastname,omitempty"`
	jwt.StandardClaims
}

func createToken() {
	expirationTime := time.Now().Add(5 * time.Minute)
	// Create the JWT claims, which includes the username and expiry time
	claims := &Claims{
		Email: "foo@bar.com",
		StandardClaims: jwt.StandardClaims{
			// In JWT, the expiry time is expressed as unix milliseconds
			ExpiresAt: expirationTime.Unix(),
		},
	}
	var jwtKey = []byte("my_secret_key")

	privateKey, _ := ioutil.ReadFile("RS256.key")
	signKey, err := jwt.ParseRSAPrivateKeyFromPEM(privateKey)
	if err != nil {
		panic("TODO")
	}
	// Declare the token with the algorithm used for signing, and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)
	// Create the JWT string
	tokenString, err := token.SignedString(signKey)
	if err != nil {
		panic("TODO")
	}
	fmt.Println(tokenString)

	publicKey, _ := ioutil.ReadFile("RS256.key.pub")
	pubKey, err := jwt.ParseRSAPublicKeyFromPEM(publicKey)
	if err != nil {
		panic("TODO")
	}

	parsedToken, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return pubKey, nil
	})
	if err != nil {
		panic("TODO")
	}

	switch err.(type) {
	case nil: // no error
		if !parsedToken.Valid { // but may still be invalid
			fmt.Println("Invalid")
			return
		}

		// see stdout and watch for the CustomUserInfo, nicely unmarshalled
		log.Printf("Someone accessed resricted area! Token:%+v\n", token)

	case *jwt.ValidationError: // something was wrong during the validation
		vErr := err.(*jwt.ValidationError)

		switch vErr.Errors {
		case jwt.ValidationErrorExpired:
			fmt.Println("Token Expired, get a new one.")
			return

		default:
			fmt.Println("Error while Parsing Token!")
			return
		}

	default: // something else went wrong
		fmt.Println("Error while Parsing Token!")
		return
	}

}
