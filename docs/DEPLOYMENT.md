# Novobhumi Self-Hosting Deployment Guide

This guide explains how to deploy the Novobhumi website on your own server with a MySQL database.

## Architecture Overview

The application consists of two parts:
- **Frontend**: React/Vite application served on port 5000
- **Backend**: Express.js API server on port 3001 with Prisma ORM

## Prerequisites

- Node.js 18+ installed
- MySQL 8.0+ database server
- Domain name (optional, but recommended for production)

## Step 1: Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd novobhumi

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

## Step 2: Configure Environment Variables

### Backend Configuration

Create `backend/.env` file:

```env
# Database Configuration (required)
DATABASE_URL="mysql://username:password@localhost:3306/novobhumi"

# Session Configuration (required - generate a secure random string)
SESSION_SECRET="your-super-secret-session-key-change-this-in-production"

# Admin Credentials (for initial setup)
ADMIN_EMAIL="admin@novobhumi.com"
ADMIN_PASSWORD="your-secure-password"

# Server Configuration
PORT=3001
NODE_ENV=production

# Frontend URL (for CORS - update with your domain)
FRONTEND_URL="https://yourdomain.com"
```

### Frontend Configuration

Create `.env` file in the root directory:

```env
VITE_API_URL=https://api.yourdomain.com
```

For development:
```env
VITE_API_URL=http://localhost:3001
```

## Step 3: Setup Database

```bash
cd backend

# Generate Prisma client
npm run db:generate

# Push schema to database (creates tables)
npm run db:push

# Seed initial data (creates admin user and default settings)
npm run db:seed
```

## Step 4: Build for Production

```bash
# Build frontend
npm run build

# Build backend
cd backend
npm run build
```

## Step 5: Run in Production

### Using PM2 (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Start backend
cd backend
pm2 start dist/index.js --name novobhumi-backend

# Serve frontend (using nginx or serve)
npm install -g serve
pm2 start "serve -s dist -l 5000" --name novobhumi-frontend
```

### Using Docker (Alternative)

Create a `docker-compose.yml`:

```yaml
version: '3.8'
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "5000:5000"
    environment:
      - VITE_API_URL=http://backend:3001

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=mysql://user:password@db:3306/novobhumi
      - SESSION_SECRET=your-secret
      - FRONTEND_URL=http://frontend:5000
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=rootpassword
      - MYSQL_DATABASE=novobhumi
      - MYSQL_USER=user
      - MYSQL_PASSWORD=password
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

## Step 6: Nginx Configuration (Production)

Example nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    # Frontend
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Uploaded files
    location /uploads/ {
        proxy_pass http://localhost:3001/uploads/;
    }
}
```

## Admin Panel Access

Access the admin panel at:
```
https://yourdomain.com/mayur-admin
```

Default credentials (change after first login):
- Email: admin@novobhumi.com
- Password: (set in ADMIN_PASSWORD env variable)

## Admin Panel Features

The admin panel allows you to:
- **General Settings**: Site name, tagline
- **Contact Information**: Phone, email, location
- **Social Media Links**: Instagram, Facebook, Twitter, LinkedIn
- **Buy Buttons**: Configure Amazon and Shopify product links
- **SMTP Settings**: Email configuration for contact forms
- **Media Assets**: Upload logos and product images

Changes made in the admin panel are reflected instantly on the frontend through Server-Sent Events (SSE).

## Troubleshooting

### Database Connection Issues
- Verify MySQL is running: `sudo systemctl status mysql`
- Check DATABASE_URL format: `mysql://user:pass@host:3306/database`
- Ensure database exists: `CREATE DATABASE novobhumi;`

### Frontend Not Loading
- Check if backend is running: `curl http://localhost:3001/api/health`
- Verify CORS settings match your domain
- Check browser console for errors

### Admin Login Issues
- Run seed script again: `npm run db:seed`
- Verify ADMIN_EMAIL and ADMIN_PASSWORD in .env
- Clear cookies and try again

## Production Session Store

For production deployment, you must replace the default in-memory session store with a persistent store. The default store will leak memory and lose sessions on restart.

### Using Redis (Recommended)

```bash
npm install connect-redis redis
```

Update `backend/src/index.ts`:
```typescript
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });
redisClient.connect();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true, maxAge: 86400000 }
}));
```

Add to `.env`:
```
REDIS_URL=redis://localhost:6379
```

### Using MySQL

```bash
npm install express-mysql-session
```

Follow the express-mysql-session documentation for configuration.

## Security Recommendations

1. Use strong passwords for admin and database
2. Enable HTTPS with valid SSL certificates
3. Set secure session secrets (32+ random characters)
4. Regularly update dependencies
5. Configure firewall to only expose ports 80/443
6. Use environment variables for all sensitive data
7. Configure a persistent session store (Redis or MySQL) for production
8. SMTP and Shopify tokens are stored encrypted in the database
9. Admin panel masks sensitive credentials in the UI
