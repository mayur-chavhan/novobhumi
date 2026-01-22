# Novobhumi - Makefile
# Common commands for development and deployment

.PHONY: help install dev build start stop logs clean test deploy backup

# Default target
help:
	@echo "Novobhumi - Available Commands"
	@echo "=============================="
	@echo ""
	@echo "Development:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development environment (Docker)"
	@echo "  make dev-local  - Start local development (no Docker)"
	@echo ""
	@echo "Production:"
	@echo "  make build      - Build Docker images"
	@echo "  make start      - Start production containers"
	@echo "  make stop       - Stop all containers"
	@echo "  make restart    - Restart all containers"
	@echo "  make deploy     - Full deployment with backup"
	@echo ""
	@echo "Utilities:"
	@echo "  make logs       - View container logs"
	@echo "  make status     - Show container status"
	@echo "  make shell-fe   - Shell into frontend container"
	@echo "  make shell-be   - Shell into backend container"
	@echo "  make shell-db   - Shell into database container"
	@echo ""
	@echo "Database:"
	@echo "  make backup     - Backup database"
	@echo "  make db-seed    - Seed database with initial data"
	@echo ""
	@echo "Testing:"
	@echo "  make test       - Run all tests"
	@echo "  make lint       - Run linter"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean      - Remove containers and volumes"
	@echo "  make clean-all  - Remove everything including images"

# Installation
install:
	@echo "Installing dependencies..."
	npm install
	cd backend && npm install

# Development
dev:
	@echo "Starting development environment..."
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

dev-local:
	@echo "Starting local development..."
	@echo "Run 'npm run dev' in one terminal"
	@echo "Run 'cd backend && npm run dev' in another terminal"

# Build
build:
	@echo "Building Docker images..."
	docker-compose build --no-cache

# Production
start:
	@echo "Starting production containers..."
	docker-compose up -d

stop:
	@echo "Stopping containers..."
	docker-compose down

restart:
	@echo "Restarting containers..."
	docker-compose restart

deploy:
	@echo "Running deployment..."
	./scripts/deploy.sh

# Logs and Status
logs:
	docker-compose logs -f

logs-fe:
	docker-compose logs -f frontend

logs-be:
	docker-compose logs -f backend

logs-db:
	docker-compose logs -f database

status:
	docker-compose ps

# Shell access
shell-fe:
	docker-compose exec frontend sh

shell-be:
	docker-compose exec backend sh

shell-db:
	docker-compose exec database mysql -u root -p

# Database
backup:
	./scripts/backup.sh full

db-seed:
	docker-compose exec backend npm run db:seed

# Testing
test:
	npm test
	cd backend && npm test

lint:
	npm run lint

# Cleanup
clean:
	docker-compose down -v
	rm -rf node_modules backend/node_modules

clean-all: clean
	docker-compose down --rmi all -v
	docker system prune -f
