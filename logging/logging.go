package logging

import (
	"os"
	"strings"
	"time"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

// Init configures the global zerolog logger from LOG_FORMAT and LOG_LEVEL
// environment variables, using prodMode to determine the default format.
func Init(prodMode bool) {
	zerolog.TimeFieldFormat = time.RFC3339

	rawFormat := os.Getenv("LOG_FORMAT")
	format := strings.ToLower(strings.TrimSpace(rawFormat))
	if format == "" {
		if prodMode {
			format = "json"
		} else {
			format = "console"
		}
	}

	unknownFormat := ""
	switch format {
	case "json":
		log.Logger = zerolog.New(os.Stdout).With().Timestamp().Logger()
	case "console":
		writer := zerolog.ConsoleWriter{
			Out:        os.Stdout,
			TimeFormat: time.RFC3339,
		}
		log.Logger = zerolog.New(writer).With().Timestamp().Logger()
	default:
		unknownFormat = rawFormat
		log.Logger = zerolog.New(os.Stdout).With().Timestamp().Logger()
	}

	rawLevel := os.Getenv("LOG_LEVEL")
	levelStr := strings.ToLower(strings.TrimSpace(rawLevel))
	invalidLevel := ""
	if levelStr == "" {
		zerolog.SetGlobalLevel(zerolog.InfoLevel)
	} else {
		level, err := zerolog.ParseLevel(levelStr)
		if err != nil || level == zerolog.NoLevel {
			invalidLevel = rawLevel
			zerolog.SetGlobalLevel(zerolog.InfoLevel)
		} else {
			zerolog.SetGlobalLevel(level)
		}
	}

	logger := Component("logging")
	if unknownFormat != "" {
		logger.Warn().
			Str("log_format", unknownFormat).
			Str("fallback", "json").
			Msg("unknown LOG_FORMAT, defaulting to json")
	}
	if invalidLevel != "" {
		logger.Warn().
			Str("log_level", invalidLevel).
			Str("fallback", "info").
			Msg("invalid LOG_LEVEL, falling back to info")
	}
}

// Component returns a component-scoped logger derived from the global logger.
func Component(name string) *zerolog.Logger {
	l := log.With().Str("component", name).Logger()
	return &l
}
