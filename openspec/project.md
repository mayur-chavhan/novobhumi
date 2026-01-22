# Project Context

## Purpose

Novobhumi's public-facing marketing presence for premium cocopeat products. The site educates Indian home gardeners, highlights product benefits, and funnels visitors toward Amazon affiliate purchase links and direct contact options.

## Tech Stack

- React 19 with JSX + hooks for the UI layer
- TypeScript (strict mode) for type safety across components and build tooling
- Vite 7 for local dev server, bundling, and production builds
- Tailwind CSS 3 for utility-first styling and responsive design tokens
- Framer Motion 12 for scroll-triggered and view animations
- Lucide React icon set for vector icons
- Node.js 18+ environment for tooling and scripts

## Project Conventions

### Code Style

- TypeScript strict compiler options, unused checks, and bundler module resolution enforced via `tsconfig.*`
- ESLint recommended configs (JS, TypeScript, react-hooks, react-refresh) run with `npm run lint`
- Functional React components colocated in `src/components` with PascalCase filenames and default exports
- Tailwind utility classes in JSX; shared styles live in `src/App.css` or `src/index.css`
- Prefer descriptive prop names, explicit return types when inference is unclear, and React hook rules compliance

### Architecture Patterns

- Single-page marketing site bootstrapped from `src/main.tsx` rendering `App.tsx`
- UI decomposed into self-contained presentational components (`Hero`, `Benefits`, `Products`, `CallToAction`, `ComingSoon`, `Footer`)
- Static data (benefit lists, product metadata) defined within components; future dynamic sources should centralize data in a dedicated module
- Animations orchestrated via Framer Motion variants defined per component to keep transitions reusable and declarative

### Testing Strategy

- No automated test suite today; manual QA focuses on layout responsiveness, animation integrity, and link correctness before release
- When adding automated tests, prefer Vitest + React Testing Library for component tests and integrate into CI prior to deployment

### Git Workflow

- Default branch `main` (upstream); feature work occurs on short-lived branches named after task owners or scopes (e.g., `feature/landing-polish`, `claude/...`)
- Open pull requests for review before merging; squash-and-merge to keep history linear when possible
- No enforced commit message standard, but conventional commit prefixes are encouraged for clarity (`feat:`, `fix:`, `chore:`)

## Domain Context

- Brand story centers on sustainable coconuts-derived growing medium (cocopeat) tailored to Indian gardening conditions
- Key selling points: moisture retention, root aeration, reusability, and organic credentialing highlighted via benefit grid
- Primary call to action routes users to Amazon affiliate storefront; secondary CTA prompts direct contact and social engagement
- Visual tone: earthy greens and browns, natural textures, smooth motion conveying premium yet eco-friendly positioning

## Important Constraints

- Maintain fast load times and smooth animations on low-to-mid mobile hardware; optimize image assets before production deploys
- Ensure all interactive regions remain accessible (focus states, semantic landmarks, adequate contrast with Tailwind tokens)
- Keep copy and imagery aligned with Indian market expectations and regulatory guidance for agricultural amendments
- Production builds must pass `npm run build` without TypeScript or ESLint errors before deployment

## External Dependencies

- Amazon affiliate program links embedded in `Products.tsx` and `CallToAction.tsx`
- Lucide icon CDN (bundled via npm) and Tailwind CSS runtime utilities
- Optional deployment targets documented for Vercel, Netlify, or GitHub Pages; requires respective CLI or platform configuration
