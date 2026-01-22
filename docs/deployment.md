# Novobhumi - Deployment Guide

This guide covers deploying Novobhumi to a production environment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Configuration](#environment-configuration)
- [Docker Deployment](#docker-deployment)
- [Manual Deployment](#manual-deployment)
- [SSL/TLS Setup](#ssltls-setup)
- [Monitoring](#monitoring)
- [Backup & Recovery](#backup--recovery)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### Server Requirements

- **OS**: Ubuntu 20.04+ / Debian 11+ / CentOS 8+
- **RAM**: Minimum 2GB, Recommended 4GB
- **CPU**: 2+ cores
- **Storage**: 20GB+ SSD
- **Docker**: 20.10+
- **Docker Compose**: 2.0+

### Domain & DNS

- Domain name pointed to your server IP
- SSL certificate (Let's Encrypt recommended)

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/novobhumi/novobhumi.git
cd novobhumi

# 2. Copy and configure environment
cp .env.example .env
nano .env  # Edit with your settings

# 3. Run deployment
./scripts/deploy.sh
```

## Environment Configuration

### Required Variables

```bash
# Database
DATABASE_URL=mysql://novobhumi:secure_password@database:3306/novobhumi
MYSQL_ROOT_PASSWORD=very_secure_root_password
MYSQL_PASSWORD=secure_password

# Security
SESSION_SECRET=generate_a_64_character_random_string

# Admin
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=strong_admin_password
```

### Optional Variables

```bash
# SMTP (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Frontend
FRONTEND_URL=https://yourdomain.com
```

### Generating Secure Secrets

```bash
# Generate SESSION_SECRET
openssl rand -base64 48

# Generate database passwords
openssl rand -base64 32
```

## Docker Deployment

### Production Deployment

```bash
# Build and start all services
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### Service Management

```bash
# Stop services
docker-compose down

# Restart specific service
docker-compose restart backend

# Scale services (if needed)
docker-compose up -d --scale backend=3

# Update images
docker-compose pull
docker-compose up -d
```

### Health Checks

```bash
# Check frontend
curl http://localhost/health

# Check backend
curl http://localhost/api/health

# Check database
docker-compose exec database mysqladmin ping -h localhost
```

## Manual Deployment

### Without Docker

#### 1. Install Dependencies

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install MySQL
sudo apt install -y mysql-server
```

#### 2. Build Frontend

```bash
npm install
npm run build
```

#### 3. Setup Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate deploy
npm run build
npm run db:seed
```

#### 4. Configure Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/novobhumi/dist;
    index index.html;

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### 5. Start Backend with PM2

```bash
npm install -g pm2
pm2 start backend/dist/index.js --name novobhumi-backend
pm2 save
pm2 startup
```

## SSL/TLS Setup

### Using Let's Encrypt (Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (usually configured automatically)
sudo certbot renew --dry-run
```

### Docker with SSL

Add Traefik or use nginx-proxy with Let's Encrypt companion:

```yaml
# Add to docker-compose.yml
services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - certs:/etc/nginx/certs

  letsencrypt:
    image: jrcs/letsencrypt-nginx-proxy-companion
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - certs:/etc/nginx/certs
    environment:
      - NGINX_PROXY_CONTAINER=nginx-proxy
```

## Monitoring

### Basic Monitoring

```bash
# Container resource usage
docker stats

# Disk usage
df -h

# Memory usage
free -m
```

### Log Monitoring

```bash
# All logs
docker-compose logs -f

# Specific service
docker-compose logs -f backend

# Last 100 lines
docker-compose logs --tail 100 backend
```

### Health Check Endpoints

| Endpoint | Expected Response |
|----------|-------------------|
| `/health` | `healthy` |
| `/api/health` | `{"status": "ok"}` |

## Backup & Recovery

### Automated Backups

```bash
# Run full backup
./scripts/backup.sh full

# Database only
./scripts/backup.sh database

# Set up cron job for daily backups
crontab -e
# Add: 0 3 * * * /path/to/novobhumi/scripts/backup.sh full
```

### Manual Backup

```bash
# Database
docker-compose exec database mysqldump -u root -p novobhumi > backup.sql

# Uploads
tar -czf uploads_backup.tar.gz backend/uploads/
```

### Recovery

```bash
# Restore database
./scripts/backup.sh restore backups/db_backup_YYYYMMDD.sql.gz

# Or manually
gunzip -c backup.sql.gz | docker-compose exec -T database mysql -u root -p novobhumi
```

## Troubleshooting

### Common Issues

#### Container Won't Start

```bash
# Check logs
docker-compose logs backend

# Check environment
docker-compose config

# Rebuild
docker-compose build --no-cache backend
```

#### Database Connection Failed

```bash
# Wait for database to be ready
docker-compose exec database mysqladmin ping -h localhost

# Check credentials
docker-compose exec database mysql -u novobhumi -p
```

#### Port Already in Use

```bash
# Find process using port
sudo lsof -i :80
sudo lsof -i :3001

# Kill process
sudo kill -9 <PID>
```

#### Permission Denied on Uploads

```bash
# Fix permissions
sudo chown -R 1001:1001 backend/uploads
```

### Getting Help

1. Check the logs: `docker-compose logs -f`
2. Review the [FAQ](./faq.md)
3. Open an issue on GitHub
4. Contact support
