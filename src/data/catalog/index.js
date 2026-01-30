import { RESORTE_PRODUCTS } from './resorte.data';
import { ESPUMA_PRODUCTS } from './espuma.data';
import { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

export { CATEGORIES } from './categories';
export { RESORTE_PRODUCTS } from './resorte.data';
export { ESPUMA_PRODUCTS } from './espuma.data';
export { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

export const ENHANCED_CATALOG = [
    ...RESORTE_PRODUCTS,
    ...ESPUMA_PRODUCTS,
    ...COMPLEMENTARIOS_PRODUCTS
];

export const FEATURED_PRODUCTS = ENHANCED_CATALOG.filter(p =>
    p.subcategory === 'Diamont' ||
    p.subcategory === 'Gold' ||
    p.subcategory === 'Marco de Poliuretano' ||
    p.subcategory === 'Topacio'
);
