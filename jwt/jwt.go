package jwt

import (
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var (
	Expired = errors.New("token expired")
	Invalid = errors.New("token is invalid")
)

type Claims struct {
	Email    string `json:"email,omitempty"`
	Name     string `json:"name,omitempty"`
	LastName string `json:"lastname,omitempty"`
	jwt.StandardClaims
}

func NewClaims(name, lastname, email string, expiration time.Duration) *Claims {
	claims := &Claims{
		Name:     name,
		LastName: lastname,
		Email:    email,
		StandardClaims: jwt.StandardClaims{
			// In JWT, the expiry time is expressed as unix milliseconds
			ExpiresAt: time.Now().Add(expiration).Unix(),
		},
	}

	return claims
}

func GenerateToken(name, lastname, email string, expirationTime time.Duration, privateKey string) (string, error) {
	pKey, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(privateKey))
	if err != nil {
		return "", err
	}
	token := jwt.NewWithClaims(jwt.SigningMethodRS256, NewClaims(name, lastname, email, expirationTime))
	return token.SignedString(pKey)
}

func VerifyToken(token string, pubKey string) (*jwt.Token, error) {
	publicKey, err := jwt.ParseRSAPublicKeyFromPEM([]byte(pubKey))
	if err != nil {
		return nil, err
	}
	parser := jwt.Parser{
		ValidMethods: []string{"RS256"},
	}
	parsedToken, err := parser.ParseWithClaims(token, &Claims{}, func(token *jwt.Token) (interface{}, error) { return publicKey, nil })

	switch err.(type) {
	case nil: // no error
		if !parsedToken.Valid {
			return nil, Invalid
		}
		return parsedToken, nil

	case *jwt.ValidationError:
		vErr := err.(*jwt.ValidationError)
		switch vErr.Errors {
		case jwt.ValidationErrorExpired:
			return parsedToken, Expired
		}

		return nil, Invalid

	default:
		return nil, Invalid
	}
}
