package main

import (
	"context"
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"net/http"
	"net/url"

	"github.com/CoPhi/cophi-auth-service/auth"
	"github.com/crewjam/saml"
	"github.com/crewjam/saml/samlsp"
)

func samlSPCallback(privKey string) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		user := auth.AuthUser{
			Name:     samlsp.AttributeFromContext(r.Context(), "givenName"),
			LastName: samlsp.AttributeFromContext(r.Context(), "sn"),
			Email:    samlsp.AttributeFromContext(r.Context(), "mail"),
		}
		auth.AuthCallback(&user, privKey)(w, r)
	}
}

type safeSamlMiddleware struct {
	certificate    tls.Certificate
	idpMetadataURL *url.URL
	rootURL        *url.URL
	idpMetadata    *saml.EntityDescriptor
	samlSP         *samlsp.Middleware
	err            error
}

func NewSP(cerfile, keyfile, idpURL, rootURL string, ctx context.Context, httpClient *http.Client) (*samlsp.Middleware, error) {
	m := safeSamlMiddleware{}
	m.LoadX509KeyPair(cerfile, keyfile)
	m.ParseCertificate(m.certificate.Certificate[0])
	m.ParseMetadataURL(idpURL)
	m.FetchMetadata(ctx, httpClient, *m.idpMetadataURL)
	m.ParseRootURL(rootURL)
	m.getSP()

	return m.samlSP, m.err
}

func (s *safeSamlMiddleware) getSP() {
	if s.err != nil {
		return
	}
	s.samlSP, s.err = samlsp.New(samlsp.Options{
		URL:         *s.rootURL,
		Key:         s.certificate.PrivateKey.(*rsa.PrivateKey),
		Certificate: s.certificate.Leaf,
		IDPMetadata: s.idpMetadata,
	})
}

func (s *safeSamlMiddleware) FetchMetadata(ctx context.Context, httpClient *http.Client, metadataURL url.URL) {
	if s.err != nil {
		return
	}
	s.idpMetadata, s.err = samlsp.FetchMetadata(ctx, httpClient, metadataURL)
}

func (s *safeSamlMiddleware) LoadX509KeyPair(cerfile, keyfile string) {
	if s.err != nil {
		return
	}
	s.certificate, s.err = tls.LoadX509KeyPair(cerfile, keyfile)
}

func (s *safeSamlMiddleware) ParseCertificate(der []byte) {
	if s.err != nil {
		return
	}
	s.certificate.Leaf, s.err = x509.ParseCertificate(der)
}

func (s *safeSamlMiddleware) ParseMetadataURL(rawURL string) {
	if s.err != nil {
		return
	}
	s.idpMetadataURL, s.err = url.Parse(rawURL)
}

func (s *safeSamlMiddleware) ParseRootURL(rawURL string) {
	if s.err != nil {
		return
	}
	s.rootURL, s.err = url.Parse(rawURL)
}

func getSP(certFile, keyFile, idpURL, root string) (*samlsp.Middleware, error) {

	keyPair, err := tls.LoadX509KeyPair("gsservice.cert", "gsservice.key")
	if err != nil {
		panic(err) // TODO handle error
	}
	keyPair.Leaf, err = x509.ParseCertificate(keyPair.Certificate[0])
	if err != nil {
		panic(err) // TODO handle error
	}

	idpMetadataURL, err := url.Parse("https://samltest.id/saml/idp")
	if err != nil {
		panic(err) // TODO handle error
	}
	idpMetadata, err := samlsp.FetchMetadata(context.Background(), http.DefaultClient,
		*idpMetadataURL)
	if err != nil {
		panic(err) // TODO handle error
	}

	rootURL, err := url.Parse("http://localhost:8000")
	if err != nil {
		panic(err) // TODO handle error
	}

	samlSP, _ := samlsp.New(samlsp.Options{
		URL:         *rootURL,
		Key:         keyPair.PrivateKey.(*rsa.PrivateKey),
		Certificate: keyPair.Leaf,
		IDPMetadata: idpMetadata,
	})

	return samlSP, nil
}
