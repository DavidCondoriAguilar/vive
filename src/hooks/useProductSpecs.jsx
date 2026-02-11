import { useMemo } from 'react';
import { MdShield, MdSettings, MdVerifiedUser, MdLayers } from 'react-icons/md';

export const useProductSpecs = (product) => {
    const specs = useMemo(() => [
        {
            label: 'Soporte',
            value: product.category === 'resorte' ? 'Resortes Reforzados' : 'Espuma de Alta Densidad',
            icon: <MdShield className="w-5 h-5" />
        },
        {
            label: 'Tecnología',
            value: product.features?.[0] || (product.category === 'resorte' ? 'Sistema Bonell' : 'Acolchado Plus'),
            icon: <MdSettings className="w-5 h-5" />
        },
        {
            label: 'Garantía',
            value: product.warranty || 'Consultar Stock',
            icon: <MdVerifiedUser className="w-5 h-5" />
        },
        {
            label: 'Material',
            value: product.category === 'resorte' ? 'Acero Carbono' : 'Espuma D25-D35',
            icon: <MdLayers className="w-5 h-5" />
        }
    ], [product]);

    const detailedSpecs = useMemo(() => [
        {
            category: 'Estructura Técnica', items: [
                { name: 'Núcleo Central', value: product.category === 'resorte' ? 'Parrilla de resortes' : 'Bloque de espuma resiliente' },
                { name: 'Tipo de Fibra', value: product.features?.join(', ') || 'Tejido Jacquard/Tricot' },
                { name: 'Línea de Diseño', value: product.subcategory || 'Estándar' }
            ]
        },
        {
            category: 'Dimensiones y Soporte', items: [
                { name: 'Espesor Real', value: product.thickness || '25 cm aprox.' },
                { name: 'Base Recomendada', value: 'Box Tarima Universal' },
                { name: 'Soporte Máximo', value: '90kg - 110kg por persona' }
            ]
        },
        {
            category: 'Atributos de Calidad', items: [
                { name: 'Garantía Real', value: `${product.warranty} de fabrica` },
                { name: 'Certificación', value: 'Control de Calidad Peruano' },
                { name: 'Higiene', value: 'Tratamiento Antiacaros' }
            ]
        }
    ], [product]);

    const generatePDFContent = useMemo(() => (productData, specsData, detailedSpecsData) => {
        return `
FICHA TÉCNICA - ${productData.name.toUpperCase()}
===============================================

ESPECIFICACIONES PRINCIPALES
----------------------------
${specsData.map(spec => `${spec.label}: ${spec.value}`).join('\n')}

DETALLES TÉCNICOS
------------------
${detailedSpecsData.map(category => `
${category.category.toUpperCase()}
${'-'.repeat(category.category.length)}
${category.items.map(item => `${item.name}: ${item.value}`).join('\n')}
`).join('\n')}

INFORMACIÓN ADICIONAL
---------------------
Producto: ${productData.name}
Código: ${productData.id}
Precio: S/ ${productData.price.toLocaleString('es-PE')}
Fecha: ${new Date().toLocaleDateString('es-PE')}

SUEÑO DORADO - Calidad Superior en Descanso
Web: suenodorado.pe
Teléfono: (01) 989 223 448
        `.trim();
    }, []);

    return {
        specs,
        detailedSpecs,
        generatePDFContent
    };
};
