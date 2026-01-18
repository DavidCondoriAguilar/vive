import React from 'react';
import { MdShield, MdSettings, MdVerifiedUser, MdLayers } from 'react-icons/md';
import jsPDF from 'jspdf';
import { PrimaryButton } from '@/components/ui/Buttons';

const ProductSpecsModal = ({ 
    product, 
    isOpen, 
    onClose, 
    specs = [], 
    detailedSpecs = [] 
}) => {
    const handleDownloadPDF = async () => {
        try {
            // Create PDF with jsPDF
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            // Configuración de estilos
            const colors = {
                primary: [0, 0, 0],
                text: [60, 60, 60],
                lightText: [120, 120, 120],
                border: [220, 220, 220],
                accent: [212, 175, 55]
            };

            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 15;
            const contentWidth = pageWidth - (margin * 2);

            let yPosition = margin;

            // ============ HEADER SECTION ============
            // Logo - Cargar imagen como base64
            try {
                const imgResponse = await fetch('/src/assets/images/logos/logo-main.jpg');
                const imgBlob = await imgResponse.blob();
                const reader = new FileReader();
                reader.onloadend = async () => {
                    const base64data = reader.result;
                    try {
                        doc.addImage(base64data, 'JPEG', margin, yPosition, 25, 25);
                    } catch (e) {
                        console.warn('Logo no disponible');
                    }
                };
                reader.readAsDataURL(imgBlob);
                yPosition += 28;
            } catch (err) {
                console.warn('Logo no disponible, continuando sin él');
                yPosition += 3;
            }

            // Título Principal
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('SUEÑO DORADO', margin + 30, yPosition - 5);

            // Subtítulo
            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.lightText);
            doc.text('Fabrica de Colchones Premium - Calidad Garantizada', margin + 30, yPosition + 3);

            // Línea divisoria
            yPosition += 10;
            doc.setDrawColor(...colors.border);
            doc.setLineWidth(0.3);
            doc.line(margin, yPosition, pageWidth - margin, yPosition);

            // ============ INFORMACIÓN DEL PRODUCTO ============
            yPosition += 8;
            doc.setFontSize(15);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.accent);
            const titleLines = doc.splitTextToSize(product.name.toUpperCase(), contentWidth);
            doc.text(titleLines, margin, yPosition);
            yPosition += (titleLines.length * 5) + 3;

            // Información general
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.text);

            const infoData = [
                { label: 'Codigo:', value: product.id },
                { label: 'Precio:', value: `S/ ${product.price.toLocaleString('es-PE')}` },
                { label: 'Fecha:', value: new Date().toLocaleDateString('es-PE') }
            ];

            infoData.forEach(info => {
                doc.setFont('helvetica', 'bold');
                doc.text(info.label, margin, yPosition);
                doc.setFont('helvetica', 'normal');
                doc.text(info.value, margin + 35, yPosition);
                yPosition += 5;
            });

            // ============ ESPECIFICACIONES PRINCIPALES ============
            if (specs && specs.length > 0) {
                yPosition += 6;

                // Título de sección
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...colors.primary);
                doc.text('ESPECIFICACIONES PRINCIPALES', margin, yPosition);

                // Línea decorativa
                doc.setDrawColor(...colors.accent);
                doc.setLineWidth(0.4);
                doc.line(margin, yPosition + 1.5, margin + 70, yPosition + 1.5);

                yPosition += 7;

                // Fondo para especificaciones
                doc.setFillColor(245, 245, 245);
                const specsHeight = (specs.length * 5) + 6;
                doc.rect(margin, yPosition - 2, contentWidth, specsHeight, 'F');

                // Contenido de especificaciones
                doc.setFontSize(8);
                doc.setTextColor(...colors.text);

                specs.forEach(spec => {
                    doc.setFont('helvetica', 'bold');
                    doc.text(spec.label + ':', margin + 1, yPosition);
                    doc.setFont('helvetica', 'normal');
                    doc.text(String(spec.value), margin + 65, yPosition);
                    yPosition += 5;
                });

                yPosition += 2;
            }

            // ============ DETALLES TÉCNICOS ============
            if (detailedSpecs && detailedSpecs.length > 0) {
                yPosition += 6;

                detailedSpecs.forEach((category) => {
                    // Verificar si necesita nueva página
                    if (yPosition > pageHeight - 35) {
                        doc.addPage();
                        yPosition = margin;
                    }

                    // Título de categoría
                    doc.setFontSize(10);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(...colors.primary);
                    doc.text(category.category.toUpperCase(), margin, yPosition);

                    // Línea decorativa
                    doc.setDrawColor(...colors.accent);
                    doc.setLineWidth(0.4);
                    doc.line(margin, yPosition + 1.5, margin + 55, yPosition + 1.5);

                    yPosition += 7;

                    // Items de la categoría
                    doc.setFontSize(8);
                    doc.setTextColor(...colors.text);

                    category.items.forEach(item => {
                        // Verificar si necesita nueva página
                        if (yPosition > pageHeight - 20) {
                            doc.addPage();
                            yPosition = margin;
                        }

                        doc.setFont('helvetica', 'bold');
                        doc.text(item.name + ':', margin, yPosition);

                        doc.setFont('helvetica', 'normal');
                        const valueText = String(item.value);
                        const maxWidth = contentWidth - 55;
                        const valueLines = doc.splitTextToSize(valueText, maxWidth);
                        doc.text(valueLines, margin + 55, yPosition);

                        yPosition += (valueLines.length > 1 ? valueLines.length * 3.5 : 4.5);
                    });

                    yPosition += 4;
                });
            }

            // ============ INFORMACIÓN DE CONTACTO Y GARANTÍA ============
            // Verificar nueva página
            if (yPosition > pageHeight - 45) {
                doc.addPage();
                yPosition = margin;
            }

            yPosition += 6;

            // Contacto
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('INFORMACIÓN DE CONTACTO', margin, yPosition);

            yPosition += 6;
            doc.setFontSize(7.5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.text);

            const contactInfo = [
                'Telefono: (01) 989 223 448',
                'Website: suenodorado.pe',
                'Ubicacion: Lima, Peru',
                'Calidad garantizada directo de fabrica'
            ];

            contactInfo.forEach(info => {
                doc.text(info, margin, yPosition);
                yPosition += 4;
            });

            // Garantía
            yPosition += 4;
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('GARANTÍA Y CERTIFICACIONES', margin, yPosition);

            yPosition += 6;
            doc.setFontSize(7.5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.text);

            const warranties = [
                '- Garantia de 10 anos',
                '- Certificacion ISO 9001',
                '- Materiales eco-friendly',
                '- Certificacion internacional de seguridad'
            ];

            warranties.forEach(warranty => {
                doc.text(warranty, margin, yPosition);
                yPosition += 4;
            });

            // ============ FOOTER ============
            // Línea divisoria superior
            doc.setDrawColor(...colors.border);
            doc.setLineWidth(0.3);
            doc.line(margin, pageHeight - 18, pageWidth - margin, pageHeight - 18);

            // Información de pie
            doc.setFontSize(6.5);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(...colors.lightText);
            doc.text(`Documento generado: ${new Date().toLocaleString('es-PE')}`, margin, pageHeight - 13);
            doc.text('© 2026 SUENO DORADO - Todos los derechos reservados', margin, pageHeight - 8);

            // ============ DESCARGAR PDF ============
            // Generar nombre del archivo
            const fileName = `ficha-tecnica-${product.name.toLowerCase().replace(/\s+/g, '-')}.pdf`;
            doc.save(fileName);

            // Cerrar modal
            onClose();
        } catch (error) {
            console.error('Error generando PDF:', error);
            alert('Error al generar el PDF. Intenta de nuevo.');
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
                role="presentation"
            />
            
            {/* Drawer Panel - Lateral Derecha */}
            <div 
                className={`fixed right-0 top-0 bottom-0 z-50 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 ease-out w-full max-w-2xl overflow-hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-labelledby="specs-title"
                aria-modal="true"
            >
                
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-5 flex items-center justify-between">
                    <div className="flex-1">
                        <h3 id="specs-title" className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Detalles Técnicos</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{product.name}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex-shrink-0"
                        aria-label="Cerrar detalles técnicos"
                        title="Cerrar detalles técnicos"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-[calc(100vh-140px)]">
                    <div className="p-6 space-y-6">
                        {/* Product Title */}
                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tighter">{product.name}</h2>
                            <p className="text-3xl font-bold text-gold-500">{typeof product.price === 'number' ? `S/ ${product.price.toLocaleString('es-PE')}` : product.price}</p>
                        </div>

                        {/* Quick Specs Grid */}
                        {specs && specs.length > 0 && (
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Especificaciones Clave</h4>
                                <div className="grid grid-cols-2 gap-3" role="list">
                                    {specs.map((spec) => (
                                        <div 
                                            key={spec.label} 
                                            className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-none hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                                            role="listitem"
                                        >
                                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1" id={`spec-label-${spec.label}`}>{spec.label}</p>
                                            <p className="text-sm font-black text-gray-900 dark:text-white" aria-labelledby={`spec-label-${spec.label}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Detailed Specs */}
                        {detailedSpecs && detailedSpecs.length > 0 && (
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Especificaciones Detalladas</h4>
                                <div className="space-y-4">
                                    {detailedSpecs.map((category) => (
                                        <div key={category.category} className="border-l-4 border-gold-500 pl-4">
                                            <h5 className="text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-wide">{category.category}</h5>
                                            <div className="space-y-2">
                                                {category.items.map((item) => (
                                                    <div key={item.name} className="flex items-center justify-between py-2 text-xs">
                                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
                                                        <span className="text-gray-900 dark:text-white font-bold">{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer - Actions */}
                <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6 space-y-3">
                    <button
                        onClick={handleDownloadPDF}
                        className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-black uppercase tracking-widest rounded-none hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        aria-label="Descargar ficha técnica en PDF"
                        title="Descargar ficha técnica en PDF"
                    >
                        📥 Descargar Ficha PDF
                    </button>
                    <a
                        href={`https://wa.me/51989223448?text=Hola%20quiero%20consultar%20sobre%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-black uppercase tracking-widest rounded-none transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                        aria-label={`Consultar disponibilidad de ${product.name} vía WhatsApp`}
                        title="Consultar disponibilidad vía WhatsApp"
                    >
                        💬 Consultar Disponibilidad
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProductSpecsModal;
