package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"crypto/x509/pkix"
	"encoding/pem"
	"errors"
	"fmt"
	"math/big"
	"os"
	"path/filepath"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const (
	jwtPrivateFile = "jwt-private.pem"
	samlCertFile   = "saml-cert.pem"
	samlKeyFile    = "saml-private.pem"
)

type keyMaterial struct {
	jwtPrivate      string
	jwtPublic       string
	samlCertificate string
	samlPrivate     string
}

// loadOrCreateKeyMaterial loads the key files from dir, or creates all three
// files on an empty directory. A partially populated directory is an error so
// an interrupted deploy cannot silently rotate an existing signing key.
func loadOrCreateKeyMaterial(dir string) (keyMaterial, error) {
	var result keyMaterial
	if err := os.MkdirAll(dir, 0700); err != nil {
		return result, fmt.Errorf("create key directory: %w", err)
	}
	if err := os.Chmod(dir, 0700); err != nil {
		return result, fmt.Errorf("restrict key directory permissions: %w", err)
	}

	jwtPath := filepath.Join(dir, jwtPrivateFile)
	certPath := filepath.Join(dir, samlCertFile)
	samlKeyPath := filepath.Join(dir, samlKeyFile)
	paths := []string{jwtPath, certPath, samlKeyPath}
	present := 0
	for _, path := range paths {
		if _, err := os.Stat(path); err == nil {
			present++
		} else if !errors.Is(err, os.ErrNotExist) {
			return result, fmt.Errorf("inspect %s: %w", path, err)
		}
	}

	if present == 0 {
		if err := createKeyMaterial(dir, paths); err != nil {
			return result, err
		}
	} else if present != len(paths) {
		return result, fmt.Errorf("key directory is incomplete (%d of %d files); restore the missing files or clear the directory to generate a new key set", present, len(paths))
	}

	jwtPEM, err := os.ReadFile(jwtPath)
	if err != nil {
		return result, fmt.Errorf("read JWT private key: %w", err)
	}
	privateKey, err := jwt.ParseRSAPrivateKeyFromPEM(jwtPEM)
	if err != nil {
		return result, fmt.Errorf("parse JWT private key: %w", err)
	}
	publicDER, err := x509.MarshalPKIXPublicKey(&privateKey.PublicKey)
	if err != nil {
		return result, fmt.Errorf("encode JWT public key: %w", err)
	}
	result.jwtPrivate = string(jwtPEM)
	result.jwtPublic = string(pem.EncodeToMemory(&pem.Block{Type: "PUBLIC KEY", Bytes: publicDER}))

	certPEM, err := os.ReadFile(certPath)
	if err != nil {
		return result, fmt.Errorf("read SAML certificate: %w", err)
	}
	samlKeyPEM, err := os.ReadFile(samlKeyPath)
	if err != nil {
		return result, fmt.Errorf("read SAML private key: %w", err)
	}
	if _, err := tls.X509KeyPair(certPEM, samlKeyPEM); err != nil {
		return result, fmt.Errorf("validate SAML certificate/key pair: %w", err)
	}
	result.samlCertificate = string(certPEM)
	result.samlPrivate = string(samlKeyPEM)

	return result, nil
}

func createKeyMaterial(dir string, paths []string) error {
	jwtKey, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		return fmt.Errorf("generate JWT RSA key: %w", err)
	}
	jwtPEM := pem.EncodeToMemory(&pem.Block{Type: "RSA PRIVATE KEY", Bytes: x509.MarshalPKCS1PrivateKey(jwtKey)})

	samlKey, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		return fmt.Errorf("generate SAML RSA key: %w", err)
	}
	serial, err := rand.Int(rand.Reader, new(big.Int).Lsh(big.NewInt(1), 128))
	if err != nil {
		return fmt.Errorf("generate SAML certificate serial: %w", err)
	}
	now := time.Now()
	certificateTemplate := &x509.Certificate{
		SerialNumber: serial,
		Subject: pkix.Name{
			CommonName: "CoPhi SAML Service Provider",
		},
		NotBefore:             now.Add(-5 * time.Minute),
		NotAfter:              now.AddDate(10, 0, 0),
		KeyUsage:              x509.KeyUsageDigitalSignature | x509.KeyUsageKeyEncipherment,
		ExtKeyUsage:           []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth},
		BasicConstraintsValid: true,
	}
	certDER, err := x509.CreateCertificate(rand.Reader, certificateTemplate, certificateTemplate, &samlKey.PublicKey, samlKey)
	if err != nil {
		return fmt.Errorf("create SAML certificate: %w", err)
	}
	certPEM := pem.EncodeToMemory(&pem.Block{Type: "CERTIFICATE", Bytes: certDER})
	samlKeyPEM := pem.EncodeToMemory(&pem.Block{Type: "RSA PRIVATE KEY", Bytes: x509.MarshalPKCS1PrivateKey(samlKey)})

	contents := [][]byte{jwtPEM, certPEM, samlKeyPEM}
	for i, path := range paths {
		if err := writeFileAtomically(dir, path, contents[i]); err != nil {
			return fmt.Errorf("persist generated key material: %w", err)
		}
	}
	return nil
}

func writeFileAtomically(dir, destination string, contents []byte) error {
	temporary, err := os.CreateTemp(dir, ".key-*.tmp")
	if err != nil {
		return err
	}
	tempPath := temporary.Name()
	defer os.Remove(tempPath)
	if err := temporary.Chmod(0600); err != nil {
		temporary.Close()
		return err
	}
	if _, err := temporary.Write(contents); err != nil {
		temporary.Close()
		return err
	}
	if err := temporary.Sync(); err != nil {
		temporary.Close()
		return err
	}
	if err := temporary.Close(); err != nil {
		return err
	}
	if err := os.Rename(tempPath, destination); err != nil {
		return err
	}
	directory, err := os.Open(dir)
	if err != nil {
		return err
	}
	defer directory.Close()
	return directory.Sync()
}
