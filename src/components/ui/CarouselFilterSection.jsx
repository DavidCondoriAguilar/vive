import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import FilterDropdown from '@/components/ui/FilterDropdown';

const CarouselFilterSection = ({ 
  selectedCategory, 
  onCategoryChange, 
  filterOptions,
  showActiveFilter = true 
}) => {
  const getFilterDescription = (category) => {
    switch (category) {
      case 'Espuma':
        return 'Líneas: Poliseda • Plus Resilense • Splendido • Topacio';
      case 'Resorte':
        return 'Avance • Marco de Poliuretano • Gold • Diamont • Infantil';
      case 'Dormitorio':
        return 'Incluye: Cunas • Bases • Cabeceras';
      default:
        return 'Calidad directa de fábrica para tu descanso perfecto';
    }
  };

  return (
    <>
      {/* Filter Dropdown */}
      <div className="w-full lg:w-72">
        <FilterDropdown
          label="Filtrar por Colección"
          placeholder="Seleccionar Categoría"
          options={filterOptions}
          value={selectedCategory}
          onChange={onCategoryChange}
          icon={FaLayerGroup}
        />
      </div>

      {/* Active Filter Description */}
      {showActiveFilter && selectedCategory !== 'Todos' && (
        <div className="mb-8">
          <div className="bg-vive-50 dark:bg-vive-500/10 border border-vive-200 dark:border-vive-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-vive-500 rounded-full animate-pulse" />
              <div>
                <span className="text-[10px] font-black text-vive-600 dark:text-vive-400 uppercase tracking-widest">
                  Filtrando por: {filterOptions.find(f => f.id === selectedCategory)?.name}
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {getFilterDescription(selectedCategory)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselFilterSection;
