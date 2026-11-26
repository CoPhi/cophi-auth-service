package logging

import (
	"bytes"
	"encoding/json"
	"io"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/rs/zerolog"
)

func captureStdout(t *testing.T, fn func()) string {
	t.Helper()

	origStdout := os.Stdout
	r, w, err := os.Pipe()
	if err != nil {
		t.Fatalf("failed to create pipe: %v", err)
	}
	os.Stdout = w

	done := make(chan string, 1)
	go func() {
		var buf bytes.Buffer
		_, _ = io.Copy(&buf, r)
		done <- buf.String()
	}()

	fn()

	_ = w.Close()
	os.Stdout = origStdout
	out := <-done
	_ = r.Close()
	return out
}

func TestInit_LogLevels(t *testing.T) {
	tests := []struct {
		name      string
		envLevel  string
		wantLevel zerolog.Level
		wantWarn  bool
	}{
		{name: "unset defaults to info", envLevel: "", wantLevel: zerolog.InfoLevel},
		{name: "trace", envLevel: "trace", wantLevel: zerolog.TraceLevel},
		{name: "debug", envLevel: "debug", wantLevel: zerolog.DebugLevel},
		{name: "info", envLevel: "info", wantLevel: zerolog.InfoLevel},
		{name: "warn", envLevel: "warn", wantLevel: zerolog.WarnLevel},
		{name: "error", envLevel: "error", wantLevel: zerolog.ErrorLevel},
		{name: "fatal", envLevel: "fatal", wantLevel: zerolog.FatalLevel},
		{name: "panic", envLevel: "panic", wantLevel: zerolog.PanicLevel},
		{name: "disabled", envLevel: "disabled", wantLevel: zerolog.Disabled},
		{name: "case insensitive", envLevel: "DEBUG", wantLevel: zerolog.DebugLevel},
		{name: "invalid falls back to info", envLevel: "verbose", wantLevel: zerolog.InfoLevel, wantWarn: true},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			t.Setenv("LOG_FORMAT", "json")
			t.Setenv("LOG_LEVEL", tc.envLevel)

			out := captureStdout(t, func() {
				Init(true)
			})

			if got := zerolog.GlobalLevel(); got != tc.wantLevel {
				t.Fatalf("GlobalLevel() = %v, want %v", got, tc.wantLevel)
			}
			if zerolog.TimeFieldFormat != time.RFC3339 {
				t.Fatalf("TimeFieldFormat = %q, want %q", zerolog.TimeFieldFormat, time.RFC3339)
			}
			if tc.wantWarn && !strings.Contains(out, `"level":"warn"`) {
				t.Fatalf("expected warning log for invalid level, got: %s", out)
			}
			if !tc.wantWarn && out != "" {
				t.Fatalf("expected no output during Init, got: %s", out)
			}
		})
	}
}

func TestInit_LogFormats(t *testing.T) {
	t.Run("prodMode true defaults to json", func(t *testing.T) {
		t.Setenv("LOG_FORMAT", "")
		t.Setenv("LOG_LEVEL", "info")

		out := captureStdout(t, func() {
			Init(true)
			Component("test").Info().Msg("hello")
		})

		var parsed map[string]interface{}
		if err := json.Unmarshal([]byte(strings.TrimSpace(out)), &parsed); err != nil {
			t.Fatalf("expected valid JSON output, got %q (err: %v)", out, err)
		}
		if parsed["component"] != "test" || parsed["message"] != "hello" {
			t.Fatalf("unexpected JSON fields: %v", parsed)
		}
	})

	t.Run("prodMode false defaults to console", func(t *testing.T) {
		t.Setenv("LOG_FORMAT", "")
		t.Setenv("LOG_LEVEL", "info")

		out := captureStdout(t, func() {
			Init(false)
			Component("test").Info().Msg("hello")
		})

		var parsed map[string]interface{}
		if err := json.Unmarshal([]byte(strings.TrimSpace(out)), &parsed); err == nil {
			t.Fatalf("expected console output, got JSON: %s", out)
		}
		if !strings.Contains(out, "hello") || !strings.Contains(out, "component=") || !strings.Contains(out, "test") {
			t.Fatalf("expected console output to contain message and component, got: %q", out)
		}
	})

	t.Run("explicit json overrides prodMode false", func(t *testing.T) {
		t.Setenv("LOG_FORMAT", "json")
		t.Setenv("LOG_LEVEL", "info")

		out := captureStdout(t, func() {
			Init(false)
			Component("cfg").Info().Msg("ok")
		})

		var parsed map[string]interface{}
		if err := json.Unmarshal([]byte(strings.TrimSpace(out)), &parsed); err != nil {
			t.Fatalf("expected valid JSON output, got %q (err: %v)", out, err)
		}
	})

	t.Run("explicit console overrides prodMode true", func(t *testing.T) {
		t.Setenv("LOG_FORMAT", "console")
		t.Setenv("LOG_LEVEL", "info")

		out := captureStdout(t, func() {
			Init(true)
			Component("cfg").Info().Msg("ok")
		})

		var parsed map[string]interface{}
		if err := json.Unmarshal([]byte(strings.TrimSpace(out)), &parsed); err == nil {
			t.Fatalf("expected console output, got JSON: %s", out)
		}
		if !strings.Contains(out, "ok") {
			t.Fatalf("expected console output to contain message, got: %q", out)
		}
	})

	t.Run("unknown format defaults to json and logs warning", func(t *testing.T) {
		t.Setenv("LOG_FORMAT", "xml")
		t.Setenv("LOG_LEVEL", "info")

		out := captureStdout(t, func() {
			Init(false)
		})

		var parsed map[string]interface{}
		if err := json.Unmarshal([]byte(strings.TrimSpace(out)), &parsed); err != nil {
			t.Fatalf("expected JSON warning output, got %q (err: %v)", out, err)
		}
		if parsed["level"] != "warn" || parsed["log_format"] != "xml" {
			t.Fatalf("unexpected warning payload: %v", parsed)
		}
	})
}

func TestComponent(t *testing.T) {
	t.Setenv("LOG_FORMAT", "json")
	t.Setenv("LOG_LEVEL", "debug")

	out := captureStdout(t, func() {
		Init(true)
		logger := Component("http")
		logger.Debug().Str("method", "GET").Msg("request")
	})

	var parsed map[string]interface{}
	if err := json.Unmarshal([]byte(strings.TrimSpace(out)), &parsed); err != nil {
		t.Fatalf("expected valid JSON output, got %q (err: %v)", out, err)
	}
	if parsed["component"] != "http" {
		t.Fatalf("component = %v, want %q", parsed["component"], "http")
	}
	if parsed["method"] != "GET" {
		t.Fatalf("method = %v, want %q", parsed["method"], "GET")
	}
	if _, ok := parsed["time"]; !ok {
		t.Fatalf("expected timestamp field in output: %v", parsed)
	}
}
