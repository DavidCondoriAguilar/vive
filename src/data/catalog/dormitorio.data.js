// Importaciones de imágenes para Dormitorio y Complementos
import boxMain from '@assets/product-detail/box-cabecera/box-main.webp';
import boxDiag from '@assets/product-detail/box-cabecera/box-diag.webp';
import boxZoom from '@assets/product-detail/box-cabecera/box-zoom.webp';
import siempreOpMain from '@assets/product-detail/siempre-op/simpe-op.webp';

// MUEBLE LUXE SECCIONAL
import luxeSeccionalMain from '@assets/product-detail/luxe-seccional/luxe-seccional.webp';
import luxeSeccionalFront from '@assets/product-detail/luxe-seccional/luxe-seccional-front.webp';

export const COMPLEMENTARIOS_PRODUCTS = [
    {
        id: 'box-cabecera-combo',
        name: 'Box Tarima Universal + Cabecera con Brazo',
        category: 'dormitorio',
        subcategory: 'Box-Cabecera',
        warranty: '3 años',
        price: 1299,
        image: boxMain,
        images: [boxMain, boxDiag, boxZoom],
        description: 'Combo perfecto para tu dormitorio: Base estructural de madera reforzada con ventilación superior y cabecera envolvente de diseño moderno con brazos laterales confortables. El conjunto ideal para maximizar confort y estilo.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Madera Reforzada', 'Cabecera con Brazos', 'Ventilación Superior', 'Diseño Moderno'],
        badge: 'Combo Premium',
        componentes: [
            'Box Tarima Universal:',
            'Estructura de madera de pino tratada',
            '10 listones de soporte (2" x 3")',
            'Centro reforzado con doble listón',
            'Patas ajustables de 10 cm',
            'Sistema de ventilación optimizado',
            '',
            'Cabecera con Brazo:',
            'Tela Tricot Premium 20 mm',
            'Espuma de alta densidad D25',
            'Brazos laterales acolchados',
            'Estructura de madera maciza',
            'Acabado antimanchas',
            'Diseño ergonómico'
        ],
        especificaciones: {
            'Material Box': 'Madera de pino tratada',
            'Alto Box': '35 cm',
            'Material Cabecera': 'Tela Tricot Premium',
            'Alto Cabecera': '110 cm',
            'Garantía': '3 años',
            'Instalación': 'Incluida'
        },
        beneficios: [
            'Combo completo con ahorro de S/.200',
            'Soporte superior para cualquier colchón',
            'Ventilación natural que evita humedad',
            'Apoyo lumbar ergonómico',
            'Brazos laterales para mayor comodidad',
            'Diseño moderno y elegante',
            'Instalación sencilla sin herramientas',
            '3 años de garantía total'
        ]
    },
    {
        id: 'mueble-lineal',
        name: 'Juego de Mueble Lineal 3.2m + Cojines',
        category: 'dormitorio',
        subcategory: 'Muebles-Independientes',
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
        subcategory: 'Muebles-Independientes',
        warranty: '3 años',
        price: 1899,
        image: luxeSeccionalMain,
        images: [luxeSeccionalMain, luxeSeccionalFront],
        description: 'Sofá seccional de diseño contemporáneo que combina elegancia y máximo confort. Incluye cojines decorativos de suave textura y una estructura robusta para una durabilidad excepcional en tu sala o dormitorio.',
        sizes: ['Seccional'],
        features: ['Diseño Seccional', 'Cojines Premium', 'Textura Soft', 'Estructura Reforzada'],
        badge: 'Lujo & Confort',
        componentes: [
            'Estructura de madera tornillo tratada',
            'Relleno de espuma de alta densidad D25',
            'Tapicería en tela premium antimanchas',
            '4 Cojines decorativos de fibra siliconada',
            'Patas de acero inoxidable con acabado espejo',
            'Sistema de resortes Nosag para mayor rebote'
        ],
        especificaciones: {
            'Medidas': '240 cm x 150 cm (Largo x Chaise)',
            'Altura total': '85 cm',
            'Profundidad asiento': '60 cm',
            'Material estructura': 'Madera seleccionada',
            'Tapizado': 'Tela Iker / Velvet premium',
            'Garantía': '3 años en estructura',
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
