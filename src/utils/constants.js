export const CATEGORIES = [
    {
        id: 'colchones',
        name: 'Colchones',
        description: 'Excelencia en descanso con tecnología anatómica y resortes pocket.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Luxury', 'Premium', 'Classic', 'Professional']
    },
    {
        id: 'dormitorio',
        name: 'Dormitorio',
        description: 'Bases y cabeceras de diseño que elevan el estilo de tu habitación.',
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Box Tarimas', 'Cabeceras']
    },
    {
        id: 'cunas',
        name: 'Línea Kids',
        description: 'Cuidado y ternura para el descanso de los más pequeños.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Infantil', 'Cunas']
    },
    {
        id: 'muebles',
        name: 'Muebles',
        description: 'Sofás y seccionales de alta gama para el confort total en casa.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Lineal', 'Seccional']
    }
];

export const ENHANCED_CATALOG = [
    // --- CLASSIC COLLECTION (BLUE GROUP) ---
    {
        id: 'goldencito-anatomico',
        name: 'Goldencito Anatómico',
        category: 'classic',
        type: 'Anatómico',
        price: 799,
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
        description: 'Soporte anatómico confiable para el descanso diario.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Tejido Suave', 'Durabilidad', 'Anatómico'],
        badge: 'Clásico'
    },
    {
        id: 'goldencito-anatomico-mp',
        name: 'Goldencito Anatómico MP',
        category: 'classic',
        type: 'Marco Poliuretano',
        price: 899,
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
        description: 'Versión reforzada con marco de poliuretano para mayor estabilidad.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Marco Reforzado', 'Estabilidad', 'MP System'],
        badge: 'Popular'
    },
    {
        id: 'classic-anatomico',
        name: 'Classic Anatómico',
        category: 'classic',
        type: 'Anatómico',
        price: 849,
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
        description: 'El diseño tradicional con la garantía de Sueño Dorado.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Tradicional', 'Confortable'],
        badge: 'Tradición'
    },
    {
        id: 'infinito-mp',
        name: 'Infinito MP',
        category: 'classic',
        type: 'Marco Poliuretano',
        price: 999,
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
        description: 'Resistencia infinita y confort equilibrado con sistema MP.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Resistencia', 'Larga Vida'],
        badge: 'Duradero'
    },
    {
        id: 'matrimonial',
        name: 'Matrimonial',
        category: 'classic',
        type: 'Residencial',
        price: 1099,
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
        description: 'Ideal para parejas, ofreciendo un balance perfecto entre firmeza y suavidad.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Balanceado', 'Familiar'],
        badge: 'Hogar'
    },

    // --- PREMIUM COLLECTION (ORANGE GROUP) ---
    {
        id: 'pasiones-one-pillow',
        name: 'Pasiones One Pillow',
        category: 'premium',
        type: 'One Pillow',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600',
        description: 'Tela Tricot de tacto sedoso y una capa superior de confort única.',
        sizes: ['1.5 PLZ', '2 PLZ', 'MP 1.5 PLZ', 'MP 2 PLZ'],
        features: ['Tela Tricot', 'Suavidad Premium'],
        badge: 'Confort'
    },
    {
        id: 'pasiones-pt-mp',
        name: 'Pasiones P/T MP',
        category: 'premium',
        type: 'Pillow Top MP',
        price: 1399,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600',
        description: 'Pillow Top de alta densidad combinado con marco de poliuretano.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Pillow Top', 'Soporte MP'],
        badge: 'Recomendado'
    },
    {
        id: 'golden-dream-mp',
        name: 'Golden Dream MP',
        category: 'premium',
        type: 'Marco Poliuretano',
        price: 1549,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600',
        description: 'El estándar de oro en colchones con marco de poliuretano.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Lujo Accesible', 'Estabilidad Total'],
        badge: 'Más Vendido'
    },
    {
        id: 'siempre-mp-one-pillow',
        name: 'Siempre MP One Pillow',
        category: 'premium',
        type: 'One Pillow MP',
        price: 1449,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600',
        description: 'Diseñado para durar "siempre", con el confort de una almohada integrada.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Durabilidad+', 'Confort Continuo'],
        badge: 'Garantizado'
    },
    {
        id: 'siempre-mp-pt',
        name: 'Siempre MP P/T',
        category: 'premium',
        type: 'Pillow Top MP',
        price: 1599,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600',
        description: 'Máximo acolchado Pillow Top para un descanso nivel superior.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Extra Comfort', 'Pillow Top'],
        badge: 'Premium'
    },

    // --- LUXURY COLLECTION (ORANGE/BLACK GROUP) ---
    {
        id: 'golden-dream-black',
        name: 'Golden Dream MP Black',
        category: 'luxury',
        type: 'Luxury MP',
        price: 2699,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=600',
        description: 'Edición Black con acabados de ultra lujo y soporte avanzado.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Black Edition', 'Elite Foam', 'Anti-Acaros'],
        badge: 'Exclusivo'
    },
    {
        id: 'absolut-marco-sellado',
        name: 'Absolut Marco Sellado P/T',
        category: 'luxury',
        type: 'Marco Sellado',
        price: 2299,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=600',
        description: 'Tecnología de marco sellado para una higiene y soporte incomparables.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Higiene Total', 'Soporte Hermético'],
        badge: 'Innovación'
    },
    {
        id: 'ternura-pocket',
        name: 'Ternura Pocket',
        category: 'luxury',
        type: 'Resortes Pocket',
        price: 2149,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=600',
        description: 'Independencia de movimiento absoluta con resortes embolsados.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Resortes Pocket', 'Cero Movimiento'],
        badge: 'Elite'
    },

    // --- PROFESSIONAL COLLECTION (DARK GREEN GROUP) ---
    {
        id: 'pasiones-orto-lujo',
        name: 'Pasiones Orto D Lujo',
        category: 'professional',
        type: 'Ortopédico Lujo',
        price: 1799,
        image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=80&w=600',
        description: 'Cuidado ortopédico especializado con acabados en tela Tricot.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Ortopédico', 'Tela Tricot', 'Salud'],
        badge: 'Salud'
    },
    {
        id: 'reconciliacion-pocket',
        name: 'Reconciliación Pocket',
        category: 'professional',
        type: 'Ortopédico Pocket',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=80&w=600',
        description: 'La unión perfecta entre salud ortopédica y tecnología de resortes pocket.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Pocket Health', 'Columna Protegida'],
        badge: 'Especializado'
    },

    // --- KIDS LINE (LIGHT ORANGE GROUP) ---
    {
        id: 'cuna-travesuras',
        name: 'Cuna Travesuras',
        category: 'classic',
        type: 'Infantil',
        price: 459,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600',
        description: 'Tela infantil hipoalergénica para los más pequeños.',
        sizes: ['Infantil'],
        features: ['Hipoalergénico', 'Tela Infantil'],
        badge: 'Kids'
    },
    {
        id: 'cuna-golden-dream',
        name: 'Cuna Golden Dream',
        category: 'classic',
        type: 'Infantil',
        price: 559,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600',
        description: 'Confort de punto premium para un crecimiento saludable.',
        sizes: ['Infantil'],
        features: ['Tela de Punto', 'Ergonómico'],
        badge: 'Kids Premium'
    },

    // --- FURNITURE & ACCESSORIES (LIGHT GREEN/BLUE GROUP) ---
    {
        id: 'box-tarima-universal',
        name: 'Box Tarima Universal',
        category: 'muebles',
        type: 'Base',
        price: 699,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        description: 'La base perfecta para cualquier colchón de nuestra línea.',
        sizes: ['1 1/2 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Universal', 'Madera Reforzada'],
        badge: 'Base'
    },
    {
        id: 'cabecera-capitone',
        name: 'Cabecera Capitoné',
        category: 'muebles',
        type: 'Cabecera',
        price: 599,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        description: 'Elegancia y distinción con acabado artesanal capitoné.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Artesanal', 'Elegante'],
        badge: 'Estilo'
    },
    {
        id: 'cabecera-brazo',
        name: 'Cabecera con Brazo',
        category: 'muebles',
        type: 'Cabecera',
        price: 749,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        description: 'Diseño envolvente con brazos laterales para un look moderno.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Moderno', 'Envolvente'],
        badge: 'Tendencia'
    },
    {
        id: 'juego-mueble-lineal',
        name: 'Juego de Mueble Lineal 3,2',
        category: 'muebles',
        type: 'Sala',
        price: 3899,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
        description: 'Incluye cojines decorativos. Confort y estilo para tu living.',
        sizes: ['3 cuerpos + 2 cuerpos'],
        features: ['Cojines Decorativos', 'Lino Premium'],
        badge: 'Sala'
    },
    {
        id: 'mueble-luxe-seccional',
        name: 'Mueble de Luxe Seccional',
        category: 'muebles',
        type: 'Sala',
        price: 5499,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
        description: 'La máxima comodidad en un seccional de lujo para toda la familia.',
        sizes: ['Seccional Grande'],
        features: ['Seccional', 'Espuma Soft'],
        badge: 'Exclusivo'
    }
];

export const FEATURED_PRODUCTS = ENHANCED_CATALOG;

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
    const email = import.meta.env.VITE_BRAND_EMAIL || 'info@suenodorado.pe';
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

