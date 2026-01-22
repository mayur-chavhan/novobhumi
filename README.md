# Novobhumi

[![Build Status](https://github.com/novobhumi/novobhumi/workflows/CI/badge.svg)](https://github.com/novobhumi/novobhumi/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/docker-ready-blue.svg)](https://hub.docker.com/r/novobhumi/novobhumi)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A modern, production-ready website for **Novobhumi** - India's premium cocopeat brand. Features a React frontend, Express.js backend, and a comprehensive admin panel for content management.

**Tagline**: *Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming*

## Features

- **Modern UI/UX** - Nature-inspired design with smooth Framer Motion animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Admin Panel** - Secret dashboard for managing content, products, and settings
- **Real-time Updates** - Server-Sent Events for live configuration changes
- **Docker Ready** - Production and development Docker Compose configurations
- **CI/CD Pipeline** - Automated testing and deployment with GitHub Actions
- **SEO Optimized** - Structured data, sitemap, and meta tags

## Table of Contents

- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Admin Panel](#admin-panel)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Architecture

```mermaid
graph TB
    subgraph Client
        B[Browser/Mobile]
    end

    subgraph "Docker Network"
        N[Nginx Reverse Proxy]
        F[React Frontend]
        A[Express.js API]
        D[(MySQL Database)]
    end

    B --> N
    N --> F
    N -->|/api/*| A
    A --> D
```

### Component Interaction

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | React 19, TypeScript, Vite | User interface and admin panel |
| Backend | Express.js, Prisma ORM | REST API and business logic |
| Database | MySQL 8.0 | Data persistence |
| Proxy | Nginx | Reverse proxy, SSL, static files |

## Tech Stack

**Frontend:**
- React 19 with TypeScript
- Vite 7 (Build tool)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Lucide React (Icons)

**Backend:**
- Node.js 20
- Express.js
- Prisma ORM
- MySQL 8.0

**Infrastructure:**
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Nginx (Reverse Proxy)

## Prerequisites

- **Docker** 20.10+ and **Docker Compose** 2.0+
- **Node.js** 20+ (for local development)
- **Git**

## Getting Started

### Quick Start with Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/novobhumi/novobhumi.git
cd novobhumi

# 2. Copy environment configuration
cp .env.example .env

# 3. Update .env with your settings
nano .env

# 4. Start development environment
./scripts/setup.sh dev
```

### Local Development (Without Docker)

```bash
# 1. Install dependencies
npm install
cd backend && npm install && cd ..

# 2. Start frontend (Terminal 1)
npm run dev

# 3. Start backend (Terminal 2)
cd backend && npm run dev
```

Access the application:
- **Frontend**: http://localhost:5000
- **Backend API**: http://localhost:3001
- **Admin Panel**: http://localhost:5000/mayur-admin

## Development

### Using Docker Compose

```bash
# Start development environment with hot reload
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Using Make Commands

```bash
make dev        # Start development environment
make build      # Build Docker images
make test       # Run tests
make logs       # View logs
make help       # Show all commands
```

### Code Quality

```bash
npm run lint    # Run ESLint
npm run build   # Type check and build
```

## Deployment

### Production Deployment

```bash
# 1. Configure production environment
cp .env.example .env
# Edit .env with production values

# 2. Deploy
./scripts/deploy.sh

# Or manually
docker-compose up -d --build
```

### Docker Hub Deployment

The CI/CD pipeline automatically builds and pushes images to Docker Hub on merge to `main`.

```bash
# Pull latest images
docker-compose pull

# Deploy
docker-compose up -d
```

See [docs/deployment.md](docs/deployment.md) for detailed deployment instructions.

## Project Structure

```
novobhumi/
├── .github/workflows/      # CI/CD pipeline configurations
│   ├── ci.yml              # Continuous Integration
│   └── cd.yml              # Continuous Deployment
├── backend/                # Express.js API server
│   ├── src/                # Backend source code
│   ├── prisma/             # Database schema
│   └── uploads/            # Uploaded media files
├── config/                 # Configuration files
│   ├── nginx/              # Nginx configuration
│   └── database/           # Database initialization
├── docs/                   # Documentation
│   ├── architecture.md     # System architecture
│   ├── api-docs.md         # API documentation
│   └── deployment.md       # Deployment guide
├── infrastructure/         # Infrastructure as Code
│   └── docker/             # Dockerfiles
├── scripts/                # Shell scripts
│   ├── setup.sh            # Setup script
│   ├── deploy.sh           # Deployment script
│   └── backup.sh           # Backup script
├── src/                    # React frontend source
│   ├── components/         # React components
│   ├── context/            # React contexts
│   └── pages/              # Page components
├── tests/                  # Test suites
├── docker-compose.yml      # Production compose
├── docker-compose.dev.yml  # Development compose
├── Makefile                # Common commands
└── README.md               # This file
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Database
DATABASE_URL=mysql://user:pass@database:3306/novobhumi
MYSQL_ROOT_PASSWORD=secure_password
MYSQL_PASSWORD=secure_password

# Security
SESSION_SECRET=your_64_char_secret

# Admin
ADMIN_EMAIL=admin@novobhumi.com
ADMIN_PASSWORD=secure_password

# SMTP (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email
SMTP_PASS=your_password
```

See `.env.example` for all available options.

## Admin Panel

Access the admin panel at `/mayur-admin` (no visible navigation link).

### Features

- **General Settings**: Site name, tagline
- **Contact Info**: Phone, email, location
- **Social Links**: Instagram, Facebook, Twitter, LinkedIn
- **Buy Buttons**: Amazon/Shopify URLs and toggle
- **SMTP**: Email configuration for contact forms
- **Media Upload**: Logo and product images

### Default Credentials

- **Email**: admin@novobhumi.com
- **Password**: admin123 (change immediately!)

## API Documentation

See [docs/api-docs.md](docs/api-docs.md) for complete API documentation.

### Key Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/config` | GET | Get site configuration |
| `/api/config` | PUT | Update configuration (auth) |
| `/api/auth/login` | POST | Admin login |
| `/api/media/upload` | POST | Upload media (auth) |

## Testing

```bash
# Run all tests
make test

# Frontend tests
npm test

# Backend tests
cd backend && npm test

# Run tests in Docker
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

## CI/CD Pipeline

### Continuous Integration

On every push and PR:
1. Code quality checks (ESLint, TypeScript)
2. Security audit
3. Build frontend and backend
4. Docker image build and scan
5. Integration tests

### Continuous Deployment

On merge to `main`:
1. Build multi-platform Docker images
2. Push to Docker Hub
3. Deploy to production
4. Run smoke tests

### GitHub Secrets Required

| Secret | Description |
|--------|-------------|
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/novobhumi.git

# Create branch
git checkout -b feature/your-feature

# Make changes and test
make test

# Submit PR
```

## Troubleshooting

### Container Won't Start

```bash
docker-compose logs backend
docker-compose build --no-cache
```

### Database Connection Failed

```bash
docker-compose exec database mysqladmin ping -h localhost
```

### Port Already in Use

```bash
sudo lsof -i :80
sudo kill -9 <PID>
```

See [docs/deployment.md#troubleshooting](docs/deployment.md#troubleshooting) for more solutions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

- **Website**: [novobhumi.com](https://novobhumi.com)
- **Email**: support@novobhumi.com
- **Instagram**: [@novobhumi](https://instagram.com/novobhumi)

---

**Built with love for Indian gardeners** 🌱
