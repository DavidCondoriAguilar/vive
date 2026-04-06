import React from 'react';
import { FaFingerprint } from 'react-icons/fa';
import RevealSection from '@shared/components/ui/RevealSection';

const CategoriesHeader = () => {
    return (
        <RevealSection className="text-center mb-20 md:mb-32 relative z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm mb-10 backdrop-blur-sm">
                <FaFingerprint className="text-vive-500 text-[10px] animate-pulse" />
                <span className="text-[9px] font-mono font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.4em]">
                    Selección Curada // Vive 2026
                </span>
            </div>

            <h2 className="text-4xl md:text-7xl lg:text-[85px] font-display font-black text-gray-900 dark:text-white uppercase leading-[0.82] tracking-tighter mb-10">
                La Colección <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 italic font-brand lowercase tracking-normal px-2">
                    exclusiva
                </span>
            </h2>


        </RevealSection>
    );
};

export default CategoriesHeader;
