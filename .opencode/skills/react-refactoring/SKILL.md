---
name: react-refactoring
description: React component refactoring patterns for improving code structure, performance, and maintainability. Use when refactoring React components, optimizing performance, or restructuring component hierarchy.
license: MIT
compatibility: opencode
metadata:
  source: adapted from wshobson/agents
  category: frontend
---

# React Refactoring Patterns

## Overview

This skill provides patterns for refactoring React applications to improve structure, performance, and maintainability.

## Component Decomposition

### Extract Subcomponents
```typescript
// Before: Monolithic component
function ProductPage() {
  return (
    <div>
      <header>
        <img src={product.image} />
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </header>
      <section>
        <h2>Description</h2>
        <p>{product.description}</p>
      </section>
      <section>
        <h2>Reviews</h2>
        {reviews.map(r => (
          <div key={r.id}>
            <strong>{r.author}</strong>
            <p>{r.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

// After: Decomposed components
function ProductPage() {
  return (
    <div>
      <ProductHeader product={product} />
      <ProductDescription description={product.description} />
      <ProductReviews reviews={reviews} />
    </div>
  );
}

function ProductHeader({ product }: { product: Product }) {
  return (
    <header>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </header>
  );
}
```

### Compound Components
```typescript
// Compound component pattern for flexible composition
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function Tabs({ children, defaultTab }: { children: ReactNode; defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabList({ children }: { children: ReactNode }) {
  return <div className="tab-list">{children}</div>;
};

Tabs.Tab = function Tab({ id, children }: { id: string; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');
  
  return (
    <button
      className={context.activeTab === id ? 'active' : ''}
      onClick={() => context.setActiveTab(id)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used within Tabs');
  
  return context.activeTab === id ? <div>{children}</div> : null;
};

// Usage
<Tabs defaultTab="overview">
  <Tabs.List>
    <Tabs.Tab id="overview">Overview</Tabs.Tab>
    <Tabs.Tab id="details">Details</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="overview">Overview content</Tabs.Panel>
  <Tabs.Panel id="details">Details content</Tabs.Panel>
</Tabs>
```

## Custom Hooks Extraction

### Extract Logic to Hooks
```typescript
// Before: Logic mixed in component
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchUser()
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;
  return <Profile user={user} />;
}

// After: Logic extracted to hook
function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    
    fetchUser()
      .then(data => {
        if (!cancelled) setUser(data);
      })
      .catch(err => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { user, loading, error };
}

function UserProfile() {
  const { user, loading, error } = useUser();
  
  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;
  return <Profile user={user} />;
}
```

### Reusable Hook Patterns
```typescript
// Toggle hook
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse };
}

// Debounced value hook
function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Previous value hook
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

## Performance Optimization

### Memoization
```typescript
// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return items.reduce((acc, item) => acc + computeExpensive(item), 0);
}, [items]);

// Memoize callbacks
const handleClick = useCallback((id: string) => {
  onSelect(id);
}, [onSelect]);

// Memoize components
const MemoizedList = memo(function List({ items }: { items: Item[] }) {
  return items.map(item => <ListItem key={item.id} item={item} />);
});
```

### Virtualization
```typescript
// For long lists, use virtualization
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: virtualItem.start,
              height: virtualItem.size,
            }}
          >
            <ListItem item={items[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Code Splitting
```typescript
// Lazy load routes/components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

## State Management Refactoring

### Lift State Up
```typescript
// Before: Sibling components can't share state
function ParentComponent() {
  return (
    <>
      <FilterComponent /> {/* Has filter state */}
      <ListComponent />   {/* Needs filter state */}
    </>
  );
}

// After: State lifted to parent
function ParentComponent() {
  const [filter, setFilter] = useState('');
  
  return (
    <>
      <FilterComponent filter={filter} onFilterChange={setFilter} />
      <ListComponent filter={filter} />
    </>
  );
}
```

### Use Reducer for Complex State
```typescript
// Before: Multiple related useState calls
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // ... more state
}

// After: Single reducer
type FormState = {
  values: { name: string; email: string };
  errors: Record<string, string>;
  isSubmitting: boolean;
};

type FormAction =
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_ERRORS'; errors: Record<string, string> }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_END' };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, values: { ...state.values, [action.field]: action.value } };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SUBMIT_START':
      return { ...state, isSubmitting: true };
    case 'SUBMIT_END':
      return { ...state, isSubmitting: false };
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  // ... cleaner component
}
```

## Prop Patterns

### Props Spreading
```typescript
// Polymorphic component with proper typing
type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  variant?: 'primary' | 'secondary';
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? 'button';
  return (
    <Component
      className={`btn btn-${variant} ${className ?? ''}`}
      {...props}
    />
  );
}

// Usage
<Button variant="primary">Click</Button>
<Button as="a" href="/page">Link</Button>
```

## Refactoring Checklist

When refactoring React components:

- [ ] Extract components larger than 150 lines
- [ ] Move business logic to custom hooks
- [ ] Replace prop drilling with Context (when appropriate)
- [ ] Add proper TypeScript types to all props
- [ ] Memoize expensive calculations with useMemo
- [ ] Memoize callbacks passed to children with useCallback
- [ ] Use React.memo for pure components in lists
- [ ] Implement error boundaries for critical sections
- [ ] Add Suspense boundaries for lazy-loaded components
- [ ] Use proper keys in lists (not index)
- [ ] Clean up effects with proper dependencies
- [ ] Handle loading and error states consistently
