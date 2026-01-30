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
            { name: 'Box + Cabecera', filter: 'Box-Cabecera', slug: 'box-cabecera' },
            { name: 'Muebles', filter: 'Muebles-Independientes', slug: 'muebles' },
            { name: 'Cunas', filter: 'Infantil', slug: 'cunas' }
        ]
    }
];
