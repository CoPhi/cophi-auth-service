package auth

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/CoPhi/cophi-auth-service/jwt"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
)

type AuthUser struct {
	Email    string `json:"email,omitempty"`
	Name     string `json:"name,omitempty"`
	LastName string `json:"lastname,omitempty"`
}
type authHandler struct{ next http.Handler }

func AuthCallback(returnURL string, rts refreshtoken.Store, u *AuthUser, privKey string, domain string, jwtExpiration time.Duration) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

		jwtToken, err := jwt.GenerateToken(u.Name, u.LastName, u.Email, jwtExpiration, privKey)
		if err != nil {
			fmt.Println("Error generating JWT Token")
			fmt.Println(err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		http.SetCookie(w, &http.Cookie{
			Name:   "access_token",
			Value:  jwtToken,
			Path:   "/",
			Domain: domain,
			// Secure: true,
		})
		rt := refreshtoken.New()
		rts.Add(rt, u.Email)
		http.SetCookie(w, &http.Cookie{
			Name:     "refresh_token",
			Value:    rt,
			Path:     "/",
			Domain:   domain,
			HttpOnly: true,
			// Secure:   true,
		})

		location := "/login"
		if returnURL != "" {
			location = returnURL
		}
		http.SetCookie(w, &http.Cookie{
			Name:     "referer",
			Value:    "",
			Path:     "/",
			MaxAge:   -1,
			HttpOnly: true,
		})
		w.Header().Set("Location", location) // TODO: make /app redirection parametric to go back to the actual page
		w.WriteHeader(http.StatusTemporaryRedirect)
	}
}

func invalidCookies(r *http.Request, names ...string) bool {
	for _, c := range names {
		cookie, err := r.Cookie(c)
		if err == http.ErrNoCookie || cookie.Value == "" {
			return true
		}
	}
	return false
}

func (h *authHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if invalidCookies(r, "access_token", "refresh_token") {
		// not authenticated
		w.Header().Set("Location", "/login") // TODO: make login path parametric
		w.WriteHeader(http.StatusTemporaryRedirect)
		return
	}
	h.next.ServeHTTP(w, r)
}

func MustAuth(handler http.Handler) http.Handler {
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
