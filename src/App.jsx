import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@shared/contexts/ThemeContext';
import { CartProvider } from '@shared/contexts/CartContext';
import { ROUTES } from './router/routes';

const HomeView = lazy(() => import('@features/home/views/HomeView'));
const CategoryView = lazy(() => import('@features/categories/CategoryView'));
const CatalogView = lazy(() => import('@features/catalog/CatalogView'));
const WholesaleView = lazy(() => import('@features/wholesale/WholesaleView'));
const ProductDetailsView = lazy(() => import('@features/products/ProductDetailsView/index'));
const CheckoutView = lazy(() => import('@features/checkout/views/CheckoutPage'));
const OrderConfirmationView = lazy(() => import('@features/checkout/views/OrderConfirmationPage'));
const NotFoundPage = lazy(() => import('@features/checkout/views/NotFoundPage'));
const SearchRoutes = lazy(() => import('@features/search/SearchRoutes'));
const GuiaDescansoView = lazy(() => import('@features/guides/GuiaDescansoView'));
const SleepTestView = lazy(() => import('@features/sleep-test/SleepTestView'));

const MainLayout = lazy(() => import('@layouts/MainLayout'));
const ShoppingCart = lazy(() => import('@components/layout/ShoppingCart'));
const CartNotification = lazy(() => import('@components/ui/CartNotification'));
const Chatbot = lazy(() => import('@components/chatbot'));
const ScrollToTop = lazy(() => import('@components/common/ScrollToTop'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen bg-white dark:bg-black" />}>
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
                <Route path={ROUTES.CHECKOUT} element={<CheckoutView />} />
                <Route path={ROUTES.ORDER_CONFIRMATION} element={<OrderConfirmationView />} />
                <Route path={ROUTES.RETURN_POLICY} element={<ReturnPolicyView />} />
                <Route path={ROUTES.CONTACT} element={<ContactForm />} />
                <Route path={ROUTES.CONTACT_THANKS} element={<ContactThankYou />} />
                <Route path={ROUTES.GUIDES} element={<GuiaDescansoView />} />
                <Route path={ROUTES.SLEEP_TEST} element={<SleepTestView />} />
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
    </HelmetProvider>
  );
}

export default App;
