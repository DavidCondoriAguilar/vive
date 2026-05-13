// Importaciones de imágenes para Resorte

// VENTTO
import geaMain from '@assets/product-detail/ventto/ventto-main.webp';
import geaTwo from '@assets/product-detail/ventto/ventto-zoom.webp';
import geaDiag from '@assets/product-detail/ventto/ventto-diag.webp';

// SENSE PREMIUM
import sensePremiumMain from '@assets/product-detail/sense-premium/sense-premium-main.webp';
import sensePremiumTwo from '@assets/product-detail/sense-premium/sense-premium-zoom.webp';
import sensePremiumDiag from '@assets/product-detail/sense-premium/sense-premium-diagonal.webp';


// KAI
import kaiMain from '@assets/product-detail/kai/kai-main.webp';
import kaiTwo from '@assets/product-detail/kai/kai-zoom.webp';
import kaiDiag from '@assets/product-detail/kai/kai-diagonal.webp';

// ENNA MP
import ennaMpMain from '@assets/product-detail/enna-mp/enna-mp.webp';
import ennaMpTwo from '@assets/product-detail/enna-mp/enna-mp-zoom.webp';
import ennaMpDiag from '@assets/product-detail/enna-mp/enna-mp-diag.webp';

// VANORA
import vanoraMain from '@assets/product-detail/vanora/itta-main.webp';
import vanoraTwo from '@assets/product-detail/vanora/itta-zoom.webp';
import vanoraDiag from '@assets/product-detail/vanora/itta-diag.webp';

// ITTA
import ittaMain from '@assets/product-detail/itta/itta-main.webp';
import ittaTwo from '@assets/product-detail/itta/itta-zoom.webp';
import ittaDiag from '@assets/product-detail/itta/itta-diag.webp';

// KASSE
import kasseMain from '@assets/product-detail/kasse/kasse-main.webp';
import kasseTwo from '@assets/product-detail/kasse/kasse-zoom.webp';
import kasseDiag from '@assets/product-detail/kasse/kasse-diag.webp';

// VANORA DP
import vanoraDpMain from '@assets/product-detail/vanora-dp/vanora-dp.webp';
import vanoraDpTwo from '@assets/product-detail/vanora-dp/vanora-dp-zoom.webp';
import vanoraDpDiag from '@assets/product-detail/vanora-dp/vanora-dp-diagonal.webp';


// GEA TWO ORTOPEDICO DE LUJO
import geaTwoOrtopedicoMain from '@assets/product-detail/gea-pt-mp/gea-pt-mp-main.webp';
import geaTwoOrtopedicoDiag from '@assets/product-detail/gea-pt-mp/gea-pt-mp-diag.webp';
import geaTwoOrtopedicoZoom from '@assets/product-detail/gea-pt-mp/gea-pt-mp-zoom.webp';

// VANORA SS
import vanoraSsMain from '@assets/product-detail/vanora-mp-ss/vanora-ss.webp';
import vanoraSsDiag from '@assets/product-detail/vanora-mp-ss/vanora-ss-diag.webp';
import vanoraSsTwo from '@assets/product-detail/vanora-mp-ss/vanora-ss-zoom.webp';

export const RESORTE_PRODUCTS = [
    // 1. ENNA MP (ECONÓMICA - TOP 1)
    {
        id: 'enna-mp',
        name: 'Enna Mp',
        category: 'resorte',
        subcategory: 'Económica',
        warranty: '2 años de garantía',
        price: 1599,
        image: ennaMpMain,
        images: [
            ennaMpMain,
            ennaMpTwo,
            ennaMpDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela Acolchada de Alta Resistencia Premium',
                'Aislante de tela termofusionada de 10mml',
                'Marco de espuma en alta densidad',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Diseño reversible (doble cara)',
                'Capa Protectora de Fibra (Notex) aislante',
                '1 PLZ: 0.90m x 1.90m',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'Soporte superior'
            ],
            componentes: [
                'Tela Acolchada de Alta Resistencia Premium 16 mm',
                'Aislante de tela termofusionada de 10mml',
                'Marco de espuma en alta densidad',
                'Capa Protectora de Fibra (Notex)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Capa Protectora de Fibra (Notex)',
                'Marco de espuma en alta densidad'
            ]
        },
        description: 'Tecnología MP avanzada con máximo confort y durabilidad para un descanso excepcional.',
        sizes: ['1 PLZ (0.90m x 1.90m)', '1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)'],
        dimensionsInfo: [
            { label: '1 PLZ', value: '0.90m x 1.90m' },
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' }
        ],
        features: ['Marco Poliuretano', 'Tecnología MP'],
        firmness: 2,
        firmnessLabel: 'Ultra Suave',
        badge: 'Enna Collection'
    },
    // 2. ITTA (DIAMONT - TOP 2)
    {
        id: 'itta',
        name: 'Itta',
        category: 'resorte',
        subcategory: 'Económica',
        warranty: '4 años de garantía',
        price: 1849,
        image: ittaMain,
        images: [
            ittaMain,
            ittaTwo,
            ittaDiag
        ],
        description: 'Confort y elegancia en perfecta armonía para noches de descanso inolvidables. Sistema de soporte avanzado diseñado para la alineación perfecta de la columna.',
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        features: ['Soporte Ortopédico', 'Tejido Tricot', 'Doble Cara'],
        firmness: 7,
        firmnessLabel: 'Equilibrado',
        badge: 'Nuevo Ingreso',
        technicalSpecs: {
            colchon: [
                'Tela Acolchada de Alta Resistencia (Tricot)',
                'Acolchado de 16mm',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Diseño reversible (doble cara)',
                '1 PLZ: 0.90m x 1.90m',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m',
                'Soporte firme Ergonómico'
            ],
            componentes: [
                'Tela Acolchada de Alta Resistencia (Tricot)',
                'Capa Protectora de Fibra (Notex) aislante',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente'
            ]
        }
    },
    // 3. VENTTO MARCO POLIURETANO (DIAMONT - TOP 3)
    {
        id: 'ventto-marco',
        name: 'Ventto MP PT',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 2199,
        image: geaMain,
        images: [
            geaMain,
            geaTwo,
            geaDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela tejido de punto de alto bramaje, alcolchada en 20mm',
                'Tela Acolchada de Alta Resistencia 16 mm',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Aislante de tela termofusionada',
                'Lamina de poliuretano de alta densidad 640H',
                'Marco de poliuretano en alta densidad 826H',
                'Capa de Confort Superior (Pillow)',
                'Diseño reversible (doble cara)',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m',
                'Soporte firme y uniforme'
            ],
            componentes: [
                'Tela Acolchada de Alta Resistencia 16 mm',
                'Capa de Confort Superior (Pillow)',
                'Capa Protectora de Fibra (Notex)',
                'Capa Protectora de Fibra (Notex)',
                'Refuerzo Lateral Firme (D26)'
            ]
        },
        description: 'Ingeniería de Confort Termo-Sellado: Marco perimetral de alta densidad diseñado para una estabilidad lateral superior, eliminando deformaciones y optimizando el soporte en cada rincón de descanso.',
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        features: ['Marco Termosellado', 'Poliuretano 826H', 'Soporte 9/10'],
        firmness: 9,
        firmnessLabel: 'Extra Firme',
        badge: 'Top Estabilidad'
    },
    // 4. SENSE PREMIUM (DIAMONT - TOP 4)
    {
        id: 'sense-premium',
        name: 'Sense Premium',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 1899,
        image: sensePremiumMain,
        images: [
            sensePremiumMain,
            sensePremiumTwo,
            sensePremiumDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela Acolchada de Alta Resistencia Premium',
                'Pillow densidad 25',
                'Refuerzo Lateral Extra Firme (D28)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Diseño reversible (doble cara)',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m',
                'Soporte ultra firme'
            ],
            componentes: [
                'Tela Acolchada de Alta Resistencia Premium 18 mm',
                'Pillow densidad 25',
                'Refuerzo Lateral Extra Firme (D28)',
                'Capa Protectora de Fibra (Notex)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Capa Protectora de Fibra (Notex)',
                'Refuerzo Lateral Extra Firme (D28)'
            ]
        },
        description: 'Sensación premium con tecnología de punta para un descanso excepcional.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Pocket Elite'],
        badge: 'Premium Series'
    },
    // 5. KAI (DIAMONT - TOP 5)
    {
        id: 'kai',
        name: 'Kai',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 2899,
        image: kaiMain,
        images: [
            kaiMain,
            kaiTwo,
            kaiDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela Tejido de Punto Premium de alto gramaje',
                'Arquitectura Híbrida: Resortes Pocket + Memory Foam',
                'Lamina de espuma Memory Foam de 1 pulgada en ambas caras',
                'Lamina de espuma 640H de 1 pulgada en ambas caras',
                'PANEL DE RESORTES POCKET (Independencia total)',
                'Refuerzo Lateral Firme 826H',
                'Tela no tejida NON-WOVEN de alta resistencia',
                'Tratamiento térmico y antibacterial',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m',
                'Adaptabilidad Anatómica Superior'
            ],
            componentes: [
                'Memory Foam de alta densidad',
                'Sistema de Resortes Pocket',
                'Espuma 640H Hi-Resilience',
                'Refuerzo Perimetral 826H'
            ]
        },
        description: 'Arquitectura de Descanso Híbrida: Fusión maestra de resortes Pocket y Memory Foam de alta densidad, diseñada para una adaptabilidad anatómica sin precedentes y una independencia de movimiento absoluta.',
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        features: ['Resortes Pocket', 'Memory Foam', 'Cero Movimiento'],
        firmness: 7,
        firmnessLabel: 'Equilibrado',
        badge: 'Híbrido Premium'
    },
    // 6. VANORA DP (DIAMONT - TOP 6)
    {
        id: 'vanora-dp',
        name: 'Vanora MP PT',
        category: 'resorte',
        subcategory: 'Intermedia',
        warranty: '7 años de garantía',
        price: 1399,
        image: vanoraDpMain,
        images: [
            vanoraDpMain,
            vanoraDpTwo,
            vanoraDpDiag
        ],
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        technicalSpecs: {
            colchon: [
                'Tela Tejido de Punto de alto gramaje',
                'Tratamiento Antibacterial y Antialérgico',
                'Tela acolchada de 18mm',
                'Doble Acolchado (Doble Pillow)',
                'Capa de espuma de 3/4 pulgada en ambos lados (1 pulgada)',
                'Capa de espuma de 3/4 pulgada en ambos lados (1 pulgada)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Marco Poliuretano 500H',
                'Tela aislante termofusionada de 6mm',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m',
                'Soporte Ergonómico Superior'
            ],
            componentes: [
                'Tejido de Punto de Lujo',
                'Doble Capa de Espuma (D18 y D23)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Aislante termofusionado 6mm'
            ]
        },
        description: 'Doble arquitectura de confort (Pillow Top) diseñada para una acogida envolvente y alivio de presión ergonómica. Sistema de máxima permanencia que garantiza un soporte elástico y duradero bajo estándares de ingeniería avanzada.',
        features: ['Doble Pillow Top', 'Soporte Ergonómico', 'Tejido Anti-Bacterial'],
        firmness: 7,
        firmnessLabel: 'Equilibrado',
        badge: 'Vanora MP PT Series'
    },
    // 7. GEA PT (INTERMEDIA)
    {
        id: 'gea-pt-mp-two-ortopedico-de-lujo',
        name: 'GEA PT',
        category: 'resorte',
        subcategory: 'Intermedia',
        warranty: '5 años de garantía',
        price: 2699,
        image: geaTwoOrtopedicoMain,
        images: [
            geaTwoOrtopedicoMain,
            geaTwoOrtopedicoDiag,
            geaTwoOrtopedicoZoom
        ],
        description: 'La máxima expresión del confort ergonómico. Sistema de Pillow Top reforzado para un soporte lumbar de élite y materiales de lujo.',
        sizes: ['1 PLZ (0.90m x 1.90m)', '1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1 PLZ', value: '0.90m x 1.90m' },
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        features: ['Pillow Top (doble acolchado)', 'Soporte Lumbar', 'Ergonómico'],
        firmness: 6,
        firmnessLabel: 'Equilibrado',
        badge: 'Nuevo Lanzamiento',
        technicalSpecs: {
            colchon: [
                'Tela tricot acolchada de 16mm',
                'Doble Pillow Top',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Marco perimetral reforzado',
                'Tratamiento antiácaros y antialérgico',
                '1 PLZ: 0.90m x 1.90m',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m',
                'Soporte extra firme ergonómico'
            ],
            componentes: [
                'Capa superior tela tricot',
                'Doble capa de espuma D18',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente'
            ]
        }
    },
    // 8. KASSE MP (ECONÓMICA)
    {
        id: 'kasse',
        name: 'Kasse MP',
        category: 'resorte',
        subcategory: 'Económica',
        warranty: '4 años de garantía',
        price: 1749,
        image: kasseMain,
        images: [
            kasseMain,
            kasseTwo,
            kasseDiag
        ],
        description: 'Sofisticación y soporte en un solo diseño. El modelo Kasse ofrece una experiencia de descanso equilibrada con materiales de alta resiliencia, con tecnologia invierno verano.',
        sizes: ['1 PLZ (0.90m x 1.90m)', '1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)'],
        dimensionsInfo: [
            { label: '1 PLZ', value: '0.90m x 1.90m' },
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' }
        ],
        features: ['Invierno / Verano', 'Alta Resiliencia', 'Tecnología MP'],
        firmness: 5,
        firmnessLabel: 'Equilibrado',
        badge: 'Exclusivo',
        technicalSpecs: {
            colchon: [
                'Lado Invierno: Tela Tejido de Punto Suave',
                'Lado Verano: Tela Acolchada de Alta Resistencia (Tricot) de 16mm',
                'Capa de espuma de alta firmeza (440H)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Refuerzo Lateral de Soporte (D18)',
                'Independencia de movimiento optimizada',
                'Soporte ergonómico'
            ],
            componentes: [
                'Tela Tejido de Punto Suave (Lado Invierno)',
                'Tela Acolchada de Alta Resistencia (Tricot) 16mm (Lado Verano)',
                'Espuma de poliuretano de alta firmeza (440H)',
                'Capa Protectora de Fibra (Notex) de alta densidad',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Refuerzo Lateral de Soporte (D18)'
            ]
        }
    },
    // 9. VANORA SS (INTERMEDIA)
    {
        id: 'vanora-ss',
        name: 'Vanora MP SS',
        category: 'resorte',
        subcategory: 'Intermedia',
        warranty: '6 años de garantía',
        price: 1999,
        image: vanoraSsMain,
        images: [
            vanoraSsMain,
            vanoraSsTwo,
            vanoraSsDiag
        ],
        description: 'Ingeniería de Soporte Perimetral: El modelo Vanora MP Super Side integra una arquitectura reforzada que elimina los puntos de presión y garantiza una estabilidad absoluta hasta en el último centímetro del colchón.',
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        features: ['Super Side Reforzado', 'Tratamiento Antibacterial', 'Alta Densidad'],
        firmness: 8,
        firmnessLabel: 'Firme',
        badge: 'Nuevo Ingreso',
        technicalSpecs: {
            colchon: [
                'Tela Tejido de Punto de alto gramaje',
                'Tratamiento Antibacterial y Antialérgico',
                'Tela acolchada de 18mm',
                'Banda Perimetral Mesh de 5cm: Tecnología de ventilación activa y transpirabilidad',
                'Capa de espuma de 1 pulgada en ambos lados (440H)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Tela aislante termofusionada de 6mm',
                '1.5 PLZ: 1.05m x 1.90m',
                '2 PLZ: 1.35m x 1.90m',
                'QUEEN: 1.53m x 2.03m',
                'KING: 1.93m x 2.03m'
            ],
            componentes: [
                'Tejido de Punto Premium',
                'Banda de Respiración Mesh (5cm)',
                'Espuma de alta resiliencia (440H)',
                'Panel de resortes de acerado con alto contenido carbono y templado eléctricamente',
                'Aislante termofusionado 6mm'
            ]
        }
    }
];
