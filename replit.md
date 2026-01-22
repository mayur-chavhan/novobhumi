# Novobhumi - Premium Cocopeat Brand Website

## Overview
Modern, production-ready fullstack website for Novobhumi - India's premium cocopeat brand. Features React frontend, Express.js backend with MySQL, Docker support, and CI/CD pipelines.

**Tagline**: *Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming*

**Current State**: Fullstack application with admin panel, Docker Compose configurations, and GitHub Actions CI/CD.

## Project Architecture

### Tech Stack
- **Frontend**: React 19, TypeScript, Vite 7, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Prisma ORM, MySQL 8.0
- **Infrastructure**: Docker, Docker Compose, Nginx, GitHub Actions
- **State Management**: React Context (ConfigContext, AuthContext)

### Project Structure
```
novobhumi/
├── .github/workflows/          # CI/CD pipeline configurations
│   ├── ci.yml                  # Continuous Integration
│   └── cd.yml                  # Continuous Deployment
├── backend/                    # Express.js API server
│   ├── src/                    # Backend source code
│   ├── prisma/                 # Database schema
│   └── uploads/                # Uploaded media files
├── config/                     # Configuration files
│   ├── nginx/                  # Nginx configuration
│   └── database/               # Database initialization
├── docs/                       # Documentation
│   ├── architecture.md         # System architecture
│   ├── api-docs.md             # API documentation
│   └── deployment.md           # Deployment guide
├── infrastructure/             # Infrastructure as Code
│   └── docker/                 # Dockerfiles
├── scripts/                    # Shell scripts
│   ├── setup.sh                # Setup script
│   ├── deploy.sh               # Deployment script
│   └── backup.sh               # Backup script
├── src/                        # React frontend source
│   ├── components/             # React components
│   ├── context/                # React contexts
│   └── pages/                  # Page components
├── tests/                      # Test suites
├── docker-compose.yml          # Production compose
├── docker-compose.dev.yml      # Development compose
├── Makefile                    # Common commands
└── README.md                   # Documentation
```

## Recent Changes

**January 21, 2026 - Docker & CI/CD Implementation**:
- Added production Docker Compose with health checks and resource limits
- Added development Docker Compose with hot reload
- Created multi-stage Dockerfiles for frontend and backend
- Implemented GitHub Actions CI/CD workflows
- Added comprehensive documentation (architecture, API, deployment)
- Created shell scripts for setup, deployment, and backup
- Added Makefile with common commands
- Reorganized project structure for production readiness

**January 21, 2026 - UI Enhancements**:
- Redesigned "Why Choose Novobhumi Cocopeat?" section with emerald-teal gradient theme
- Updated hero section H1 font sizes for better responsiveness
- Updated tagline across all configuration files

## Replit Configuration

### Development
- **Frontend Port**: 5000 (0.0.0.0)
- **Backend Port**: 3001
- **Workflow**: `npm run dev` (Vite dev server)
- **Hot Reload**: Enabled with HMR

### Build Commands
- **Frontend**: `npm run build` → `dist/`
- **Backend**: `cd backend && npm run build` → `backend/dist/`

### Docker Commands
- **Development**: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`
- **Production**: `docker-compose up -d`

## Key Features
1. Multi-page SPA with React Router
2. Secret admin panel at `/mayur-admin`
3. Real-time updates via Server-Sent Events
4. Configurable buy buttons (Amazon + Shopify)
5. Docker production and development configurations
6. GitHub Actions CI/CD pipelines
7. Responsive design (mobile, tablet, desktop)
8. Comprehensive SEO with structured data

## Admin Panel
Access at `/mayur-admin`:
- General Settings, Contact Info, Social Links
- Buy Buttons (Amazon/Shopify toggle)
- SMTP Configuration, Media Upload

## Environment Variables

See `.env.example` for all available options:
- Database connection
- Session secret
- Admin credentials
- SMTP configuration

## Self-Hosting Deployment

```bash
# Quick start
cp .env.example .env
./scripts/setup.sh dev    # Development
./scripts/deploy.sh       # Production
```

See `docs/deployment.md` for detailed instructions.

## User Preferences
None specified yet.
