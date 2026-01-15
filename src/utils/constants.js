export const CATEGORIES = [
    {
        id: 'colchones',
        name: 'Colchones',
        description: 'Encuentra el soporte ideal para tu espalda y un confort sin igual.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Espuma', 'Resortes', 'Premium', 'Ortopédicos']
    },
    {
        id: 'camas',
        name: 'Camas & Tarimas',
        description: 'Bases sólidas y elegantes que complementan tu colchón perfectamente.',
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Madera', 'Tapizadas', 'Funcionales']
    },
    {
        id: 'cunas',
        name: 'Cunas',
        description: 'Seguridad y ternura para el primer descanso de los más pequeños.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Infantil', 'Resortes', 'Espuma']
    },
    {
        id: 'accesorios',
        name: 'Accesorios',
        description: 'El toque final para un sueño reparador: almohadas, protectores y más.',
        image: 'https://images.unsplash.com/photo-1629949009765-40f745a55111?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Almohadas', 'Protectores', 'Sábanas']
    }
];

export const ENHANCED_CATALOG = [
    {
        id: 'sd-vive-log-1',
        name: 'SD Vive Log',
        category: 'premium',
        price: 1299,
        image: '/images/products/Recurso 1SD-VIVE LOG.png',
        badge: 'Premium',
        badgeColor: 'bg-gradient-to-r from-amber-500 to-yellow-600',
        description: 'Lujo y confort para un descanso excepcional',
        features: ['Alta densidad', 'Tecnología avanzada', 'Acolchado premium'],
        sizes: ['1 Plz', '1.5 Plz', '2 Plz', 'Queen', 'King']
    },
    {
        id: 'sd-vive-log-2',
        name: 'SD Vive Log Pro',
        category: 'premium',
        price: 1599,
        image: '/images/products/Recurso 2SD-VIVE LOG.png',
        badge: 'Pro',
        badgeColor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
        description: 'La máxima expresión en tecnología de sueño',
        features: ['Densidad ultra alta', 'Sistema dual', 'Termorregulador'],
        sizes: ['1.5 Plz', '2 Plz', 'Queen', 'King']
    },
    {
        id: 'classic-ana',
        name: 'Classic Ana',
        category: 'classic',
        price: 899,
        image: '/images/products/Recurso 3CLASIC ANA.png',
        badge: 'Clásico',
        badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-600',
        description: 'Elegancia atemporal y soporte confiable',
        features: ['Espuma viscoelástica', 'Base estable', 'Transpirable'],
        sizes: ['1 Plz', '1.5 Plz', '2 Plz']
    },
    {
        id: 'infi',
        name: 'Infinite',
        category: 'premium',
        price: 1899,
        image: '/images/products/Recurso 4INFI.png',
        badge: 'Infinite',
        badgeColor: 'bg-gradient-to-r from-gray-700 to-gray-900',
        description: 'Diseño infinito para confort sin límites',
        features: ['Multi-capas', 'Zonas diferenciadas', 'Hipoalergénico'],
        sizes: ['1.5 Plz', '2 Plz', 'Queen', 'King', 'Super King']
    },
    {
        id: 'caro',
        name: 'Caro Luxury',
        category: 'luxury',
        price: 2499,
        image: '/images/products/Recurso 5CARO.png',
        badge: 'Luxury',
        badgeColor: 'bg-gradient-to-r from-rose-500 to-pink-600',
        description: 'Exclusividad y sofisticación en cada detalle',
        features: ['Materiales importados', 'Diseño exclusivo', 'Garantía extendida'],
        sizes: ['Queen', 'King', 'Super King']
    },
    {
        id: 'ternura',
        name: 'Ternura',
        category: 'classic',
        price: 749,
        image: '/images/products/Recurso 6TERNURA.png',
        badge: 'Suave',
        badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-600',
        description: 'Suavidad y cuidado para toda la familia',
        features: ['Espuma suave', 'Seguridad infantil', 'Fácil limpieza'],
        sizes: ['1 Plz', '1.5 Plz', '2 Plz']
    },
    {
        id: 'absolut',
        name: 'Absolut',
        category: 'premium',
        price: 1799,
        image: '/images/products/Recurso 7ABSOLUT .png',
        badge: 'Absolut',
        badgeColor: 'bg-gradient-to-r from-red-500 to-orange-600',
        description: 'Absoluto confort y rendimiento superior',
        features: ['Densidad máxima', 'Sistema híbrido', 'Durabilidad extrema'],
        sizes: ['1.5 Plz', '2 Plz', 'Queen', 'King']
    },
    {
        id: 'gdream',
        name: 'Golden Dream',
        category: 'luxury',
        price: 2199,
        image: '/images/products/Recurso 8GDREAM.png',
        badge: 'Gold',
        badgeColor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
        description: 'El sueño dorado hecho realidad',
        features: ['Oro 24k detalles', 'Tecnología sueca', 'Masaje integrado'],
        sizes: ['Queen', 'King', 'Super King']
    },
    {
        id: 'gdream-one',
        name: 'Golden Dream One',
        category: 'luxury',
        price: 1999,
        image: '/images/products/Recurso 9GDREAM ONE.png',
        badge: 'Premium',
        badgeColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
        description: 'Evolución del descanso premium',
        features: ['Sistema inteligente', 'Conectividad', 'Análisis de sueño'],
        sizes: ['2 Plz', 'Queen', 'King']
    },
    {
        id: 'pasiones',
        name: 'Pasiones',
        category: 'classic',
        price: 999,
        image: '/images/products/Recurso 10pasiones.png',
        badge: 'Romance',
        badgeColor: 'bg-gradient-to-r from-pink-500 to-rose-600',
        description: 'Diseñado para compartir momentos especiales',
        features: ['Movimiento independiente', 'Romance pack', 'Aromaterapia'],
        sizes: ['1.5 Plz', '2 Plz', 'Queen', 'King']
    },
    {
        id: 'siempre-mp',
        name: 'Siempre Plus',
        category: 'classic',
        price: 849,
        image: '/images/products/Recurso 11siempre mp.png',
        badge: 'Plus',
        badgeColor: 'bg-gradient-to-r from-teal-500 to-cyan-600',
        description: 'Calidad confiable mejorada',
        features: ['Espuma mejorada', 'Base reforzada', 'Garantía 5 años'],
        sizes: ['1 Plz', '1.5 Plz', '2 Plz']
    },
    {
        id: 'gold-ana-1',
        name: 'Gold Ana Classic',
        category: 'premium',
        price: 1399,
        image: '/images/products/Recurso 1golde ana .png',
        badge: 'Gold',
        badgeColor: 'bg-gradient-to-r from-amber-500 to-yellow-600',
        description: 'El toque dorado de la clásica Ana',
        features: ['Acabado dorado', 'Espuma premium', 'Diseño elegante'],
        sizes: ['1.5 Plz', '2 Plz', 'Queen']
    },
    {
        id: 'gold-ana-2',
        name: 'Gold Ana Master',
        category: 'luxury',
        price: 1699,
        image: '/images/products/Recurso 2golde ana  MP.png',
        badge: 'Master',
        badgeColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
        description: 'La versión master de la colección dorada',
        features: ['Master pack', 'Sistema dual', 'Lujo extremo'],
        sizes: ['Queen', 'King', 'Super King']
    },
    {
        id: 'siempre-hotelero',
        name: 'Siempre Hotelero',
        category: 'professional',
        price: 1099,
        image: '/images/products/siempre hotelero.png',
        badge: 'Hotel',
        badgeColor: 'bg-gradient-to-r from-gray-600 to-gray-800',
        description: 'Calidad hotelera para tu hogar',
        features: ['Uso intensivo', 'Fácil mantenimiento', 'Certificación hotelera'],
        sizes: ['1.5 Plz', '2 Plz', 'Queen', 'King']
    }
];

export const FEATURED_PRODUCTS = ENHANCED_CATALOG;

export const WHATSAPP_NUMBER = '51989223448';

export const getWhatsAppLink = (message = '') => {
    const encodedMessage = encodeURIComponent(message || 'Hola Sueño Dorado, me gustaría recibir asesoría personalizada para elegir mi colchón ideal.');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

