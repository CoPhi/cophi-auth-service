package main

import "time"

type sessionStorage interface {
	add(token string)
	update(token string)
	delete(token string)
	check(token string) bool
}

type inMemorySession struct {
	tokens         map[string]time.Time
	expirationTime time.Duration
}

func (s *inMemorySession) add(token string) {
	s.tokens[token] = time.Now().Add(s.expirationTime)
}

func (s *inMemorySession) update(token string) {
	s.tokens[token] = time.Now().Add(s.expirationTime)
}
func (s *inMemorySession) delete(token string) {
	delete(s.tokens, token)
}
func (s *inMemorySession) check(token string) bool {
	t, ok := s.tokens[token]
	if !ok {
		return false
	}
	return t.Before(time.Now())
}
