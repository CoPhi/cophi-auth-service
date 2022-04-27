package user

import (
	"errors"

	"github.com/CoPhi/cophi-auth-service/auth"
	"github.com/google/uuid"
)

var UserNotFound = errors.New("user not found")

type User struct {
	ID string
	auth.AuthUser
}

func NewUser(u auth.AuthUser) User {
	return User{
		ID:       uuid.NewString(),
		AuthUser: u,
	}
}

type DB interface {
	Add(u User)
	Delete(id string)
	GetByID(id string) (User, error)
	GetByEmail(email string) (User, error)
	List() []User
}

type inMemoryDB map[string]User

func NewInMemoryDB() DB {
	return inMemoryDB{}
}

func (db inMemoryDB) Add(u User) {
	if _, ok := db[u.ID]; ok {
		return
	}
	db[u.ID] = u
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

func (db inMemoryDB) List() []User {
	users := []User{}
	for _, u := range db {
		users = append(users, u)
	}
	return users
}
