/**
 * Chatbot Catalog Integration
 * Connects chatbot with real product data for accurate responses
 */

import { ENHANCED_CATALOG, CATEGORIES } from '@/utils/constants';

/**
 * Get products by specific line/subcategory
 */
export const getProductsByLine = (lineName) => {
  if (!lineName) return [];
  
  const normalizedLine = lineName.toLowerCase().trim();
  
  return ENHANCED_CATALOG.filter(product => 
    product.subcategory?.toLowerCase().includes(normalizedLine) ||
    product.category?.toLowerCase().includes(normalizedLine)
  );
};

/**
 * Get products by category
 */
export const getProductsByCategory = (categoryName) => {
  if (!categoryName) return [];
  
  const normalizedCategory = categoryName.toLowerCase().trim();
  
  return ENHANCED_CATALOG.filter(product => 
    product.category?.toLowerCase() === normalizedCategory
  );
};

/**
 * Get specific product information
 */
export const getProductInfo = (productId) => {
  return ENHANCED_CATALOG.find(product => 
    product.id?.toLowerCase() === productId?.toLowerCase()
  );
};

/**
 * Get available sizes for a product line
 */
export const getAvailableSizes = (lineName) => {
  const products = getProductsByLine(lineName);
  const allSizes = products.flatMap(product => product.sizes || []);
  return [...new Set(allSizes)]; // Remove duplicates
};

/**
 * Get price range for a product line
 */
export const getPriceRange = (lineName) => {
  const products = getProductsByLine(lineName);
  if (products.length === 0) return null;
  
  const prices = products.map(p => p.price).filter(p => p);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
    average: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
  };
};

/**
 * Get warranty information for a product line
 */
export const getWarrantyInfo = (lineName) => {
  const products = getProductsByLine(lineName);
  if (products.length === 0) return null;
  
  const warranties = [...new Set(products.map(p => p.warranty).filter(w => w))];
  return warranties;
};

/**
 * Get product recommendations based on criteria
 */
export const getProductRecommendations = (criteria = {}) => {
  let filtered = [...ENHANCED_CATALOG];
  
  // Filter by category
  if (criteria.category) {
    filtered = filtered.filter(p => 
      p.category?.toLowerCase() === criteria.category.toLowerCase()
    );
  }
  
  // Filter by subcategory/line
  if (criteria.subcategory) {
    filtered = filtered.filter(p => 
      p.subcategory?.toLowerCase() === criteria.subcategory.toLowerCase()
    );
  }
  
  // Filter by price range
  if (criteria.minPrice) {
    filtered = filtered.filter(p => p.price >= criteria.minPrice);
  }
  if (criteria.maxPrice) {
    filtered = filtered.filter(p => p.price <= criteria.maxPrice);
  }
  
  // Filter by size
  if (criteria.size) {
    filtered = filtered.filter(p => 
      p.sizes?.includes(criteria.size)
    );
  }
  
  // Sort by relevance (featured products first, then by price)
  filtered.sort((a, b) => {
    // Featured products (Premium, Golden Dream, etc.)
    const aFeatured = ['Premium', 'Golden Dream', 'Absolut'].includes(a.subcategory);
    const bFeatured = ['Premium', 'Golden Dream', 'Absolut'].includes(b.subcategory);
    
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    
    // Then by price (ascending)
    return a.price - b.price;
  });
  
  return filtered.slice(0, criteria.limit || 5); // Limit results
};

/**
 * Get all available product lines for chatbot suggestions
 */
export const getAllProductLines = () => {
  const lines = {};
  
  CATEGORIES.forEach(category => {
    if (category.subcategories) {
      category.subcategories.forEach(sub => {
        lines[sub.filter] = {
          name: sub.name,
          category: category.id,
          warranty: sub.warranty
        };
      });
    }
  });
  
  return lines;
};

/**
 * Format product information for chatbot responses
 */
export const formatProductForChat = (product) => {
  if (!product) return null;
  
  return {
    name: product.name,
    price: product.price ? `S/. ${product.price.toLocaleString('es-PE')}` : 'Consultar',
    warranty: product.warranty || 'Consultar',
    sizes: product.sizes?.join(', ') || 'Consultar',
    category: product.category,
    subcategory: product.subcategory,
    description: product.description?.substring(0, 100) + '...' || 'Producto de alta calidad',
    features: product.features?.slice(0, 3) || []
  };
};

/**
 * Get comparison between two product lines
 */
export const compareProductLines = (line1, line2) => {
  const products1 = getProductsByLine(line1);
  const products2 = getProductsByLine(line2);
  
  if (products1.length === 0 || products2.length === 0) return null;
  
  const range1 = getPriceRange(line1);
  const range2 = getPriceRange(line2);
  const warranty1 = getWarrantyInfo(line1);
  const warranty2 = getWarrantyInfo(line2);
  
  return {
    line1: {
      name: line1,
      priceRange: range1,
      warranties: warranty1,
      productCount: products1.length
    },
    line2: {
      name: line2,
      priceRange: range2,
      warranties: warranty2,
      productCount: products2.length
    },
    comparison: {
      cheaper: range1.min < range2.min ? line1 : line2,
      betterWarranty: warranty1.some(w => w.includes('10')) ? line1 : line2,
      moreOptions: products1.length > products2.length ? line1 : line2
    }
  };
};
