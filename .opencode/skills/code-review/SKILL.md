---
name: code-review
description: Comprehensive code review skill for identifying issues, suggesting improvements, and ensuring code quality. Use when reviewing pull requests, refactoring code, or analyzing code for potential improvements.
license: MIT
compatibility: opencode
metadata:
  source: adapted from wshobson/agents
  category: quality
---

# Code Review Excellence

## Overview

This skill provides systematic code review capabilities focusing on code quality, maintainability, performance, and security.

## Review Dimensions

### 1. Code Quality
- **Readability**: Clear naming, consistent formatting, appropriate comments
- **Maintainability**: Single responsibility, DRY principle, low coupling
- **Testability**: Pure functions, dependency injection, clear interfaces
- **Error Handling**: Graceful degradation, meaningful error messages

### 2. Architecture Patterns
- **Component Structure**: Proper separation of concerns
- **State Management**: Appropriate state colocation
- **API Design**: RESTful conventions, consistent responses
- **Data Flow**: Unidirectional data flow, clear boundaries

### 3. Performance
- **React**: Unnecessary re-renders, missing memoization, large bundles
- **Backend**: N+1 queries, missing indexes, inefficient algorithms
- **General**: Memory leaks, blocking operations, resource cleanup

### 4. Security
- **Input Validation**: SQL injection, XSS, CSRF protection
- **Authentication**: Secure token handling, session management
- **Authorization**: Proper access controls, least privilege
- **Data Protection**: Sensitive data exposure, logging secrets

## Review Process

### Step 1: Understand Context
```
- What is the purpose of this change?
- What problem does it solve?
- Are there acceptance criteria?
```

### Step 2: High-Level Review
```
- Does the architecture make sense?
- Are there missing abstractions?
- Is the approach appropriate?
```

### Step 3: Detailed Review
```
- Line-by-line analysis
- Check edge cases
- Verify error handling
- Review test coverage
```

### Step 4: Provide Feedback
```
Structure feedback as:
- CRITICAL: Must fix before merge
- SUGGESTION: Recommended improvement
- QUESTION: Clarification needed
- NITPICK: Minor style preference
```

## TypeScript-Specific Checks

### Type Safety
```typescript
// Bad: Using 'any'
function processData(data: any) { ... }

// Good: Proper typing
interface DataPayload {
  id: string;
  values: number[];
}
function processData(data: DataPayload) { ... }
```

### Null Safety
```typescript
// Bad: Risky optional chaining
const name = user?.profile?.name;

// Good: Explicit null checks with fallback
const name = user?.profile?.name ?? 'Anonymous';
```

### Generic Constraints
```typescript
// Bad: Unconstrained generic
function getProperty<T>(obj: T, key: string) { ... }

// Good: Constrained generic
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] { ... }
```

## React-Specific Checks

### Hook Dependencies
```typescript
// Bad: Missing dependencies
useEffect(() => {
  fetchData(userId);
}, []); // userId should be in deps

// Good: Complete dependencies
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### Memoization
```typescript
// Bad: Recreating objects on every render
<Component config={{ theme: 'dark' }} />

// Good: Memoized values
const config = useMemo(() => ({ theme: 'dark' }), []);
<Component config={config} />
```

### Component Extraction
```typescript
// Bad: Large monolithic component
function Dashboard() {
  // 500 lines of JSX
}

// Good: Composed smaller components
function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardContent />
      <DashboardFooter />
    </DashboardLayout>
  );
}
```

## Express/Backend Checks

### Error Handling
```typescript
// Bad: Unhandled async errors
app.get('/users', async (req, res) => {
  const users = await db.users.findMany();
  res.json(users);
});

// Good: Proper error handling
app.get('/users', async (req, res, next) => {
  try {
    const users = await db.users.findMany();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
```

### Input Validation
```typescript
// Bad: No validation
app.post('/users', async (req, res) => {
  await db.users.create({ data: req.body });
});

// Good: Validated input
app.post('/users', async (req, res) => {
  const validated = userSchema.parse(req.body);
  await db.users.create({ data: validated });
});
```

## Review Checklist

### Before Approving
- [ ] Code compiles without errors
- [ ] Tests pass and cover new functionality
- [ ] No console.log or debug statements
- [ ] Error states are handled
- [ ] Loading states are handled
- [ ] Edge cases are considered
- [ ] Security implications reviewed
- [ ] Performance implications considered
- [ ] Documentation updated if needed

## Output Format

When reviewing code, structure output as:

```markdown
## Code Review Summary

### Overview
[Brief description of what was reviewed]

### Critical Issues
1. [Issue description with file:line reference]
   - Problem: [What's wrong]
   - Solution: [How to fix]

### Suggestions
1. [Suggestion with file:line reference]
   - Current: [What exists]
   - Proposed: [What to change]

### Questions
1. [Question about implementation decision]

### Positive Observations
- [What was done well]
```
