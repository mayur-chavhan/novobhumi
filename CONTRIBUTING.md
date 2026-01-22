# Contributing to Novobhumi 🌱

Thank you for your interest in contributing to Novobhumi! We welcome contributions from everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Project Structure](#project-structure)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

### Our Standards

✅ **Do:**
- Be respectful and considerate
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards others

❌ **Don't:**
- Use inappropriate language or imagery
- Engage in trolling or harassment
- Publish others' private information
- Act unprofessionally

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22
- **Git**
- **Docker** (optional)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/novobhumi.git
   cd novobhumi
   ```
3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/novobhumi.git
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start development server:**
   ```bash
   npm run dev
   ```

---

## Development Workflow

### 1. Create a Feature Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

**Branch Naming Convention:**
- `feature/` - New features (e.g., `feature/add-dark-mode`)
- `fix/` - Bug fixes (e.g., `fix/navbar-scroll-issue`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/hero-components`)
- `perf/` - Performance improvements (e.g., `perf/optimize-images`)
- `test/` - Test additions (e.g., `test/add-component-tests`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Keep commits focused and atomic

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

**Manual Testing Checklist:**
- [ ] Test on Chrome (Desktop)
- [ ] Test on Firefox (Desktop)
- [ ] Test on mobile devices
- [ ] Check console for errors
- [ ] Verify responsive design
- [ ] Test all user interactions

### 4. Commit Your Changes

Follow our [Commit Guidelines](#commit-guidelines)

```bash
git add .
git commit -m "feat: add amazing feature"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

Go to GitHub and create a pull request from your fork to the main repository.

---

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: add dark mode toggle` |
| `fix` | Bug fix | `fix: resolve navbar scroll issue` |
| `docs` | Documentation | `docs: update README with Docker instructions` |
| `style` | Code style changes (formatting, no logic change) | `style: format Hero component` |
| `refactor` | Code refactoring | `refactor: extract Hero subcomponents` |
| `perf` | Performance improvement | `perf: lazy load images` |
| `test` | Adding tests | `test: add tests for BuyButton` |
| `chore` | Maintenance tasks | `chore: update dependencies` |
| `ci` | CI/CD changes | `ci: add Docker publish workflow` |
| `build` | Build system changes | `build: update vite config` |

### Scope (Optional)

The scope should be the name of the affected module/component:
- `hero`
- `navbar`
- `products`
- `testimonials`
- `docker`
- `analytics`

### Examples

```bash
feat(hero): add mobile-optimized layout
fix(navbar): resolve hamburger menu close issue
docs: add analytics setup instructions
refactor(components): split Hero into subcomponents
perf(images): implement lazy loading
style(hero): improve responsive typography
```

---

## Pull Request Process

### Before Creating a PR

1. **Ensure your code builds:**
   ```bash
   npm run build
   ```

2. **Run linter:**
   ```bash
   npm run lint
   ```

3. **Update documentation** if needed

4. **Rebase on latest main:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Creating the PR

1. **Use the PR template** (automatically loaded)
2. **Write a clear title** following commit convention
3. **Fill out all sections** of the template
4. **Link related issues** using `Closes #123`
5. **Add screenshots** for UI changes
6. **Mark as draft** if work is in progress

### PR Review Process

1. **Automated checks** will run (build, lint, Docker)
2. **Maintainers will review** your code
3. **Address feedback** by pushing new commits
4. **Once approved**, a maintainer will merge

### What Happens After Merge

- PR is merged to `main`
- Docker image is automatically built and published to GitHub Container Registry
- Image is tagged with:
  - `main` - Latest main branch
  - `latest` - Latest stable release
  - `<commit-sha>` - Specific commit

---

## Code Style Guidelines

### TypeScript

✅ **Do:**
```typescript
// Use descriptive variable names
const isUserLoggedIn = checkAuthStatus();

// Add type annotations
interface BuyButtonProps {
  href: string;
  variant: 'amazon' | 'shopify';
  size: 'sm' | 'md' | 'lg';
}

// Use const for immutable values
const MAX_RETRIES = 3;

// Destructure props in function parameters
function BuyButton({ href, variant, size }: BuyButtonProps) {
  // ...
}
```

❌ **Don't:**
```typescript
// Avoid single-letter variables (except loop counters)
const x = getStatus();

// Don't use 'any' type
const data: any = fetchData();

// Avoid inline types
function doSomething(props: { a: string; b: number }) {}
```

### React Components

✅ **Do:**
```tsx
// Use function components
export function Hero() {
  return <section>...</section>;
}

// Keep components small (< 200 lines)
// Extract subcomponents if needed

// Use descriptive prop names
<BuyButton 
  href={amazonUrl} 
  variant="amazon" 
  size="lg" 
/>

// Use fragments instead of unnecessary divs
<>
  <Header />
  <Content />
</>
```

❌ **Don't:**
```tsx
// Avoid class components (use functions)
class Hero extends React.Component {}

// Don't nest components deeply (max 3 levels)
<div><div><div><div>...</div></div></div></div>

// Avoid inline styles (use Tailwind)
<div style={{ color: 'red' }}>...</div>
```

### Tailwind CSS

✅ **Do:**
```tsx
// Use utility classes
<div className="flex items-center gap-4 px-6 py-3 rounded-lg">

// Use responsive prefixes
<div className="text-sm sm:text-base lg:text-lg">

// Group related utilities
<button className="
  px-6 py-3 
  text-white font-semibold 
  bg-blue-600 hover:bg-blue-700 
  rounded-full shadow-lg
">
```

❌ **Don't:**
```tsx
// Avoid inline styles
<div style={{ display: 'flex' }}>

// Don't use arbitrary values unless necessary
<div className="mt-[13px]"> // Use mt-3 instead

// Avoid overly long className strings (extract to variable)
<div className="flex items-center justify-between gap-4 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
```

### File Organization

✅ **Do:**
```
components/
├── common/           # Reusable components
│   ├── BuyButton.tsx
│   ├── Card.tsx
│   └── index.ts     # Barrel export
├── layout/           # Layout components
│   └── Navbar.tsx
└── sections/         # Page sections
    └── Hero/
        ├── index.ts
        ├── constants.ts
        ├── HeroContent.tsx
        └── HeroCTAButtons.tsx
```

❌ **Don't:**
```
components/
├── BuyButton.tsx
├── Card.tsx
├── Navbar.tsx
├── Hero.tsx
└── ... (all files in one directory)
```

---

## Testing Guidelines

### Manual Testing

Before submitting a PR, test your changes on:

**Desktop Browsers:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile Devices:**
- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS)
- [ ] Firefox Mobile

**Responsive Breakpoints:**
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)

### What to Test

1. **Visual Appearance**
   - Layout looks correct
   - No overlapping elements
   - Proper spacing and alignment
   - Responsive design works

2. **Functionality**
   - All buttons work
   - Links navigate correctly
   - Animations are smooth
   - Forms submit properly

3. **Performance**
   - Page loads quickly
   - No layout shifts
   - Smooth scrolling
   - Animations don't lag

4. **Console Errors**
   - No JavaScript errors
   - No React warnings
   - No 404s for assets

---

## Project Structure

```
novobhumi/
├── src/
│   ├── components/
│   │   ├── common/       # Add reusable UI components here
│   │   ├── layout/       # Add layout components (Header, Footer)
│   │   └── sections/     # Add page sections (Hero, Products)
│   ├── constants/        # Add static data (benefits, testimonials)
│   ├── hooks/            # Add custom React hooks
│   ├── pages/            # Add route pages
│   └── types/            # Add TypeScript type definitions
├── public/               # Add static assets
└── .github/
    └── workflows/        # GitHub Actions CI/CD
```

### Where to Add New Code

| Type | Location | Example |
|------|----------|---------|
| **Reusable Component** | `src/components/common/` | `Button.tsx`, `Modal.tsx` |
| **Page Section** | `src/components/sections/` | `AboutSection.tsx` |
| **Layout Component** | `src/components/layout/` | `Sidebar.tsx` |
| **Page/Route** | `src/pages/` | `Contact.tsx` |
| **Custom Hook** | `src/hooks/` | `useScrollPosition.ts` |
| **Type Definition** | `src/types/` | Add to `index.ts` |
| **Static Data** | `src/constants/` | `products.ts` |
| **Static Asset** | `public/` | `logo.png` |

---

## Need Help?

- 📖 Check the [README](README.md) for setup instructions
- 💬 Open a [Discussion](https://github.com/your-repo/novobhumi/discussions) for questions
- 🐛 Report bugs via [Issues](https://github.com/your-repo/novobhumi/issues)

---

**Thank you for contributing to Novobhumi! 🌱**
