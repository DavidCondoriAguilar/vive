export const CATEGORIES = [
    {
        id: 'resorte',
        name: 'Colchones de Resorte',
        description: 'Tecnología de resortes Pocket y Bonell de alta durabilidad.',
        slug: 'colchones-resorte',
        subcategories: [
            { name: 'Colección Infantil', filter: 'Infantil' },
            { name: 'Avance Marco de Acero', filter: 'Marco de Acero' },
            { name: 'Avance Marco de Poliuretano', filter: 'Marco de Poliuretano' },
            { name: 'Avance Gold', filter: 'Gold' },
            { name: 'Avance Diamont', filter: 'Diamont' }
        ]
    },
    {
        id: 'espuma',
        name: 'Colchones de Espuma',
        description: 'Confort anatómico en espumas de alta densidad y resilense.',
        slug: 'colchones-espuma',
        subcategories: [
            { name: 'Poliseda', filter: 'Poliseda' },
            { name: 'Plus Resilense', filter: 'Plus Resilense' },
            { name: 'Splendido', filter: 'Splendido' },
            { name: 'Topacio', filter: 'Topacio' }
        ]
    },
    {
        id: 'dormitorio',
        name: 'Dormitorio',
        description: 'Todo para complementar tu descanso.',
        subcategories: [
            { name: 'Box/Tarimas', filter: 'Box', slug: 'box-tarimas' },
            { name: 'Cabeceras', filter: 'Cabeceras', slug: 'cabeceras' },
            { name: 'Cunas', filter: 'Cunas', slug: 'cunas' }
        ]
    }
];

// --- PRODUCT CATALOG SUB-ARRAYS ---

const RESORTE_PRODUCTS = [
    // COLECCIÓN INFANTIL
    {
        id: 'cuna-travesuras',
        name: 'Cuna Travesuras Tela Tricot',
        category: 'resorte',
        subcategory: 'Infantil',
        warranty: '1 año',
        price: 499,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80',
        description: 'Tela infantil hipoalergénica con diseños lúdicos para el descanso del bebé.',
        sizes: ['Infantil'],
        features: ['Hipoalergénico', 'Diseño Infantil'],
        badge: 'Bebé'
    },
    {
        id: 'cuna-golden',
        name: 'Cuna Golden Dream Tela de Punto',
        category: 'resorte',
        subcategory: 'Infantil',
        warranty: '1 año',
        price: 599,
        image: 'https://images.unsplash.com/photo-1519974310459-6a573188d797?q=80',
        description: 'Tejido de punto suave y elástico para un descanso superior del recién nacido.',
        sizes: ['Infantil'],
        features: ['Tejido Punto', 'Lujo Bebé'],
        badge: 'Bebé Premium'
    },

    // AVANCE MARCO DE ACERO
    {
        id: 'goldencito-ana',
        name: 'Goldencito Anatómico',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '1 año',
        price: 599,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80',
        description: 'Anatómico con resorte tradicional de alta resistencia para un descanso básico y firme.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Anatómico', 'Resorte Bonell'],
        badge: '1 Año Garantía'
    },
    {
        id: 'classic-ana',
        name: 'Classic',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '4 años',
        price: 849,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80',
        description: 'Equilibrio perfecto entre firmeza y confort. El colchón ideal para uso diario familiar.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Anatómico', 'Marco de Acero'],
        badge: '4 Años Garantía'
    },
    {
        id: 'pasiones-tricot',
        name: 'Pasiones One Pillow',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '5 años',
        price: 1199,
        image: 'https://images.unsplash.com/photo-1505693395921-87470d052614?q=80',
        description: 'Tela tricot de alta suavidad con un pillow de confort para un sueño reparador.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['One Pillow', 'Marco de Acero'],
        badge: '5 Años Garantía'
    },
    {
        id: 'pasiones-orto-lujo',
        name: 'Pasiones Pillow de Lujo',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '5 años',
        price: 1549,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Ortopédico de alta gama para el cuidado de tu espalda con acabado Luxury Edition.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Ortopédico', 'Marco de Acero'],
        badge: 'Lujo Class'
    },

    // AVANCE MARCO DE POLIURETANO
    {
        id: 'goldencito-mp',
        name: 'Goldencito Anatómico Mp',
        category: 'resorte',
        subcategory: 'Marco de Poliuretano',
        warranty: '2 años',
        price: 699,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80',
        description: 'Sistema MP (Máxima Permanencia) con refuerzo perimetral para mayor vida útil.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Marco Poliuretano', 'Refuerzo MP'],
        badge: '2 Años Garantía'
    },
    {
        id: 'infinito-mp',
        name: 'Infinito Mp',
        category: 'resorte',
        subcategory: 'Marco de Poliuretano',
        warranty: '4 años',
        price: 949,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80',
        description: 'Estructura infinita diseñada para uso rudo y duradero con sistema Máxima Permanencia.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Marco Poliuretano', 'Extra Firme'],
        badge: '4 Años Garantía'
    },

    // AVANCE GOLD
    {
        id: 'pasiones-mp',
        name: 'Pasiones One Pillow Mp',
        category: 'resorte',
        subcategory: 'Gold',
        warranty: '5 años',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1505693395921-87470d052614?q=80',
        description: 'Confort superior con sistema de Máxima Permanencia y acolchado de alta densidad.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Marco Poliuretano', 'One Pillow'],
        badge: '5 Años Garantía'
    },
    {
        id: 'pasiones-pt-mp',
        name: 'Pasiones Pillow Mp',
        category: 'resorte',
        subcategory: 'Gold',
        warranty: '5 años',
        price: 1399,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Sistema de pillow avanzado con marco de poliuretano para mayor estabilidad.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN'],
        features: ['Marco Poliuretano', 'Pillow System'],
        badge: 'Gold Collection'
    },
    {
        id: 'golden-dream-mp',
        name: 'Golden Dream Mp',
        category: 'resorte',
        subcategory: 'Gold',
        warranty: '6 años',
        price: 1699,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'La línea dorada de nuestro catálogo. Ingeniería de precisión para el máximo confort.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Premium Foam'],
        badge: '6 Años Garantía'
    },
    {
        id: 'siempre-one-pillow',
        name: 'Siempre One Pillow Mp',
        category: 'resorte',
        subcategory: 'Gold',
        warranty: '7 años',
        price: 1449,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Diseño eterno de alta resistencia con un pillow de gran confort y firmeza.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Marco Poliuretano', 'Garantía 7 años'],
        badge: '7 Años Garantía'
    },
    {
        id: 'siempre-pt',
        name: 'Siempre Pillow Mp',
        category: 'resorte',
        subcategory: 'Gold',
        warranty: '7 años',
        price: 1549,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Pillow Top permanente diseñado para durar siempre con garantía extendida.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Pillow Top'],
        badge: '7 Años Garantía'
    },

    // AVANCE DIAMONT
    {
        id: 'absolut-marco',
        name: 'Absolut Pillow Mp',
        category: 'resorte',
        subcategory: 'Diamont',
        warranty: '10 años',
        price: 2199,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Marco sellado al calor para máxima estabilidad perimetral y soporte total.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Máximo Soporte'],
        badge: '10 Años Garantía'
    },
    {
        id: 'ternura-pocket',
        name: 'Ternura Pocket Mp',
        category: 'resorte',
        subcategory: 'Diamont',
        warranty: '6 años',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Resortes independientes Pocket para una independencia de lechos total.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Pocket System'],
        badge: '6 Años Garantía'
    },
    {
        id: 'matrimonial-clasico',
        name: 'Matrimonial Pocket Mp',
        category: 'resorte',
        subcategory: 'Diamont',
        warranty: '6 años',
        price: 1349,
        image: 'https://images.unsplash.com/photo-1505693395921-87470d052614?q=80',
        description: 'El balance ideal para parejas que buscan confort clásico de alta durabilidad.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Pocket System'],
        badge: '6 Años Garantía'
    },
    {
        id: 'reconciliacion-pocket',
        name: 'Reconciliación Pocket Visco Mp',
        category: 'resorte',
        subcategory: 'Diamont',
        warranty: '10 años',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'La joya de la corona. Lo último en tecnología Pocket y Viscoelástica para un descanso real.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Viscoelástica', 'Pocket Elite'],
        badge: '10 Años Garantía'
    }
];

const ESPUMA_PRODUCTS = [
    // POLISEDA
    {
        id: 'poliseda-4',
        name: 'Colchón Poliseda 4"',
        category: 'espuma',
        subcategory: 'Poliseda',
        warranty: 'Stock',
        price: 349,
        thickness: '4"',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80',
        description: 'Espuma ligera de 4 pulgadas con forro Poliseda tacto suave.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Económica', 'Ligera'],
        badge: 'Ecco'
    },
    {
        id: 'poliseda-5-5',
        name: 'Colchón Poliseda 5.5"',
        category: 'espuma',
        subcategory: 'Poliseda',
        warranty: 'Stock',
        price: 399,
        thickness: '5.5"',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80',
        description: 'Espuma de densidad media con forro poliseda para uso juvenil o visitas.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Altura Media', 'Poliseda'],
        badge: 'Ecco Plus'
    },
    {
        id: 'poliseda-7',
        name: 'Colchón Poliseda 7"',
        category: 'espuma',
        subcategory: 'Poliseda',
        warranty: 'Stock',
        price: 499,
        thickness: '7"',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80',
        description: 'Espesor de 7 pulgadas para mayor soporte y durabilidad en espuma.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Soporte Firme', 'Poliseda'],
        badge: 'Recomendado'
    },
    {
        id: 'poliseda-8',
        name: 'Colchón Poliseda 8"',
        category: 'espuma',
        subcategory: 'Poliseda',
        warranty: 'Stock',
        price: 549,
        thickness: '8"',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80',
        description: 'Máximo espesor en la línea Poliseda para un descanso firme y estable.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Extra Soporte', 'Poliseda'],
        badge: 'Ecco Max'
    },
    // PLUS RESILENSE
    {
        id: 'resilense-5-5',
        name: 'Plus Resilense 5.5"',
        category: 'espuma',
        subcategory: 'Plus Resilense',
        warranty: '3 años',
        price: 599,
        thickness: '5.5"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Tecnología Resilense de alta recuperación con acabado acolchado.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Resiliente', 'Acolchado'],
        badge: 'Plus'
    },
    {
        id: 'resilense-7',
        name: 'Plus Resilense 7"',
        category: 'espuma',
        subcategory: 'Plus Resilense',
        warranty: '3 años',
        price: 699,
        thickness: '7"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Alta densidad con 7 pulgadas de espesor para un soporte ortopédico base.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Soporte Plus', '3 Años Garantía'],
        badge: 'Plus Pro'
    },
    {
        id: 'resilense-8',
        name: 'Plus Resilense 8"',
        category: 'espuma',
        subcategory: 'Plus Resilense',
        warranty: '3 años',
        price: 749,
        thickness: '8"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Soporte robusto de 8 pulgadas con máxima durabilidad Resilense.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Extra Resiliente', 'Durabilidad'],
        badge: 'Plus Elite'
    },
    {
        id: 'resilense-10',
        name: 'Plus Resilense 10"',
        category: 'espuma',
        subcategory: 'Plus Resilense',
        warranty: '3 años',
        price: 849,
        thickness: '10"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Extra grueso de 10 pulgadas para un soporte articular profesional.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['10 Pulgadas', 'Máximo Confort'],
        badge: 'Resilense Max'
    },
    // SPLENDIDO
    {
        id: 'splendido-7',
        name: 'Splendido 7"',
        category: 'espuma',
        subcategory: 'Splendido',
        warranty: '4 años',
        price: 799,
        thickness: '7"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Tela tricot premium con soporte Splendido anatómico y fresco.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Tela Tricot', 'Anatómico'],
        badge: 'Splendido 7'
    },
    {
        id: 'splendido-8',
        name: 'Splendido 8"',
        category: 'espuma',
        subcategory: 'Splendido',
        warranty: '4 años',
        price: 899,
        thickness: '8"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Tela tricot premium con soporte Splendido de alta densidad.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Tela Tricot', 'Soporte Pro'],
        badge: 'Splendido 8'
    },
    {
        id: 'splendido-10',
        name: 'Splendido 10"',
        category: 'espuma',
        subcategory: 'Splendido',
        warranty: '4 años',
        price: 999,
        thickness: '10"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'La máxima expresión de confort en la línea de espuma Splendido.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Extra Grueso', 'Splendido Elite'],
        badge: 'Splendido Max'
    },
    // TOPACIO
    {
        id: 'topacio-7',
        name: 'Topacio 7" + 1 Alm',
        category: 'espuma',
        subcategory: 'Topacio',
        warranty: '5 años',
        price: 849,
        thickness: '7"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Confort Topacio con 7 pulgadas de espesor y almohada de regalo.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Incluye Almohada', 'Confort Topacio'],
        badge: 'Combo 7'
    },
    {
        id: 'topacio-8',
        name: 'Topacio 8" + 1 Alm',
        category: 'espuma',
        subcategory: 'Topacio',
        warranty: '5 años',
        price: 949,
        thickness: '8"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'Durabilidad garantizada con soporte Topacio y almohada de regalo.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Regalo Almohada', 'Plus Soporte'],
        badge: 'Combo 8'
    },
    {
        id: 'topacio-10',
        name: 'Topacio 10" + 1 Alm',
        category: 'espuma',
        subcategory: 'Topacio',
        warranty: '5 años',
        price: 1049,
        thickness: '10"',
        image: 'https://images.unsplash.com/photo-1544026354-97845f778d06?q=80',
        description: 'El máximo lujo en espuma Topacio con obsequio de almohada premium.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['Regalo Almohada', 'Extra Lujo'],
        badge: 'Topacio Max'
    }
];

const COMPLEMENTARIOS_PRODUCTS = [
    {
        id: 'box-uni',
        name: 'Box Tarima Universal',
        category: 'dormitorio',
        subcategory: 'Box',
        warranty: '3 años',
        price: 699,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80',
        description: 'Base estructural de madera reforzada para cualquier tipo de colchón.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Madera Reforzada', 'Acabado Estético'],
        badge: 'Universal'
    },
    {
        id: 'cabe-brazo',
        name: 'Cabecera con Brazo',
        category: 'dormitorio',
        subcategory: 'Cabeceras',
        warranty: '2 años',
        price: 799,
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80',
        description: 'Cabecera envolvente de diseño moderno con brazos laterales confortables.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Moderno', 'Brazos Laterales'],
        badge: 'Luxe'
    },
    {
        id: 'mueble-lineal',
        name: 'Juego de Mueble Lineal 3.2m + Cojines',
        category: 'dormitorio',
        subcategory: 'Muebles',
        warranty: '2 años',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1616046375252-01e8e2b75c8?q=80',
        description: 'Set lineal completo con 3.2 metros de almacenamiento y cojines decorativos incluidos.',
        sizes: ['3.2m'],
        features: ['Almacenamiento', 'Cojines Incluidos', 'Diseño Lineal'],
        badge: 'Completo'
    },
    {
        id: 'mueble-luxe',
        name: 'Mueble de Luxe Seccional + Cojines',
        category: 'dormitorio',
        subcategory: 'Muebles',
        warranty: '3 años',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80',
        description: 'Mueble sectional de lujo con múltiples compartimentos y cojines decorativos premium.',
        sizes: ['Seccional'],
        features: ['Diseño Seccional', 'Cojines Premium', 'Lujo'],
        badge: 'Premium'
    }
];

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
