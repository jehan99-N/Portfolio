# Portfolio Development Handbook

## Project Overview

This is a modern, production-ready portfolio website built with Next.js featuring:
- Server-Side Rendering (SSR) for optimal SEO
- Incremental Static Regeneration (ISR)
- TypeScript for type safety
- Tailwind CSS for styling
- Mobile-responsive design
- Performance optimized

## Development Workflow

### 1. Local Development

```bash
npm run dev
```

This starts the development server at `http://localhost:3000` with:
- Hot module reloading
- Source maps for debugging
- CSS hot reload

### 2. File Structure Best Practices

```
app/              - Next.js app directory (routing, layouts)
components/       - React components (reusable UI)
data/            - Static data and constants
config/          - Configuration files
styles/          - Global and component styles
public/          - Static files (images, fonts)
```

### 3. Adding New Pages

Create a new file in `app/` directory:

```typescript
// app/blog/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Jehan Portfolio',
  description: 'My blog posts and insights',
};

export default function BlogPage() {
  return (
    <div>
      {/* Your content */}
    </div>
  );
}
```

### 4. Creating New Components

```typescript
// components/MyComponent.tsx
'use client';

interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### 5. Styling Guidelines

Use Tailwind CSS classes:

```typescript
// ✓ Good
<div className="bg-primary text-white p-4 rounded-lg">Content</div>

// ✗ Avoid
<div style={{backgroundColor: '#1e40af', color: 'white', ...}}>Content</div>
```

## Performance Optimization

### Image Optimization

Always use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
  priority
/>
```

### Code Splitting

Components are automatically code-split. Use dynamic imports for large components:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
```

### CSS Optimization

- Global CSS in `styles/globals.css`
- Component styles with Tailwind
- Avoid CSS-in-JS for performance

## Testing

For testing components:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Create test files alongside components:

```typescript
// components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Type Safety

Always use TypeScript interfaces:

```typescript
interface Experience {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}
```

## Environment Variables

Variables in `.env.local` are available:
- Client-side: Prefix with `NEXT_PUBLIC_`
- Server-side: No prefix required

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://example.com
SECRET_API_KEY=xxx
```

Access in code:

```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL; // ✓ In components
const apiKey = process.env.SECRET_API_KEY; // ✓ In server-only files
```

## Common Tasks

### Update Portfolio Data

Edit `data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    // ... other properties
  },
  // ... other sections
};
```

### Add New Section

1. Create component in `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add styling with Tailwind
4. Update SEO metadata if needed

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

## Debugging

### Enable Debug Logs

```typescript
// In development, use console methods
console.log('Value:', variable);
console.error('Error:', error);
console.warn('Warning:', message);
```

### React DevTools

1. Install React DevTools browser extension
2. Open browser DevTools
3. Go to Components/Profiler tab

## Performance Metrics

Check Core Web Vitals:
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

Use PageSpeed Insights: https://pagespeed.web.dev/

## SEO Checklist

- [ ] Meta title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Heading hierarchy (h1, h2, h3...)
- [ ] Alt text for images
- [ ] Internal linking
- [ ] Mobile responsive
- [ ] Fast loading time
- [ ] Structured data (JSON-LD)

## Common Issues & Solutions

### Issue: Components not updating
**Solution**: Check if `'use client'` directive is needed for interactive components

### Issue: Build failing
**Solution**: Run `npm run build` locally, check for TypeScript errors

### Issue: Slow build
**Solution**: Check for large dependencies, optimize imports

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/your-feature

# Create pull request on GitHub
```

## Continuous Integration

GitHub Actions automatically:
1. Installs dependencies
2. Runs linting
3. Builds the project
4. Deploys to production

---

For questions or issues, refer to the README or contact support.
