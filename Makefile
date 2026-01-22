.PHONY: help install dev build start stop logs clean

help:
	@echo "Novobhumi Commands"
	@echo "=================="
	@echo ""
	@echo "Local Development:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start dev server (port 3737)"
	@echo "  make build    - Build for production"
	@echo "  make preview  - Preview production build"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-dev   - Start dev container (port 3737)"
	@echo "  make docker-prod  - Start production container (port 4173)"
	@echo "  make docker-stop  - Stop containers"
	@echo "  make docker-logs  - View logs"
	@echo ""
	@echo "Utilities:"
	@echo "  make lint   - Run linter"
	@echo "  make clean  - Remove build artifacts"

install:
	npm install

dev:
	npm run dev -- --port 3737

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

docker-dev:
	docker compose -f docker-compose.dev.yaml up --build

docker-prod:
	docker compose up -d --build

docker-stop:
	docker compose down
	docker compose -f docker-compose.dev.yaml down 2>/dev/null || true

docker-logs:
	docker compose logs -f

clean:
	rm -rf node_modules dist
