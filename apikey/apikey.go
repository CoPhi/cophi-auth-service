package apikey

import (
	"errors"

	"github.com/google/uuid"
)

type Store interface {
	Add(app string) (string, error)
	Delete(key string)
	Valid(key, app string) bool
	IsOwner(key string) bool
}

type inMemoryApikeyStore struct {
	adminKey string
	data     map[string]string
}

func NewInMemoryStore(adminKey string) Store {
	return &inMemoryApikeyStore{
		data:     map[string]string{},
		adminKey: "admin",
	}
}

func (s *inMemoryApikeyStore) IsOwner(key string) bool {
	return key == s.adminKey
}

func (s *inMemoryApikeyStore) Add(app string) (string, error) {
	key := uuid.New().String()
	if _, ok := s.data[key]; ok {
		return "", errors.New("apikey is already present")
	}
	s.data[key] = app
	return key, nil
}

func (s *inMemoryApikeyStore) Delete(key string) {
	delete(s.data, key)
}

func (s *inMemoryApikeyStore) Valid(key, app string) bool {
	a, ok := s.data[key]
	return ok && a == app
}
