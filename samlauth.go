package main

import (
	"context"
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"net/http"
	"net/url"

	"github.com/CoPhi/cophi-auth-service/auth"
	"github.com/CoPhi/cophi-auth-service/refreshtoken"
	"github.com/crewjam/saml"
	"github.com/crewjam/saml/samlsp"
)

func samlSPCallback(privKey string, rts refreshtoken.Store) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		user := auth.AuthUser{
			Name:     samlsp.AttributeFromContext(r.Context(), "givenName"),
			LastName: samlsp.AttributeFromContext(r.Context(), "sn"),
			Email:    samlsp.AttributeFromContext(r.Context(), "mail"),
		}
		auth.AuthCallback(rts, &user, privKey)(w, r)
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

func NewSP(cert, certKey, idpURL, rootURL string, ctx context.Context, httpClient *http.Client) (*samlsp.Middleware, error) {
	m := safeSamlMiddleware{}
	m.loadX509KeyPair(cert, certKey)
	m.parseCertificate(m.certificate.Certificate[0])
	m.parseMetadataURL(idpURL)
	m.fetchMetadata(ctx, httpClient, *m.idpMetadataURL)
	m.parseRootURL(rootURL)

	m.samlSP, m.err = samlsp.New(samlsp.Options{
		URL:         *m.rootURL,
		Key:         m.certificate.PrivateKey.(*rsa.PrivateKey),
		Certificate: m.certificate.Leaf,
		IDPMetadata: m.idpMetadata,
	})

	return m.samlSP, m.err
}

func (s *safeSamlMiddleware) fetchMetadata(ctx context.Context, httpClient *http.Client, metadataURL url.URL) {
	if s.err != nil {
		return
	}
	s.idpMetadata, s.err = samlsp.FetchMetadata(ctx, httpClient, metadataURL)
}

func (s *safeSamlMiddleware) loadX509KeyPair(cert, key string) {
	if s.err != nil {
		return
	}
	s.certificate, s.err = tls.X509KeyPair([]byte(cert), []byte(key))
}

func (s *safeSamlMiddleware) parseCertificate(der []byte) {
	if s.err != nil {
		return
	}
	s.certificate.Leaf, s.err = x509.ParseCertificate(der)
}

func (s *safeSamlMiddleware) parseMetadataURL(rawURL string) {
	if s.err != nil {
		return
	}
	s.idpMetadataURL, s.err = url.Parse(rawURL)
}

func (s *safeSamlMiddleware) parseRootURL(rawURL string) {
	if s.err != nil {
		return
	}
	s.rootURL, s.err = url.Parse(rawURL)
}
