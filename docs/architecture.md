# Novobhumi - System Architecture

## Overview

Novobhumi is a fullstack web application for a premium cocopeat brand, featuring a React frontend and Express.js backend with MySQL database.

## Architecture Diagram

```mermaid
graph TB
    subgraph "Client Layer"
        B[Browser]
        M[Mobile Device]
    end

    subgraph "Reverse Proxy"
        N[Nginx]
    end

    subgraph "Application Layer"
        F[React Frontend<br/>Port 80]
        API[Express.js Backend<br/>Port 3001]
    end

    subgraph "Data Layer"
        DB[(MySQL Database<br/>Port 3306)]
        FS[File Storage<br/>Uploads]
    end

    subgraph "External Services"
        SMTP[SMTP Server]
        CDN[CDN/Static Assets]
    end

    B --> N
    M --> N
    N --> F
    N --> |/api/*| API
    F --> |SSE| API
    API --> DB
    API --> FS
    API --> SMTP
    F --> CDN
```

## Component Details

### Frontend (React + TypeScript)

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS with custom earth-tone palette
- **Animations**: Framer Motion
- **Routing**: React Router v6

#### Key Components

| Component | Description |
|-----------|-------------|
| `Hero` | Landing section with product showcase |
| `Benefits` | 12 key benefits with professional design |
| `Products` | Product catalog with buy buttons |
| `Testimonials` | Customer reviews carousel |
| `Comparison` | Traditional vs Novobhumi comparison |
| `MayurAdmin` | Secret admin panel for content management |

### Backend (Express.js + Prisma)

- **Runtime**: Node.js 20
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: MySQL 8.0

#### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/config` | GET | Get site configuration |
| `/api/config` | PUT | Update site configuration |
| `/api/config/stream` | GET | SSE for real-time updates |
| `/api/auth/login` | POST | Admin login |
| `/api/auth/logout` | POST | Admin logout |
| `/api/media/upload` | POST | Upload media files |

### Database Schema

```mermaid
erDiagram
    admin_users {
        int id PK
        string email UK
        string password
        datetime created_at
        datetime updated_at
    }

    site_settings {
        int id PK
        string key UK
        text value
        datetime updated_at
    }

    social_links {
        int id PK
        string platform
        string url
        boolean active
    }

    media_assets {
        int id PK
        string type
        string filename
        string path
        datetime uploaded_at
    }
```

## Data Flow

### User Request Flow

```mermaid
sequenceDiagram
    participant U as User
    participant N as Nginx
    participant F as Frontend
    participant A as API
    participant D as Database

    U->>N: HTTP Request
    N->>F: Serve Static Files
    F->>U: HTML/JS/CSS
    U->>N: API Request (/api/*)
    N->>A: Proxy to Backend
    A->>D: Query Data
    D->>A: Return Data
    A->>N: JSON Response
    N->>U: API Response
```

### Real-time Updates (SSE)

```mermaid
sequenceDiagram
    participant F as Frontend
    participant A as API
    participant D as Database

    F->>A: Open SSE Connection
    loop On Config Change
        D->>A: Trigger Update
        A->>F: Push Update Event
        F->>F: Update UI
    end
```

## Deployment Architecture

### Docker Containers

```mermaid
graph LR
    subgraph "Docker Network"
        FE[Frontend Container<br/>nginx:alpine]
        BE[Backend Container<br/>node:20-alpine]
        DB[Database Container<br/>mysql:8.0]
    end

    FE --> BE
    BE --> DB
```

### Production Environment

- **Load Balancer**: Optional, for horizontal scaling
- **Nginx**: Reverse proxy with SSL termination
- **Docker Compose**: Container orchestration
- **Volumes**: Persistent storage for database and uploads

## Security Considerations

1. **Authentication**: Session-based with bcrypt password hashing
2. **CORS**: Configured for allowed origins
3. **Input Validation**: Server-side validation for all inputs
4. **SQL Injection**: Protected via Prisma ORM
5. **XSS Prevention**: React's built-in escaping
6. **HTTPS**: SSL/TLS encryption (in production)

## Scalability

### Horizontal Scaling

- Stateless backend allows multiple instances
- Session storage can be moved to Redis
- Database read replicas for read-heavy workloads

### Performance Optimizations

- Multi-stage Docker builds
- Nginx caching for static assets
- Database connection pooling
- CDN for static asset delivery
