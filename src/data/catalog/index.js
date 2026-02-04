import { RESORTE_PRODUCTS } from './resorte.data';
import { ESPUMA_PRODUCTS } from './espuma.data';
import { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

export { CATEGORIES } from './categories';
export { RESORTE_PRODUCTS } from './resorte.data';
export { ESPUMA_PRODUCTS } from './espuma.data';
export { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

// 1. PRODUCTOS DE ALTA PRIORIDAD (Se mostrarán primero en la sección "Nuestros Productos")
const TOP_MAIN_IDS = [
    'reconciliacion-pocket', // Top Resorte Diamont
    'topacio',               // Top Espuma
    'absolut-marco',         // Premium Resorte Diamont
    'splendido',            // Premium Espuma
    'siempre-pt',           // Gold Resorte
    'plus-resilense'        // Espuma Ortopédica
];

// 2. PRODUCTOS DESTACADOS (Se mostrarán en la sección "Nuestros Productos Destacados" para no repetir)
// Elegimos otros modelos de alta gama que no son los mismos que los TOP_MAIN para dar variedad
const FEATURED_PRIORITY_IDS = [
    'golden-dream-mp',      // Gold Resorte (Muy vendido)
    'matrimonial-clasico',   // Diamont Resorte (Calidad/Precio)
    'ternura-pocket',       // Diamont Resorte
    'pasiones-pt-mp',       // Gold Resorte
    'infinito-mp'           // Marco Poliuretano (Uso rudo)
];

const ALL_PRODUCTS = [
    ...RESORTE_PRODUCTS,
    ...ESPUMA_PRODUCTS,
    ...COMPLEMENTARIOS_PRODUCTS
];

// Generar ENHANCED_CATALOG (Priorizando TOP_MAIN_IDS)
const priorityMain = [];
const regularMain = [];
const mainIdsSet = new Set(TOP_MAIN_IDS);

TOP_MAIN_IDS.forEach(id => {
    const p = ALL_PRODUCTS.find(item => item.id === id);
    if (p) priorityMain.push(p);
});

ALL_PRODUCTS.forEach(p => {
    if (!mainIdsSet.has(p.id)) regularMain.push(p);
});

export const ENHANCED_CATALOG = [...priorityMain, ...regularMain];

// Generar FEATURED_PRODUCTS (Priorizando FEATURED_PRIORITY_IDS para evitar repetición visual inmediata)
const priorityFeatured = [];
const othersFeatured = [];
const featuredIdsSet = new Set(FEATURED_PRIORITY_IDS);

// Primero los específicos para esta sección
FEATURED_PRIORITY_IDS.forEach(id => {
    const p = ALL_PRODUCTS.find(item => item.id === id);
    if (p) priorityFeatured.push(p);
});

// Luego añadimos otros de buena categoría pero que no estén en el TOP_MAIN inicial para máxima variedad
ALL_PRODUCTS.forEach(p => {
    const isPremium = p.subcategory === 'Diamont' || p.subcategory === 'Gold' || p.subcategory === 'Topacio';
    if (!featuredIdsSet.has(p.id) && !mainIdsSet.has(p.id) && isPremium) {
        othersFeatured.push(p);
    }
});

export const FEATURED_PRODUCTS = [...priorityFeatured, ...othersFeatured];
