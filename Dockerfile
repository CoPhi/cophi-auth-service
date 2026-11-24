# syntax=docker/dockerfile:1

FROM golang:1.27-alpine AS builder
WORKDIR /src
COPY go.mod go.sum ./

RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -trimpath -ldflags='-s -w' -o /auth-service .

FROM alpine:3.23
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=builder /auth-service /auth-service

ENV PROD=true
ENV GSUI_PORT=3000

ENV PORT=8000
ENV ADMIN_APIKEY=admin
ENV CORS="http://localhost:4200"
ENV REFRESH_TOKEN_EXPIRATION="1460 h"
ENV JWT_EXPIRATION="5 m"
ENV ROOT_URL="http://localhost:8000"
ENV GOOGLE_CLIENT_ID=
ENV GOOGLE_SECRET=

ENV IDP_URL="https://samltest.id/saml/idp"
ENV CERT=
ENV CERT_KEY=
ENV RS256_PRIV=
ENV RS256_PUB=
ENV DOMAIN=".greekschools.eu"
CMD ["/auth-service"]
