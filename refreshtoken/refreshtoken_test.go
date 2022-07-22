package refreshtoken_test

import (
	"testing"
	"time"

	refreshtoken "github.com/CoPhi/cophi-auth-service/refreshtoken"
)

func TestCreateStorage(t *testing.T) {

	ss := []refreshtoken.Store{
		refreshtoken.NewInMemoryTokenStore(),
		refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(3 * time.Minute)),
	}

	for _, s := range ss {
		if s == nil {
			t.Error("Expected valid sessione storage, got nil")
		}
	}
}

func TestSessionStorageCheck(t *testing.T) {
	s := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(1 * time.Minute))
	s.Add("test-token", "uid")

	tt := []struct {
		token string
		want  bool
	}{
		{"test-token", true},
		{"", false},
		{"x", false},
		{"Test-token", false},
	}

	for _, v := range tt {
		got := s.Valid(v.token)
		if v.want != got {
			t.Fatalf("expected: %v, got: %v", v.want, got)
		}
	}
}

func TestIsOwner(t *testing.T) {
	s := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(1 * time.Minute))
	s.Add("token", "u")
	s.Add("token2", "v")

	tt := []struct {
		token    string
		userid   string
		expected bool
	}{
		{"token", "u", true},
		{"token", "v", false},
		{"token2", "u", false},
		{"token2", "v", true},
	}

	for _, v := range tt {
		got := s.IsOwner(v.token, v.userid)
		if v.expected != got {
			t.Fatalf("expected: IsOwner(%v, %v)=%v got: %v", v.token, v.userid, v.expected, got)
		}
	}
}

func TestNewRefreshToken(t *testing.T) {
	token := refreshtoken.New()

	if len([]byte(token)) != 128 {
		t.Errorf("Unexpected token lenght: got %v expected %v", len(token), 128)
	}
}

func TestExtendValidity(t *testing.T) {
	s := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(5 * time.Minute))
	s.Add("token", "u")
	v := s.ExpirationTime("token")
	s.ExtendValidity("token")
	e := s.ExpirationTime("token")

	if !v.Before(e) {
		t.Errorf("Expected token expiration time to be extended: got %v is after %v", e, v)
	}

	v = s.ExpirationTime("token2")
	s.ExtendValidity("token2")
	e = s.ExpirationTime("token2")

	if !v.Equal(e) {
		t.Errorf("Expected token expiration time to be extended: got %v is after %v", e, v)
	}
}

func TestDelete(t *testing.T) {
	s := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(5 * time.Minute))
	s.Add("token", "u")

	if !s.Valid("token") {
		t.Error("Expected token to be valid")
	}

	s.Delete("token")

	if s.Valid("token") {
		t.Error("Expected token to be invalid")
	}
}
