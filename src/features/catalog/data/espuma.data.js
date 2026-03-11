// Importaciones de imágenes para Espuma
import polisedaMain from '@assets/product-detail/poliseda/poliseda-main.webp';
import polisedaTwo from '@assets/product-detail/poliseda/poliseda-main-two.webp';
import polisedaDiag from '@assets/product-detail/poliseda/poliseda-main-diag.webp';
import splendidoMain from '@assets/product-detail/splendido/splendido-main.webp';
import splendidoTwo from '@assets/product-detail/splendido/splendido-two.webp';
import splendidoDiag from '@assets/product-detail/splendido/splendido-diag.webp';
import topacioMain from '@assets/product-detail/topacio/topacio-main.webp';
import topacioTwo from '@assets/product-detail/topacio/topacio-two.webp';
import topacioDiag from '@assets/product-detail/topacio/topacio-diag.webp';

// PLUS RESILENSE
import plusResilenseMain from '@assets/product-detail/plus-resilense/plus-resilense-main.webp';
import plusResilenseTwo from '@assets/product-detail/plus-resilense/plus-resilense-two.webp';
import plusResilenseDiag from '@assets/product-detail/plus-resilense/plus-resilense-diag.webp';


export const ESPUMA_PRODUCTS = [
    // TOPACIO
    {
        id: 'topacio',
        name: 'Topacio',
        category: 'espuma',
        subcategory: 'Topacio',
        price: 849, // Precio base para 7"
        image: topacioMain,
        images: [
            topacioMain,
            topacioTwo,
            topacioDiag
        ],
        description: 'Topacio con acabado premium y materiales de máxima calidad. Disponible en 3 grosores: 7 pulgadas, 8 pulgadas y 10 pulgadas. Alta densidad y durabilidad extrema con garantía de fabrica. El colchón de calidad superior que necesitas.',
        sizes: ['7"', '8"', '10"'],
        features: ['Alta Densidad', 'Confort Superior', 'Durabilidad Garantizada'],
        badge: 'Máximo Confort',
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
            'Durabilidad': 'Garantía extendida'
        },
        beneficios: [
            'Máxima durabilidad del mercado',
            'Confort superior garantizado',
            'Material premium de primera calidad',
            'Ventilación superior en todo el colchón',
            'Ideal para uso intensivo diario',
            'Resistencia a deformaciones',
            'Garantía total extendida',
            'Inversión inteligente a largo plazo'
        ]
    },
    // SPLENDIDO
    {
        id: 'splendido',
        name: 'Splendido',
        category: 'espuma',
        subcategory: 'Splendido',
        price: 799, // Precio base para 7"
        image: splendidoMain,
        images: [
            splendidoMain,
            splendidoTwo,
            splendidoDiag
        ],
        description: 'Splendido con tela tricot premium de alta calidad. Disponible en 3 grosores: 7 pulgadas, 8 pulgadas y 10 pulgadas. Tela transpirable y soporte anatómico con garantía de fabrica. Descanso superior y duradero.',
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
            'Espuma microporosa de alta durabilidad',
            'Núcleo de espuma HR de alta resiliencia',
            'Capa anatómica de 4 cm',
            'Tratamiento antiácaros y antibacterial',
            'Bordes laterales reforzados',
            'Sistema de ventilación 3D',
            'Acabado antialérgico certificado'
        ],
        especificaciones: {
            'Material': 'Espuma microporosa de alta durabilidad',
            'Densidad': 'D16.5 (16.5 kg/m³)',
            'Núcleo': 'Espuma HR de alta resiliencia',
            'Capa Ergonómica': '4 cm soporte anatómico',
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
            'Soporte anatómico superior',
            'Ideal para parejas',
            'No transmite movimiento',
            'Certificación internacional',
            'Calidad Premium'
        ]
    },
    // PLUS RESILENSE
    {
        id: 'plus-resilense',
        name: 'Plus Resilense',
        category: 'espuma',
        subcategory: 'Plus Resilense',
        price: 699, // Precio base para 7"
        image: plusResilenseMain,
        images: [
            plusResilenseMain,
            plusResilenseTwo,
            plusResilenseDiag
        ],
        description: 'Plus Resilense with espuma de densidad 14 y tela Tricot acolchada. Disponible en 3 grosores: 7 pulgadas, 8 pulgadas y 10 pulgadas. Soporte ortopédico garantizado con garantía de fabrica. El mejor respaldo para tu espalda.',
        sizes: ['7"', '8"', '10"'],
        features: ['Densidad D14', 'Tela Tricot Acolchada', 'Soporte Ortopédico'],
        badge: 'Salud Ortopédica',
        sizePrices: {
            '7"': 699,
            '8"': 749,
            '10"': 849
        },
        technicalSpecs: {
            colchon: [
                'Tela Tricot acolchada de alta calidad',
                'Espuma de poliuretano D14',
                'Diseño anatómico mejorado',
                'Equilibrio firmeza-confort',
                'Tratamiento antiácaros y antibacterial'
            ],
            componentes: [
                'Tela Tricot acolchada 16 mm',
                'Espuma de poliuretano D14',
                'Lámina de Notex 90 gr',
                'Núcleo de espuma resilente',
                'Lámina de Notex 90 gr',
                'Espuma de poliuretano D14'
            ]
        },
        componentes: [
            'Tela Tricot acolchada premium transpirable',
            'Espuma de poliuretano D14',
            'Núcleo Resilense de recuperación rápida',
            'Capa de confort ortopédico de 3 cm',
            'Tratamiento antiácaros y antimoho',
            'Perímetro reforzado con espuma extra',
            'Canales de ventilación interna',
            'Acabado anti-desgaste UV'
        ],
        especificaciones: {
            'Material': 'Espuma de poliuretano densidad 14',
            'Densidad': 'D14 (14 kg/m³)',
            'Núcleo': 'Tecnología Resilense avanzada',
            'Capa confort': '3 cm espuma ortopédica',
            'Tela': 'Tricot acolchada premium',
            'Altura 7"': '18 cm total',
            'Altura 8"': '20 cm total',
            'Altura 10"': '25 cm total',
            'Peso': '12-22 kg según tamaño',
            'Base': 'Compatible con cualquier somier',
            'Certificación': 'Ortopédico certificado'
        },
        beneficios: [
            'Soporte ortopédico superior',
            'Recuperación rápida del material',
            'Excelente ventilación interna',
            'Durabilidad extendida con cuidado adecuado',
            'Ideal para problemas de espalda',
            'No transmite movimiento',
            'Material hipoalergénico',
            'Calidad Nacional'
        ]
    },
    // POLISEDA
    {
        id: 'poliseda',
        name: 'Colchón Poliseda',
        category: 'espuma',
        subcategory: 'Poliseda',
        price: 349, // Precio base para 4"
        image: polisedaMain,
        images: [
            polisedaMain,
            polisedaTwo,
            polisedaDiag
        ],
        description: 'Colchón Poliseda ideal para juvenil y visitas. Disponible en 4 grosores: 4 pulgadas, 5.5 pulgadas, 7 pulgadas y 8 pulgadas. Entrega inmediata en Lima. Calidad y durabilidad garantizadas.',
        sizes: ['4"', '5.5"', '7"', '8"'],
        features: ['Económica', 'Tela Tricot', 'Cierre Reforzado'],
        badge: 'Poliseda Económica',
        sizePrices: {
            '4"': 349,
            '5.5"': 399,
            '7"': 499,
            '8"': 549
        },
        componentes: [
            'Tela tricot de alta durabilidad',
            'Espuma de poliuretano D12 (densidad standar)',
            'Cierre reforzado de alta calidad',
            'Núcleo de espuma resilente',
            'Tratamiento antiácaros y antibacterial',
            'Bordes reforzados',
            'Tecnología de ventilación',
            'Acabado resistente al desgaste'
        ],
        especificaciones: {
            'Material': 'Espuma de poliuretano D12',
            'Densidad': 'D12 (densidad standar)',
            'Núcleo': 'Espuma de poliuretano',
            'Cierre': 'Reforzado',
            'Tela': 'Tricot de alta durabilidad',
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
    }
];
