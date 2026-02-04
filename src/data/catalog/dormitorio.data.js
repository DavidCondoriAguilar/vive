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
        subcategory: 'Cama-Premium-Brazos',
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
            'Calidad Premium'
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
        badge: 'Lujo & Confort',
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
