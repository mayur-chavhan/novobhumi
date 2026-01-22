<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, single-page marketing website for Novobhumi, a premium cocopeat product brand targeting Indian gardening enthusiasts. The site is built with React 19, TypeScript, Tailwind CSS, and Framer Motion, optimized for conversion with a focus on Amazon affiliate sales.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview

# Run with PM2 (for production-like environment)
pm2 start ecosystem.config.cjs
```

## Architecture

### Component Structure

The application follows a simple single-page architecture with vertical sections:

- **App.tsx** - Main container that renders all sections in order
- **Navbar.tsx** - Sticky navigation with smooth scroll anchors
- **Hero.tsx** - Landing section with brand messaging
- **Benefits.tsx** - Grid of 12 cocopeat benefits with animated cards
- **Products.tsx** - Product showcase with gallery and Amazon CTA
- **CallToAction.tsx** - Conversion-focused section with trust indicators
- **ComingSoon.tsx** - Preview of upcoming products
- **Footer.tsx** - Contact info and social links

### Key Design Patterns

1. **Centralized Constants**: Amazon affiliate link is stored in `src/constants/links.ts` and imported where needed to maintain a single source of truth.

2. **Animation Strategy**: Framer Motion is used throughout for scroll-based animations. Components use consistent animation patterns:
   - `initial`: Starting state (typically with opacity: 0 and translateY)
   - `whileInView`: Visible state when scrolled into view
   - `viewport={{ once: true }}`: Animations trigger once to improve performance

3. **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints. The Navbar component has separate desktop and mobile menu implementations.

4. **Color System**: Custom Tailwind theme extends with brand colors:
   - `primary.*` - Green shades for nature theme
   - `earth.*` - Brown/earth tones for organic feel

### Image Handling

Product images are expected in `public/images/` directory but are currently commented out with placeholders. The image tags in Products.tsx are intentionally commented until actual images are added.

### State Management

No global state management is used - this is intentional for this simple marketing site. Each component manages its own local state with React hooks:
- Navbar uses `useState` for menu open/closed and scroll position
- Hero uses custom hooks (`useMousePosition`, `use3DTilt`) for interactive 3D animations
- Other components are mostly presentational

### Custom Hooks

**src/hooks/useMousePosition.ts** - Tracks mouse position within an element's bounds with throttling for performance. Returns both absolute and relative (0-1) coordinates.

**src/hooks/use3DTilt.ts** - Creates 3D tilt effect based on mouse position. Respects `prefers-reduced-motion` and provides configurable tilt angles, perspective, and scale options.

### Styling Approach

- Tailwind utility classes are used throughout
- Custom gradients defined with `bg-gradient-earth` class
- Consistent spacing and sizing scales
- Backdrop blur effects for glassmorphism on Navbar

## Important Configuration

### Amazon Affiliate Link

Update in `src/constants/links.ts` - this single change propagates to Navbar, Products, and CallToAction components.

### Hero Copy Variants

Hero section copy is managed through `src/constants/heroCopy.ts` with three pre-written variants:
- **transformation**: Focuses on aspirational garden transformation outcomes
- **convenience**: Emphasizes ease of use and time-saving benefits
- **sustainability**: Highlights eco-friendly and water conservation aspects

To switch variants, change the `activeHeroCopy` export in `heroCopy.ts`. Each variant includes headline, description, and badge text. This structure enables easy A/B testing without modifying component code.

### Color Theme

Modify `tailwind.config.js` to adjust brand colors. The theme uses:
- `primary` for green/nature colors
- `earth` for brown/organic tones

### Logo

The logo file is imported from `assets/novobhumi-logo.png` in Navbar.tsx. Replace this file to update the logo sitewide.

## Testing & Quality

No test framework is currently configured. When adding tests, consider:
- Component rendering tests with React Testing Library
- Accessibility testing (important for Indian market reach)
- Cross-browser testing (especially mobile browsers common in India)

## Deployment

The project uses Vite and outputs to `dist/` folder. Configured for PM2 process management with `ecosystem.config.cjs`. For production deployment:

1. Run `npm run build`
2. Serve the `dist/` folder with any static host (Vercel, Netlify, etc.)
3. Or use PM2 with the ecosystem config for self-hosted deployments

## Content Updates

All text content is hardcoded in components (no CMS). To update content:
- Hero messaging: `src/constants/heroCopy.ts` (change `activeHeroCopy` to switch between variants)
- Benefits list: `src/components/Benefits.tsx` (lines 22-122)
- Product details: `src/components/Products.tsx`
- Coming soon items: `src/components/ComingSoon.tsx` (lines 8-31)
- Contact info: `src/components/Footer.tsx`

## Hero Section Animations

The Hero component features advanced interactive animations:

**3D Tilt Effect**: Product card responds to mouse movement with perspective transforms (max 12° tilt). Implemented via `use3DTilt` hook with configurable options.

**Parallax Scrolling**: Background decorative elements move at different speeds on scroll using Framer Motion's `useScroll` and `useTransform`.

**Floating Decorations**: Gardening-themed SVG illustrations (plants, vegetables, tools) float around the product with continuous animation loops.

**Accessibility**: All animations respect `prefers-reduced-motion` - users with motion sensitivity get simple fade-in effects instead.

**Decorative Assets**: 8 custom SVG illustrations in `assets/hero-illustrations/` use brand colors (opacity 0.25-0.3) and are marked `aria-hidden="true"` for screen readers.

## Performance Considerations

- Lazy loading is built into modern browsers for images
- Framer Motion animations use `viewport={{ once: true }}` to prevent re-triggering
- No heavy dependencies beyond animation library
- Vite automatically code-splits and optimizes the build
- Hero animations use `will-change: transform` for GPU acceleration
- Mouse tracking is throttled to 16ms (~60fps) using requestAnimationFrame
- All animations use only `transform` and `opacity` properties (no layout reflows)
- SVG illustrations are lightweight (5-20KB each) and use CSS custom properties for theming
