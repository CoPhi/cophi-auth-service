package refreshtoken_test

import (
	"testing"
	"time"

	refreshtoken "github.com/CoPhi/cophi-auth-service/refreshtoken"
)

func TestCreateStorage(t *testing.T) {

	ss := []refreshtoken.RefreshTokenStore{
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
	s.Add("test-token")

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
		got := s.Check(v.token)
		if v.want != got {
			t.Fatalf("expected: %v, got: %v", v.want, got)
		}
	}
}
