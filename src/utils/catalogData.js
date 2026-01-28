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
            { name: 'Cunas', filter: 'Infantil', slug: 'cunas' }
        ]
    }
];

// --- PRODUCT CATALOG SUB-ARRAYS ---

// Importaciones de imágenes usando alias Vite para desarrollo/producción
import cunaTravesuraMain from '@assets/product-detail/cuna-travesura/travesura-main.webp';
import cunaTravesuraTwo from '@assets/product-detail/cuna-travesura/travesura-two.webp';
import cunaTravesuraDiag from '@assets/product-detail/cuna-travesura/travesura-diag.webp';
import cunaResortMain from '@assets/product-detail/cuna-resort/cuna-resort-main.webp';
import cunaResortTwo from '@assets/product-detail/cuna-resort/cuna-resort-two.webp';
import cunaResortDiag from '@assets/product-detail/cuna-resort/cuna-resort-diag.webp';
import goldencitoAnatomico from '@assets/product-detail/goldencito-anatomico/goldencito-anatomico.webp';
import goldencitoAnatomicoTwo from '@assets/product-detail/goldencito-anatomico/goldencito-anatomico-two.webp';
import goldencitoAnatomicoDiag from '@assets/product-detail/goldencito-anatomico/goldencito-anatomico-diagonal.webp';
import detalleGoldencitoAnatomico from '@assets/product-detail/goldencito-anatomico/detalle-goldencito-anatomico.webp';
import classicAnatomico from '@assets/product-detail/classic-anatomico/classic-anatomico.webp';
import classicAnatomicoTwo from '@assets/product-detail/classic-anatomico/classic-anatomico-two.webp';
import classicAnatomicoDiag from '@assets/product-detail/classic-anatomico/classic-anatomico-diagonal.webp';
import detalleClassicAnatomico from '@assets/product-detail/classic-anatomico/detalle-classic-anatomico.webp';
import pasionesOnePillow from '@assets/product-detail/pasiones-one-pillow/pasiones-one-pillow.webp';
import pasionesOnePillowTwo from '@assets/product-detail/pasiones-one-pillow/pasiones-one-pillow-two.webp';
import pasionesOnePillowDiag from '@assets/product-detail/pasiones-one-pillow/pasiones-one-pillow-diagonal.webp';
import detallePasionesOnePillow from '@assets/product-detail/pasiones-one-pillow/detalle-pasiones-one-pillow.webp';
import pasionesPillowLujoMain from '@assets/product-detail/pasiones-pillow/pasiones-pillow-lujo-main.webp';
import pasionesPillowLujoTwo from '@assets/product-detail/pasiones-pillow/pasiones-pillow-lujo-two.webp';
import pasionesPillowLujoDiag from '@assets/product-detail/pasiones-pillow/pasiones-pillow-lujo-diagonal.webp';
import goldencitoMp from '@assets/product-detail/goldencito-mp/goldencito-mp.webp';
import goldencitoMpTwo from '@assets/product-detail/goldencito-mp/goldencito-mp-two.webp';
import goldencitoMpDiag from '@assets/product-detail/goldencito-mp/goldencito-mp-diagonal.webp';
import detallesGoldencitoMp from '@assets/product-detail/goldencito-mp/detalles-goldencito-mp.webp';
import infinitoMp from '@assets/product-detail/infinito-mp/infinito-mp.webp';
import infinitoMpTwo from '@assets/product-detail/infinito-mp/infinito-mp-two.webp';
import infinitoMpDiag from '@assets/product-detail/infinito-mp/infinito-mp-diagonal.webp';
import detalleInfinitoMp from '@assets/product-detail/infinito-mp/detalle-infinito-mp.webp';
import pasionesOnePillowMpMain from '@assets/product-detail/pasiones-one-pillow-mp/pasiones-one-pillow-main.webp';
import pasionesOnePillowMpDiag from '@assets/product-detail/pasiones-one-pillow-mp/pasiones-one-pillow-diagonal.webp';
import pasionesOnePillowMpDiagTwo from '@assets/product-detail/pasiones-one-pillow-mp/pasiones-one-pillow-diagonal-two.webp';
import goldenDreamMp from '@assets/product-detail/golden-dream-mp/golden-dream-mp.webp';
import goldenDreamMpTwo from '@assets/product-detail/golden-dream-mp/golden-dream-mp-two.webp';
import goldenDreamMpDiag from '@assets/product-detail/golden-dream-mp/golden-dream-mp-diagonal.webp';
import detalleGoldenDreamMp from '@assets/product-detail/golden-dream-mp/detalle-golden-dream-mp.webp';
import siempreOpMain from '@assets/product-detail/siempre-op/simpe-op.webp';
import matriMain from '@assets/product-detail/matri/matri-main.webp';
import matriTwo from '@assets/product-detail/matri/matri-two.webp';
import matriDiag from '@assets/product-detail/matri/matri-diag.webp';
import splendidoMain from '@assets/product-detail/splendido/splendido-main.webp';
import splendidoTwo from '@assets/product-detail/splendido/splendido-two.webp';
import splendidoDiag from '@assets/product-detail/splendido/splendido-diag.webp';
import topacioMain from '@assets/product-detail/topacio/topacio-main.webp';
import topacioTwo from '@assets/product-detail/topacio/topacio-two.webp';
import topacioDiag from '@assets/product-detail/topacio/topacio-diag.webp';
import reconciliacionMain from '@assets/product-detail/siempre-op/simpe-op.webp';
import reconciliacionTwo from '@assets/product-detail/siempre-op/simpe-op.webp';
import reconciliacionDiag from '@assets/product-detail/siempre-op/simpe-op.webp';

const RESORTE_PRODUCTS = [
    // COLECCIÓN INFANTIL
    {
        id: 'cuna-travesuras',
        name: 'Cuna Travesuras Tela Tricot',
        category: 'resorte',
        subcategory: 'Infantil',
        warranty: '1 año',
        price: 499,
        image: cunaTravesuraMain,
        images: [
            cunaTravesuraMain,
            cunaTravesuraTwo,
            cunaTravesuraDiag
        ],
        description: 'Diseño exclusivo con tejido tricot hipoalergénico que protege la piel sensible de tu bebé. Características especiales de seguridad y comodidad que la diferencian de otras cunas. Descubre por qué los padres la eligen.',
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
        image: cunaResortMain,
        images: [
            cunaResortMain,
            cunaResortTwo,
            cunaResortDiag
        ],
        description: 'Tejido de punto premium con tecnología avanzada que garantiza el descanso óptimo del recién nacido. Detalles exclusivos de seguridad y materiales de primera calidad que sorprenden a los expertos. Conoce lo que la hace especial.',
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
        image: goldencitoAnatomico,
        images: [
            goldencitoAnatomico,
            goldencitoAnatomicoTwo,
            goldencitoAnatomicoDiag
        ],
        technicalImage: detalleGoldencitoAnatomico,
        technicalSpecs: {
            colchon: [
                'Tela Tricot 16 mm',
                'Espuma de poliuretano D16 (1")',
                'Sistema de resortes Bonnell AC',
                'Diseño anatómico ergonómico',
                'Soporte firme y duradero'
            ],
            componentes: [
                'Tela Tricot 16 mm',
                'Espuma de poliuretano D16 (1")',
                'Lámina de Notex 80 gr',
                'Panel de resortes Bonnell AC',
                'Lámina de Notex 80 gr',
                'Espuma de poliuretano D16 (1")'
            ]
        },
        description: 'Anatómico con tecnología de resorte exclusiva que proporciona un descanso superior al básico. Características especiales de firmeza y durabilidad que sorprenden por su calidad. Descubre por qué es la elección inteligente.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Anatómico', 'Resorte Bonell'],
        badge: '1 Año Garantía'
    },
    {
        id: 'classic-ana',
        name: 'Classic Anatómico',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '4 años',
        price: 849,
        image: classicAnatomico,
        images: [
            classicAnatomico,
            classicAnatomicoTwo,
            classicAnatomicoDiag
        ],
        technicalImage: detalleClassicAnatomico,
        technicalSpecs: {
            colchon: [
                'Tela Tricot 16 mm',
                'Espuma de poliuretano D18 (1.5")',
                'Sistema de resortes Bonnell AC',
                'Diseño anatómico clásico',
                'Equilibrio firmeza-confort'
            ],
            componentes: [
                'Tela Tricot 16 mm',
                'Espuma de poliuretano D18 (1.5")',
                'Lámina de Notex 90 gr',
                'Panel de resortes Bonnell AC',
                'Lámina de Notex 90 gr',
                'Espuma de poliuretano D18 (1.5")'
            ]
        },
        description: 'Equilibrio perfecto entre firmeza y confort gracias a tecnología patentada. El colchón preferido por familias peruanas por razones que te sorprenderán. Conoce los detalles que lo hacen único.',
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['Anatómico', 'Marco de Acero'],
        badge: '4 Años Garantía'
    },
    {
        id: 'pasiones-tricot',
        name: 'Pasiones One Pillow',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '6 años',
        price: 1199,
        image: pasionesOnePillow,
        images: [
            pasionesOnePillow,
            pasionesOnePillowTwo,
            pasionesOnePillowDiag
        ],
        technicalImage: detallePasionesOnePillow,
        technicalSpecs: {
            colchon: [
                'Tela Jacquard alto gramaje 28 mm',
                'Espuma de poliuretano D16 (1")',
                'Prensado Rebond D66',
                'Sistema de resortes Bonnell AC',
                'Diseño One Pillow superior',
                'Confort premium y duradero'
            ],
            componentes: [
                'Tela Jacquard alto gramaje 28 mm',
                'Espuma de poliuretano D16 (1")',
                'Prensado Rebond D66',
                'Lámina de Notex 100 gr',
                'Panel de resortes Bonnell AC',
                'Lámina de Notex 100 gr',
                'Prensado Rebond D66',
                'Espuma de poliuretano D16 (1")',
                'Tela Jacquard alto gramaje 28 mm'
            ]
        },
        description: 'Tela tricot exclusiva con sistema pillow que redefine el concepto de descanso. Características únicas que los expertos en sueño recomiendan. Descubre el secreto de su confort superior.',
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['One Pillow', 'Marco de Acero'],
        badge: '6 Años Garantía'
    },
    {
        id: 'pasiones-orto-lujo',
        name: 'Pasiones Pillow de Lujo',
        category: 'resorte',
        subcategory: 'Marco de Acero',
        warranty: '5 años',
        price: 1549,
        image: pasionesPillowLujoTwo,
        images: [
            pasionesPillowLujoMain,
            pasionesPillowLujoTwo,
            pasionesPillowLujoDiag
        ],
        description: 'Ortopédico de alta gama con tecnología exclusiva para el cuidado de tu espalda. Acabado Luxury Edition con detalles que marcan la diferencia. Descubre por qué los especialistas lo recomiendan.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Ortopédico', 'Marco de Acero'],
        badge: 'Lujo Class'
    },

    // AVANCE MARCO DE POLIURETANO
    {
        id: 'goldencito-mp',
        name: 'Goldencito MP',
        category: 'resorte',
        subcategory: 'Marco de Poliuretano',
        warranty: '2 años',
        price: 699,
        image: goldencitoMp,
        images: [
            goldencitoMp,
            goldencitoMpTwo,
            goldencitoMpDiag
        ],
        technicalImage: detallesGoldencitoMp,
        technicalSpecs: {
            colchon: [
                'Tela Tricot 16 mm',
                'Espuma de poliuretano D16 (1")',
                'Sistema de resortes Bonnell AC',
                'Diseño reversible (doble cara)',
                'Soporte firme y uniforme'
            ],
            componentes: [
                'Tela Tricot 16 mm',
                'Espuma de poliuretano D16 (1")',
                'Lámina de Notex 100 gr',
                'Panel de resortes Bonnell AC',
                'Lámina de Notex 100 gr',
                'Espuma de poliuretano D16 (1")'
            ]
        },
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
        image: infinitoMp,
        images: [
            infinitoMp,
            infinitoMpTwo,
            infinitoMpDiag
        ],
        technicalImage: detalleInfinitoMp,
        technicalSpecs: {
            colchon: [
                'Tela Tricot 18 mm',
                'Espuma de poliuretano D20 (2")',
                'Sistema de resortes Bonnell AC',
                'Diseño estructural infinito',
                'Soporte extra firme'
            ],
            componentes: [
                'Tela Tricot 18 mm',
                'Espuma de poliuretano D20 (2")',
                'Lámina de Notex 120 gr',
                'Panel de resortes Bonnell AC',
                'Lámina de Notex 120 gr',
                'Espuma de poliuretano D20 (2")'
            ]
        },
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
        image: pasionesOnePillowMpMain,
        images: [
            pasionesOnePillowMpMain,
            pasionesOnePillowMpDiag,
            pasionesOnePillowMpDiagTwo
        ],
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
        image: pasionesPillowLujoMain,
        images: [
            pasionesPillowLujoMain,
            pasionesPillowLujoTwo,
            pasionesPillowLujoDiag
        ],
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
        image: goldenDreamMp,
        images: [
            goldenDreamMp,
            goldenDreamMpTwo,
            goldenDreamMpDiag
        ],
        technicalImage: detalleGoldenDreamMp,
        technicalSpecs: {
            colchon: [
                'Tela: Tejido de Punto Acolchada de 28mm (Mayor suavidad y frescura que el tricot común)',
                'Nivel de Confort: Espuma de Poliuretano de alta densidad (D18)',
                'Refuerzo Ortopédico: Plancha de Prensado Rebond D66 para máxima estabilidad lumbar',
                'Estructura: Sistema de resortes Bonnell AC de acero de alto carbono',
                'Diseño Reversible: Sistema Doble Cara (Double Side) para duplicar la vida útil',
                'Garantía: 6 años de respaldo total de fábrica'
            ],
            componentes: [
                'Capa de Contacto: Tela Tejido de Punto Acolchada (28mm)',
                'Amortiguación: Espuma de Poliuretano D18',
                'Estabilizador: Prensado Rebond D66',
                'Protector de Panel: Lámina de Notex de 120gr (Mayor resistencia que la de 100gr)',
                'Núcleo: Panel de resortes Bonnell AC',
                'Base de Soporte: Sistema simétrico de Notex, Rebond y Espuma D18 para uso reversible'
            ]
        },
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
        image: siempreOpMain,
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
        image: siempreOpMain,
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
        image: siempreOpMain,
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
        image: siempreOpMain,
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
        image: matriMain,
        images: [matriMain, matriTwo, matriDiag],
        description: 'El balance ideal para parejas que buscan confort clásico de alta durabilidad.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: [
            'Tela Tricot 16 mm',
            'Espuma de poliuretano D16 (1")',
            'Sistema de resortes Bonnell AC',
            'Diseño reversible (doble cara)',
            'Soporte firme y uniforme',
            'Lámina de Notex 100 gr',
            'Panel de resortes Bonnell AC'
        ],
        badge: '6 Años Garantía'
    },
    {
        id: 'reconciliacion-pocket',
        name: 'Reconciliación Pocket Visco Mp',
        category: 'resorte',
        subcategory: 'Diamont',
        warranty: '10 años',
        price: 2499,
        image: reconciliacionMain,
        images: [
            reconciliacionMain,
            reconciliacionTwo,
            reconciliacionDiag
        ],
        description: 'La joya de la corona. Lo último en tecnología Pocket y Viscoelástica para un descanso real.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Marco Poliuretano', 'Viscoelástica', 'Pocket Elite'],
        badge: '10 Años Garantía'
    }
];

const ESPUMA_PRODUCTS = [
    // POLISEDA
    {
        id: 'poliseda',
        name: 'Colchón Poliseda',
        category: 'espuma',
        subcategory: 'Poliseda',
        warranty: 'Stock',
        price: 349, // Precio base para 4"
        image: siempreOpMain,
        description: 'Colchón Poliseda ideal para juvenil y visitas. Disponible en 4 grosores: 4 pulgadas, 5.5 pulgadas, 7 pulgadas y 8 pulgadas. Entrega inmediata en Lima. Calidad y durabilidad garantizadas.',
        sizes: ['4"', '5.5"', '7"', '8"'],
        features: ['Económica', 'Ligera', 'Duradera'],
        badge: 'Poliseda Económica',
        sizePrices: {
            '4"': 349,
            '5.5"': 399,
            '7"': 499,
            '8"': 549
        },
        componentes: [
            'Tela Poliseda de alta durabilidad',
            'Espuma de poliuretano D18 (densidad media)',
            'Núcleo de espuma resilente',
            'Capa de confort de 2 cm',
            'Tratamiento antiácaros y antibacterial',
            'Bordes reforzados',
            'Tecnología de ventilación',
            'Acabado resistente al desgaste'
        ],
        especificaciones: {
            'Material': 'Espuma de poliuretano',
            'Densidad': 'D18 (18 kg/m³)',
            'Núcleo': 'Espuma resilente de alta recuperación',
            'Capa confort': '2 cm espuma suave',
            'Tela': 'Poliseda transpirable',
            'Altura 4"': '10 cm total',
            'Altura 5.5"': '14 cm total',
            'Altura 7"': '18 cm total',
            'Altura 8"': '20 cm total',
            'Peso': '8-15 kg según tamaño',
            'Base': 'Adecuado para somier y base',
            'Certificación': 'Hipoalergénico'
        },
        beneficios: [
            'Relación calidad-precio inmejorable',
            'Ideal para habitaciones de invitados',
            'Fácil transporte y manejo',
            'Material hipoalergénico seguro',
            'Larga vida útil',
            'No necesita mantenimiento especial',
            'Entrega inmediata disponible',
            'Perfecto para uso juvenil'
        ]
    },
    // PLUS RESILENSE
    {
        id: 'plus-resilense',
        name: 'Plus Resilense',
        category: 'espuma',
        subcategory: 'Plus Resilense',
        warranty: '3 años',
        price: 699, // Precio base para 7"
        image: siempreOpMain,
        description: 'Plus Resilense con espuma de alta densidad y tecnología avanzada. Disponible en 3 grosores: 7 pulgadas, 8 pulgadas y 10 pulgadas. Soporte ortopédico garantizado con 3 años de garantía. El mejor respaldo para tu espalda.',
        sizes: ['7"', '8"', '10"'],
        features: ['Alta Densidad', 'Tecnología Resilense', 'Soporte Ortopédico'],
        badge: 'Resilense Plus',
        sizePrices: {
            '7"': 699,
            '8"': 749,
            '10"': 849
        },
        componentes: [
            'Tela Resilense premium transpirable',
            'Espuma de poliuretano D25 (alta densidad)',
            'Núcleo Resilense de recuperación rápida',
            'Capa de confort ortopédico de 3 cm',
            'Tratamiento antiácaros y antimoho',
            'Perímetro reforzado con espuma extra',
            'Canales de ventilación interna',
            'Acabado anti-desgaste UV'
        ],
        especificaciones: {
            'Material': 'Espuma de poliuretano de alta densidad',
            'Densidad': 'D25 (25 kg/m³)',
            'Núcleo': 'Tecnología Resilense patentada',
            'Capa confort': '3 cm espuma ortopédica',
            'Tela': 'Resilense transpirable premium',
            'Altura 7"': '18 cm total',
            'Altura 8"': '20 cm total',
            'Altura 10"': '25 cm total',
            'Peso': '15-25 kg según tamaño',
            'Base': 'Compatible con cualquier somier',
            'Certificación': 'Ortopédico certificado',
            'Recuperación': '95% en 3 segundos'
        },
        beneficios: [
            'Soporte ortopédico superior',
            'Recuperación rápida del material',
            'Excelente ventilación interna',
            'Durabilidad extendida 8+ años',
            'Ideal para problemas de espalda',
            'No transmite movimiento',
            'Material hipoalergénico',
            '3 años de garantía total'
        ]
    },
    // SPLENDIDO
    {
        id: 'splendido',
        name: 'Splendido',
        category: 'espuma',
        subcategory: 'Splendido',
        warranty: '4 años',
        price: 799, // Precio base para 7"
        image: splendidoMain,
        images: [
            splendidoMain,
            splendidoTwo,
            splendidoDiag
        ],
        description: 'Splendido con tela tricot premium de alta calidad. Disponible en 3 grosores: 7 pulgadas, 8 pulgadas y 10 pulgadas. Tela transpirable y soporte anatómico con 4 años de garantía. Descanso superior y duradero.',
        sizes: ['7"', '8"', '10"'],
        features: ['Tela Tricot Premium', 'Anatómico', 'Fresco y Transpirable'],
        badge: 'Splendido Premium',
        sizePrices: {
            '7"': 799,
            '8"': 899,
            '10"': 999
        },
        componentes: [
            'Tela tricot premium de 28 mm',
            'Espuma viscoelástica de memoria',
            'Núcleo de espuma HR de alta resiliencia',
            'Capa anatómica de 4 cm',
            'Tratamiento antiácaros y antibacterial',
            'Bordes laterales reforzados',
            'Sistema de ventilación 3D',
            'Acabado antialérgico certificado'
        ],
        especificaciones: {
            'Material': 'Espuma viscoelástica + HR',
            'Densidad': 'D28 (28 kg/m³)',
            'Núcleo': 'Espuma HR de alta resiliencia',
            'Capa visco': '4 cm memoria de forma',
            'Tela': 'Tricot premium 28mm',
            'Altura 7"': '18 cm total',
            'Altura 8"': '20 cm total',
            'Altura 10"': '25 cm total',
            'Peso': '18-28 kg según tamaño',
            'Base': 'Somier recomendado',
            'Certificación': 'Oeko-Tex Standard 100',
            'Adaptación': '100% al cuerpo en 5 min'
        },
        beneficios: [
            'Adaptación perfecta al cuerpo',
            'Alivio de puntos de presión',
            'Tela tricot ultra transpirable',
            'Memoria de forma superior',
            'Ideal para parejas',
            'No transmite movimiento',
            'Certificación internacional',
            '4 años de garantía extendida'
        ]
    },
    // TOPACIO
    {
        id: 'topacio',
        name: 'Topacio',
        category: 'espuma',
        subcategory: 'Topacio',
        warranty: '5 años',
        price: 849, // Precio base para 7"
        image: topacioMain,
        images: [
            topacioMain,
            topacioTwo,
            topacioDiag
        ],
        description: 'Topacio con acabado premium y materiales de máxima calidad. Disponible en 3 grosores: 7 pulgadas, 8 pulgadas y 10 pulgadas. Alta densidad y durabilidad extrema con 5 años de garantía. El colchón de calidad superior que necesitas.',
        sizes: ['7"', '8"', '10"'],
        features: ['Alta Densidad', 'Confort Superior', 'Durabilidad Garantizada'],
        badge: 'Topacio Premium',
        sizePrices: {
            '7"': 849,
            '8"': 949,
            '10"': 1049
        },
        componentes: [
            'Tela Topacio exclusiva de lujo',
            'Espuma de poliuretano D30 (máxima densidad)',
            'Núcleo Topacio de última generación',
            'Capa de confort premium de 5 cm',
            'Tratamiento antiácaros triple acción',
            'Perímetro ultra reforzado',
            'Sistema de ventilación avanzada',
            'Acabado antimanchas y anti-humedad'
        ],
        especificaciones: {
            'Material': 'Espuma de poliuretano de máxima densidad',
            'Densidad': 'D30 (30 kg/m³)',
            'Núcleo': 'Tecnología Topacio exclusiva',
            'Capa confort': '5 cm espuma premium',
            'Tela': 'Topacio exclusiva de lujo',
            'Altura 7"': '18 cm total',
            'Altura 8"': '20 cm total',
            'Altura 10"': '25 cm total',
            'Peso': '20-30 kg según tamaño',
            'Base': 'Cualquier somier o base',
            'Certificación': 'Certificado Premium Internacional',
            'Durabilidad': '10+ años garantizados'
        },
        beneficios: [
            'Máxima durabilidad del mercado',
            'Confort superior garantizado',
            'Material premium de primera calidad',
            'Ventilación superior en todo el colchón',
            'Ideal para uso intensivo diario',
            'Resistencia a deformaciones',
            '5 años de garantía total extendida',
            'Inversión inteligente a largo plazo'
        ]
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
        image: siempreOpMain,
        description: 'Base estructural de madera reforzada para cualquier tipo de colchón. Diseño ingenioso que maximiza la ventilación y durabilidad. Descubre por qué es la elección preferida por expertos.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Madera Reforzada', 'Acabado Estético', 'Ventilación Superior'],
        badge: 'Universal',
        componentes: [
            'Estructura de madera de pino tratada',
            '10 listones de soporte (2" x 3")',
            'Centro reforzado con doble listón',
            'Esquinas metálicas de refuerzo',
            'Patas ajustables de 10 cm',
            'Acabado sellado anti-humedad',
            'Sistema de ventilación optimizado',
            'Uniones con tornillería galvanizada'
        ],
        especificaciones: {
            'Material': 'Madera de pino tratada',
            'Alto': '35 cm',
            'Ancho 1.5 PLZ': '160 cm',
            'Ancho 2 PLZ': '200 cm',
            'Ancho QUEEN': '210 cm',
            'Ancho KING': '220 cm',
            'Largo': '200 cm',
            'Listones': '10 unidades (2" x 3")',
            'Capacidad carga': '200 kg',
            'Peso': '45-60 kg según tamaño',
            'Acabado': 'Barniz marine anti-humedad',
            'Patas': '4 unidades ajustables'
        },
        beneficios: [
            'Soporte superior para cualquier colchón',
            'Ventilación natural que evita humedad',
            'Madera tratada contra insectos y hongos',
            'Instalación sencilla sin herramientas',
            'Patas ajustables para pisos irregulares',
            'Durabilidad extendida 10+ años',
            'Compatible con somiers y colchones',
            '3 años de garantía total'
        ]
    },
    {
        id: 'cabe-brazo',
        name: 'Cabecera con Brazo',
        category: 'dormitorio',
        subcategory: 'Cabeceras',
        warranty: '2 años',
        price: 799,
        image: siempreOpMain,
        description: 'Cabecera envolvente de diseño moderno con brazos laterales confortables. Detalles exclusivos de acabado y materiales premium que la diferencian. Descubre por qué es la elección preferida.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Moderno', 'Brazos Laterales', 'Acolchado Premium'],
        badge: 'Luxe',
        componentes: [
            'Tela Tricot Premium 20 mm',
            'Espuma de alta densidad D25',
            'Brazos laterales acolchados',
            'Estructura de madera maciza',
            'Base reforzada',
            'Acabado antimanchas',
            'Diseño ergonómico',
            'Instalación sencilla'
        ],
        especificaciones: {
            'Alto': '110 cm',
            'Ancho 1.5 PLZ': '160 cm',
            'Ancho 2 PLZ': '200 cm',
            'Ancho QUEEN': '210 cm',
            'Ancho KING': '220 cm',
            'Profundidad': '12 cm',
            'Material': 'Tela tricot premium',
            'Relleno': 'Espuma de alta densidad',
            'Estructura': 'Madera maciza',
            'Peso': '25-35 kg según tamaño'
        },
        beneficios: [
            'Apoyo lumbar ergonómico',
            'Brazos laterales para mayor comodidad',
            'Diseño moderno y elegante',
            'Fácil instalación',
            'Material duradero y resistente',
            'Compatible con cualquier colchón',
            'Acabado antimanchas',
            '2 años de garantía total'
        ]
    },
    {
        id: 'mueble-lineal',
        name: 'Juego de Mueble Lineal 3.2m + Cojines',
        category: 'dormitorio',
        subcategory: 'Muebles',
        warranty: '2 años',
        price: 1299,
        image: siempreOpMain,
        description: 'Set lineal completo con 3.2 metros de almacenamiento y cojines decorativos incluidos. Diseño inteligente que maximiza cada espacio. Descubre por qué es la solución perfecta para tu dormitorio.',
        sizes: ['3.2m'],
        features: ['Almacenamiento', 'Cojines Incluidos', 'Diseño Lineal'],
        badge: 'Completo',
        componentes: [
            'Estructura de melamina de alta calidad',
            '6 cajones con cierre suave',
            '2 puertas abatibles',
            'Espejo integrado',
            'Cojines decorativos premium',
            'Manijas de aluminio',
            'Patas metálicas ajustables',
            'Sistema anti-volcado'
        ],
        especificaciones: {
            'Largo total': '320 cm',
            'Alto': '180 cm',
            'Profundidad': '45 cm',
            'Material': 'Melamina de primera calidad',
            'Acabado': 'Laca mate resistente',
            'Cajones': '6 unidades (60x40x15 cm)',
            'Puertas': '2 unidades (80x180 cm)',
            'Espejo': '80x120 cm',
            'Cojines': '4 unidades incluidas',
            'Capacidad carga': '150 kg totales',
            'Peso': '180 kg'
        },
        beneficios: [
            'Máximo aprovechamiento de espacio',
            'Almacenamiento organizado y accesible',
            'Diseño moderno y funcional',
            'Materiales de alta durabilidad',
            'Fácil montaje incluido',
            'Cojines lavables',
            'Garantía de 2 años',
            'Entrega e instalación gratuitas'
        ]
    },
    {
        id: 'mueble-luxe',
        name: 'Mueble de Luxe Seccional + Cojines',
        category: 'dormitorio',
        subcategory: 'Muebles',
        warranty: '3 años',
        price: 1899,
        image: siempreOpMain,
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
