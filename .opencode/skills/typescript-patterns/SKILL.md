---
name: typescript-patterns
description: Advanced TypeScript patterns for refactoring and improving type safety. Use when refactoring TypeScript code, improving type definitions, or implementing design patterns with proper typing.
license: MIT
compatibility: opencode
metadata:
  source: adapted from wshobson/agents
  category: languages
---

# TypeScript Advanced Patterns

## Overview

This skill provides advanced TypeScript patterns for building type-safe, maintainable applications.

## Type Inference Patterns

### Const Assertions
```typescript
// Without const assertion - type is string[]
const colors = ['red', 'green', 'blue'];

// With const assertion - type is readonly ["red", "green", "blue"]
const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number]; // "red" | "green" | "blue"
```

### Satisfies Operator
```typescript
type Route = {
  path: string;
  component: React.ComponentType;
};

// Validates structure while preserving literal types
const routes = {
  home: { path: '/', component: Home },
  about: { path: '/about', component: About },
} satisfies Record<string, Route>;

// routes.home.path is still '/' not string
```

## Generic Patterns

### Generic Constraints
```typescript
// Ensure T has an id property
function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Ensure keys exist on object
function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
}
```

### Conditional Types
```typescript
type ApiResponse<T> = T extends undefined
  ? { success: true }
  : { success: true; data: T };

type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Awaited<T> = T extends Promise<infer U> ? U : T;
```

### Mapped Types
```typescript
// Make all properties optional and nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Create a type with only methods
type Methods<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

// Prefix all keys
type Prefixed<T, P extends string> = {
  [K in keyof T as `${P}${Capitalize<string & K>}`]: T[K];
};
```

## Utility Type Patterns

### DeepPartial
```typescript
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// Usage
interface Config {
  api: {
    url: string;
    timeout: number;
  };
  features: {
    darkMode: boolean;
  };
}

function updateConfig(partial: DeepPartial<Config>) { ... }
```

### Strict Omit
```typescript
// Standard Omit doesn't error on invalid keys
type User = { name: string; age: number };
type Bad = Omit<User, 'invalid'>; // No error!

// Strict version
type StrictOmit<T, K extends keyof T> = Omit<T, K>;
type Good = StrictOmit<User, 'invalid'>; // Error!
```

### NonNullableDeep
```typescript
type NonNullableDeep<T> = T extends object
  ? { [K in keyof T]: NonNullableDeep<NonNullable<T[K]>> }
  : NonNullable<T>;
```

## Function Patterns

### Function Overloads
```typescript
// Multiple signatures for better inference
function createElement(tag: 'input'): HTMLInputElement;
function createElement(tag: 'div'): HTMLDivElement;
function createElement(tag: 'span'): HTMLSpanElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

const input = createElement('input'); // HTMLInputElement
```

### Builder Pattern
```typescript
class QueryBuilder<T> {
  private query: Partial<T> = {};

  where<K extends keyof T>(key: K, value: T[K]): this {
    this.query[key] = value;
    return this;
  }

  build(): Partial<T> {
    return { ...this.query };
  }
}

// Usage with chaining
const query = new QueryBuilder<User>()
  .where('name', 'John')
  .where('age', 30)
  .build();
```

## Discriminated Unions

### Result Pattern
```typescript
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { success: false, error: 'Division by zero' };
  }
  return { success: true, data: a / b };
}

const result = divide(10, 2);
if (result.success) {
  console.log(result.data); // TypeScript knows data exists
} else {
  console.error(result.error); // TypeScript knows error exists
}
```

### State Machine Pattern
```typescript
type LoadingState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function renderState<T>(state: LoadingState<T>) {
  switch (state.status) {
    case 'idle':
      return <Idle />;
    case 'loading':
      return <Spinner />;
    case 'success':
      return <Data data={state.data} />;
    case 'error':
      return <Error error={state.error} />;
  }
}
```

## Type Guards

### Custom Type Guards
```typescript
interface Dog { bark(): void; }
interface Cat { meow(): void; }

function isDog(pet: Dog | Cat): pet is Dog {
  return 'bark' in pet;
}

function makeSound(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark(); // TypeScript knows it's a Dog
  } else {
    pet.meow(); // TypeScript knows it's a Cat
  }
}
```

### Assertion Functions
```typescript
function assertNonNull<T>(value: T, message?: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error(message ?? 'Value is null or undefined');
  }
}

function process(value: string | null) {
  assertNonNull(value, 'Value required');
  console.log(value.toUpperCase()); // TypeScript knows value is string
}
```

## Module Patterns

### Barrel Exports
```typescript
// components/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';
export type { ButtonProps } from './Button';
export type { InputProps } from './Input';
```

### Type-Only Imports
```typescript
// Ensures types are erased at runtime
import type { User, Config } from './types';
import { validateUser } from './validators';
```

## Refactoring Checklist

When refactoring TypeScript code:

- [ ] Replace `any` with proper types
- [ ] Add explicit return types to exported functions
- [ ] Use `unknown` instead of `any` for truly unknown types
- [ ] Apply `readonly` to immutable data
- [ ] Use discriminated unions for state management
- [ ] Add proper error types
- [ ] Use const assertions for literal types
- [ ] Apply satisfies for validation with inference
- [ ] Extract common types to shared definitions
- [ ] Use type guards for runtime narrowing
