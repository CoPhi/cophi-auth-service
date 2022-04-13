/*
 * GreekSchools Data Service API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.0.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"encoding/json"
	"net/http"
	"strings"
)

// DefaultApiController binds http requests to an api service and writes the service results to the http response
type DefaultApiController struct {
	service      DefaultApiServicer
	errorHandler ErrorHandler
}

// DefaultApiOption for how the controller is set up.
type DefaultApiOption func(*DefaultApiController)

// WithDefaultApiErrorHandler inject ErrorHandler into controller
func WithDefaultApiErrorHandler(h ErrorHandler) DefaultApiOption {
	return func(c *DefaultApiController) {
		c.errorHandler = h
	}
}

// NewDefaultApiController creates a default api controller
func NewDefaultApiController(s DefaultApiServicer, opts ...DefaultApiOption) Router {
	controller := &DefaultApiController{
		service:      s,
		errorHandler: DefaultErrorHandler,
	}

	for _, opt := range opts {
		opt(controller)
	}

	return controller
}

// Routes returns all of the api route for the DefaultApiController
func (c *DefaultApiController) Routes() Routes {
	return Routes{
		{
			"JwtPublicKeysGet",
			strings.ToUpper("Get"),
			"/api/v1/jwt/public-keys",
			c.JwtPublicKeysGet,
		},
		{
			"JwtRefreshPost",
			strings.ToUpper("Post"),
			"/api/v1/jwt/refresh",
			c.JwtRefreshPost,
		},
		{
			"RevokePost",
			strings.ToUpper("Post"),
			"/api/v1/revoke",
			c.RevokePost,
		},
		{
			"StatusGet",
			strings.ToUpper("Get"),
			"/api/v1/status",
			c.StatusGet,
		},
	}
}

// JwtPublicKeysGet -
func (c *DefaultApiController) JwtPublicKeysGet(w http.ResponseWriter, r *http.Request) {
	result, err := c.service.JwtPublicKeysGet(r.Context())
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)

}

// JwtRefreshPost -
func (c *DefaultApiController) JwtRefreshPost(w http.ResponseWriter, r *http.Request) {
	refreshTokenParam, err := r.Cookie("refresh_token")
	if err != nil {
		result := Response(http.StatusBadRequest, nil)
		c.errorHandler(w, r, err, &result)
		return
	}
	accessTokenParam, err := r.Cookie("access_token")
	if err != nil {
		result := Response(http.StatusBadRequest, nil)
		c.errorHandler(w, r, err, &result)
		return
	}
	result, err := c.service.JwtRefreshPost(r.Context(), refreshTokenParam.Value, accessTokenParam.Value)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)

}

// RevokePost -
func (c *DefaultApiController) RevokePost(w http.ResponseWriter, r *http.Request) {
	apiKeyParam := r.Header.Get("api-key")
	inlineObjectParam := InlineObject{}
	d := json.NewDecoder(r.Body)
	d.DisallowUnknownFields()
	if err := d.Decode(&inlineObjectParam); err != nil {
		c.errorHandler(w, r, &ParsingError{Err: err}, nil)
		return
	}
	if err := AssertInlineObjectRequired(inlineObjectParam); err != nil {
		c.errorHandler(w, r, err, nil)
		return
	}
	result, err := c.service.RevokePost(r.Context(), apiKeyParam, inlineObjectParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)

}

// StatusGet -
func (c *DefaultApiController) StatusGet(w http.ResponseWriter, r *http.Request) {
	result, err := c.service.StatusGet(r.Context())
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)

}
