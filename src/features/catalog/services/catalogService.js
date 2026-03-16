import { ENHANCED_CATALOG, CATEGORIES } from '@core/utils/constants';

/**
 * Servicio de Catálogo
 * Maneja operaciones de negocio relacionadas con productos
 * 
 * Este servicio puede evolucionar para:
 * - Consumir APIs reales
 * - Manejar caché
 * - Implementar búsqueda avanzada
 */

/**
 * Obtener todos los productos del catálogo
 * @returns {Array} Lista completa de productos
 */
export const getAllProducts = () => {
  return ENHANCED_CATALOG;
};

/**
 * Obtener productos por categoría
 * @param {string} categoryId - ID de la categoría
 * @returns {Array} Productos filtrados por categoría
 */
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'todos') {
    return ENHANCED_CATALOG;
  }
  return ENHANCED_CATALOG.filter(product => product.category === categoryId);
};

/**
 * Obtener productos por subcategoría
 * @param {string} subcategory - Nombre de la subcategoría
 * @returns {Array} Productos filtrados por subcategoría
 */
export const getProductsBySubcategory = (subcategory) => {
  return ENHANCED_CATALOG.filter(product => product.subcategory === subcategory);
};

/**
 * Obtener producto por ID
 * @param {string} productId - ID del producto
 * @returns {Object|undefined} Producto encontrado o undefined
 */
export const getProductById = (productId) => {
  return ENHANCED_CATALOG.find(product => product.id === productId);
};

/**
 * Obtener todas las categorías disponibles
 * @returns {Array} Lista de categorías
 */
export const getAllCategories = () => {
  return CATEGORIES;
};

/**
 * Obtener subcategorías únicas de una categoría
 * @param {string} categoryId - ID de la categoría
 * @returns {Array} Lista de subcategorías únicas
 */
export const getSubcategoriesByCategory = (categoryId) => {
  const products = getProductsByCategory(categoryId);
  return [...new Set(products.map(p => p.subcategory).filter(Boolean))];
};

/**
 * Obtener tallas disponibles
 * @param {string} categoryId - ID de la categoría (opcional)
 * @returns {Array} Lista de tallas disponibles
 */
export const getAvailableSizes = (categoryId) => {
  const products = categoryId ? getProductsByCategory(categoryId) : ENHANCED_CATALOG;
  return [...new Set(products.flatMap(p => p.sizes || []).filter(Boolean))];
};

/**
 * Buscar productos por término
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Productos que coinciden con la búsqueda
 */
export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return [];
  
  return ENHANCED_CATALOG.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description?.toLowerCase().includes(term) ||
    product.subcategory?.toLowerCase().includes(term)
  );
};

/**
 * Ordenar productos
 * @param {Array} products - Lista de productos
 * @param {string} sortBy - Criterio de ordenamiento
 * @returns {Array} Productos ordenados
 */
export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'name':
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case 'newest':
      return [...products].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    default:
      return products;
  }
};

/**
 * Filtrar productos
 * @param {Array} products - Lista de productos
 * @param {Object} filters - Objeto de filtros
 * @returns {Array} Productos filtrados
 */
export const filterProducts = (products, filters) => {
  const { category, subcategory, size } = filters;
  
  return products.filter(product => {
    const categoryMatch = !category || category === 'todos' || product.category === category;
    const subcategoryMatch = !subcategory || subcategory === 'todos' || product.subcategory === subcategory;
    const sizeMatch = !size || size === 'todos' || (product.sizes && product.sizes.includes(size));
    
    return categoryMatch && subcategoryMatch && sizeMatch;
  });
};

// Export default service object
const catalogService = {
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
};

export default catalogService;
