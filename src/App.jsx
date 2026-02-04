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

import ScrollToTop from '@/components/common/ScrollToTop';

import { ThemeProvider } from '@/contexts/ThemeContext';

import { ROUTES } from '@/router/routes';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<div />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.INICIO} replace />} />
              <Route path={ROUTES.INICIO} element={<HomeView />} />
              <Route path={ROUTES.CATEGORY} element={<CategoryView />} />
              <Route path={ROUTES.RESORTE} element={<CategoryView />} />
              <Route path={ROUTES.ESPUMA} element={<CategoryView />} />
              <Route path={ROUTES.DORMITORIO_SUB} element={<CategoryView />} />
              <Route path={ROUTES.CATALOG} element={<CatalogView />} />
              <Route path={ROUTES.WHOLESALE} element={<WholesaleView />} />
              <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailsView />} />
              <Route path={ROUTES.ORDER_CONFIRMATION} element={<OrderConfirmationPage />} />
              <Route path={ROUTES.RETURN_POLICY} element={<ReturnPolicyView />} />
              <Route path={ROUTES.CONTACT} element={<ContactForm />} />
              <Route path={ROUTES.CONTACT_THANKS} element={<ContactThankYou />} />
              <Route path={ROUTES.SEARCH} element={<SearchRoutes />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <ShoppingCart />
          <CartNotification />
          <Chatbot />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;