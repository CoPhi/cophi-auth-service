/*
 * GreekSchools Data Service API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.0.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type Token struct {

	Token string `json:"token,omitempty"`

	RefreshToken string `json:"refresh_token,omitempty"`
}

// AssertTokenRequired checks if the required fields are not zero-ed
func AssertTokenRequired(obj Token) error {
	return nil
}

// AssertRecurseTokenRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of Token (e.g. [][]Token), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseTokenRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aToken, ok := obj.(Token)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertTokenRequired(aToken)
	})
}
