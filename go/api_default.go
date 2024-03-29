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
	"net/http"
	"strings"

	"github.com/gorilla/mux"
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
			"ApplicationsGet",
			strings.ToUpper("Get"),
			"/api/v1/applications",
			c.ApplicationsGet,
		},
		{
			"ApplicationsIdDelete",
			strings.ToUpper("Delete"),
			"/api/v1/applications/{id}",
			c.ApplicationsIdDelete,
		},
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
			"StatusGet",
			strings.ToUpper("Get"),
			"/api/v1/status",
			c.StatusGet,
		},
	}
}

// ApplicationsGet -
func (c *DefaultApiController) ApplicationsGet(w http.ResponseWriter, r *http.Request) {
	apiKeyParam := r.Header.Get("api-key")
	result, err := c.service.ApplicationsGet(r.Context(), apiKeyParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)

}

// ApplicationsIdDelete -
func (c *DefaultApiController) ApplicationsIdDelete(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	apiKeyParam := r.Header.Get("api-key")
	idParam := params["id"]

	result, err := c.service.ApplicationsIdDelete(r.Context(), apiKeyParam, idParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)

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
	result, err := c.service.JwtRefreshPost(r.Context(), refreshTokenParam.Value, accessTokenParam.Value, w)
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
