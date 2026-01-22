<div align="center">

# 🌱 Novobhumi

**Premium Cocopeat Products for Indian Gardeners**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Modern, high-performance static website built for speed, SEO, and mobile-first experience.

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Docker Setup](#-docker-setup)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Analytics Setup](#-analytics-setup)
- [SEO Features](#-seo-features)
- [Mobile Optimizations](#-mobile-optimizations)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- Responsive design with mobile-first approach
- Smooth animations with Framer Motion
- 3D tilt effects on interactive elements
- Infinite marquee carousel for product showcase
- Touch-friendly interactions (44px+ tap targets)

### ⚡ **Performance Optimized**
- Lighthouse score: 95+ (Performance)
- Lazy-loaded routes with React Router
- Optimized animations (reduced motion on mobile)
- Code splitting and tree shaking
- Compressed assets and image optimization

### 🔍 **SEO & Analytics Ready**
- Comprehensive meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD) for rich snippets
- Google Analytics 4, GTM, Search Console
- Microsoft Clarity, Hotjar, Facebook Pixel
- robots.txt and sitemap.xml included

### 📱 **Mobile Experience**
- Adaptive typography (responsive font sizes)
- Horizontal scroll for stats cards
- Optimized touch interactions
- Reduced animations on mobile devices
- Smart parallax effects (disabled on mobile)

### 🛠️ **Developer Experience**
- TypeScript for type safety
- Component-based architecture
- Centralized constants and types
- Custom hooks for mobile detection
- Docker support for consistent environments

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22
- **Docker** (optional, for containerized development)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/novobhumi.git
cd novobhumi

# Install dependencies
npm install
# or
make install

# Start development server
npm run dev
# or
make dev
```

The development server will start at **http://localhost:3737**

### Build for Production

```bash
# Build optimized production bundle
npm run build
# or
make build

# Preview production build locally
npm run preview
# or
make preview
```

Production preview runs at **http://localhost:4173**

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 3737) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint code with ESLint |

### Makefile Commands

| Command | Description |
|---------|-------------|
| `make install` | Install dependencies |
| `make dev` | Start development server |
| `make build` | Build production bundle |
| `make preview` | Preview production build |
| `make clean` | Clean dist and node_modules |
| `make docker-dev` | Start Docker dev environment |
| `make docker-prod` | Start Docker production |
| `make docker-stop` | Stop all Docker containers |
| `make docker-clean` | Stop and remove containers/volumes |

---

## 🐳 Docker Setup

### Development Mode

```bash
# Start development environment
make docker-dev

# Or using docker-compose directly
docker-compose -f docker-compose.dev.yaml up
```

**Access at:** http://localhost:3737  
**Hot Reload:** Enabled with volume mounts

### Production Mode

```bash
# Start production environment
make docker-prod

# Or using docker-compose directly
docker-compose up
```

**Access at:** http://localhost:4173  
**Optimized:** Multi-stage build, minimal image size

### Docker Commands

```bash
# Stop all containers
make docker-stop

# Clean up containers, images, and volumes
make docker-clean

# View logs
docker-compose logs -f

# Rebuild images
docker-compose build --no-cache
```

### Docker Image Details

- **Base Image:** `node:18-alpine`
- **Build Stage:** Multi-stage for optimal size
- **Production Server:** Vite preview server
- **Image Size:** ~150MB (optimized)

---

## 📁 Project Structure

```
novobhumi/
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       ├── docker-publish.yml  # Docker image publishing
│       └── pr-check.yml        # PR validation
├── public/                     # Static assets
│   ├── favicon.png
│   ├── robots.txt             # SEO crawler instructions
│   ├── sitemap.xml            # Site structure
│   └── images/                # Public images
├── src/
│   ├── assets/                # Source assets
│   │   ├── hero-illustrations/ # SVG illustrations (20 files)
│   │   ├── novobhumi-logo.png
│   │   └── novobhumi-cocopeat-5kg-block.png
│   ├── components/
│   │   ├── common/            # Reusable components
│   │   │   ├── BuyButton.tsx  # Amazon/Shopify CTA
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── index.ts       # Barrel export
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.tsx     # Responsive navigation
│   │   │   ├── Footer.tsx
│   │   │   ├── ScrollToHash.tsx
│   │   │   └── index.ts
│   │   └── sections/          # Page sections
│   │       ├── Hero/          # Hero section subcomponents
│   │       │   ├── constants.ts
│   │       │   ├── DecorativeIllustration.tsx
│   │       │   ├── HeroContent.tsx
│   │       │   ├── HeroCTAButtons.tsx
│   │       │   ├── HeroMarquee.tsx
│   │       │   ├── HeroProductShowcase.tsx
│   │       │   ├── MarqueeImage.tsx
│   │       │   ├── ScrollDownButton.tsx
│   │       │   ├── StatsCard.tsx
│   │       │   └── index.ts
│   │       ├── Hero.tsx
│   │       ├── BenefitsSection.tsx
│   │       ├── Products.tsx
│   │       ├── Testimonials.tsx
│   │       ├── CallToAction.tsx
│   │       ├── Comparison.tsx
│   │       ├── ComingSoon.tsx
│   │       └── index.ts
│   ├── constants/             # Static data
│   │   ├── benefits.ts        # 12 product benefits
│   │   ├── testimonials.ts    # Customer reviews
│   │   ├── heroCopy.ts        # Hero text content
│   │   ├── links.ts           # External links
│   │   └── index.ts
│   ├── context/               # React Context
│   │   └── ConfigContext.tsx  # Site configuration
│   ├── hooks/                 # Custom hooks
│   │   ├── use3DTilt.ts       # 3D tilt effect
│   │   ├── useMousePosition.ts
│   │   ├── useMobileOptimizations.ts # Mobile detection
│   │   └── index.ts
│   ├── pages/                 # Route pages
│   │   ├── Home.tsx
│   │   ├── Benefits.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Blog.tsx
│   │   ├── GardeningTips.tsx
│   │   └── HowToUse.tsx
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── attached_assets/           # Additional assets
│   ├── stock_images/          # 15 stock photos
│   └── generated_videos/      # Product demo video
├── .dockerignore
├── .env.example               # Environment variables template
├── .gitignore
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yaml        # Production Docker config
├── docker-compose.dev.yaml    # Development Docker config
├── index.html                 # HTML template with SEO
├── Makefile                   # Build automation
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
└── README.md
```

### Key Directories

- **`src/components/common/`** - Reusable UI components used across pages
- **`src/components/sections/`** - Large page sections (Hero, Products, etc.)
- **`src/constants/`** - Centralized data (benefits, testimonials, links)
- **`src/hooks/`** - Custom React hooks for shared logic
- **`src/types/`** - TypeScript type definitions

---

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

**Note:** Analytics IDs must be manually replaced in `index.html` (see [Analytics Setup](#-analytics-setup))

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig({
  server: {
    port: 3737,        // Development port
    host: true,        // Expose to network
  },
  preview: {
    port: 4173,        // Production preview port
  },
});
```

### Tailwind Configuration

Custom utilities added in `tailwind.config.js`:

- **`scrollbar-hide`** - Hide scrollbars (used for horizontal scroll)
- **`text-gradient`** - Gradient text effect
- **Custom colors:**
  - `primary.*` - Green shades (brand color)
  - `earth.*` - Brown/earth tones

---

## 📊 Analytics Setup

The site includes conditional loading for analytics services. They won't throw errors if IDs are not configured.

### Step 1: Get Your IDs

| Service | Where to Get ID | Format |
|---------|----------------|--------|
| **Google Analytics 4** | [analytics.google.com](https://analytics.google.com/) → Admin → Data Streams | `G-XXXXXXXXXX` |
| **Google Tag Manager** | [tagmanager.google.com](https://tagmanager.google.com/) → Container ID | `GTM-XXXXXXX` |
| **Google Search Console** | [search.google.com/search-console](https://search.google.com/search-console) → Settings → Verification | `your-verification-code` |
| **Google AdSense** | [google.com/adsense](https://www.google.com/adsense/) → Account → Publisher ID | `ca-pub-XXXXXXXXXXXXXXXX` |
| **Microsoft Clarity** | [clarity.microsoft.com](https://clarity.microsoft.com/) → Project Settings | `your-clarity-id` |
| **Hotjar** | [hotjar.com](https://www.hotjar.com/) → Sites → Site ID | `1234567` (numeric) |
| **Facebook Pixel** | [business.facebook.com/events_manager](https://business.facebook.com/events_manager) → Pixel ID | `123456789012345` (numeric) |

### Step 2: Replace Placeholders in `index.html`

Search and replace the following strings in `index.html`:

1. `GA4_MEASUREMENT_ID` → Your Google Analytics 4 ID
2. `GTM_CONTAINER_ID` → Your Google Tag Manager ID
3. `GOOGLE_SITE_VERIFICATION` → Your Search Console verification code
4. `ADSENSE_PUBLISHER_ID` → Your AdSense Publisher ID
5. `CLARITY_PROJECT_ID` → Your Clarity Project ID
6. `HOTJAR_ID` → Your Hotjar Site ID
7. `FB_PIXEL_ID` → Your Facebook Pixel ID

### Step 3: Verify Setup

All analytics scripts include conditional checks:
- Scripts **won't load** if placeholder IDs are present
- No console errors will be thrown
- Safe to deploy with placeholders (services just won't activate)

---

## 🔍 SEO Features

### Meta Tags

- **Title & Description** - Optimized for search engines
- **Keywords** - Relevant gardening terms
- **Open Graph** - Rich previews on Facebook/LinkedIn
- **Twitter Cards** - Enhanced Twitter sharing
- **Geo Tags** - Local SEO targeting India

### Structured Data (JSON-LD)

| Type | Purpose |
|------|---------|
| **Organization** | Company information |
| **LocalBusiness** | Local SEO with address/contact |
| **Product** | Product details with reviews |
| **FAQPage** | Common questions |
| **WebSite** | Site-wide search integration |

### Additional SEO Files

- **`robots.txt`** - Allows all crawlers, includes AI bots (ChatGPT, Claude, Perplexity)
- **`sitemap.xml`** - Complete site structure (all pages, priority, change frequency)
- **Canonical URLs** - Prevent duplicate content issues

---

## 📱 Mobile Optimizations

### Performance

✅ **Parallax Effects** - Disabled on mobile devices  
✅ **Background Decorations** - Not rendered on mobile  
✅ **Reduced Animations** - Respects `prefers-reduced-motion`  
✅ **Touch Gestures** - Smooth horizontal scroll for stats cards  

### Responsive Design

✅ **Adaptive Typography** - Smaller fonts on mobile, larger on desktop  
✅ **Touch Targets** - Minimum 44px tap areas for all buttons  
✅ **Mobile-First Layout** - Product image positioned optimally on mobile  
✅ **Flexible Grid** - 2-column on mobile, 3-4 columns on desktop  

### Custom Hook: `useMobileOptimizations()`

```typescript
const {
  isMobile,                  // Screen width < 768px
  isTouch,                   // Device supports touch
  shouldReduceAnimations,    // Mobile + touch OR prefers-reduced-motion
  shouldDisableHeavyEffects, // Disable parallax/3D effects on mobile
} = useMobileOptimizations();
```

---

## 🚢 Deployment

### Option 1: Docker (Recommended for Production)

**Using Pre-built Image from GitHub Container Registry:**

```bash
# Pull the latest version
docker pull ghcr.io/mayur-chavhan/novobhumi:latest

# Run container
docker run -d \
  -p 4173:4173 \
  --name novobhumi \
  --restart unless-stopped \
  ghcr.io/mayur-chavhan/novobhumi:latest

# Or use a specific version
docker pull ghcr.io/mayur-chavhan/novobhumi:1.0.1
docker run -d -p 4173:4173 ghcr.io/mayur-chavhan/novobhumi:1.0.1
```

**Building from Source:**

```bash
# Build and run production container
docker build -t novobhumi:latest .
docker run -d -p 4173:4173 --name novobhumi novobhumi:latest

# View logs
docker logs novobhumi

# Stop container
docker stop novobhumi
```

**Production Deployment with Custom Domain:**

The application is configured to work with the following domains:
- `novobhumi.com`
- `www.novobhumi.com`
- `localhost` (for testing)

If you need to add additional domains, update `vite.config.ts`:

```typescript
preview: {
  allowedHosts: [
    'your-domain.com',
    'www.your-domain.com',
    // ... other domains
  ],
}
```

**Reverse Proxy Setup (nginx):**

```nginx
server {
    listen 80;
    server_name novobhumi.com www.novobhumi.com;

    location / {
        proxy_pass http://localhost:4173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Option 2: Static Hosting (Netlify, Vercel, Cloudflare Pages)

```bash
# Build static assets
npm run build

# Deploy the 'dist' folder to your hosting provider
```

#### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Option 3: GitHub Container Registry (Automated)

Docker images are automatically built and published on every push to `main` and on version tags.

**Available Tags:**
- `latest` - Latest stable version from main branch
- `main` - Latest commit on main branch
- `1.0.1`, `1.0`, `1` - Semantic version tags
- `main-<sha>` - Specific commit from main branch

**Pull and Deploy:**

```bash
# Pull latest stable
docker pull ghcr.io/mayur-chavhan/novobhumi:latest

# Pull specific version
docker pull ghcr.io/mayur-chavhan/novobhumi:1.0.1

# Deploy to production
docker run -d \
  -p 80:4173 \
  --name novobhumi-prod \
  --restart unless-stopped \
  ghcr.io/mayur-chavhan/novobhumi:1.0.1
```

**Auto-Update with Watchtower:**

```bash
# Automatically update to latest version
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --interval 300 \
  novobhumi-prod
```

See [GitHub Actions Workflow](#github-actions) for more details on automated builds.

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Pull Request Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
   ```bash
   npm run build
   npm run preview
   ```
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Code Style

- Use **TypeScript** for type safety
- Follow **ESLint** rules (run `npm run lint`)
- Use **Tailwind CSS** for styling (avoid inline styles)
- Keep components **small and focused**
- Write **descriptive variable names**

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 19.0 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.6 | Type safety |
| [Vite](https://vitejs.dev/) | 7.2 | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.15 | Animations |
| [React Router](https://reactrouter.com/) | 7.1 | Routing |
| [Lucide React](https://lucide.dev/) | 0.468 | Icons |

### DevOps

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| GitHub Actions | CI/CD pipelines |
| GitHub Container Registry | Docker image hosting |
| Makefile | Build automation |

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Stock images from [Unsplash](https://unsplash.com/)
- Inspiration from modern e-commerce sites

---

<div align="center">

**Made with ❤️ for Indian Gardeners**

[⬆ Back to Top](#-novobhumi)

</div>
