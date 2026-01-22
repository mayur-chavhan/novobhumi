#!/bin/bash

set -e

echo "=========================================="
echo "  Novobhumi - Setup Script"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo -e "${RED}Docker Compose is not installed. Please install Docker Compose first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Docker and Docker Compose are installed${NC}"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "${YELLOW}Creating .env file from .env.example...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓ .env file created${NC}"
    echo -e "${YELLOW}⚠ Please update .env with your actual configuration values${NC}"
else
    echo -e "${GREEN}✓ .env file already exists${NC}"
fi

# Create necessary directories
echo "Creating necessary directories..."
mkdir -p backend/uploads
mkdir -p config/nginx
mkdir -p config/database

echo -e "${GREEN}✓ Directories created${NC}"

# Determine which mode to run
MODE=${1:-"dev"}

if [ "$MODE" == "dev" ] || [ "$MODE" == "development" ]; then
    echo ""
    echo "Starting development environment..."
    echo "=========================================="
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
elif [ "$MODE" == "prod" ] || [ "$MODE" == "production" ]; then
    echo ""
    echo "Starting production environment..."
    echo "=========================================="
    docker-compose up -d --build
    echo ""
    echo -e "${GREEN}✓ Production environment started${NC}"
    echo "Run 'docker-compose logs -f' to view logs"
else
    echo -e "${YELLOW}Usage: ./scripts/setup.sh [dev|prod]${NC}"
    echo "  dev  - Start development environment with hot reload"
    echo "  prod - Start production environment in background"
fi
