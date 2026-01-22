# Contributing to Novobhumi

Thank you for your interest in contributing to Novobhumi! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We expect all contributors to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/novobhumi.git
   cd novobhumi
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/novobhumi/novobhumi.git
   ```

## Development Setup

### Prerequisites

- Docker and Docker Compose
- Node.js 20+ (for local development without Docker)
- Git

### Quick Start with Docker

```bash
# Copy environment file
cp .env.example .env

# Start development environment
./scripts/setup.sh dev
```

### Local Development (without Docker)

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install && cd ..

# Start frontend dev server
npm run dev

# In another terminal, start backend
cd backend && npm run dev
```

## Making Changes

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-payment-gateway`)
- `fix/` - Bug fixes (e.g., `fix/login-redirect`)
- `docs/` - Documentation updates (e.g., `docs/api-endpoints`)
- `refactor/` - Code refactoring (e.g., `refactor/auth-service`)
- `test/` - Test additions or fixes (e.g., `test/user-api`)

### Creating a Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create your branch
git checkout -b feature/your-feature-name
```

## Pull Request Process

1. **Update your branch** with the latest main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests** and ensure they pass:
   ```bash
   npm test
   cd backend && npm test
   ```

3. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what was changed and why
   - Screenshots (if UI changes)
   - Link to related issue (if applicable)

5. **Address review feedback** promptly

6. **Squash commits** if requested

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public functions

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types with TypeScript interfaces
- Follow the existing component structure

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow existing color palette (earth tones)
- Ensure responsive design (mobile-first)
- Maintain consistent spacing

### API Development

- Follow RESTful conventions
- Use proper HTTP status codes
- Include error handling
- Document endpoints

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```
feat(auth): add password reset functionality

fix(products): correct price calculation for bulk orders

docs(api): update authentication endpoint documentation
```

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Contact the maintainers

Thank you for contributing to Novobhumi!
