import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResultsView from '@/features/search/SearchResultsView';

const SearchRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchResultsView />} />
      <Route path="/:q" element={<SearchResultsView />} />
    </Routes>
  );
};

export default SearchRoutes;
