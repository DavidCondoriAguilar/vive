import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '@features/home/views/HomeView';
import CategoryView from '@features/categories/CategoryView';
import BlogView from '@features/blog/BlogView';
import ProductDetailsView from '@features/products/ProductDetailsView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categorias/:categoryId" element={<CategoryView />} />
        <Route path="/producto/:productId" element={<ProductDetailsView />} />
        <Route path="/ofertas" element={<CategoryView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/blog/:postId" element={<BlogView />} />

        {/* Fallback to Home or a 404 could go here */}
        <Route path="*" element={<HomeView />} />
      </Routes>
    </Router>
  );
}

export default App;
