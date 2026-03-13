import React from 'react';
import { FaLayerGroup, FaRulerCombined } from 'react-icons/fa';
import FilterDropdown from '@/components/ui/FilterDropdown';
import RevealSection from '@/components/ui/RevealSection';

const CategoriesFilters = ({
    typeOptions,
    sizeOptions,
    selectedType,
    selectedSize,
    onTypeChange,
    onSizeChange,
    resultsCount
}) => {
    return (
        <RevealSection className="max-w-4xl mx-auto mb-16 px-6">
            <div className="bg-gray-50 dark:bg-[#0A0A0A] p-3 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-3 relative border border-gray-100 dark:border-white/5 shadow-2xl transition-all duration-700 hover:border-vive-500/20">
                <div className="relative group/filter">
                    <FilterDropdown
                        label="Gama de Producto"
                        placeholder="Filtrar por arquitectura"
                        options={typeOptions}
                        value={selectedType}
                        onChange={onTypeChange}
                        icon={FaLayerGroup}
                    />
                </div>
                <div className="relative group/filter">
                    <FilterDropdown
                        label="Medida Técnica"
                        placeholder="Filtrar por dimensión"
                        options={sizeOptions}
                        value={selectedSize}
                        onChange={onSizeChange}
                        icon={FaRulerCombined}
                    />
                </div>
            </div>
            
            <div className="mt-8 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-vive-500 rounded-full animate-ping"></span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">
                        Filtro Inteligente Activo
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-gray-900 dark:text-gray-300 uppercase tracking-widest">
                        {resultsCount} Modelos Encontrados
                    </span>
                    <div className="w-8 h-px bg-vive-500/30"></div>
                </div>
            </div>
        </RevealSection>
    );
};

export default CategoriesFilters;
