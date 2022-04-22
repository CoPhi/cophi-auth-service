package apikey

import "errors"

type Store interface {
	Add(key, app string) error
	Delete(key string)
	Valid(key, app string) bool
}

type inMemoryApikeyStore struct {
	data map[string]string
}

func NewInMemoryStore(adminKey string) Store {
	return &inMemoryApikeyStore{
		data: map[string]string{
			adminKey: "admin",
		},
	}
}

func (s *inMemoryApikeyStore) Add(key, app string) error {
	if _, ok := s.data[key]; ok {
		return errors.New("apikey is already present")
	}
	s.data[key] = app
	return nil
}

func (s *inMemoryApikeyStore) Delete(key string) {
	delete(s.data, key)
}

func (s *inMemoryApikeyStore) Valid(key, app string) bool {
	a, ok := s.data[key]
	return ok && a == app
}
