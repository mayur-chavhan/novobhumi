---
name: prisma-patterns
description: Prisma ORM patterns for database operations, migrations, and query optimization. Use when working with Prisma, refactoring database code, or optimizing queries.
license: MIT
compatibility: opencode
metadata:
  source: adapted from wshobson/agents
  category: database
---

# Prisma Patterns

## Overview

This skill provides patterns for working effectively with Prisma ORM in TypeScript applications.

## Database Client Setup

### Singleton Pattern
```typescript
// config/database.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
```

## Query Patterns

### Efficient Includes
```typescript
// Bad: Over-fetching with deep includes
const user = await prisma.user.findUnique({
  where: { id },
  include: {
    posts: {
      include: {
        comments: {
          include: {
            author: true,
          },
        },
      },
    },
  },
});

// Good: Select only what you need
const user = await prisma.user.findUnique({
  where: { id },
  select: {
    id: true,
    name: true,
    email: true,
    posts: {
      select: {
        id: true,
        title: true,
        _count: {
          select: { comments: true },
        },
      },
      take: 10,
      orderBy: { createdAt: 'desc' },
    },
  },
});
```

### Pagination
```typescript
// Offset-based pagination
async function getPaginatedUsers(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.user.count(),
  ]);

  return {
    data: users,
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  };
}

// Cursor-based pagination (more efficient for large datasets)
async function getCursorPaginatedUsers(cursor?: string, limit = 10) {
  const users = await prisma.user.findMany({
    take: limit + 1, // Fetch one extra to check if there's more
    ...(cursor && {
      cursor: { id: cursor },
      skip: 1, // Skip the cursor itself
    }),
    orderBy: { id: 'asc' },
  });

  const hasMore = users.length > limit;
  const data = hasMore ? users.slice(0, -1) : users;
  const nextCursor = hasMore ? data[data.length - 1].id : null;

  return { data, nextCursor, hasMore };
}
```

### Filtering
```typescript
interface UserFilters {
  search?: string;
  role?: string;
  isActive?: boolean;
  createdAfter?: Date;
}

async function getFilteredUsers(filters: UserFilters) {
  const where: Prisma.UserWhereInput = {};

  if (filters.search) {
    where.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { email: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  if (filters.role) {
    where.role = filters.role;
  }

  if (filters.isActive !== undefined) {
    where.isActive = filters.isActive;
  }

  if (filters.createdAfter) {
    where.createdAt = { gte: filters.createdAfter };
  }

  return prisma.user.findMany({ where });
}
```

## Transaction Patterns

### Interactive Transactions
```typescript
async function transferCredits(fromId: string, toId: string, amount: number) {
  return prisma.$transaction(async (tx) => {
    // Deduct from sender
    const sender = await tx.user.update({
      where: { id: fromId },
      data: { credits: { decrement: amount } },
    });

    if (sender.credits < 0) {
      throw new Error('Insufficient credits');
    }

    // Add to receiver
    await tx.user.update({
      where: { id: toId },
      data: { credits: { increment: amount } },
    });

    // Log transaction
    return tx.creditTransaction.create({
      data: {
        fromId,
        toId,
        amount,
        timestamp: new Date(),
      },
    });
  });
}
```

### Batch Operations
```typescript
// Batch updates
async function archiveOldPosts(beforeDate: Date) {
  return prisma.post.updateMany({
    where: {
      createdAt: { lt: beforeDate },
      isArchived: false,
    },
    data: { isArchived: true },
  });
}

// Upsert many
async function upsertProducts(products: Product[]) {
  return prisma.$transaction(
    products.map(product =>
      prisma.product.upsert({
        where: { sku: product.sku },
        create: product,
        update: product,
      })
    )
  );
}
```

## Soft Delete Pattern

### Schema
```prisma
model User {
  id        String    @id @default(cuid())
  email     String    @unique
  name      String
  deletedAt DateTime?
  
  @@index([deletedAt])
}
```

### Middleware
```typescript
// Soft delete middleware
prisma.$use(async (params, next) => {
  // Intercept delete operations
  if (params.model === 'User') {
    if (params.action === 'delete') {
      params.action = 'update';
      params.args.data = { deletedAt: new Date() };
    }
    if (params.action === 'deleteMany') {
      params.action = 'updateMany';
      params.args.data = { deletedAt: new Date() };
    }
  }
  return next(params);
});

// Filter out soft-deleted records
prisma.$use(async (params, next) => {
  if (params.model === 'User') {
    if (['findFirst', 'findMany', 'findUnique'].includes(params.action)) {
      if (!params.args) params.args = {};
      if (!params.args.where) params.args.where = {};
      params.args.where.deletedAt = null;
    }
  }
  return next(params);
});
```

## Computed Fields

### Using Extensions
```typescript
const prisma = new PrismaClient().$extends({
  result: {
    user: {
      fullName: {
        needs: { firstName: true, lastName: true },
        compute(user) {
          return `${user.firstName} ${user.lastName}`;
        },
      },
    },
    post: {
      excerpt: {
        needs: { content: true },
        compute(post) {
          return post.content.slice(0, 100) + '...';
        },
      },
    },
  },
});
```

## Raw Queries

### When to Use
```typescript
// Complex aggregations
const stats = await prisma.$queryRaw<{ month: Date; count: bigint }[]>`
  SELECT 
    DATE_TRUNC('month', "createdAt") as month,
    COUNT(*) as count
  FROM "Post"
  WHERE "createdAt" > ${startDate}
  GROUP BY DATE_TRUNC('month', "createdAt")
  ORDER BY month
`;

// Full-text search
const results = await prisma.$queryRaw`
  SELECT * FROM "Post"
  WHERE to_tsvector('english', title || ' ' || content) 
    @@ plainto_tsquery('english', ${searchTerm})
`;
```

## Migration Patterns

### Safe Migrations
```bash
# Development: Push schema changes
npx prisma db push

# Production: Create and apply migrations
npx prisma migrate dev --name add_user_role
npx prisma migrate deploy
```

### Data Migrations
```typescript
// prisma/migrations/20240101000000_add_default_roles/migration.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Add default role to existing users
  await prisma.user.updateMany({
    where: { role: null },
    data: { role: 'user' },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

## Performance Tips

### Indexing
```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  authorId  String
  status    String
  createdAt DateTime @default(now())
  
  author User @relation(fields: [authorId], references: [id])
  
  @@index([authorId])
  @@index([status])
  @@index([createdAt])
  @@index([authorId, status]) // Composite index for common queries
}
```

### Query Optimization
```typescript
// Use count for existence checks
const exists = await prisma.user.count({
  where: { email },
}) > 0;

// Use findFirst instead of findMany when you only need one
const firstActive = await prisma.user.findFirst({
  where: { isActive: true },
});

// Parallel queries
const [users, posts, comments] = await Promise.all([
  prisma.user.count(),
  prisma.post.count(),
  prisma.comment.count(),
]);
```

## Refactoring Checklist

When refactoring Prisma code:

- [ ] Use select to limit returned fields
- [ ] Add pagination to all list queries
- [ ] Use transactions for multi-step operations
- [ ] Add proper indexes for filtered/sorted columns
- [ ] Implement soft delete for recoverable data
- [ ] Use cursor-based pagination for large datasets
- [ ] Handle Prisma errors appropriately
- [ ] Use raw queries for complex SQL only
- [ ] Keep migrations small and reversible
- [ ] Log slow queries in development
