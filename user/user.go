package user

import (
	"errors"

	"github.com/CoPhi/cophi-auth-service/auth"
	"github.com/google/uuid"
)

var (
	UserNotFound      = errors.New("user not found")
	UserAlreadyPreset = errors.New("can't add a user with the same id of another")
)

type User struct {
	ID string `json:"id"`
	auth.AuthUser
}

func NewUser(u auth.AuthUser) User {
	return User{
		ID:       uuid.NewString(),
		AuthUser: u,
	}
}

type DB interface {
	Add(u User) error
	Delete(id string)
	GetByID(id string) (User, error)
	GetByEmail(email string) (User, error)
	List() ([]User, error)
}

type inMemoryDB map[string]User

func NewInMemoryDB() DB {
	return inMemoryDB{}
}

func (db inMemoryDB) Add(u User) error {
	if _, ok := db[u.ID]; ok {
		return UserAlreadyPreset
	}
	db[u.ID] = u
	return nil
}

func (db inMemoryDB) Delete(id string) {
	delete(db, id)
}

func (db inMemoryDB) GetByID(id string) (User, error) {
	u, ok := db[id]
	if !ok {
		return User{}, UserNotFound
	}
	return u, nil
}

func (db inMemoryDB) GetByEmail(email string) (User, error) {
	for _, v := range db {
		if v.Email == email {
			return v, nil
		}
	}
	return User{}, UserNotFound
}

func (db inMemoryDB) List() ([]User, error) {
	users := []User{}
	for _, u := range db {
		users = append(users, u)
	}
	return users, nil
}
