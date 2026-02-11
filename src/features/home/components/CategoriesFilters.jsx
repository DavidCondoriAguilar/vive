import React from 'react';
import { FaTags, FaRulerCombined } from 'react-icons/fa';
import FilterDropdown from '@/components/ui/FilterDropdown';

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
        <div className="max-w-5xl mx-auto mb-10 px-4">
            <div className="bg-gray-50 dark:bg-white/[0.03] p-2 rounded-3xl flex flex-col md:flex-row gap-2 relative group border border-gray-100 dark:border-white/5 shadow-2xl shadow-black/[0.02] z-[60]">
                <div className="flex-1">
                    <FilterDropdown
                        label="Línea / Modelo"
                        placeholder="Todos los modelos"
                        options={typeOptions}
                        value={selectedType}
                        onChange={onTypeChange}
                        icon={FaTags}
                    />
                </div>
                <div className="flex-1">
                    <FilterDropdown
                        label="Dimensión / Medida"
                        placeholder="Todas las medidas"
                        options={sizeOptions}
                        value={selectedSize}
                        onChange={onSizeChange}
                        icon={FaRulerCombined}
                    />
                </div>
            </div>
            <div className="mt-4 flex justify-between px-2">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Filtro Personalizado</span>
                <span className="text-[9px] font-mono text-vive-600/50 font-bold uppercase tracking-widest">Modelos Disponibles: {resultsCount}</span>
            </div>
        </div>
    );
};

export default CategoriesFilters;
