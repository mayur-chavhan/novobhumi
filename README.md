<div align="center">

# 🌱 Novobhumi

**Premium Cocopeat Products for Indian Gardeners**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescript-lang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Modern, high-performance static website built for speed, SEO, and mobile-first experience.

[Report Bug](https://github.com/mayur-chavhan/novobhumi/issues) · [Request Feature](https://github.com/mayur-chavhan/novobhumi/issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [SEO Features](#-seo-features)
- [Mobile Optimizations](#-mobile-optimizations)
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
- Lazy-loaded routes with React Router
- Optimized animations (reduced motion on mobile)
- Code splitting and tree shaking
- Compressed assets and image optimization

### 🔍 **SEO Ready**
- Comprehensive meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD) for rich snippets
- Per-page titles, descriptions, and canonical URLs
- robots.txt and sitemap.xml included

### 📱 **Mobile Experience**
- Adaptive typography (responsive font sizes)
- Horizontal scroll for stats cards
- Optimized touch interactions
- Reduced animations on mobile devices
- Smart parallax effects (disabled on mobile)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/mayur-chavhan/novobhumi.git
cd novobhumi

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at **http://localhost:3737**.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 3737) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint code with ESLint |

---

## 📁 Project Structure

```
novobhumi/
├── public/                     # Static assets
│   ├── favicon.png
│   ├── robots.txt             # SEO crawler instructions
│   ├── sitemap.xml            # Site structure
│   ├── _redirects             # SPA fallback
│   └── images/                # Public images
├── src/
│   ├── assets/                # Source assets
│   │   ├── hero-illustrations/ # SVG illustrations
│   │   ├── novobhumi-logo.png
│   │   └── novobhumi-cocopeat-5kg-block.png
│   ├── components/
│   │   ├── common/            # Reusable components
│   │   ├── landing/           # Landing page sections
│   │   ├── layout/            # Layout components
│   │   └── sections/          # Page sections
│   ├── constants/             # Static data
│   ├── context/               # React Context
│   ├── hooks/                 # Custom hooks
│   ├── pages/                 # Route pages
│   ├── types/                 # TypeScript types
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template with SEO
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
├── eslint.config.js           # ESLint config
├── postcss.config.js          # PostCSS config
├── LICENSE
└── README.md
```

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
