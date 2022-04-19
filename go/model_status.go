/*
 * GreekSchools Data Service API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.0.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type Status struct {

	Status string `json:"status"`

	Version string `json:"version"`
}

// AssertStatusRequired checks if the required fields are not zero-ed
func AssertStatusRequired(obj Status) error {
	elements := map[string]interface{}{
		"status": obj.Status,
		"version": obj.Version,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	return nil
}

// AssertRecurseStatusRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of Status (e.g. [][]Status), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseStatusRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aStatus, ok := obj.(Status)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertStatusRequired(aStatus)
	})
}