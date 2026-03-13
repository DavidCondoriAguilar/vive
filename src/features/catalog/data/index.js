import { RESORTE_PRODUCTS } from './resorte.data';
import { ESPUMA_PRODUCTS } from './espuma.data';
import { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

export { CATEGORIES } from './categories';
export { RESORTE_PRODUCTS } from './resorte.data';
export { ESPUMA_PRODUCTS } from './espuma.data';
export { COMPLEMENTARIOS_PRODUCTS } from './dormitorio.data';

// 1. PRODUCTOS DE ALTA PRIORIDAD — Solo colchones top al inicio
const TOP_MAIN_IDS = [
    'gea-pt-mp-two-ortopedico-de-lujo', // Nuevo lanzamiento premium
    'ventto-marco',                       // Ultra Firme - Top técnico
    'sense-premium',                      // Premium Series
    'itta',                               // Nuevo ingreso ortopédico
    'kasse',                              // Nuevo ingreso exclusivo
    'kai',                                // Kai Series
    'enna-mp',                            // Enna Collection
];

// 2. PRODUCTOS DESTACADOS (carrusel home)
const FEATURED_PRIORITY_IDS = [
    'vanora-dp',                          // Vanora DP Series
    'gea-pt-mp-two-ortopedico-de-lujo',   // Nuevo lanzamiento
    'ventto-marco',                        // Ultra Firme
    'itta',                                // Ortopédico
    'kasse',                               // Exclusivo
];

// Colchones primero, luego dormitorio
const ALL_PRODUCTS = [
    ...RESORTE_PRODUCTS,
    ...ESPUMA_PRODUCTS,
    ...COMPLEMENTARIOS_PRODUCTS
];

// Generar ENHANCED_CATALOG (colchones top primero, luego el resto, muebles al final)
const priorityMain = [];
const regularColchones = [];
const dormitorioProducts = [];
const mainIdsSet = new Set(TOP_MAIN_IDS);

TOP_MAIN_IDS.forEach(id => {
    const p = ALL_PRODUCTS.find(item => item.id === id);
    if (p) priorityMain.push(p);
});

ALL_PRODUCTS.forEach(p => {
    if (!mainIdsSet.has(p.id)) {
        if (p.category === 'dormitorio') {
            dormitorioProducts.push(p);
        } else {
            regularColchones.push(p);
        }
    }
});

export const ENHANCED_CATALOG = [...priorityMain, ...regularColchones, ...dormitorioProducts];

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
