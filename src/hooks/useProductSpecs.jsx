import { useMemo } from 'react';
import { MdShield, MdSettings, MdVerifiedUser, MdLayers } from 'react-icons/md';

export const useProductSpecs = (product) => {
    const specs = useMemo(() => [
        { label: 'Firmeza', value: 'Intermedia / Alta', icon: <MdShield className="w-5 h-5" /> },
        { label: 'Resortes', value: 'Pocket Independientes', icon: <MdSettings className="w-5 h-5" /> },
        { label: 'Garantía', value: '10 Años', icon: <MdVerifiedUser className="w-5 h-5" /> },
        { label: 'Material', value: 'Espuma Viscoelástica', icon: <MdLayers className="w-5 h-5" /> }
    ], []);

    const detailedSpecs = useMemo(() => [
        { category: 'Estructura', items: [
            { name: 'Núcleo', value: 'Espuma viscoelástica de alta densidad' },
            { name: 'Resortes', value: 'Sistema pocket independiente' },
            { name: 'Capas', value: '3 capas de confort progresivo' }
        ]},
        { category: 'Dimensiones', items: [
            { name: 'Alto', value: '25 cm' },
            { name: 'Densidad', value: '30 kg/m³' },
            { name: 'Peso', value: 'Varía según tamaño' }
        ]},
        { category: 'Características', items: [
            { name: 'Aireación', value: 'Zonas ventiladas' },
            { name: 'Tratamiento', value: 'Antiácaros y antibacterial' },
            { name: 'Cubierta', value: 'Tela stretch removible' }
        ]},
        { category: 'Certificación', items: [
            { name: 'Calidad', value: 'ISO 9001' },
            { name: 'Seguridad', value: 'Certificación internacional' },
            { name: 'Ecología', value: 'Materiales eco-friendly' }
        ]}
    ], []);

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
