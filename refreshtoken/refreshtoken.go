package refreshtoken

import (
	"crypto/rand"
	"fmt"
	"time"
)

type RefreshTokenStore interface {
	Add(token, userID string)
	IsOwner(token, userID string) bool
	ExtendValidity(token string)
	Delete(token string)
	Valid(token string) bool
	ExpirationTime(token string) time.Time
}

// Generate a new refresh token
func New() string {
	b := make([]byte, 64)
	rand.Read(b)
	return fmt.Sprintf("%x", b)
}

type storeItem struct {
	expiration time.Time
	owner      string
}
type inMemoryRefreshTokenStore struct {
	tokens         map[string]storeItem
	expirationTime time.Duration
}

type InMemoryTokenOption func(c *inMemoryRefreshTokenStore)

func NewInMemoryTokenStore(opts ...func(s *inMemoryRefreshTokenStore)) RefreshTokenStore {
	s := &inMemoryRefreshTokenStore{
		tokens: map[string]storeItem{},
	}
	for _, opt := range opts {
		opt(s)
	}
	return s
}

func WithExpTime(d time.Duration) InMemoryTokenOption {
	return func(s *inMemoryRefreshTokenStore) {
		s.expirationTime = d
	}
}

func (s *inMemoryRefreshTokenStore) Add(token, userID string) {
	s.tokens[token] = storeItem{
		owner:      userID,
		expiration: time.Now().Add(s.expirationTime),
	}
}

func (s *inMemoryRefreshTokenStore) ExtendValidity(token string) {
	i, ok := s.tokens[token]
	if !ok {
		return // TODO: check if this can happen
	}
	s.tokens[token] = storeItem{
		owner:      i.owner,
		expiration: time.Now().Add(s.expirationTime),
	}
}
func (s *inMemoryRefreshTokenStore) Delete(token string) {
	delete(s.tokens, token)
}
func (s *inMemoryRefreshTokenStore) Valid(token string) bool {
	t, ok := s.tokens[token]
	return ok && t.expiration.After(time.Now())
}

func (s *inMemoryRefreshTokenStore) IsOwner(token, userID string) bool {
	t, ok := s.tokens[token]
	return ok && t.owner == userID
}

func (s *inMemoryRefreshTokenStore) ExpirationTime(token string) time.Time {
	t, ok := s.tokens[token]
	if !ok {
		return time.Time{}
	}
	return t.expiration
}
