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
                relative group flex items-center gap-3 px-6 py-3 
                bg-white dark:bg-zinc-900 
                border border-gray-200 dark:border-white/10
                rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                disabled:opacity-70 disabled:cursor-wait
            `}
        >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-vive-500/0 via-vive-500/5 to-vive-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Icon & Loading Spinner */}
            <div className="relative">
                {isExporting ? (
                    <div className="w-5 h-5 border-2 border-vive-600/30 border-t-vive-600 rounded-full animate-spin" />
                ) : (
                    <HiOutlineDocumentDownload className="w-6 h-6 text-vive-600 group-hover:scale-110 transition-transform duration-500" />
                )}
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-vive-500 transition-colors">
                    Colección 2026
                </span>
                <span className="text-sm font-bold text-gray-800 dark:text-white">
                    {isExporting ? 'Generando PDF...' : 'Descargar Catálogo'}
                </span>
            </div>

            {/* Premium Indicator Badge */}
            {!isExporting && (
                <div className="ml-2 px-2 py-0.5 bg-vive-600/5 dark:bg-vive-600/10 border border-vive-600/10 rounded-md">
                    <span className="text-[8px] font-black text-vive-600 uppercase tracking-tighter">HD PDF</span>
                </div>
            )}

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-vive-600 group-hover:w-1/3 transition-all duration-700 rounded-full" />
        </button>
    );
};

export default DownloadCatalogButton;
