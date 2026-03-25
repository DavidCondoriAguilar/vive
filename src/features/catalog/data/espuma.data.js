// Importaciones de imágenes para Espuma
import extraDescansoMain from '@assets/product-detail/extra-descanso/extra-descanso.webp';
import extraDescansoZoom from '@assets/product-detail/extra-descanso/extra-descanso-zoom.webp';

import riveteadoMain from '@assets/product-detail/riveteado/riveteado-main.webp';
import riveteadoDiag from '@assets/product-detail/riveteado/riveteado-diag.webp';
import riveteadoZoom from '@assets/product-detail/riveteado/riveteado-zozom.webp';

export const ESPUMA_PRODUCTS = [
    {
        id: 'extra-descanso',
        name: 'Extra Descanso',
        category: 'espuma',
        subcategory: 'Complementos',
        price: 299,
        image: extraDescansoMain,
        images: [extraDescansoMain, extraDescansoZoom],
        description: 'Base ortopédica complementaria diseñada para extender la vida útil de tu colchón. Proporciona un soporte adicional firme y estable que mejora la distribución del peso y previene deformaciones prematuras.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Soporte Ortopédico', 'Estructura Reforzada', 'Anti-Deformación', 'Larga Duración'],
        badge: 'Soporte Extra',
        componentes: [
            'Estructura de madera de alta densidad',
            'Base de triplay antideslizante',
            'Refuerzo central de soporte',
            'Esquineros metálicos reforzados',
            'Acabado en tela transpirable',
            'Patas niveladoras ajustables'
        ],
        especificaciones: {
            'Material': 'Madera de alta densidad',
            'Base': 'Triplay antideslizante 15mm',
            'Altura': '15 cm',
            'Refuerzo': 'Viga central de soporte',
            'Acabado': 'Tela transpirable negra',
            'Carga máxima': '400 kg'
        },
        beneficios: [
            'Extiende la vida útil del colchón hasta 40%',
            'Previene deformaciones y hundimientos',
            'Mejora la distribución del peso corporal',
            'Base antideslizante que mantiene el colchón en su lugar',
            'Fácil de limpiar y mantener',
            'Compatible con todas las líneas de colchones'
        ]
    },
    {
        id: 'riveteado',
        name: 'Colchón Riveteado',
        category: 'espuma',
        subcategory: 'Colchones-Riveteado',
        price: 449,
        image: riveteadoMain,
        images: [riveteadoMain, riveteadoDiag, riveteadoZoom],
        description: 'Colchón de construcción tradicional con acabado riveteado que ofrece firmeza y durabilidad excepcionales. Ideal para quienes buscan un soporte ortopédico clásico con la calidad de fabricación artesanal.',
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['Acabado Riveteado', 'Firmeza Ortopédica', 'Alta Durabilidad', 'Soporte Tradicional'],
        badge: 'Clásico Firme',
        componentes: [
            'Núcleo de espuma de alta densidad D-28',
            'Acabado exterior riveteado tradicional',
            'Capa de confort con fibra hipoalergénica',
            'Base de soporte reforzada',
            'Tejido transpirable de protección',
            'Asas laterales para facilitar movimiento'
        ],
        especificaciones: {
            'Tipo': 'Espuma hipoalergénica',
            'Densidad': 'D-28 kg/m³',
            'Firmeza': 'Ortopédica (8/10)',
            'Altura': '20 cm',
            'Acabado': 'Riveteado tradicional',
            'Garantía': '5 años por defectos de fábrica'
        },
        beneficios: [
            'Soporte firme ideal para problemas de espalda',
            'Construcción duradera con acabados artesanales',
            'Material hipoalergénico que previene alergias',
            'Excelente ventilación gracias al diseño riveteado',
            'Mantenimiento mínimo requerido',
            'Relación calidad-precio inmejorable'
        ]
    }
];
