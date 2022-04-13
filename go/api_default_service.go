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
	"context"
	"net/http"
	"errors"
)

// DefaultApiService is a service that implements the logic for the DefaultApiServicer
// This service should implement the business logic for every endpoint for the DefaultApi API.
// Include any external packages or services that will be required by this service.
type DefaultApiService struct {
}

// NewDefaultApiService creates a default api service
func NewDefaultApiService() DefaultApiServicer {
	return &DefaultApiService{}
}

// JwtPublicKeysGet - 
func (s *DefaultApiService) JwtPublicKeysGet(ctx context.Context) (ImplResponse, error) {
	// TODO - update JwtPublicKeysGet with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, PublicKey{}) or use other options such as http.Ok ...
	//return Response(200, PublicKey{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("JwtPublicKeysGet method not implemented")
}

// JwtRefreshPost - 
func (s *DefaultApiService) JwtRefreshPost(ctx context.Context, refreshToken string, accessToken string) (ImplResponse, error) {
	// TODO - update JwtRefreshPost with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, Token{}) or use other options such as http.Ok ...
	//return Response(200, Token{}), nil

	//TODO: Uncomment the next line to return response Response(400, {}) or use other options such as http.Ok ...
	//return Response(400, nil),nil

	//TODO: Uncomment the next line to return response Response(500, ModelError{}) or use other options such as http.Ok ...
	//return Response(500, ModelError{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("JwtRefreshPost method not implemented")
}

// RevokePost - 
func (s *DefaultApiService) RevokePost(ctx context.Context, apiKey string, inlineObject InlineObject) (ImplResponse, error) {
	// TODO - update RevokePost with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, {}) or use other options such as http.Ok ...
	//return Response(200, nil),nil

	//TODO: Uncomment the next line to return response Response(400, {}) or use other options such as http.Ok ...
	//return Response(400, nil),nil

	//TODO: Uncomment the next line to return response Response(401, {}) or use other options such as http.Ok ...
	//return Response(401, nil),nil

	//TODO: Uncomment the next line to return response Response(403, {}) or use other options such as http.Ok ...
	//return Response(403, nil),nil

	//TODO: Uncomment the next line to return response Response(404, {}) or use other options such as http.Ok ...
	//return Response(404, nil),nil

	//TODO: Uncomment the next line to return response Response(500, {}) or use other options such as http.Ok ...
	//return Response(500, nil),nil

	return Response(http.StatusNotImplemented, nil), errors.New("RevokePost method not implemented")
}

// StatusGet - 
func (s *DefaultApiService) StatusGet(ctx context.Context) (ImplResponse, error) {
	// TODO - update StatusGet with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, Status{}) or use other options such as http.Ok ...
	//return Response(200, Status{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("StatusGet method not implemented")
}
