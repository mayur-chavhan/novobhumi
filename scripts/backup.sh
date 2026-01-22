#!/bin/bash

set -e

echo "=========================================="
echo "  Novobhumi - Backup Script"
echo "=========================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Configuration
BACKUP_DIR="${BACKUP_DIR:-./backups}"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=${RETENTION_DAYS:-30}

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Database backup
backup_database() {
    echo -e "${YELLOW}Backing up database...${NC}"
    
    if docker-compose ps database | grep -q "Up"; then
        docker-compose exec -T database mysqldump \
            -u root \
            -p"${MYSQL_ROOT_PASSWORD}" \
            --single-transaction \
            --routines \
            --triggers \
            novobhumi > "$BACKUP_DIR/db_backup_$DATE.sql"
        
        # Compress the backup
        gzip "$BACKUP_DIR/db_backup_$DATE.sql"
        
        echo -e "${GREEN}✓ Database backup: $BACKUP_DIR/db_backup_$DATE.sql.gz${NC}"
    else
        echo -e "${RED}Database container is not running${NC}"
        exit 1
    fi
}

# Uploads backup
backup_uploads() {
    echo -e "${YELLOW}Backing up uploads...${NC}"
    
    if [ -d "backend/uploads" ] && [ "$(ls -A backend/uploads 2>/dev/null)" ]; then
        tar -czf "$BACKUP_DIR/uploads_$DATE.tar.gz" -C backend uploads
        echo -e "${GREEN}✓ Uploads backup: $BACKUP_DIR/uploads_$DATE.tar.gz${NC}"
    else
        echo -e "${YELLOW}No uploads to backup${NC}"
    fi
}

# Configuration backup
backup_config() {
    echo -e "${YELLOW}Backing up configuration...${NC}"
    
    tar -czf "$BACKUP_DIR/config_$DATE.tar.gz" \
        .env \
        docker-compose.yml \
        docker-compose.dev.yml \
        config/ \
        2>/dev/null || true
    
    echo -e "${GREEN}✓ Configuration backup: $BACKUP_DIR/config_$DATE.tar.gz${NC}"
}

# Cleanup old backups
cleanup_old_backups() {
    echo -e "${YELLOW}Cleaning up backups older than $RETENTION_DAYS days...${NC}"
    
    find "$BACKUP_DIR" -type f -mtime +$RETENTION_DAYS -delete 2>/dev/null || true
    
    echo -e "${GREEN}✓ Cleanup complete${NC}"
}

# Full backup
full_backup() {
    backup_database
    backup_uploads
    backup_config
    cleanup_old_backups
}

# Restore function
restore() {
    local backup_file=$1
    
    if [ -z "$backup_file" ]; then
        echo "Usage: ./backup.sh restore <backup_file>"
        echo ""
        echo "Available backups:"
        ls -la "$BACKUP_DIR"/*.sql.gz 2>/dev/null || echo "No database backups found"
        exit 1
    fi
    
    echo -e "${YELLOW}Restoring from $backup_file...${NC}"
    
    if [[ "$backup_file" == *.sql.gz ]]; then
        gunzip -c "$backup_file" | docker-compose exec -T database mysql \
            -u root \
            -p"${MYSQL_ROOT_PASSWORD}" \
            novobhumi
        echo -e "${GREEN}✓ Database restored${NC}"
    elif [[ "$backup_file" == *.sql ]]; then
        docker-compose exec -T database mysql \
            -u root \
            -p"${MYSQL_ROOT_PASSWORD}" \
            novobhumi < "$backup_file"
        echo -e "${GREEN}✓ Database restored${NC}"
    else
        echo -e "${RED}Unknown backup format${NC}"
        exit 1
    fi
}

# Main
case "${1:-full}" in
    "database")
        backup_database
        ;;
    "uploads")
        backup_uploads
        ;;
    "config")
        backup_config
        ;;
    "full")
        full_backup
        ;;
    "restore")
        restore "$2"
        ;;
    "cleanup")
        cleanup_old_backups
        ;;
    *)
        echo "Usage: ./backup.sh [database|uploads|config|full|restore|cleanup]"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}Backup operation completed!${NC}"
