/**
* Centralized Route Configuration
* Managing all application paths in one place to avoid magic strings
* and facilitate maintenance.
*/

export const ROUTES = {
    HOME: '/',
    INICIO: '/inicio',
    CATEGORY: '/categorias/:categoryId',
    RESORTE: '/colchones-resorte',
    ESPUMA: '/colchones-espuma',
    DORMITORIO_SUB: '/dormitorio/:subId',
    CATALOG: '/catalogo',
    WHOLESALE: '/venta-por-mayor',
    PRODUCT_DETAIL: '/producto/:productId',
    ORDER_CONFIRMATION: '/confirmacion-pedido',
    RETURN_POLICY: '/politica-devoluciones',
    CONTACT: '/contacto',
    CONTACT_THANKS: '/contacto/gracias',
    SEARCH: '/busqueda',
};

// Helper to generate dynamic paths
export const getProductPath = (id) => ROUTES.PRODUCT_DETAIL.replace(':productId', id);
export const getCategoryPath = (id) => ROUTES.CATEGORY.replace(':categoryId', id);
export const getDormitorioSubPath = (subId) => ROUTES.DORMITORIO_SUB.replace(':subId', subId);
