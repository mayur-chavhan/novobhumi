# Contributing Guide

See [CONTRIBUTING.md](../CONTRIBUTING.md) in the project root for detailed contribution guidelines.

## Quick Reference

### Setup

```bash
git clone https://github.com/YOUR_USERNAME/novobhumi.git
cd novobhumi
cp .env.example .env
./scripts/setup.sh dev
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring

### Commit Format

```
<type>(<scope>): <description>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pull Request Checklist

- [ ] Tests pass
- [ ] Linting passes
- [ ] Documentation updated
- [ ] Changelog updated (if needed)
