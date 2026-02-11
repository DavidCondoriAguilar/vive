import React, { useState } from 'react';
import { MdShield, MdSettings, MdVerifiedUser, MdLayers } from 'react-icons/md';
import { FaDownload, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';

const ProductSpecsModal = ({
    product,
    isOpen,
    onClose,
    specs: providedSpecs = [],
    detailedSpecs: providedDetailedSpecs = []
}) => {
    // Senior Data Derivation - Comprehensive Fallbacks & Deduplication
    const getDeduplicatedItems = (items) => {
        const seen = new Set();
        const result = [];
        const rawItems = Array.isArray(items) ? items : Object.entries(items || {}).map(([k, v]) => `${k}: ${v}`);

        rawItems.forEach(item => {
            const normalized = item.toLowerCase().trim();
            if (!seen.has(normalized)) {
                seen.add(normalized);
                const [name, ...valueParts] = item.split(':');
                result.push({
                    name: name?.trim() || 'Especificación',
                    value: valueParts.join(':')?.trim() || item
                });
            }
        });
        return result;
    };

    const derivedSpecs = providedSpecs.length > 0 ? providedSpecs : [
        { label: 'Categoría', value: product.category || 'Sistema de Descanso' },
        { label: 'Línea', value: product.subcategory || 'Premium' },
        { label: 'Garantía', value: product.warranty || product.especificaciones?.['Garantía'] || '10 Años Directa' },
        { label: 'Acabado', value: product.badge || 'Certificado de Fábrica' }
    ];

    const sections = [];

    // Build sections with deduplication to prevent double labels
    const coreList = getDeduplicatedItems(product.technicalSpecs?.colchon || product.features || []);
    if (coreList.length > 0) sections.push({ category: 'Arquitectura e Ingeniería', items: coreList.slice(0, 10) });

    const materialList = getDeduplicatedItems(product.technicalSpecs?.componentes || product.componentes || []);
    if (materialList.length > 0) sections.push({ category: 'Componentes y Materiales', items: materialList.slice(0, 10) });

    const experienceList = (product.beneficios || []).map(b => ({ name: 'Ventaja', value: b }));
    if (experienceList.length > 0) sections.push({ category: 'Protocolos de Bienestar', items: experienceList.slice(0, 6) });

    const specs = derivedSpecs;
    const detailedSpecs = providedDetailedSpecs.length > 0 ? providedDetailedSpecs : sections;

    const handleDownloadPDF = async () => {
        try {
            const { default: jsPDF } = await import('jspdf');
            const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pageWidth - (margin * 2);

            // Professional Palette
            const grayDark = [20, 20, 20];
            const grayMid = [80, 80, 80];
            const grayLight = [245, 245, 245];
            const viveGreen = [41, 156, 71];

            let curY = margin;

            // 1. BRAND HEADER (ELITE VIVE GREEN)
            doc.setFillColor(...viveGreen);
            doc.rect(0, 0, pageWidth, 40, 'F');

            doc.setTextColor(255, 255, 255);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(28);
            doc.text('VIVE', margin, 25);

            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.setCharSpace(2);
            doc.text('MANUFACTURA ESPECIALIZADA DE DESCANSO', margin, 32);
            doc.setCharSpace(0);

            // Tech ID (Top Right)
            doc.setFontSize(7);
            doc.text(`REF_ID: ${product.id?.toUpperCase() || 'VIVE-SYS'}`, pageWidth - margin - 35, 20);
            doc.text(`VERSIÓN: 2026.4.1`, pageWidth - margin - 35, 24);

            curY = 55;

            // 2. PRODUCT TITLE
            doc.setTextColor(...grayDark);
            doc.setFontSize(22);
            doc.setFont('helvetica', 'bold');
            doc.text(product.name.toUpperCase(), margin, curY);

            curY += 8;
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...grayMid);
            const descLines = doc.splitTextToSize(product.description || 'Sistema de ingeniería diseñado para la optimización del descanso profundo.', contentWidth);
            doc.text(descLines, margin, curY);
            curY += (descLines.length * 5) + 12;

            // 3. CORE SPECS GRID
            doc.setFillColor(...grayLight);
            doc.roundedRect(margin, curY, contentWidth, 25, 3, 3, 'F');

            let gridX = margin + 10;
            const gridW = (contentWidth - 20) / 4;

            specs.forEach((spec, i) => {
                doc.setFontSize(7);
                doc.setTextColor(...grayMid);
                doc.setFont('helvetica', 'bold');
                doc.text(spec.label.toUpperCase(), gridX + (i * gridW), curY + 10);

                doc.setFontSize(9);
                doc.setTextColor(...grayDark);
                doc.setFont('helvetica', 'bold');
                doc.text(String(spec.value), gridX + (i * gridW), curY + 16);
            });
            curY += 35;

            // 4. TECHNICAL SECTIONS
            detailedSpecs.forEach((section) => {
                if (curY > pageHeight - 40) { doc.addPage(); curY = margin + 10; }

                // Section Title with Accent Line
                doc.setDrawColor(...viveGreen);
                doc.setLineWidth(1);
                doc.line(margin, curY, margin + 5, curY);

                doc.setTextColor(...grayDark);
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.text(section.category.toUpperCase(), margin + 8, curY + 1);
                curY += 10;

                // Items list
                section.items.forEach((item) => {
                    doc.setFontSize(8);
                    doc.setTextColor(...grayMid);
                    doc.setFont('helvetica', 'normal');
                    doc.text(item.name, margin + 5, curY);

                    doc.setTextColor(...grayDark);
                    doc.setFont('helvetica', 'bold');
                    doc.text(String(item.value), pageWidth - margin, curY, { align: 'right' });

                    doc.setDrawColor(240, 240, 240);
                    doc.setLineWidth(0.1);
                    doc.line(margin + 5, curY + 2, pageWidth - margin, curY + 2);
                    curY += 7;
                });
                curY += 8;
            });

            // 5. TECHNICAL FOOTER & LEGAL
            curY = pageHeight - 35;
            doc.setDrawColor(230, 230, 230);
            doc.line(margin, curY, pageWidth - margin, curY);

            doc.setFontSize(7);
            doc.setTextColor(...grayMid);
            doc.setFont('helvetica', 'italic');
            const legal = "Este documento constituye una ficha técnica informativa. Los materiales y componentes están sujetos a certificaciones de calidad internacional. Vive se reserva el derecho de realizar optimizaciones técnicas sin previo aviso para garantizar la excelencia del producto.";
            const legalLines = doc.splitTextToSize(legal, contentWidth - 40);
            doc.text(legalLines, margin, curY + 8);

            // Final Branding
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...grayDark);
            doc.setFontSize(8);
            doc.text('VIVE // PERÚ', pageWidth - margin, curY + 25, { align: 'right' });
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6);
            doc.text(`EMISIÓN: ${new Date().toLocaleDateString('es-PE')} / AUTENTICIDAD_VERIFICADA`, pageWidth - margin, curY + 29, { align: 'right' });

            doc.save(`FICHA_TECNICA_VIVE_${product.name.toUpperCase().replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Error generando PDF:', error);
            alert('Error crítico al procesar la documentación técnica.');
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[250] bg-black/40 backdrop-blur-md transition-opacity duration-700 animate-fade-in"
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 bottom-0 z-[260] bg-white dark:bg-[#080808] border-l border-gray-100 dark:border-white/5 transition-transform duration-1000 cubic-bezier(0.19, 1, 0.22, 1) transform w-full max-w-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >

                {/* Header */}
                <div className="px-10 py-12 flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Análisis Técnico</h3>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">{product.name}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black dark:hover:text-white transition-all"
                    >
                        Cerrar
                        <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center group-hover:rotate-90 transition-transform">
                            <FaTimes />
                        </div>
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto h-[calc(100vh-280px)] px-10 custom-scrollbar">
                    <div className="space-y-12 pb-12">
                        {/* Summary Grid */}
                        {specs && specs.length > 0 && (
                            <div className="grid grid-cols-2 gap-px bg-gray-100 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5">
                                {specs.map((spec) => (
                                    <div key={spec.label} className="bg-white dark:bg-[#080808] p-8 space-y-2">
                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{spec.label}</p>
                                        <p className="text-sm font-black text-gray-900 dark:text-white">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Detailed Sections */}
                        {detailedSpecs && detailedSpecs.length > 0 && (
                            <div className="space-y-10">
                                {detailedSpecs.map((category) => (
                                    <div key={category.category} className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <h5 className="text-[10px] font-black text-vive-600 uppercase tracking-[0.4em]">{category.category}</h5>
                                            <div className="h-px flex-1 bg-gray-50 dark:bg-white/5"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {category.items.map((item) => (
                                                <div key={item.name} className="flex items-center justify-between text-xs py-2 border-b border-gray-50 dark:border-white/[0.02]">
                                                    <span className="text-gray-400 font-bold uppercase tracking-wider">{item.name}</span>
                                                    <span className="text-gray-900 dark:text-white font-black text-right ml-8">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-white dark:bg-[#080808] border-t border-gray-100 dark:border-white/5 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleDownloadPDF}
                            className="py-6 px-6 border border-gray-200 dark:border-white/10 rounded-3xl flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-gray-500 hover:text-black dark:hover:text-white uppercase tracking-[0.3em] text-[10px] font-black"
                        >
                            <FaDownload />
                            PDF Técnico
                        </button>
                        <a
                            href={getWhatsAppLink(`Hola Vive, solicito información detallada sobre el sistema: ${product.name}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-6 px-6 bg-green-500 text-white rounded-3xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all uppercase tracking-[0.3em] text-[10px] font-black shadow-xl shadow-green-500/10"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                            Consultar
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSpecsModal;
