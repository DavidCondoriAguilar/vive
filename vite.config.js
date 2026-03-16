import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  // Base URL for production deployment (use '/' for main domain, '/subdirectory/' for subdirectories)
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/core'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@features': path.resolve(__dirname, './src/features'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    // Code splitting and chunk optimization
    rollupOptions: {
      // Tree shaking
      treeshake: true,
      // Module concatenation
      moduleContext: {},
      output: {
        // Advanced code splitting strategy - simplified to avoid circular deps
        manualChunks: (id) => {
          // Vendor chunks - separate by library
          if (id.includes('/node_modules/')) {
            // jsPDF for PDF generation - separate heavy lib
            if (id.includes('/node_modules/jspdf/')) {
              return 'pdf-vendor';
            }
            // React Icons - separate for caching
            if (id.includes('/node_modules/react-icons/')) {
              return 'icons';
            }
            // Everything else from node_modules (including React)
            return 'vendor';
          }
          
          // Source code - let Vite handle automatic splitting
          // Only extract heavy features
          if (id.includes('/src/features/checkout/')) {
            return 'feature-checkout';
          }
          if (id.includes('/src/features/catalog/')) {
            return 'feature-catalog';
          }
          if (id.includes('/src/features/products/')) {
            return 'feature-products';
          }
        },
        // Chunk naming pattern
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1500,
    // Enable source maps for production debugging
    sourcemap: false,
    // Minify for smaller bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Additional optimizations
        pure_funcs: ['console.info', 'console.debug'],
        // Remove dead code
        dead_code: true,
        // Inline simple functions
        inline: 3,
      },
      // Format options
      format: {
        comments: false, // Remove license comments
      },
    },
    // Build performance
    target: 'esnext',
    cssCodeSplit: true,
  },
  // Preload critical resources
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
    // Exclude heavy libs from pre-bundling
    exclude: ['jspdf'],
  },
  // Server optimizations for development
  server: {
    // Warm up frequently used modules
    warmup: {
      clientFiles: [
        './src/main.jsx',
        './src/App.jsx',
        './src/features/home/*',
        './src/components/layout/*',
      ],
    },
  },
})
