import React, { useState } from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { CatalogExportService } from '../../../features/catalog/services/CatalogExportService';

/**
 * DownloadCatalogButton
 * A premium UI component to export the product catalog as PDF.
 * Implements senior-level micro-interactions and high-end aesthetics.
 */
const DownloadCatalogButton = () => {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        setIsExporting(true);
        try {
            // Artificial delay to show the luxury loading state
            await new Promise(resolve => setTimeout(resolve, 1500));
            await CatalogExportService.generateDigitalCatalog();
        } catch (error) {
            console.error('Error exporting catalog:', error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className={`
                relative group flex items-center gap-3 px-8 py-4 overflow-hidden
                bg-vive-600 dark:bg-vive-500 
                border border-white/10
                rounded-2xl shadow-lg shadow-vive-600/20 hover:shadow-2xl hover:shadow-vive-600/40 
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                disabled:opacity-70 disabled:cursor-wait
            `}
        >
            {/* Satin Shine Sweep — diagonal light that crosses on hover */}
            <div className="absolute inset-0 -skew-x-[20deg] translate-x-[-120%] group-hover:translate-x-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />

            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Icon & Loading Spinner */}
            <div className="relative">
                {isExporting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <HiOutlineDocumentDownload className="w-6 h-6 text-white group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                )}
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:tracking-[0.35em] group-hover:text-white/80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    Colección 2026
                </span>
                <span className="text-sm font-bold text-white">
                    {isExporting ? 'Generando PDF...' : 'Descargar Catálogo'}
                </span>
            </div>

            {/* Premium Indicator Badge */}
            {!isExporting && (
                <div className="ml-2 px-2 py-0.5 bg-white/5 border border-white/10 rounded-md group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-700">
                    <span className="text-[8px] font-black text-white/60 group-hover:text-white uppercase tracking-tighter transition-colors duration-700">HD PDF</span>
                </div>
            )}

            {/* Bottom Border Reveal */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-2/3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full" />

            {/* Corner Accents — top-right and bottom-left */}
            <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white/30 transition-all duration-700" />
            <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white/30 transition-all duration-700" />
        </button>
    );
};

export default DownloadCatalogButton;
