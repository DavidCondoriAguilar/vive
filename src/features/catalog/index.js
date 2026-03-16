/**
 * Catalog Feature - Public API
 * 
 * Usage:
 * import { CatalogView, useCatalog, catalogService } from '@features/catalog';
 */

// Views
export { default as CatalogView } from './views/CatalogView';

// Hooks
export { useCatalog } from './hooks/useCatalog';

// Services
export { 
  default as catalogService,
  getAllProducts,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductById,
  getAllCategories,
  getSubcategoriesByCategory,
  getAvailableSizes,
  searchProducts,
  sortProducts,
  filterProducts,
} from './services/catalogService';

// Data exports (specific items only, not the whole generation logic)
export { CATEGORIES } from './data';
