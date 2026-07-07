<div align="center">

# 🌱 Novobhumi

**Premium Cocopeat Products for Indian Gardeners**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescript-lang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Modern, high-performance static website built for speed, SEO, and mobile-first experience.

[Live Demo](https://novobhumi.pages.dev) · [Report Bug](https://github.com/mayur-chavhan/novobhumi/issues) · [Request Feature](https://github.com/mayur-chavhan/novobhumi/issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Development](#-development)
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
- Per-page titles, descriptions, and canonical URLs
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

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22

### Installation

```bash
# Clone the repository
git clone https://github.com/mayur-chavhan/novobhumi.git
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
| `make lint` | Lint code |
| `make clean` | Clean dist and node_modules |

---

## 📁 Project Structure

```
novobhumi/
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       └── pr-check.yml        # PR validation
├── public/                     # Static assets
│   ├── favicon.png
│   ├── robots.txt             # SEO crawler instructions
│   ├── sitemap.xml            # Site structure
│   ├── _redirects             # Cloudflare Pages SPA fallback
│   └── images/                # Public images
├── src/
│   ├── assets/                # Source assets
│   │   ├── hero-illustrations/ # SVG illustrations
│   │   ├── novobhumi-logo.png
│   │   └── novobhumi-cocopeat-5kg-block.png
│   ├── components/
│   │   ├── common/            # Reusable components
│   │   │   ├── BuyButton.tsx  # Amazon CTA
│   │   │   ├── Card.tsx
│   │   │   ├── SEO.tsx        # Per-page SEO helper
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── index.ts       # Barrel export
│   │   ├── landing/           # Landing page sections
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ScrollToHash.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── constants/             # Static data
│   │   ├── benefits.ts
│   │   ├── testimonials.ts
│   │   ├── heroCopy.ts
│   │   ├── links.ts
│   │   └── index.ts
│   ├── context/               # React Context
│   │   └── ConfigContext.tsx
│   ├── hooks/                 # Custom hooks
│   │   ├── use3DTilt.ts
│   │   ├── useMousePosition.ts
│   │   ├── useMobileOptimizations.ts
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
├── .env.example               # Environment variables template
├── .gitignore
├── index.html                 # HTML template with SEO
├── Makefile                   # Build automation
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
├── wrangler.toml              # Cloudflare Pages config
└── README.md
```

### Key Directories

- **`src/components/common/`** - Reusable UI components used across pages
- **`src/components/landing/`** - Landing page sections
- **`src/constants/`** - Centralized data (benefits, testimonials, links)
- **`src/hooks/`** - Custom React hooks for shared logic
- **`src/pages/`** - Route-level page components
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

- **Title & Description** - Unique per page via `react-helmet-async`
- **Keywords** - Relevant gardening terms
- **Open Graph** - Rich previews on Facebook/LinkedIn
- **Twitter Cards** - Enhanced Twitter sharing
- **Geo Tags** - Local SEO targeting India
- **Canonical URLs** - Prevent duplicate content issues

### Structured Data (JSON-LD)

| Type | Purpose |
|------|---------|
| **Organization** | Company information |
| **LocalBusiness** | Local SEO with address/contact |
| **Product** | Product details with reviews |
| **FAQPage** | Common questions (on `/faq`) |
| **BreadcrumbList** | Navigation breadcrumbs |
| **WebSite** | Site-wide search integration |

### Additional SEO Files

- **`robots.txt`** - Allows all crawlers, includes AI bots (ChatGPT, Claude, Perplexity)
- **`sitemap.xml`** - Complete site structure (all pages, priority, change frequency)
- **`_redirects`** - Cloudflare Pages SPA routing fallback

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

### Cloudflare Pages (Recommended)

This project is configured to deploy to **Cloudflare Pages**:

```bash
# Build the static site
npm run build

# Deploy with Wrangler
npx wrangler pages deploy dist --project-name=novobhumi --branch=main
```

**Build settings for dashboard:**

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

**Custom domain:** `novobhumi.com`

Add a `CNAME` record pointing `novobhumi.com` to `novobhumi.pages.dev` in your Cloudflare DNS settings.

### Alternative Static Hosts

The `dist/` folder is a standard Vite static build and can also be deployed to Netlify, Vercel, or any static host.

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
| [TypeScript](https://www.typescript.org/) | 5.6 | Type safety |
| [Vite](https://vitejs.dev/) | 7.2 | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.15 | Animations |
| [React Router](https://reactrouter.com/) | 7.1 | Routing |
| [Lucide React](https://lucide.dev/) | 0.468 | Icons |

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
