import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
const ContactForm = lazy(() => import('@/components/contact/ContactForm'));
const ContactThankYou = lazy(() => import('@/components/contact/ContactThankYou'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SearchRoutes = lazy(() => import('@/router/SearchRoutes'));

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<HomeView />} />
            <Route path="/categorias/:categoryId" element={<CategoryView />} />
            <Route path="/colchones-resorte" element={<CategoryView />} />
            <Route path="/colchones-espuma" element={<CategoryView />} />
            <Route path="/dormitorio/:subId" element={<CategoryView />} />
            <Route path="/catalogo" element={<CatalogView />} />
            <Route path="/venta-por-mayor" element={<WholesaleView />} />
            <Route path="/producto/:productId" element={<ProductDetailsView />} />
            <Route path="/confirmacion-pedido" element={<OrderConfirmationPage />} />
            <Route path="/politica-devoluciones" element={<ReturnPolicyView />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/contacto/gracias" element={<ContactThankYou />} />
            <Route path="/busqueda" element={<SearchRoutes />} />
            <Route path="*" element={<NotFoundPage />} />
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