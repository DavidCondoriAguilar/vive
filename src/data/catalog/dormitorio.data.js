// Importaciones de imágenes para Dormitorio y Complementos
import boxMain from '@assets/product-detail/box-cabecera/box-main.webp';
import boxDiag from '@assets/product-detail/box-cabecera/box-diag.webp';
import boxZoom from '@assets/product-detail/box-cabecera/box-zoom.webp';
import siempreOpMain from '@assets/product-detail/siempre-op/simpe-op.webp';
import boxPremiumMain from '@assets/product-detail/box-tarima-premium/box-tarima-premium.webp';
import boxPremiumDiag from '@assets/product-detail/box-tarima-premium/box-tarima-premium-diagonal.webp';
import boxPremiumZoom from '@assets/product-detail/box-tarima-premium/box-tarima-premium-zoom.webp';
import camaPremiumMain from '@assets/product-detail/cama-tapizada-premium-con-brazo/cama-tapizada-premium-con-brazo.webp';
import camaPremiumDiag from '@assets/product-detail/cama-tapizada-premium-con-brazo/cama-tapizada-premium-con-brazo-diagonal.webp';
import boxUniversalMain from '@assets/product-detail/box-tarima-universal/box-tarima-universal.webp';
import boxUniversalDiag from '@assets/product-detail/box-tarima-universal/box-tarima-universal-diagonal.webp';
import boxUniversalTwo from '@assets/product-detail/box-tarima-universal/box-tarima-universal-two.webp';
import camaUniversalMain from '@assets/product-detail/cama-universal-con-brazos/cama-universal-con-brazos.webp';
import camaUniversalHoriz from '@assets/product-detail/cama-universal-con-brazos/cama-universal-con-brazos-horizontal.webp';

// MUEBLE LUXE SECCIONAL
import luxeSeccionalMain from '@assets/product-detail/luxe-seccional/luxe-seccional.webp';
import luxeSeccionalFront from '@assets/product-detail/luxe-seccional/luxe-seccional-front.webp';

export const COMPLEMENTARIOS_PRODUCTS = [
    {
        id: 'box-tarima-premium-tapizado',
        name: 'Box Tarima Tapizado Premium',
        category: 'dormitorio',
        subcategory: 'Box-Premium',
        price: 899,
        image: camaPremiumMain,
        images: [camaPremiumMain, camaPremiumDiag],
        description: 'La máxima expresión de elegancia y soporte para tu colchón. Nuestro Box Tarima Premium está construido con madera seleccionada de alta densidad, tapizado en tela de alto gramaje con acolchado de última generación y esquineros reforzados para una durabilidad incomparable.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Madera Seleccionada', 'Patas Cromadas', 'Tela Alto Gramaje', 'Esquineros Reforzados', 'Acolchado Premium'],
        badge: 'Diseño Editorial',
        componentes: [
            'Estructura: Madera seleccionada y secada',
            'Soporte estructural con viga central reforzada',
            'Uniones de alta resistencia con pegamento industrial y tornillería',
            'Tapizado: Tela velvet de alto gramaje',
            'Acolchado: Capa de espuma High Resilience',
            'Acabado: Diseño ultra-soft con costuras de alta precisión',
            'Accesorios: Juego de 4 patas de acero cromado con deslizadores',
            'Seguridad: Esquineros plásticos resistentes a impactos',
            'Higiene: Funda interna antipolvo y antihumedad'
        ],
        especificaciones: {
            'Material Base': 'Madera seleccionada',
            'Tapiz': 'Tela alto gramaje premium',
            'Altura Base': '25 cm',
            'Altura Patas': '10 cm (Acero Cromado)',
            'Altura Total': '35 cm',
            'Garantía': 'Soporte estructural'
        },
        beneficios: [
            'Soporte silencioso y firme para cualquier tipo de colchón',
            'Aislamiento térmico que evita el paso de frío del suelo',
            'Patas cromadas que facilitan la limpieza por debajo',
            'Esquineros que protegen la base de golpes accidentales',
            'Diseño sofisticado que combina con cualquier decoración',
            'Tratamiento curado contra insectos y humedad'
        ]
    },
    {
        id: 'cama-tapizada-premium-brazo',
        name: 'Cama Tapizada Premium con Brazo',
        category: 'dormitorio',
        subcategory: 'Cama-Premium-Brazos',
        price: 1499,
        image: boxPremiumMain,
        images: [boxPremiumMain, boxPremiumDiag, boxPremiumZoom],
        description: 'La cúspide del confort y la sofisticación. Esta cama integra una base de alta resistencia con una cabecera envolvente de brazos laterales acolchados, diseñada para quienes buscan un refugio de descanso con estética editorial y materiales de primera línea.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Brazos Laterales', 'Cabecera Ergonómica', 'Madera seleccionada', 'Tela Premium Soft', 'Soporte Ultra-Firme'],
        badge: 'Exclusividad Royal',
        componentes: [
            'Estructura: Madera seleccionada',
            'Cabecera: Diseño envolvente con brazos laterales acolchados',
            'Soporte: Sistema de 12 listones reforzados para estabilidad total',
            'Tapizado: Tela Velvet / Iker de alto gramaje con acabado Soft-Touch',
            'Relleno: Espuma de alta resiliencia',
            'Patas: Diseño minimalista reforzado con base antideslizante'
        ],
        especificaciones: {
            'Estructura': 'Madera seleccionada',
            'Tapiz': 'Tela Premium Antimanchas',
            'Alto Base': '35 cm',
            'Alto Cabecera': '115 cm',
            'Ancho Brazo': '15 cm por lado',
            'Garantía': 'Soporte estructural'
        },
        beneficios: [
            'Sensación de protección y confort gracias a sus brazos laterales',
            'Soporte lumbar ideal para lectura o ver TV en cama',
            'Estructura robusta que elimina ruidos y movimientos',
            'Tela de fácil mantenimiento y alta resistencia al roce',
            'Estética premium que eleva el diseño de cualquier habitación',
            'Instalación profesional incluida en el envío'
        ]
    },
    {
        id: 'box-tarima-universal',
        name: 'Cama Tarima Universal + Cabecera con Brazo',
        category: 'dormitorio',
        subcategory: 'Cama-Universal-Brazos',
        price: 1299,
        image: boxUniversalMain,
        images: [boxUniversalMain, boxUniversalDiag, boxUniversalTwo],
        description: 'La combinación ideal de funcionalidad y confort para el hogar moderno. Este conjunto integra nuestra sólida base universal con una cabecera de diseño contemporáneo y brazos laterales ligeramente acolchados, ofreciendo una experiencia de descanso completa y accesible.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Brazos Laterales', 'Madera seleccionada', 'Tela de Alta Resistencia', 'Fácil Instalación', 'Soporte Estable'],
        badge: 'Éxito en Ventas',
        componentes: [
            'Estructura: Madera seleccionada y secada',
            'Cabecera: Diseño con brazos laterales acolchados para mayor abrigo',
            'Soporte: Sistema de listones reforzados de 2" x 3"',
            'Tapizado: Tela velvet de alta resistencia al desgaste',
            'Relleno: Capa de espuma de densidad equilibrada para confort básico',
            'Patas: Juego de 4 patas de alta estabilidad con base antideslizante'
        ],
        especificaciones: {
            'Estructura': 'Madera seleccionada',
            'Tapiz': 'Tela Poliseda / Tricot',
            'Alto Base': '35 cm',
            'Alto Cabecera': '110 cm',
            'Ancho Brazo': '12 cm por lado',
            'Garantía': 'Soporte estructural'
        },
        beneficios: [
            'Máximo confort y diseño a un precio altamente competitivo',
            'Brazos laterales que brindan una sensación envolvente en el descanso',
            'Estructura ligera pero muy resistente para una larga vida útil',
            'Diseño compacto que se adapta a dormitorios de diversos tamaños',
            'Montaje sencillo que no requiere herramientas complejas',
            'Respaldo técnico y garantía directa de fábrica'
        ]
    },
    {
        id: 'cama-universal-con-brazos',
        name: 'Box Tarima Universal',
        category: 'dormitorio',
        subcategory: 'Box-Universal',
        price: 599,
        image: camaUniversalMain,
        images: [camaUniversalMain, camaUniversalHoriz],
        description: 'La base fundamental para un descanso estable y duradero. El Box Tarima Universal combina una estructura de madera seleccionada con un diseño funcional de alta ventilación, optimizando el rendimiento de cualquier colchón y prolongando su vida útil.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Estructura Robusta', 'Ventilación Óptima', 'Madera Tratada', 'Tapizado Clásico', 'Soporte Equilibrado'],
        badge: 'Básico Esencial',
        componentes: [
            'Estructura: Madera seleccionada y secada para evitar distorsiones',
            'Soporte: Sistema de listones de alta resistencia (2" x 3")',
            'Tapizado: Tela poliseda de alta durabilidad con acolchado base',
            'Patas: Juego de 6 patas reforzadas con base de alta estabilidad',
            'Seguridad: Esquineros de protección contra impactos moderados',
            'Higiene: Sistema que facilita la circulación de aire interna'
        ],
        especificaciones: {
            'Material Estructura': 'Madera seleccionada',
            'Tapiz': 'Tela Poliseda / Tricot',
            'Altura Base': '25 cm',
            'Altura Patas': '10 cm',
            'Altura Total': '35 cm',
            'Garantía': 'Soporte estructural'
        },
        beneficios: [
            'Superficie totalmente plana que evita deformaciones en el colchón',
            'Estructura tratada contra la humedad y microorganismos',
            'Altura ideal que facilita subir y bajar de la cama sin esfuerzo',
            'Diseño ligero que permite mover la base fácilmente para limpieza',
            'Excelente relación calidad-precio con respaldo industrial',
            'Compatible con todas las líneas de colchones Sueño Dorado'
        ]
    },
    {
        id: 'mueble-luxe',
        name: 'Mueble de Luxe Seccional + Cojines',
        category: 'dormitorio',
        subcategory: 'Muebles-Independientes',
        price: 1899,
        image: luxeSeccionalMain,
        images: [luxeSeccionalMain, luxeSeccionalFront],
        description: 'Sofá seccional de diseño contemporáneo que combina elegancia y máximo confort. Incluye cojines decorativos de suave textura y una estructura robusta para una durabilidad excepcional en tu sala o dormitorio.',
        sizes: ['Seccional'],
        features: ['Diseño Seccional', 'Cojines Premium', 'Textura Soft', 'Estructura Reforzada'],
        badge: 'Pieza de Autor',
        componentes: [
            'Estructura de madera tornillo tratada',
            'Relleno de espuma de alta densidad D25',
            'Tapicería en tela premium antimanchas',
            '4 Cojines decorativos de fibra siliconada',
            'Patas de material resistente con acabado espejo',
            'Sistema de resortes Nosag para mayor rebote'
        ],
        especificaciones: {
            'Medidas': '240 cm x 150 cm (Largo x Chaise)',
            'Altura total': '85 cm',
            'Profundidad asiento': '60 cm',
            'Material estructura': 'Madera seleccionada',
            'Tapizado': 'Tela Iker / Velvet premium',
            'Carga máxima': '350 kg'
        },
        beneficios: [
            'Optimización de espacios en esquina',
            'Fácil limpieza gracias a tela repelente',
            'Incluye cojines decorativos sin costo extra',
            'Acabados de lujo para ambientes modernos',
            'Soporte lumbar ergonómico',
            'Entrega e instalación profesional gratuita'
        ]
    }
];
