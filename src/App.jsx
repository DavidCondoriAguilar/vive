import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// UI Components
import ShoppingCart from '@/components/layout/ShoppingCart';
import CartNotification from '@/components/ui/CartNotification';
import { CartProvider } from '@/contexts/CartContext';

// Lazy load feature components for better performance
const HomeView = lazy(() => import('@features/home/views/HomeView'));
const CategoryView = lazy(() => import('@features/categories/CategoryView'));
const CatalogView = lazy(() => import('@features/catalog/CatalogView'));
const WholesaleView = lazy(() => import('@features/wholesale/WholesaleView'));
const ProductDetailsView = lazy(() => import('@features/products/ProductDetailsView'));
const ReturnPolicyView = lazy(() => import('@/components/common/ReturnPolicy'));

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <Suspense fallback={<div />}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/categorias/:categoryId" element={<CategoryView />} />
              <Route path="/catalogo" element={<CatalogView />} />
              <Route path="/venta-por-mayor" element={<WholesaleView />} />
              <Route path="/producto/:productId" element={<ProductDetailsView />} />
              <Route path="/politica-devoluciones" element={<ReturnPolicyView />} />
              <Route path="*" element={<HomeView />} />
            </Routes>
          </Suspense>
          <ShoppingCart />
          <CartNotification />
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;