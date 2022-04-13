package main

import (
	"testing"
	"time"
)

func TestCreateStorage(t *testing.T) {
	var s sessionStorage = &inMemorySession{expirationTime: 3 * time.Minute}
	if s != nil {
		t.Error("Expected valid sessione storage, got nil")
	}
}

func TestSessionStorageCheck(t *testing.T) {
	s := *&inMemorySession{expirationTime: 1 * time.Minute}
	s.add("test-token")

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
		got := s.check(v.token)
		if v.want != got {
			t.Fatalf("expected: %v, got: %v", v.want, got)
		}
	}
}
