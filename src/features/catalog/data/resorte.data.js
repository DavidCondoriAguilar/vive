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

export const RESORTE_PRODUCTS = [
    // 1. VENTTO MARCO POLIURETANO (DIAMONT - TOP 1)
    {
        id: 'ventto-marco',
        name: 'Ventto Marco Poliuretano',
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
                'Tela Tricot 16 mm',
                'Pillow densidad 23',
                'Marco densidad 26',
                'Sistema de resortes Bonnell Alto contenido de carbono',
                'Diseño reversible (doble cara)',
                'Soporte firme y uniforme'
            ],
            componentes: [
                'Tela Tricot 16 mm',
                'Pillow densidad 23',
                'Marco densidad 26',
                'Lámina de Notex',
                'Panel de resortes Bonnell Alto contenido de carbono',
                'Lámina de Notex',
                'Marco densidad 26'
            ]
        },
        description: 'Marco sellado al calor para máxima estabilidad perimetral y soporte total.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Máximo Soporte'],
        badge: 'Garantía de Fábrica'
    },
    // 3. SENSE PREMIUM (DIAMONT - TOP 3)
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
                'Tela Tricot Premium',
                'Pillow densidad 25',
                'Marco densidad 28',
                'Sistema de resortes Pocket Elite',
                'Diseño reversible (doble cara)',
                'Soporte ultra firme'
            ],
            componentes: [
                'Tela Tricot Premium 18 mm',
                'Pillow densidad 25',
                'Marco densidad 28',
                'Lámina de Notex',
                'Panel de resortes Pocket Elite',
                'Lámina de Notex',
                'Marco densidad 28'
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
        price: 1699,
        image: kaiMain,
        images: [
            kaiMain,
            kaiTwo,
            kaiDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela Tricot Elite',
                'Pillow densidad 23',
                'Marco densidad 26',
                'Sistema de resortes Bonnell Alto Carbono',
                'Diseño reversible (doble cara)',
                'Soporte optimizado'
            ],
            componentes: [
                'Tela Tricot Elite 16 mm',
                'Pillow densidad 23',
                'Marco densidad 26',
                'Lámina de Notex',
                'Panel de resortes Bonnell Alto Carbono',
                'Lámina de Notex',
                'Marco densidad 26'
            ]
        },
        description: 'Equilibrio perfecto entre tecnología y confort para un descanso superior.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Alto Carbono'],
        badge: 'Kai Series'
    },
    // 6. ENNA MP (DIAMONT - TOP 6)
    {
        id: 'enna-mp',
        name: 'Enna Mp',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 1599,
        image: ennaMpMain,
        images: [
            ennaMpMain,
            ennaMpTwo,
            ennaMpDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela Tricot Premium',
                'Pillow densidad 22',
                'Marco densidad 25',
                'Sistema de resortes Bonnell Carbono',
                'Diseño reversible (doble cara)',
                'Soporte superior'
            ],
            componentes: [
                'Tela Tricot Premium 16 mm',
                'Pillow densidad 22',
                'Marco densidad 25',
                'Lámina de Notex',
                'Panel de resortes Bonnell Carbono',
                'Lámina de Notex',
                'Marco densidad 25'
            ]
        },
        description: 'Tecnología MP avanzada con máximo confort y durabilidad para un descanso excepcional.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Tecnología MP'],
        badge: 'Enna Collection'
    },
    // 7. ITTA ORTOPÉDICO (DIAMONT - TOP 7)
    {
        id: 'itta',
        name: 'Itta Ortopédico',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 1849,
        image: ittaMain,
        images: [
            ittaMain,
            ittaTwo,
            ittaDiag
        ],
        description: 'Confort y elegancia en perfecta armonía para noches de descanso inolvidables. Sistema de soporte avanzado diseñado para la alineación perfecta de la columna.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Soporte Ortopédico', 'Tejido de Punto', 'Doble Cara'],
        badge: 'Nuevo Ingreso',
        technicalSpecs: {
            colchon: [
                'Tela Tejido de Punto Acolchada',
                'Capa de espuma de alta densidad D26',
                'Resortes Bonnell de 2.4mm',
                'Marco de poliuretano D28',
                'Tratamiento antialérgico',
                'Soporte firme progresivo'
            ],
            componentes: [
                'Tela de punto súper suave',
                'Espuma de confort D26',
                'Lámina de Notex aislante',
                'Panel de resortes de alto carbono',
                'Marco perimetral de poliuretano',
                'Acolchado premium de 28mm'
            ]
        }
    },
    // 8. VANORA DP (DIAMONT - TOP 8)
    {
        id: 'vanora-dp',
        name: 'Vanora Doble Pillow',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 1399,
        image: vanoraDpMain,
        images: [
            vanoraDpMain,
            vanoraDpTwo,
            vanoraDpDiag
        ],
        technicalSpecs: {
            colchon: [
                'Tela Tricot Elite',
                'Pillow densidad 20',
                'Marco densidad 23',
                'Sistema de resortes Bonnell Durabilidad',
                'Diseño reversible (doble cara)',
                'Soporte premium'
            ],
            componentes: [
                'Tela Tricot Elite 16 mm',
                'Pillow densidad 20',
                'Marco densidad 23',
                'Lámina de Notex',
                'Panel de resortes Bonnell Durabilidad',
                'Lámina de Notex',
                'Marco densidad 23'
            ]
        },
        description: 'Sistema DP de máxima permanencia con tecnología avanzada para un descanso superior.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Sistema DP'],
        badge: 'Vanora DP Series'
    },
    {
        id: 'gea-pt-mp-two-ortopedico-de-lujo',
        name: 'Gea Two Ortopédico de Lujo',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 2699,
        image: geaTwoOrtopedicoMain,
        images: [
            geaTwoOrtopedicoMain,
            geaTwoOrtopedicoDiag,
            geaTwoOrtopedicoZoom
        ],
        description: 'La máxima expresión del confort ortopédico. Sistema de Pillow Top reforzado para un soporte lumbar de élite y materiales de lujo.',
        sizes: ['2 PLZ', 'QUEEN', 'KING'],
        features: ['Ortopédico de Lujo', 'Refuerzo Lumbar', 'Sistema MP'],
        badge: 'Nuevo Lanzamiento',
        technicalSpecs: {
            colchon: [
                'Tela Tejido de Punto de 32 mm',
                'Doble Pillow Top Alta Densidad',
                'Estructura de resortes Bonnell de alto carbono',
                'Marco perimetral reforzado',
                'Tratamiento anticaros y antialérgico',
                'Soporte extra firme ortopédico'
            ],
            componentes: [
                'Capa superior Tejido de Punto Elite',
                'Doble capa de espuma Resilense D30',
                'Plancha de prensado Rebond de 2 pulgadas',
                'Panel de resortes reforzado con 2.4mm de espesor',
                'Marco de poliuretano D30 de alta resistencia',
                'Base inferior antideslizante'
            ]
        }
    },
    {
        id: 'kasse',
        name: 'Kasse Confort',
        category: 'resorte',
        subcategory: 'Diamont',
        price: 1749,
        image: kasseMain,
        images: [
            kasseMain,
            kasseTwo,
            kasseDiag
        ],
        description: 'Sofisticación y soporte en un solo diseño. El modelo Kasse ofrece una experiencia de descanso equilibrada con materiales de alta resiliencia.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Confort Equilibrado', 'Tela Premium', 'Alta Resiliencia'],
        badge: 'Exclusivo',
        technicalSpecs: {
            colchon: [
                'Tela Tejido de Punto Suave',
                'Capa de espuma de confort D25',
                'Sistema de resortes Bonnell Reforzado',
                'Marco de poliuretano de alta densidad',
                'Independencia de movimiento optimizada',
                'Soporte ergonómico'
            ],
            componentes: [
                'Tela de punto con tratamiento Fresh',
                'Espuma de poliuretano D25',
                'Lámina de Notex de alta densidad',
                'Panel de resortes de acero al carbono',
                'Marco perimetral reforzado',
                'Acolchado de lujo en multicapas'
            ]
        }
    }
];
