import { useState, useMemo } from 'react';
import { ENHANCED_CATALOG, CATEGORIES, getPrettySubcategoryName } from '@core/utils/constants';

/**
 * Hook personalizado para lógica del catálogo
 * Maneja filtros, ordenamiento y búsqueda de productos
 * 
 * @returns {Object} Estado y métodos del catálogo
 */
export const useCatalog = () => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedSubcategory, setSelectedSubcategory] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');

  // Get products for the current category
  const categoryProducts = useMemo(() => 
    ENHANCED_CATALOG.filter(p =>
      selectedCategory === 'todos' || p.category === selectedCategory
    ),
    [selectedCategory]
  );

  // Derive dynamic filters from products in the selected category
  const subcategories = useMemo(() => 
    ['todos', ...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))],
    [categoryProducts]
  );

  const sizes = useMemo(() => 
    ['todos', ...new Set(categoryProducts.flatMap(p => p.sizes || []).filter(Boolean))],
    [categoryProducts]
  );

  // Build categories list
  const categories = useMemo(() => [
    { id: 'todos', name: 'Todas las Categorías' },
    ...CATEGORIES.map(cat => ({ id: cat.id, name: cat.name }))
  ], []);

  // Apply filters
  const filteredProducts = useMemo(() => 
    categoryProducts.filter(product => {
      const subcategoryMatch = selectedSubcategory === 'todos' || product.subcategory === selectedSubcategory;
      const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
      return subcategoryMatch && sizeMatch;
    }),
    [categoryProducts, selectedSubcategory, selectedSize]
  );

  // Apply sorting
  const sortedProducts = useMemo(() => 
    [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    }),
    [filteredProducts, sortBy]
  );

  // Check if filters are active
  const hasActiveFilters = selectedCategory !== 'todos' || 
                           selectedSubcategory !== 'todos' || 
                           selectedSize !== 'todos';

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('todos');
    setSelectedSubcategory('todos');
    setSelectedSize('todos');
  };

  // Set category and reset subcategory
  const setCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('todos');
  };

  return {
    // State
    selectedCategory,
    selectedSubcategory,
    selectedSize,
    sortBy,
    
    // Derived data
    categories,
    subcategories,
    sizes,
    filteredProducts: sortedProducts,
    totalProducts: sortedProducts.length,
    hasActiveFilters,
    
    // Actions
    setCategory,
    setSelectedSubcategory,
    setSelectedSize,
    setSortBy,
    resetFilters,
    
    // Utils
    getPrettySubcategoryName,
  };
};

export default useCatalog;
