# Multi-stage build for the Novobhumi Vite + React static site

# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package*.json ./
RUN npm ci --include=dev --prefer-offline --no-audit

# Copy source and build
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine

# Copy built static assets over the default nginx welcome page
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback: all routes serve index.html
RUN printf '%s\n' \
    'server {' \
    '    listen 80;' \
    '    server_name _;' \
    '    root /usr/share/nginx/html;' \
    '    index index.html;' \
    '    location / {' \
    '        try_files $uri $uri/ /index.html;' \
    '    }' \
    '    gzip on;' \
    '    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;' \
    '}' \
    > /etc/nginx/conf.d/default.conf

EXPOSE 80
