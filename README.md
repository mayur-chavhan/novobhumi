# Novobhumi

Premium cocopeat products website built with React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
make install

# Start development server (http://localhost:3737)
make dev

# Build for production
make build
```

## Docker

```bash
# Development (http://localhost:3737)
make docker-dev

# Production (http://localhost:4173)
make docker-prod

# Stop containers
make docker-stop
```

## Project Structure

```
├── src/
│   ├── assets/           # Images, illustrations
│   ├── components/
│   │   ├── common/       # Reusable UI (BuyButton, Card, StarRating)
│   │   ├── layout/       # Navbar, Footer
│   │   └── sections/     # Page sections (Hero, Products, etc.)
│   ├── constants/        # Static data (benefits, testimonials)
│   ├── context/          # React context (ConfigContext)
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Route pages
│   └── types/            # TypeScript interfaces
├── public/               # Static assets (favicon, robots.txt, sitemap.xml)
├── docker-compose.yaml   # Production Docker
├── docker-compose.dev.yaml # Development Docker
└── Dockerfile
```

## Analytics & Tracking Setup

The site includes placeholders for the following integrations. Replace the placeholder IDs in `index.html`:

### Google Services

| Service | Placeholder | Get From |
|---------|-------------|----------|
| Google Analytics 4 | `G-XXXXXXXXXX` | [analytics.google.com](https://analytics.google.com/) > Admin > Data Streams |
| Google Tag Manager | `GTM-XXXXXXX` | [tagmanager.google.com](https://tagmanager.google.com/) > Container ID |
| Search Console | `GOOGLE_SITE_VERIFICATION` | [search.google.com/search-console](https://search.google.com/search-console) > Settings > Verification |
| AdSense | `ca-pub-XXXXXXXXXXXXXXXX` | [google.com/adsense](https://www.google.com/adsense/) > Account |

### Other Analytics

| Service | Placeholder | Get From |
|---------|-------------|----------|
| Microsoft Clarity | `CLARITY_PROJECT_ID` | [clarity.microsoft.com](https://clarity.microsoft.com/) |
| Hotjar | `HOTJAR_ID` | [hotjar.com](https://www.hotjar.com/) |
| Facebook Pixel | `FB_PIXEL_ID` | [business.facebook.com/events_manager](https://business.facebook.com/events_manager) |

### SEO Features Included

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags
- Structured Data (JSON-LD):
  - Organization
  - LocalBusiness
  - Product with reviews
  - FAQPage
  - WebSite
- Geo tags for local SEO (India)
- robots.txt with AI crawler support
- sitemap.xml

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
