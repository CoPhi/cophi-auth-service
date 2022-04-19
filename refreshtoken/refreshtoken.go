package refreshtoken

import "time"

type RefreshTokenStore interface {
	Add(token string)
	Update(token string)
	Delete(token string)
	Check(token string) bool
}

type inMemoryRefreshTokenStore struct {
	tokens         map[string]time.Time
	expirationTime time.Duration
}

type InMemoryTokenOption func(c *inMemoryRefreshTokenStore)

func NewInMemoryTokenStore(opts ...func(s *inMemoryRefreshTokenStore)) RefreshTokenStore {
	s := &inMemoryRefreshTokenStore{
		tokens: map[string]time.Time{},
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

func (s *inMemoryRefreshTokenStore) Add(token string) {
	s.tokens[token] = time.Now().Add(s.expirationTime)
}

func (s *inMemoryRefreshTokenStore) Update(token string) {
	s.tokens[token] = time.Now().Add(s.expirationTime)
}
func (s *inMemoryRefreshTokenStore) Delete(token string) {
	delete(s.tokens, token)
}
func (s *inMemoryRefreshTokenStore) Check(token string) bool {
	now := time.Now()
	t, ok := s.tokens[token]
	if !ok {
		return false
	}
	return t.After(now)
}
