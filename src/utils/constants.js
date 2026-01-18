export const CATEGORIES = [
    {
        id: 'colchones',
        name: 'Colchones',
        description: 'Colchones de espuma y resortes para todas las medidas.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Espuma', 'Resortes']
    },
    {
        id: 'tarimas',
        name: 'Tarimas',
        description: 'Bases sólidas y funcionales para tu colchón.',
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Madera', 'Metal']
    },
    {
        id: 'cunas',
        name: 'Cunas',
        description: 'Seguridad y confort para los más pequeños.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Infantil', 'Resortes', 'Espuma']
    },
    {
        id: 'almohadas',
        name: 'Almohadas',
        description: 'Complemento perfecto para tu descanso.',
        image: 'https://images.unsplash.com/photo-1629949009765-40f745a55111?auto=format&fit=crop&q=80&w=800',
        subcategories: ['Espuma', 'Plumas', 'Antialérgicas']
    }
];

export const ENHANCED_CATALOG = [
    // COLCHONES DE ESPUMA
    {
        id: 'espuma-1pl',
        name: 'Colchón Espuma 1 Plaza',
        category: 'colchones',
        type: 'espuma',
        price: 399,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400',
        description: 'Espuma de alta densidad para descanso óptimo',
        sizes: ['1 Plz'],
        badge: 'Más Vendido'
    },
    {
        id: 'espuma-1.5pl',
        name: 'Colchón Espuma 1.5 Plazas',
        category: 'colchones',
        type: 'espuma',
        price: 499,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400',
        description: 'Ideal para parejas o espacio individual amplio',
        sizes: ['1.5 Plz']
    },
    {
        id: 'espuma-2pl',
        name: 'Colchón Espuma 2 Plazas',
        category: 'colchones',
        type: 'espuma',
        price: 599,
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400',
        description: 'Amplio espacio para máximo confort',
        sizes: ['2 Plz']
    },
    {
        id: 'espuma-queen',
        name: 'Colchón Espuma Queen',
        category: 'colchones',
        type: 'espuma',
        price: 699,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400',
        description: 'Tamaño premium para descanso de lujo',
        sizes: ['Queen']
    },
    {
        id: 'espuma-king',
        name: 'Colchón Espuma King',
        category: 'colchones',
        type: 'espuma',
        price: 799,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400',
        description: 'Máximo espacio y confort para pareja',
        sizes: ['King']
    },

    // COLCHONES DE RESORTES
    {
        id: 'resorte-1pl',
        name: 'Colchón Resortes 1 Plaza',
        category: 'colchones',
        type: 'resortes',
        price: 449,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400',
        description: 'Sistema de resortes para soporte superior',
        sizes: ['1 Plz']
    },
    {
        id: 'resorte-1.5pl',
        name: 'Colchón Resortes 1.5 Plazas',
        category: 'colchones',
        type: 'resortes',
        price: 549,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400',
        description: 'Resortes ensacados para movimiento independiente',
        sizes: ['1.5 Plz']
    },
    {
        id: 'resorte-2pl',
        name: 'Colchón Resortes 2 Plazas',
        category: 'colchones',
        type: 'resortes',
        price: 649,
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400',
        description: 'Doble sistema de resortes para máxima durabilidad',
        sizes: ['2 Plz']
    },
    {
        id: 'resorte-queen',
        name: 'Colchón Resortes Queen',
        category: 'colchones',
        type: 'resortes',
        price: 749,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400',
        description: 'Sistema premium de resortes para lujo',
        sizes: ['Queen']
    },
    {
        id: 'resorte-king',
        name: 'Colchón Resortes King',
        category: 'colchones',
        type: 'resortes',
        price: 849,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400',
        description: 'Máximo confort con sistema de resortes superior',
        sizes: ['King']
    },

    // TARIMAS
    {
        id: 'tarima-madera-1.5pl',
        name: 'Tarima Madera 1.5 Plazas',
        category: 'tarimas',
        type: 'madera',
        price: 299,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400',
        description: 'Base de madera maciza para colchón 1.5 plazas',
        sizes: ['1.5 Plz']
    },
    {
        id: 'tarima-metal-2pl',
        name: 'Tarima Metal 2 Plazas',
        category: 'tarimas',
        type: 'metal',
        price: 349,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400',
        description: 'Base metálica resistente con diseño moderno',
        sizes: ['2 Plz']
    },

    // CUNAS
    {
        id: 'cuna-infantil',
        name: 'Cuna Infantil con Resortes',
        category: 'cunas',
        type: 'resortes',
        price: 599,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400',
        description: 'Seguridad y confort para bebé con sistema de resortes',
        sizes: ['Infantil']
    },
    {
        id: 'cuna-espuma',
        name: 'Cuna con Espuma',
        category: 'cunas',
        type: 'espuma',
        price: 499,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400',
        description: 'Base de espuma suave y segura para bebé',
        sizes: ['Infantil']
    },

    // ALMOHADAS
    {
        id: 'almohada-espuma',
        name: 'Almohada Espuma',
        category: 'almohadas',
        type: 'espuma',
        price: 89,
        image: 'https://images.unsplash.com/photo-1629949009765-40f745a55111?auto=format&fit=crop&q=80&w=400',
        description: 'Almohada de espuma viscoelástica ergonómica',
        sizes: ['Standard']
    },
    {
        id: 'almohada-antialergica',
        name: 'Almohada Antialérgica',
        category: 'almohadas',
        type: 'antialergica',
        price: 99,
        image: 'https://images.unsplash.com/photo-1629949009765-40f745a55111?auto=format&fit=crop&q=80&w=400',
        description: 'Protección total contra ácaros y alérgenos',
        sizes: ['Standard']
    }
];

export const FEATURED_PRODUCTS = ENHANCED_CATALOG;

export const WHATSAPP_NUMBER = '51989223448';

export const getWhatsAppLink = (message = '') => {
    const encodedMessage = encodeURIComponent(message || 'Hola Sueño Dorado, me gustaría recibir asesoría personalizada para elegir mi colchón ideal.');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

