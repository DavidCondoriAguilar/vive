// Importaciones de imágenes para Resorte
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
import matriMain from '@assets/product-detail/matri/matri-main.webp';
import matriTwo from '@assets/product-detail/matri/matri-two.webp';
import matriDiag from '@assets/product-detail/matri/matri-diag.webp';
import siempreOpMain from '@assets/product-detail/siempre-op/simpe-op.webp';
import siempreOneMain from '@assets/product-detail/siempre-one/siempre-one-main.webp';
import siempreOneDiag from '@assets/product-detail/siempre-one/siempre-one-diag.webp';
import siempreOneZoom from '@assets/product-detail/siempre-one/siempre-one-zoom.webp';
import reconciliacionMain from '@assets/product-detail/reconciliacion/reconciliacion-main.webp';
import reconciliacionTwo from '@assets/product-detail/reconciliacion/reconciliacion-two.webp';
import reconciliacionDiag from '@assets/product-detail/reconciliacion/reconciliacion-diag.webp';

// ABSOLUT
import absolutMain from '@assets/product-detail/absolut/absolut-main.webp';
import absolutTwo from '@assets/product-detail/absolut/absolut-two.webp';
import absolutDiag from '@assets/product-detail/absolut/absolut-diag.webp';

export const RESORTE_PRODUCTS = [
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
        image: siempreOneMain,
        images: [siempreOneMain, siempreOneDiag, siempreOneZoom],
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
        image: absolutMain,
        images: [
            absolutMain,
            absolutTwo,
            absolutDiag
        ],
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
