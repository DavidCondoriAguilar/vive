import React from 'react';
import { MdShield, MdSettings, MdVerifiedUser, MdLayers } from 'react-icons/md';

const ProductSpecsModal = ({ 
    product, 
    isOpen, 
    onClose, 
    specs = [], 
    detailedSpecs = [] 
}) => {
    const handleDownloadPDF = () => {
        // Create PDF content
        const pdfContent = `
FICHA TÉCNICA - ${product.name.toUpperCase()}
===============================================

ESPECIFICACIONES PRINCIPALES
----------------------------
${specs.map(spec => `${spec.label}: ${spec.value}`).join('\n')}

DETALLES TÉCNICOS
------------------
${detailedSpecs.map(category => `
${category.category.toUpperCase()}
${'-'.repeat(category.category.length)}
${category.items.map(item => `${item.name}: ${item.value}`).join('\n')}
`).join('\n')}

INFORMACIÓN ADICIONAL
---------------------
Producto: ${product.name}
Código: ${product.id}
Precio: S/ ${product.price.toLocaleString('es-PE')}
Fecha: ${new Date().toLocaleDateString('es-PE')}

SUEÑO DORADO - Calidad Superior en Descanso
Web: suenodorado.pe
Teléfono: (01) 989 223 448
        `.trim();

        // Create blob and download
        const blob = new Blob([pdfContent], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ficha-tecnica-${product.name.toLowerCase().replace(/\s+/g, '-')}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        // Close modal after download
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ficha Técnica</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{product.name}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {specs.map((spec) => (
                            <div key={spec.label} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-gold-500">{spec.icon}</span>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{spec.label}</p>
                                </div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{spec.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Specs */}
                    <div className="space-y-6">
                        {detailedSpecs.map((category) => (
                            <div key={category.category} className="border-l-2 border-gold-500 pl-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h4>
                                <div className="space-y-3">
                                    {category.items.map((item) => (
                                        <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                                            <span className="text-sm text-gray-900 dark:text-white font-medium">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Download Section */}
                    <div className="mt-8 p-4 bg-gold-50 dark:bg-gold-900/20 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h5 className="font-semibold text-gray-900 dark:text-white">Descargar Ficha Completa</h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400">PDF con especificaciones detalladas</p>
                            </div>
                            <button 
                                onClick={handleDownloadPDF}
                                className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Descargar PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSpecsModal;
