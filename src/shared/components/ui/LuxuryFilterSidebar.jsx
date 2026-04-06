import React, { useState } from 'react';
import { LuChevronDown, LuFilter, LuLayoutGrid, LuMaximize, LuLayers, LuTag } from 'react-icons/lu';

/**
 * LuxuryFilterSidebar - Un componente de filtrado de élite diseñado para E-commerce de Lujo.
 * Implementa una estética "Lux-Tech" con micro-interacciones avanzadas y tipografía premium.
 */
const LuxuryFilterSidebar = ({
  selectedCategory,
  selectedSubcategory,
  selectedSize,
  categories = [],
  subcategoryOptions = [],
  sizeOptions = [],
  onCategoryChange,
  onSubcategoryChange,
  onSizeChange,
  onReset,
  activeFiltersCount = 0
}) => {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8 sticky top-24 h-fit pb-10">
      {/* Sidebar Header */}
      <div className="px-2">
        <span className="text-[10px] font-black text-vive-500 uppercase tracking-[0.4em] mb-1 block animate-fade-in">
          Elite Selection
        </span>
        <h2 className="text-4xl font-display font-black text-gray-900 dark:text-white uppercase leading-none tracking-tighter mb-4">
          Filtros <br /> <span className="text-vive-500 italic font-light">Avanzados</span>
        </h2>

        {activeFiltersCount > 0 && (
          <button
            onClick={onReset}
            className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-vive-500 transition-colors flex items-center gap-2 group"
          >
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center group-hover:rotate-90 transition-transform">×</span>
            Limpiar Selección
          </button>
        )}
      </div>

      {/* Filter Groups */}
      <div className="flex flex-col gap-4">
        {/* Categorías */}
        <AccordionSection
          title="Categoría"
          icon={<LuLayers />}
          defaultOpen={true}
        >
          <div className="flex flex-col gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`
                  relative w-full px-5 py-4 text-left transition-all duration-500 group overflow-hidden
                  ${selectedCategory === cat.id
                    ? 'bg-vive-500 text-white shadow-[0_10px_20px_rgba(41,156,71,0.3)]'
                    : 'bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:translate-x-1 hover:shadow-vive-500/10'}
                  rounded-2xl
                `}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors`}>
                    {cat.name}
                  </span>
                  {selectedCategory === cat.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </div>
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </AccordionSection>

        {/* Medidas - Grid Layout */}
        <AccordionSection
          title="Medidas"
          icon={<LuMaximize />}
          defaultOpen={true}
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {sizeOptions.map((size) => (
              <button
                key={size.id}
                onClick={() => onSizeChange(size.id)}
                className={`
                  px-4 py-3 text-center transition-all duration-300 rounded-xl border
                  text-[10px] font-black uppercase tracking-widest
                  ${selectedSize === size.id
                    ? 'bg-vive-500 border-vive-500 text-white shadow-lg shadow-vive-500/20 scale-[1.02]'
                    : 'bg-white dark:bg-zinc-950 border-gray-100 dark:border-white/5 text-gray-500 hover:border-vive-500 hover:text-vive-500'}
                `}
              >
                {size.name}
              </button>
            ))}
          </div>
        </AccordionSection>

        {/* Modelos / Líneas con Group Headers */}
        <AccordionSection
          title="Modelos"
          icon={<LuTag />}
          defaultOpen={false}
        >
          <div className="flex flex-col gap-1 pt-2">
            {subcategoryOptions.map((opt, index) => (
              opt.isGroup ? (
                <div key={`group-${index}`} className="mt-4 mb-2 first:mt-0">
                  <span className="text-[8px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em] px-4">
                    {opt.name}
                  </span>
                </div>
              ) : (
                <button
                  key={opt.id}
                  onClick={() => onSubcategoryChange(opt.id)}
                  className={`
                    w-full px-4 py-3 text-left transition-all duration-300 rounded-xl
                    flex items-center gap-3 group
                    ${selectedSubcategory === opt.id
                      ? 'bg-gray-100 dark:bg-white/10 text-vive-500'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:translate-x-1'}
                  `}
                >
                  <div className={`
                    w-1 h-1 rounded-full transition-all duration-300
                    ${selectedSubcategory === opt.id ? 'bg-vive-500 scale-150' : 'bg-gray-300 dark:bg-zinc-700 opacity-0 group-hover:opacity-100'}
                  `} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {opt.name}
                  </span>
                </button>
              )
            ))}
          </div>
        </AccordionSection>
      </div>

      {/* Decorative Brand Footer */}
      <div className="mt-auto px-4 py-8 border-t border-gray-100 dark:border-white/5 opacity-40 group hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-gray-300 dark:bg-white/20 transition-all duration-700 group-hover:w-16" />
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-400">
            Manufactura Vive
          </span>
        </div>
      </div>
    </aside>
  );
};

/**
 * Sub-componente AccordionSection para los filtros colapsables
 */
const AccordionSection = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 dark:border-white/5 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className={`
            w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500
            ${isOpen
              ? 'bg-vive-500 text-white shadow-[0_0_15px_rgba(41,156,71,0.4)] rotate-3'
              : 'bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:bg-vive-500 group-hover:text-white group-hover:-rotate-3'}
          `}>
            {React.cloneElement(icon, { className: "w-5 h-5 transition-transform" })}
          </div>
          <h3 className={`
            text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300
            ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}
          `}>
            {title}
          </h3>
        </div>
        <LuChevronDown className={`
          w-5 h-5 text-gray-400 transition-all duration-500
          ${isOpen ? 'rotate-180 text-vive-500' : 'group-hover:text-vive-500'}
        `} />
      </button>

      {/* Accordion Content with pure Tailwind Dynamic Grid height for smooth animation */}
      <div className={`
        grid transition-all duration-500 ease-in-out
        ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}
      `}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LuxuryFilterSidebar;
