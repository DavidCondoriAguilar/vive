# Code Splitting Optimization Guide

## Overview

The project now uses **advanced code splitting** to improve initial load performance by breaking the bundle into smaller, more manageable chunks.

## Chunk Strategy

### Vendor Chunks (node_modules)

| Chunk Name | Contents | Purpose |
|------------|----------|---------|
| `vendor` | React, React DOM, React Router, etc. | Main vendor bundle |
| `pdf-vendor` | jsPDF library | Heavy PDF generation lib |
| `icons` | React Icons | Icon library |

### Feature Chunks (src/features)

| Chunk Name | Contents | Purpose |
|------------|----------|---------|
| `feature-checkout` | Checkout process | Heavy feature, lazy loaded |
| `feature-catalog` | Product catalog | Large product listing |
| `feature-products` | Product details | Product detail views |

### Automatic Chunks

Vite automatically creates chunks for:
- Home view (`HomeView-*.js`)
- Category views (`CategoryView-*.js`)
- Contact forms (`ContactForm-*.js`)
- Other routes

## Benefits

### Before Optimization
- **Total bundle**: ~470 KB (gzipped: 135 KB)
- **Initial load**: Single large bundle
- **Caching**: Poor (any change invalidates entire bundle)

### After Optimization
- **Total bundle**: ~462 KB (gzipped: 134 KB)
- **Initial load**: Smaller entry chunk + lazy loaded features
- **Caching**: Better (vendor chunks cached separately)

## How It Works

### 1. Vendor Separation
```javascript
// node_modules code goes to vendor chunks
if (id.includes('/node_modules/')) {
  if (id.includes('/jspdf/')) return 'pdf-vendor';
  if (id.includes('/react-icons/')) return 'icons';
  return 'vendor';
}
```

### 2. Feature Extraction
```javascript
// Heavy features get their own chunks
if (id.includes('/src/features/checkout/')) {
  return 'feature-checkout';
}
```

### 3. Automatic Splitting
Vite automatically splits:
- Route-based code (via `lazy()`)
- Dynamic imports
- Shared dependencies

## Configuration

Located in `vite.config.js`:

```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: (id) => {
        // Custom chunk logic
      },
      entryFileNames: 'assets/[name]-[hash].js',
      chunkFileNames: 'assets/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash][extname]',
    },
  },
  chunkSizeWarningLimit: 1500,
  target: 'esnext',
  cssCodeSplit: true,
}
```

## Best Practices

### ✅ DO
- Use `lazy()` for route components
- Keep features modular and independent
- Let Vite handle automatic splitting for most code
- Extract only heavy features manually

### ❌ DON'T
- Create too many manual chunks (causes circular deps)
- Split small components (overhead > benefit)
- Import heavy libs in entry components
- Mix feature code arbitrarily

## Monitoring

### Check Bundle Size
```bash
npm run build
npm run build:analyze  # If configured
```

### Check Chunk Loading
1. Open DevTools → Network tab
2. Filter by JS
3. Navigate app
4. Observe chunks loading on demand

### Performance Metrics
- **First Contentful Paint (FCP)**: Should improve
- **Time to Interactive (TTI)**: Should improve
- **Total Blocking Time (TBT)**: Should decrease

## Troubleshooting

### Circular Chunk Warnings
**Problem**: `Circular chunk: A -> B -> A`

**Solution**: Simplify manualChunks logic, let Vite handle more automatically

### Large Entry Chunk
**Problem**: Entry chunk > 200KB

**Solution**: 
1. Check what's imported in `main.jsx` and `App.jsx`
2. Move heavy imports to lazy-loaded components
3. Extract more vendor libs

### Missing Chunks
**Problem**: 404 errors for chunks

**Solution**:
1. Check `base` path in `vite.config.js`
2. Verify deployment uploaded all assets
3. Clear CDN cache

## Future Optimizations

### Potential Improvements
1. **Route-based prefetching**: Prefetch chunks on hover
2. **Service Worker**: Cache chunks for offline
3. **Image lazy loading**: Already implemented
4. **Webpack Bundle Analyzer**: Visualize chunk composition

### Advanced Techniques
```javascript
// Prefetch on hover
<Link 
  to="/checkout" 
  onMouseEnter={() => import('@features/checkout')}
>
  Checkout
</Link>

// Preload critical chunks
<link rel="modulepreload" href="/assets/feature-checkout-abc123.js">
```

## Migration Notes

### If You Need to Revert
```javascript
// Simple config (no manual chunks)
build: {
  rollupOptions: {
    output: {
      // Let Vite handle everything
    },
  },
}
```

### Adding New Features
New features are automatically split. For heavy features (>100KB), add to manualChunks:

```javascript
if (id.includes('/src/features/new-heavy-feature/')) {
  return 'feature-new-heavy';
}
```

## Resources

- [Vite Code Splitting Guide](https://vitejs.dev/guide/build.html#code-splitting)
- [Rollup manualChunks](https://rollupjs.org/configuration-options/#output-manualchunks)
- [Web Dev Code Splitting](https://web.dev/code-splitting/)
