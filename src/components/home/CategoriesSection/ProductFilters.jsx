import React from 'react';
import { FaFilter, FaSortAmountDown, FaTags, FaRulerCombined, FaLayerGroup } from 'react-icons/fa';
import FilterDropdown from '@/components/ui/FilterDropdown';
import { CATEGORIES as ALL_CATEGORIES, getPrettySubcategoryName } from '@/utils/constants';

const UniversalProductFilters = ({
  selectedCategory,
  selectedSubcategory,
  selectedSize,
  sortBy,
  categories,
  subcategories,
  sizes,
  onCategoryChange,
  onSubcategoryChange,
  onSizeChange,
  onSortChange,
  showSort = false,
  showCategory = true,
  compact = false
}) => {

  // Calculate active filters count
  const activeFiltersCount = (selectedCategory !== 'todos' ? 1 : 0) +
    (selectedSubcategory !== 'todos' ? 1 : 0) +
    (selectedSize !== 'todos' ? 1 : 0);

  const sortOptions = [
    { value: 'featured', label: 'Predeterminado' },
    { value: 'name', label: 'Alfabético' }
  ];

  // Map subcategories with Professional Grouping
  const subcategoryOptions = [];
  subcategoryOptions.push({ id: 'todos', name: 'Todos los modelos' });

  if (selectedCategory !== 'todos') {
    // Just show subcategories of the selected category
    const catData = ALL_CATEGORIES.find(c => c.id === selectedCategory);
    catData?.subcategories?.forEach(sub => {
      // Only add if it actually exists in the current product set
      if (subcategories.includes(sub.filter)) {
        subcategoryOptions.push({ id: sub.filter, name: sub.name });
      }
    });

    // Add any subcategories that might be missing from the definition but exist in products
    subcategories.forEach(s => {
      if (s !== 'todos' && !subcategoryOptions.find(opt => opt.id === s)) {
        subcategoryOptions.push({ id: s, name: getPrettySubcategoryName(s) });
      }
    });
  } else {
    // Show grouped subcategories for "Todas las Categorías"
    ALL_CATEGORIES.forEach(cat => {
      const validSubs = cat.subcategories?.filter(sub => subcategories.includes(sub.filter)) || [];
      if (validSubs.length > 0) {
        subcategoryOptions.push({ isGroup: true, name: cat.name });
        validSubs.forEach(sub => {
          subcategoryOptions.push({ id: sub.filter, name: sub.name, isSubOption: true });
        });
      }
    });

    // Catch-all group for items not in the official category mapping
    const mappedFilters = ALL_CATEGORIES.flatMap(c => c.subcategories?.map(s => s.filter) || []);
    const extraSubs = subcategories.filter(s => s !== 'todos' && !mappedFilters.includes(s));

    if (extraSubs.length > 0) {
      subcategoryOptions.push({ isGroup: true, name: 'Otros Modelos' });
      extraSubs.forEach(s => {
        subcategoryOptions.push({ id: s, name: getPrettySubcategoryName(s), isSubOption: true });
      });
    }
  }

  const sizeOptions = sizes.map(s => ({
    id: s,
    name: s === 'todos' ? 'Todas las medidas' : s
  }));

  return (
    <div className={`${compact ? 'mb-8' : 'mb-12'}`}>
      {/* Filters Header (Optional, for context) */}
      {!compact && (
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-vive-500/10 flex items-center justify-center">
              <FaFilter className="w-3.5 h-3.5 text-vive-500" />
            </div>
            <div>
              <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] block">Sinfonía de Confort</span>
              <h2 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Filtros Avanzados</h2>
            </div>
          </div>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-vive-500/10 border border-vive-500/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-vive-500 animate-pulse" />
              <span className="text-[10px] font-black text-vive-600 dark:text-vive-400 uppercase tracking-widest">
                {activeFiltersCount} Filtros Activos
              </span>
            </div>
          )}
        </div>
      )}

      {/* Main Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Category Dropdown */}
        {showCategory && categories && (
          <FilterDropdown
            label="Categoría"
            placeholder="Seleccionar Categoría"
            options={categories}
            value={selectedCategory}
            onChange={onCategoryChange}
            icon={FaLayerGroup}
          />
        )}

        {/* Subcategory Dropdown */}
        {subcategories && (
          <FilterDropdown
            label="Línea / Modelo"
            placeholder="Todos los modelos"
            options={subcategoryOptions}
            value={selectedSubcategory}
            onChange={onSubcategoryChange}
            icon={FaTags}
          />
        )}

        {/* Size Dropdown */}
        {sizes && (
          <FilterDropdown
            label="Medida"
            placeholder="Todas las medidas"
            options={sizeOptions}
            value={selectedSize}
            onChange={onSizeChange}
            icon={FaRulerCombined}
          />
        )}

        {/* Sort Dropdown */}
        {showSort && (
          <FilterDropdown
            label="Ordenar por"
            placeholder="Predeterminado"
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            icon={FaSortAmountDown}
          />
        )}
      </div>

      {/* Active Filters Summary - Visual feedback below grid */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 mt-8 animate-fade-in">
          {showCategory && selectedCategory !== 'todos' && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105">
              {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
              <button onClick={() => onCategoryChange('todos')} className="hover:text-vive-500 transition-colors">×</button>
            </div>
          )}
          {selectedSubcategory !== 'todos' && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-vive-500 text-black rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105">
              {getPrettySubcategoryName(selectedSubcategory)}
              <button onClick={() => onSubcategoryChange('todos')} className="hover:text-red-600 transition-colors">×</button>
            </div>
          )}
          {selectedSize !== 'todos' && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 border border-gray-200 dark:border-white/5">
              {selectedSize}
              <button onClick={() => onSizeChange('todos')} className="hover:text-red-500 transition-colors">×</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UniversalProductFilters;

