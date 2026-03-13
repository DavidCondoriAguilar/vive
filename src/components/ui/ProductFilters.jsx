import React from 'react';
import { FaFilter, FaSortAmountDown, FaTags, FaRulerCombined, FaLayerGroup } from 'react-icons/fa';
import FilterDropdown from '@/components/ui/FilterDropdown';
import { CATEGORIES as ALL_CATEGORIES, getPrettySubcategoryName } from '@/utils/constants';

const UniversalProductFilters = ({
  selectedCategory,
  selectedSubcategory,
  selectedSize,
  sortBy,
  categories = [],
  subcategories = [],
  sizes = [],
  onCategoryChange,
  onSubcategoryChange,
  onSizeChange,
  onSortChange,
  showSort = false,
  showCategory = true,
  compact = false
}) => {

  const activeFiltersCount = (selectedCategory !== 'todos' ? 1 : 0) +
    (selectedSubcategory !== 'todos' ? 1 : 0) +
    (selectedSize !== 'todos' ? 1 : 0);

  const sortOptions = [
    { value: 'featured', label: 'Predeterminado' },
    { value: 'name', label: 'Alfabético (A-Z)' }
  ];

  const subcategoryOptions = [];
  subcategoryOptions.push({ id: 'todos', name: 'Todos los modelos' });

  if (selectedCategory !== 'todos') {
    const catData = ALL_CATEGORIES.find(c => c.id === selectedCategory);
    catData?.subcategories?.forEach(sub => {
      if (subcategories.includes(sub.filter)) {
        subcategoryOptions.push({ id: sub.filter, name: sub.name });
      }
    });

    subcategories.forEach(s => {
      if (s !== 'todos' && !subcategoryOptions.find(opt => opt.id === s)) {
        subcategoryOptions.push({ id: s, name: getPrettySubcategoryName(s) });
      }
    });
  } else {
    ALL_CATEGORIES.forEach(cat => {
      const validSubs = cat.subcategories?.filter(sub => subcategories.includes(sub.filter)) || [];
      if (validSubs.length > 0) {
        subcategoryOptions.push({ isGroup: true, name: cat.name });
        validSubs.forEach(sub => {
          subcategoryOptions.push({ id: sub.filter, name: sub.name, isSubOption: true });
        });
      }
    });

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
    <div className={`${compact ? 'mb-8' : 'mb-12'} relative z-30`}>
      {/* Header with Custom Subtitle */}
      {!compact && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 px-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white flex items-center justify-center shadow-xl shadow-black/10 dark:shadow-white/5">
              <FaFilter className="w-5 h-5 text-white dark:text-black" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black text-vive-600 dark:text-vive-400 uppercase tracking-[0.4em] block">Sartorial Selection</span>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Filtro Personalizado</h2>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest opacity-80">Refina tu búsqueda con precisión industrial</p>
            </div>
          </div>

          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-3 px-6 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full animate-in fade-in slide-in-from-right">
              <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">
                {activeFiltersCount} Filtros Aplicados
              </span>
              <button
                onClick={() => {
                  onCategoryChange('todos');
                  onSubcategoryChange('todos');
                  onSizeChange('todos');
                }}
                className="text-[9px] font-bold text-vive-600 hover:text-black dark:hover:text-white underline transition-colors"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Grid with Dynamic Subtitles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {/* Category */}
        {showCategory && (
          <FilterDropdown
            label="Categoría"
            subLabel="El núcleo de tu descanso"
            placeholder="Todas las series"
            options={categories}
            value={selectedCategory}
            onChange={onCategoryChange}
            icon={FaLayerGroup}
          />
        )}

        {/* Subcategory */}
        <FilterDropdown
          label="Línea / Modelo"
          subLabel="Diseños con propósito"
          placeholder="Todos los modelos"
          options={subcategoryOptions}
          value={selectedSubcategory}
          onChange={onSubcategoryChange}
          icon={FaTags}
        />

        {/* Size */}
        <FilterDropdown
          label="Dimensión / Medida"
          subLabel="Tu espacio vital"
          placeholder="Todas las medidas"
          options={sizeOptions}
          value={selectedSize}
          onChange={onSizeChange}
          icon={FaRulerCombined}
        />

        {/* Sort */}
        {showSort && (
          <FilterDropdown
            label="Ordenar por"
            subLabel="Propuesta de valor"
            placeholder="Predeterminado"
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            icon={FaSortAmountDown}
          />
        )}
      </div>

      {/* Visual Badge for Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 p-4 bg-gray-50/50 dark:bg-white/[0.02] rounded-2xl border border-dashed border-gray-200 dark:border-white/5">
          {showCategory && selectedCategory !== 'todos' && (
            <span className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
              {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
              <button onClick={() => onCategoryChange('todos')} className="hover:opacity-50 transition-opacity">×</button>
            </span>
          )}
          {selectedSubcategory !== 'todos' && (
            <span className="px-4 py-1.5 bg-vive-600 text-black rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
              {getPrettySubcategoryName(selectedSubcategory)}
              <button onClick={() => onSubcategoryChange('todos')} className="hover:opacity-50 transition-opacity">×</button>
            </span>
          )}
          {selectedSize !== 'todos' && (
            <span className="px-4 py-1.5 bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
              {selectedSize}
              <button onClick={() => onSizeChange('todos')} className="hover:opacity-50 transition-opacity">×</button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default UniversalProductFilters;

