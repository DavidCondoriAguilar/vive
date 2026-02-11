import {
    CATEGORIES as _CATEGORIES,
    ENHANCED_CATALOG as _ENHANCED_CATALOG,
    FEATURED_PRODUCTS as _FEATURED_PRODUCTS
} from './catalogData';

export const CATEGORIES = _CATEGORIES;
export const ENHANCED_CATALOG = _ENHANCED_CATALOG;
export const FEATURED_PRODUCTS = _FEATURED_PRODUCTS;

// WhatsApp Number
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '51989223448';
export const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || 'Sueño Dorado';
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const PRODUCTION_URL = import.meta.env.VITE_PRODUCTION_URL || 'https://suenodorado.pe';

/**
 * Generate WhatsApp link with message
 */
export const getWhatsAppLink = (message = '') => {
    const encodedMessage = encodeURIComponent(
        message || `Hola ${BRAND_NAME}, me gustaría recibir asesoría personalizada para elegir mi colchón ideal.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Generate email link
 */
export const getEmailLink = (subject = '', body = '') => {
    const email = import.meta.env.VITE_BRAND_EMAIL || 'ventasisd@grupoisd.com';
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
/**
 * Get human-readable subcategory name from filter ID
 */
export const getPrettySubcategoryName = (filterValue) => {
    if (!filterValue || filterValue === 'todos') return 'Todos los modelos';
    for (const cat of CATEGORIES) {
        const sub = cat.subcategories?.find(s => s.filter === filterValue);
        if (sub) return sub.name;
    }
    return filterValue.replace(/-/g, ' '); // Fallback: transform "Box-Universal" to "Box Universal"
};
