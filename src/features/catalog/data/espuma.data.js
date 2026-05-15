// Importaciones de imágenes para Espuma
import extraDescansoMain from '@assets/product-detail/extra-descanso/extra-descanso.webp';
import extraDescansoZoom from '@assets/product-detail/extra-descanso/extra-descanso-zoom.webp';

import riveteadoMain from '@assets/product-detail/riveteado/riveteado-main.webp';
import riveteadoDiag from '@assets/product-detail/riveteado/riveteado-diag.webp';
import riveteadoZoom from '@assets/product-detail/riveteado/riveteado-zozom.webp';

import buenDescansoMain from '@assets/product-detail/buen-descanso/buen-desncaso-main.webp';
import buenDescansoDiag from '@assets/product-detail/buen-descanso/buen-descanso.webp';

import hoteleroMain from '@assets/product-detail/hotelero/hotelero.webp';
import hoteleroDiag from '@assets/product-detail/hotelero/hoteler-dioag.webp';
import hoteleroZoom from '@assets/product-detail/hotelero/hoteler-zoom.webp';

export const ESPUMA_PRODUCTS = [
    {
        id: 'extra-descanso',
        name: 'Extra Descanso',
        category: 'espuma',
        subcategory: 'Intermedia',
        warranty: '3 años de garantía',
        price: 299,
        image: extraDescansoZoom,
        images: [extraDescansoZoom, extraDescansoMain],
        description: 'Diseñado para brindar el soporte ideal y prolongar tus horas de sueño profundo. Su combinación de espuma de alta densidad y tejido suave garantiza un descanso reparador.',
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        features: ['Espuma 440H', 'Tela de Punto', 'Soporte Óptimo'],
        firmness: 6,
        firmnessLabel: 'Equilibrado',
        badge: 'Confort Plus',
        technicalSpecs: {
            colchon: [
                'Núcleo de espuma de alta densidad 440H',
                'Tela de punto con acolchado de 12mm',
                'Soporte ergonómico adaptable',
                'Óptima distribución del peso'
            ],
            componentes: [
                'Espuma 440H',
                'Tela de Punto',
                'Acolchado Soft 12mm'
            ]
        }
    },
    {
        id: 'riveteado',
        name: 'Colchón Ribeteado',
        category: 'espuma',
        subcategory: 'Económica',
        price: 449,
        image: riveteadoDiag,
        images: [riveteadoDiag, riveteadoMain, riveteadoZoom],
        description: 'Colchón de construcción tradicional con acabado ribeteado que ofrece confort básico y ligereza. Una opción práctica y económica para el descanso diario.',
        sizes: ['1.5 PLZ (1.05m x 1.90m)', '2 PLZ (1.35m x 1.90m)', 'QUEEN (1.53m x 2.03m)', 'KING (1.93m x 2.03m)'],
        dimensionsInfo: [
            { label: '1.5 PLZ', value: '1.05m x 1.90m' },
            { label: '2 PLZ', value: '1.35m x 1.90m' },
            { label: 'QUEEN', value: '1.53m x 2.03m' },
            { label: 'KING', value: '1.93m x 2.03m' }
        ],
        features: ['Acabado Ribeteado', 'Línea Económica'],
        firmness: 3,
        firmnessLabel: 'Suave',
        badge: 'Línea Económica',
        technicalSpecs: {
            colchon: [
                'Colchón espuma 100T de alta flexibilidad',
                'Tela Poliseda de textura suave',
                'Acabado Ribeteado Tradicional',
                'Peso ligero para fácil manipulación'
            ],
            componentes: [
                'Espuma 100T',
                'Tela Poliseda',
                'Ribete Reforzado'
            ]
        }
    },
    {
        id: 'buen-descanso',
        name: 'Buen Descanso',
        category: 'espuma',
        subcategory: 'Económica',
        warranty: '1 año de garantía',
        price: 599,
        image: buenDescansoDiag,
        images: [buenDescansoDiag, buenDescansoMain],
        description: 'El equilibrio ideal entre soporte ergonómico y confort térmico. Diseñado con espuma de alta densidad para un sueño profundo y sin interrupciones.',
        features: ['Espuma 400HA', 'Tela Tricot', 'Soporte Ergonómico'],
        firmness: 4,
        firmnessLabel: 'Equilibrado',
        badge: 'Nuevo Ingreso',
        technicalSpecs: {
            colchon: [
                'Núcleo de espuma de alta densidad 400HA',
                'Tela Tricot con acolchado de 10mm',
                'Soporte Ergonómico',
                'Excelente distribución del peso corporal'
            ],
            componentes: [
                'Espuma 400HA',
                'Tela Tricot',
                'Acolchado Soft'
            ]
        }
    },
    {
        id: 'colchon-hotelero-3-estrellas',
        name: 'Colchón Hotelero 3 Estrellas',
        category: 'espuma',
        subcategory: 'Colchones-Hoteleros',
        price: 1499,
        image: hoteleroDiag,
        images: [hoteleroDiag, hoteleroMain, hoteleroZoom],
        description: 'La máxima expresión del descanso corporativo e institucional. Diseñado específicamente para hoteles de lujo, este colchón combina una estructura de resistencia industrial con capas de confort superior.',
        sizes: ['2 PLZ'],
        features: ['Resistencia Institucional', 'Soporte Ergónomico', 'Alta Densidad'],
        firmness: 10,
        firmnessLabel: 'Firme / Ergonómico',
        badge: 'Línea Institucional',
        technicalSpecs: {
            colchon: [
                'Núcleo de alta resistencia diseñado para uso continuo',
                'Tela Jacquard de gramaje hotelero',
                'Capas de espuma termo-compactada (Max-Firmeza)',
                'Bordes reforzados'
            ],
            componentes: [
                'Núcleo reforzado',
                'Jacquard Institucional',
                'Espuma Ortopédica Termo-Compactada'
            ]
        }
    }
];
