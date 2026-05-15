import { useState, useMemo } from 'react';
import { ENHANCED_CATALOG, CATEGORIES, getPrettySubcategoryName } from '@core/utils/constants';

const SUB_TO_SEGMENT = {
  'Económica': 'economico',
  'Intermedia': 'intermedio',
  'Diamont': 'premium',
  'Colchones-Hoteleros': 'institucional',
};

// User specific product mapping
const PRODUCT_NAME_TO_SEGMENT = {
  'enna': 'economico',
  'itta': 'economico',
  'kasse': 'economico',
  'vanora ss': 'intermedio',
  'gea': 'intermedio',
  'vanora pt': 'intermedio',
  'vanora mp pt': 'intermedio',
  'ventto': 'premium',
  'kae': 'premium',
  'kai': 'premium',
};

const PRODUCT_NAME_TO_WARRANTY = {
  'buen descanso': '1 año garantía',
  'extra descanso': '3 años',
  'hotelero': '5 años',
};

export const SEGMENTS = [
  { id: 'todos', label: 'Todos los Modelos' },
  { id: 'economico', label: 'Económicos' },
  { id: 'intermedio', label: 'Intermedio' },
  { id: 'premium', label: 'Premium' },
  { id: 'institucional', label: 'Institucional' },
];

export function getProductSegment(product) {
  const name = product.name.toLowerCase();
  
  // Try explicit name mapping first
  for (const [key, segment] of Object.entries(PRODUCT_NAME_TO_SEGMENT)) {
    if (name.includes(key)) return segment;
  }
  
  // Fallback to subcategory mapping
  if (SUB_TO_SEGMENT[product.subcategory]) return SUB_TO_SEGMENT[product.subcategory];
  
  return 'complementos';
}

export function getWarrantyLabel(product) {
  const name = product.name.toLowerCase();
  
  // Try explicit name mapping first
  for (const [key, label] of Object.entries(PRODUCT_NAME_TO_WARRANTY)) {
    if (name.includes(key)) return label;
  }
  
  // Fallback to product warranty field
  return product.warranty || product.especificaciones?.Garantía || null;
}

export function getWarrantyYears(product) {
  const label = getWarrantyLabel(product);
  if (!label) return null;
  const match = label.match(/(\d+)\s*años/);
  return match ? parseInt(match[1]) : null;
}

export const useCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedSubcategory, setSelectedSubcategory] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [selectedSegment, setSelectedSegment] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');

  const categoryProducts = useMemo(() =>
    ENHANCED_CATALOG.filter(p =>
      selectedCategory === 'todos' || p.category === selectedCategory
    ),
    [selectedCategory]
  );

  const subcategories = useMemo(() =>
    ['todos', ...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))],
    [categoryProducts]
  );

  const sizes = useMemo(() =>
    ['todos', ...new Set(categoryProducts.flatMap(p => p.sizes || []).filter(Boolean))],
    [categoryProducts]
  );

  const categories = useMemo(() => [
    { id: 'todos', name: 'Todas las Categorías' },
    ...CATEGORIES.map(cat => ({ id: cat.id, name: cat.name }))
  ], []);

  const filteredProducts = useMemo(() =>
    categoryProducts.filter(product => {
      const subcategoryMatch = selectedSubcategory === 'todos' || product.subcategory === selectedSubcategory;
      const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
      const segmentMatch = selectedSegment === 'todos' || getProductSegment(product) === selectedSegment;
      return subcategoryMatch && sizeMatch && segmentMatch;
    }),
    [categoryProducts, selectedSubcategory, selectedSize, selectedSegment]
  );

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

  const hasActiveFilters = selectedCategory !== 'todos' ||
                           selectedSubcategory !== 'todos' ||
                           selectedSize !== 'todos' ||
                           selectedSegment !== 'todos';

  const resetFilters = () => {
    setSelectedCategory('todos');
    setSelectedSubcategory('todos');
    setSelectedSize('todos');
    setSelectedSegment('todos');
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('todos');
  };

  return {
    selectedCategory,
    selectedSubcategory,
    selectedSize,
    selectedSegment,
    sortBy,
    categories,
    subcategories,
    sizes,
    categoryProducts,
    segments: SEGMENTS,
    filteredProducts: sortedProducts,
    totalProducts: sortedProducts.length,
    hasActiveFilters,
    setCategory,
    setSelectedSubcategory,
    setSelectedSize,
    setSelectedSegment,
    setSortBy,
    resetFilters,
    getPrettySubcategoryName,
    getProductSegment,
    getWarrantyLabel,
    getWarrantyYears,
  };
};

export default useCatalog;
