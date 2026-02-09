import { RESORTE_PRODUCTS } from './resorte.data';
import { ESPUMA_PRODUCTS } from './espuma.data';
import { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

export { CATEGORIES } from './categories';
export { RESORTE_PRODUCTS } from './resorte.data';
export { ESPUMA_PRODUCTS } from './espuma.data';
export { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

// 1. PRODUCTOS DE ALTA PRIORIDAD (Se mostrarán primero en la sección "Nuestros Productos")
// Marketing Strategy: 1. Hero Brand (Golden Dream), 2. High Margin Upsell (Box/Cama Premium), 3. Tech Anchor (Pocket Visco), 4. Foam Luxury
const TOP_MAIN_IDS = [
    'golden-dream-mp',        // The "Hero" of the brand
    'box-tarima-universal',   // NEW: Best seller accessibility (Cama Universal)
    'cama-tapizada-premium-brazo', // High margin upsell
    'reconciliacion-pocket',   // The Tech Anchor
    'topacio',                 // The King of Foam (D30)
    'box-tarima-premium-tapizado', // High-visibility premium furniture
    'siempre-pt'             // The "Best Seller" (Reliability)
];

// 2. PRODUCTOS DESTACADOS (Variedad y Alternativas de Valor)
const FEATURED_PRIORITY_IDS = [
    'ternura-pocket',         // Great alternative to Reconciliación
    'mueble-luxe',            // NEW: Showing that we sell sofas/seccionales too
    'matrimonial-clasico',     // The classical matrimonial choice
    'plus-resilense'          // The "Health/Orthopedic" choice
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
