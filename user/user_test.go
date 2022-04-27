package user_test

import (
	"testing"

	"github.com/CoPhi/cophi-auth-service/auth"
	"github.com/CoPhi/cophi-auth-service/user"
)

func TestDB(t *testing.T) {
	var db user.DB = user.NewInMemoryDB()
	if us, err := db.List(); err != nil || len(us) != 0 {
		t.Error("Empty DB should not contain users")
	}

	u := user.NewUser(auth.AuthUser{Email: "test@mail", Name: "test", LastName: "lastname"})
	u2 := user.NewUser(auth.AuthUser{Email: "test2@mail", Name: "test2", LastName: "lastname2"})

	if us, err := db.List(); err != nil || len(us) != 0 {
		t.Error("db should be empty")
	}

	db.Add(u)
	if us, err := db.List(); err != nil || len(us) != 1 {
		t.Error("db should contain 1 user")
	}
	err := db.Add(u)
	if err == nil {
		t.Error("adding a user with the same id should generate an error")
	}
	if us, err := db.List(); err != nil || len(us) != 1 {
		t.Error("db should contain 1 user")
	}
	db.Add(u2)
	if us, err := db.List(); err != nil || len(us) != 2 {
		t.Error("db should contain 2 users")
	}
	ug, err := db.GetByID(u.ID)
	if err != nil {
		t.Error("should have found user")
	}
	if u != ug {
		t.Error("users should be the same")
	}
	ug2, err := db.GetByEmail(u.Email)
	if err != nil {
		t.Error("should have found user")
	}
	if u != ug2 {
		t.Error("users should be the same")
	}
	db.Delete(u.ID)
	if us, err := db.List(); err != nil || len(us) != 1 {
		t.Error("db should contain 1 user")
	}

	if _, err := db.GetByID(u.ID); err == nil {
		t.Error("should have been deleted")
	}

	if _, err := db.GetByEmail(u.Email); err == nil {
		t.Error("should have been deleted")
	}

}

// TODO test get by id and get by email
