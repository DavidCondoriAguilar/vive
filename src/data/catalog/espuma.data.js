// Importaciones de imágenes para Espuma
import polisedaMain from '@assets/product-detail/poliseda/poliseda-main.webp';
import polisedaTwo from '@assets/product-detail/poliseda/poliseda-two.webp';
import polisedaDiag from '@assets/product-detail/poliseda/poliseda-diag.webp';
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
    // POLISEDA
    {
        id: 'poliseda',
        name: 'Colchón Poliseda',
        category: 'espuma',
        subcategory: 'Poliseda',
        warranty: 'Stock',
        price: 349, // Precio base para 4"
        image: polisedaMain,
        images: [
            polisedaMain,
            polisedaTwo,
            polisedaDiag
        ],
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
        image: plusResilenseMain,
        images: [
            plusResilenseMain,
            plusResilenseTwo,
            plusResilenseDiag
        ],
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
