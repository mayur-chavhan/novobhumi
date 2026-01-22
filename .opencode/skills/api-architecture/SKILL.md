---
name: api-architecture
description: Backend API architecture patterns for Express and Node.js applications. Use when refactoring backend code, improving API design, or restructuring Express applications.
license: MIT
compatibility: opencode
metadata:
  source: adapted from wshobson/agents
  category: backend
---

# API Architecture Patterns

## Overview

This skill provides patterns for building well-structured, maintainable Express APIs.

## Project Structure

### Layered Architecture
```
backend/
├── src/
│   ├── index.ts              # Entry point
│   ├── app.ts                # Express app setup
│   ├── config/               # Configuration
│   │   ├── index.ts
│   │   └── database.ts
│   ├── routes/               # Route definitions
│   │   ├── index.ts
│   │   ├── users.ts
│   │   └── products.ts
│   ├── controllers/          # Request handlers
│   │   ├── userController.ts
│   │   └── productController.ts
│   ├── services/             # Business logic
│   │   ├── userService.ts
│   │   └── productService.ts
│   ├── repositories/         # Data access
│   │   ├── userRepository.ts
│   │   └── productRepository.ts
│   ├── middleware/           # Express middleware
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   ├── validators/           # Input validation schemas
│   │   └── userValidator.ts
│   ├── types/                # TypeScript types
│   │   └── index.ts
│   └── utils/                # Helper functions
│       └── errors.ts
```

## Controller Pattern

### Clean Controller Structure
```typescript
// controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/userService';
import { AppError } from '../utils/errors';

export const userController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.findAll();
      res.json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await userService.findById(id);
      
      if (!user) {
        throw new AppError('User not found', 404);
      }
      
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.create(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await userService.update(id, req.body);
      
      if (!user) {
        throw new AppError('User not found', 404);
      }
      
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await userService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};
```

## Service Pattern

### Business Logic Layer
```typescript
// services/userService.ts
import { userRepository } from '../repositories/userRepository';
import { CreateUserDTO, UpdateUserDTO } from '../types';
import { AppError } from '../utils/errors';
import bcrypt from 'bcrypt';

export const userService = {
  async findAll() {
    return userRepository.findAll();
  },

  async findById(id: string) {
    return userRepository.findById(id);
  },

  async findByEmail(email: string) {
    return userRepository.findByEmail(email);
  },

  async create(data: CreateUserDTO) {
    // Check if email exists
    const existing = await this.findByEmail(data.email);
    if (existing) {
      throw new AppError('Email already in use', 400);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return userRepository.create({
      ...data,
      password: hashedPassword,
    });
  },

  async update(id: string, data: UpdateUserDTO) {
    const user = await this.findById(id);
    if (!user) {
      return null;
    }

    // If updating email, check uniqueness
    if (data.email && data.email !== user.email) {
      const existing = await this.findByEmail(data.email);
      if (existing) {
        throw new AppError('Email already in use', 400);
      }
    }

    // If updating password, hash it
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return userRepository.update(id, data);
  },

  async delete(id: string) {
    return userRepository.delete(id);
  },
};
```

## Repository Pattern

### Prisma Repository
```typescript
// repositories/userRepository.ts
import { prisma } from '../config/database';
import { CreateUserDTO, UpdateUserDTO } from '../types';

export const userRepository = {
  async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        // Exclude password
      },
    });
  },

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  },

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  async create(data: CreateUserDTO) {
    return prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  },

  async update(id: string, data: UpdateUserDTO) {
    return prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  },

  async delete(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
```

## Error Handling

### Custom Error Classes
```typescript
// utils/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, public errors: Record<string, string[]> = {}) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
    this.name = 'UnauthorizedError';
  }
}
```

### Error Handler Middleware
```typescript
// middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { AppError, ValidationError } from '../utils/errors';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', err);

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Prisma errors
  if (err.name === 'PrismaClientKnownRequestError') {
    return res.status(400).json({
      success: false,
      message: 'Database operation failed',
    });
  }

  // Unknown errors
  return res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message,
  });
}
```

## Input Validation

### Validation Middleware with Zod
```typescript
// validators/userValidator.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const updateUserSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  password: z.string().min(8).optional(),
  name: z.string().min(2).optional(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;

// middleware/validation.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { ValidationError } from '../utils/errors';

export function validate(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    
    if (!result.success) {
      const errors: Record<string, string[]> = {};
      result.error.errors.forEach(err => {
        const path = err.path.join('.');
        if (!errors[path]) errors[path] = [];
        errors[path].push(err.message);
      });
      
      throw new ValidationError('Validation failed', errors);
    }
    
    req.body = result.data;
    next();
  };
}
```

## Authentication Middleware

```typescript
// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../utils/errors';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const session = req.session as any;
  
  if (!session?.user) {
    throw new UnauthorizedError('Authentication required');
  }
  
  req.user = session.user;
  next();
}

export function requireAdmin(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.user?.isAdmin) {
    throw new UnauthorizedError('Admin access required');
  }
  next();
}
```

## Route Organization

```typescript
// routes/users.ts
import { Router } from 'express';
import { userController } from '../controllers/userController';
import { validate } from '../middleware/validation';
import { requireAuth, requireAdmin } from '../middleware/auth';
import { createUserSchema, updateUserSchema } from '../validators/userValidator';

const router = Router();

router.get('/', requireAuth, requireAdmin, userController.getAll);
router.get('/:id', requireAuth, userController.getById);
router.post('/', validate(createUserSchema), userController.create);
router.patch('/:id', requireAuth, validate(updateUserSchema), userController.update);
router.delete('/:id', requireAuth, requireAdmin, userController.delete);

export default router;

// routes/index.ts
import { Router } from 'express';
import userRoutes from './users';
import authRoutes from './auth';
import configRoutes from './config';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/config', configRoutes);

export default router;
```

## Refactoring Checklist

When refactoring Express APIs:

- [ ] Separate routes, controllers, services, and repositories
- [ ] Implement consistent error handling
- [ ] Add input validation on all endpoints
- [ ] Use proper HTTP status codes
- [ ] Implement authentication middleware
- [ ] Add request logging
- [ ] Handle async errors properly
- [ ] Use environment variables for config
- [ ] Add TypeScript types for all DTOs
- [ ] Implement rate limiting
- [ ] Add request timeout handling
- [ ] Document API with OpenAPI/Swagger
