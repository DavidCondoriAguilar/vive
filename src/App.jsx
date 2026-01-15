import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '@features/home/HomeView';
import CategoryView from '@features/categories/CategoryView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categorias/:categoryId" element={<CategoryView />} />
        <Route path="/ofertas" element={<CategoryView />} />

        {/* Fallback to Home or a 404 could go here */}
        <Route path="*" element={<HomeView />} />
      </Routes>
    </Router>
  );
}

export default App;
