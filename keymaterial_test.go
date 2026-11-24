package main

import (
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"encoding/pem"
	"os"
	"path/filepath"
	"testing"

	"github.com/dgrijalva/jwt-go"
)

func TestLoadOrCreateKeyMaterialGeneratesAndReusesKeys(t *testing.T) {
	dir := t.TempDir()
	first, err := loadOrCreateKeyMaterial(dir)
	if err != nil {
		t.Fatalf("generate key material: %v", err)
	}
	assertValidKeyMaterial(t, first)

	for _, name := range []string{jwtPrivateFile, samlCertFile, samlKeyFile} {
		info, err := os.Stat(filepath.Join(dir, name))
		if err != nil {
			t.Fatalf("stat %s: %v", name, err)
		}
		if info.Mode().Perm() != 0600 {
			t.Errorf("%s permissions = %04o, want 0600", name, info.Mode().Perm())
		}
	}

	second, err := loadOrCreateKeyMaterial(dir)
	if err != nil {
		t.Fatalf("reload key material: %v", err)
	}
	if first != second {
		t.Fatal("key material changed between starts")
	}
}

func TestLoadOrCreateKeyMaterialRejectsIncompleteDirectory(t *testing.T) {
	dir := t.TempDir()
	if err := os.WriteFile(filepath.Join(dir, jwtPrivateFile), []byte("partial"), 0600); err != nil {
		t.Fatal(err)
	}
	if _, err := loadOrCreateKeyMaterial(dir); err == nil {
		t.Fatal("expected incomplete key directory to fail")
	}
}

func TestLoadOrCreateKeyMaterialRejectsInvalidExistingKey(t *testing.T) {
	dir := t.TempDir()
	if _, err := loadOrCreateKeyMaterial(dir); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(dir, jwtPrivateFile), []byte("invalid"), 0600); err != nil {
		t.Fatal(err)
	}
	if _, err := loadOrCreateKeyMaterial(dir); err == nil {
		t.Fatal("expected invalid existing key to fail")
	}
}

func assertValidKeyMaterial(t *testing.T, keys keyMaterial) {
	t.Helper()
	privateKey, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(keys.jwtPrivate))
	if err != nil {
		t.Fatalf("parse JWT private key: %v", err)
	}
	publicBlock, _ := pem.Decode([]byte(keys.jwtPublic))
	if publicBlock == nil {
		t.Fatal("decode JWT public key PEM")
	}
	parsedPublic, err := x509.ParsePKIXPublicKey(publicBlock.Bytes)
	if err != nil {
		t.Fatalf("parse JWT public key: %v", err)
	}
	publicKey, ok := parsedPublic.(*rsa.PublicKey)
	if !ok || publicKey.N.Cmp(privateKey.PublicKey.N) != 0 || publicKey.E != privateKey.PublicKey.E {
		t.Fatal("derived JWT public key does not match private key")
	}
	if _, err := tls.X509KeyPair([]byte(keys.samlCertificate), []byte(keys.samlPrivate)); err != nil {
		t.Fatalf("validate SAML certificate/key pair: %v", err)
	}
}
