import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// UI Components
import ShoppingCart from '@/components/layout/ShoppingCart';
import CartNotification from '@/components/ui/CartNotification';
import Chatbot from '@/components/chatbot';
import { CartProvider } from '@/contexts/CartContext';

// Lazy load feature components for better performance
const HomeView = lazy(() => import('@features/home/views/HomeView'));
const CategoryView = lazy(() => import('@features/categories/CategoryView'));
const CatalogView = lazy(() => import('@features/catalog/CatalogView'));
const WholesaleView = lazy(() => import('@features/wholesale/WholesaleView'));
const ProductDetailsView = lazy(() => import('@features/products/ProductDetailsView'));
const ReturnPolicyView = lazy(() => import('@/components/common/ReturnPolicy'));
const OrderConfirmationPage = lazy(() => import('@/pages/OrderConfirmationPage'));

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/categorias/:categoryId" element={<CategoryView />} />
            <Route path="/colchones-resorte" element={<CategoryView categoryId="resorte" />} />
            <Route path="/colchones-espuma" element={<CategoryView categoryId="espuma" />} />
            <Route path="/dormitorio/:subId" element={<CategoryView categoryId="dormitorio" />} />
            <Route path="/catalogo" element={<CatalogView />} />
            <Route path="/venta-por-mayor" element={<WholesaleView />} />
            <Route path="/producto/:productId" element={<ProductDetailsView />} />
            <Route path="/confirmacion-pedido" element={<OrderConfirmationPage />} />
            <Route path="/politica-devoluciones" element={<ReturnPolicyView />} />
            <Route path="*" element={<HomeView />} />
          </Routes>
        </Suspense>
        <ShoppingCart />
        <CartNotification />
        <Chatbot />
      </Router>
    </CartProvider>
  );
}

export default App;