#!/bin/bash

set -e

echo "=========================================="
echo "  Novobhumi - Deployment Script"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
COMPOSE_FILE="docker-compose.yml"
BACKUP_DIR="./backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    if [ ! -f .env ]; then
        log_error ".env file not found. Please create one from .env.example"
        exit 1
    fi
    
    if ! docker info &> /dev/null; then
        log_error "Docker is not running. Please start Docker."
        exit 1
    fi
    
    log_success "Prerequisites check passed"
}

# Backup database before deployment
backup_database() {
    log_info "Creating database backup..."
    
    mkdir -p "$BACKUP_DIR"
    
    if docker-compose ps database | grep -q "Up"; then
        docker-compose exec -T database mysqldump -u root -p"${MYSQL_ROOT_PASSWORD}" novobhumi > "$BACKUP_DIR/db_backup_$DATE.sql"
        log_success "Database backup created: $BACKUP_DIR/db_backup_$DATE.sql"
    else
        log_warning "Database container not running. Skipping backup."
    fi
}

# Pull latest images or build
build_images() {
    log_info "Building Docker images..."
    docker-compose -f $COMPOSE_FILE build --no-cache
    log_success "Images built successfully"
}

# Deploy application
deploy() {
    log_info "Deploying application..."
    
    # Stop existing containers gracefully
    docker-compose -f $COMPOSE_FILE down --timeout 30
    
    # Start new containers
    docker-compose -f $COMPOSE_FILE up -d
    
    log_success "Application deployed"
}

# Health check
health_check() {
    log_info "Running health checks..."
    
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s -f http://localhost/health > /dev/null 2>&1; then
            log_success "Health check passed"
            return 0
        fi
        
        log_info "Waiting for services... (attempt $attempt/$max_attempts)"
        sleep 5
        ((attempt++))
    done
    
    log_error "Health check failed after $max_attempts attempts"
    return 1
}

# Rollback function
rollback() {
    log_warning "Rolling back to previous version..."
    
    # Get the latest backup
    local latest_backup=$(ls -t $BACKUP_DIR/db_backup_*.sql 2>/dev/null | head -1)
    
    if [ -n "$latest_backup" ]; then
        log_info "Restoring database from: $latest_backup"
        docker-compose exec -T database mysql -u root -p"${MYSQL_ROOT_PASSWORD}" novobhumi < "$latest_backup"
        log_success "Database restored"
    fi
    
    # Restart with previous images
    docker-compose -f $COMPOSE_FILE up -d
}

# Cleanup old backups (keep last 5)
cleanup_backups() {
    log_info "Cleaning up old backups..."
    ls -t $BACKUP_DIR/db_backup_*.sql 2>/dev/null | tail -n +6 | xargs -r rm -f
    log_success "Cleanup complete"
}

# Main execution
main() {
    check_prerequisites
    backup_database
    build_images
    deploy
    
    if ! health_check; then
        rollback
        exit 1
    fi
    
    cleanup_backups
    
    echo ""
    echo "=========================================="
    log_success "Deployment completed successfully!"
    echo "=========================================="
    echo ""
    echo "Application is running at: http://localhost"
    echo "Admin panel: http://localhost/mayur-admin"
    echo ""
    echo "Useful commands:"
    echo "  docker-compose logs -f      - View logs"
    echo "  docker-compose ps           - View container status"
    echo "  docker-compose down         - Stop all services"
}

# Run main function
main "$@"
