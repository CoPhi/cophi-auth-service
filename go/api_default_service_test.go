package openapi

import (
	"context"
	"net/http"
	"testing"
	"time"

	cophijwt "github.com/CoPhi/cophi-auth-service/jwt"
	refreshtoken "github.com/CoPhi/cophi-auth-service/refreshtoken"
)

const (
	privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
`

	pubKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA6Hctf8HaKduMvhFgFnbj
jWGK0N74rbp4RmsEuBVzlpCLi55wJvFd2S80SDrsq1Z1IW7JGr+bDjQ+dvIld/u3
VPsBRtDcnh6X1WnjMwH4oeGIUc7tLZjpEEHvScs73KHIfhMs9u2XUAl5ATi6k+om
v3GJzDooqWiip/pZEI1BK+ebd5pc7VRg3jkyelIbQTcCSPX0i6Xj29C1AyUWbgY5
PTmrqXRgQBcz1vUFrr40zXRP1VoZvV5HCkfWmLqLIr7Q3ciWUq6hS2LnmDjMZE7v
HyVMlUMiOs4ac4cGy7LlkfhK8OCovniKC6kVD6jUtZKNzwPxcivGl9Na2ucQZ3qn
lWBcUTotPrR+zLoRi7LcV58JJC81oy8i4SitCI0RUpSux9PszqhDZxtT+dyGFmd/
SYK5ujFd33Qe8skcYNM40hRZtG+KyoGsBPUZZ3bKyTz5pvYuuPu2tm0VhdbzvXTU
hJV7jkMi5ip01VgUPr7EsicJ8yoHWHwqNjg7N3+gfwdV8d9WfhaTABulmVBk+lX3
Qvb64jWSUR46yMqiJMrguPY4Uc2O/E5qRzXkdm1d+8FeNaIsZei/PvoVD5Aav7rM
YEc2m3+KTzEoRG/2RiZfHz8mGxzOLMZgEuWYHdF0SubYLx9eGVav9TQvPXvzxvhp
NFxpV6c7Yvi8RFwzsn7Lpn8CAwEAAQ==
-----END PUBLIC KEY-----
`
)

func TestJwtRefreshPost(t *testing.T) {
	rt := "valid-refresh-token"
	validAccessToken, err := cophijwt.GenerateToken("test", "test_last", "testmail", time.Hour, privateKey)
	if err != nil {
		t.Error(err)
	}
	otherAccessToken, err := cophijwt.GenerateToken("test", "test_last", "testmail2", time.Hour, privateKey)
	if err != nil {
		t.Error(err)
	}
	expiredAccessToken := `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RtYWlsIiwibmFtZSI6InRlc3QiLCJsYXN0bmFtZSI6InRlc3RfbGFzdCIsImV4cCI6MTY1MDYxMjU0MH0.3XxSj9qhhCIibSRWU51TM58SJjGsUu39L6ism_GeSTK9ROqPxlgMu5nz3olvzLs_nxuBpZYseotxYQaSVco-PQKsXGcv6eZYzOE2o3ROT4Hcqpaf4P_Zliz0FgdipGDDlS6qMdXtGi0NVy3jGCx-RUfArh0rGJPHnkGSnZRnCfol3Z9c4DdcJRkmTCUbpFj61hECRRCF9DoY1JCCeEgteCaSUzzFeNbqfWptiK2J3XnDBhjW0bCDs-iD0Hmk6xqchehG59461BbVzjAAa8a59R8BGEMIoxd47GAnzlUknijYIVkyHapSgPd4D0eWi9CG9AOIkaJTVLWhZK5fWcW1Y88MWoepM0LrbcV4ltpZkIt7px_vOQbCrAwbKIaStGXBEhLZQCueRGeje-MQ-XWzxjgPXeauTdmZEv-BWbbviYnB-j_6ubU88D6qVq83GsvEQ243TMm_Ru01rrcMcPd7Y5q0BJv2RtCMOHLC3_YhuiFWHLkZ8oTMggbK-ZIsO5ftxombMwIeeeG5DswnxvQv6T0usm5kQsxQCbvy08E_LMk92YgRvhpbCCysc1RmCi_DvmUU-stbNbENAi5HVSyqIu8kwSo7JLt0cJG40PrjnypWMQhL0y20wZ1qNtHJFBa3UYXc49koM3nwx5E0HIFTuNuRDJC0F22qZFg4qnjGOnQ`

	rts := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(5 * time.Hour))
	rts.Add(rt, "testmail")

	expiredRts := refreshtoken.NewInMemoryTokenStore(refreshtoken.WithExpTime(0))
	expiredRts.Add(rt, "testmail")

	tt := []struct {
		token        string
		refrestToken string
		same         bool
		expectedCode int
		store        refreshtoken.RefreshTokenStore
	}{
		{expiredAccessToken, rt, false, http.StatusUnauthorized, expiredRts},
		{validAccessToken, rt, true, http.StatusOK, rts},
		{otherAccessToken, rt, false, http.StatusForbidden, rts},
		{expiredAccessToken, rt, false, http.StatusOK, rts},
		{expiredAccessToken, "invalid or expired refreshtoken", false, http.StatusForbidden, rts},
	}

	for _, v := range tt {
		api := NewDefaultApiService(
			pubKey,
			privateKey,
			v.store,
		)
		got, err := api.JwtRefreshPost(context.Background(), v.refrestToken, v.token)
		if err != nil {
			t.Error(err)
		}
		if got.Code != v.expectedCode {
			t.Errorf("Expected %v got %v", v.expectedCode, got.Code)
		}
		if got.Code == http.StatusOK && v.same && got.Body.(Token).Token != v.token {
			t.Errorf("Expected token %v and %v to be equal", got.Body.(Token).Token, v.token)
		}
	}
}
