import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from '@shared/hooks/useTheme';
import { useScrollReveal } from '@shared/hooks/useScrollReveal';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '@shared/contexts/CartContext';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import RevealSection from '@shared/components/ui/RevealSection';
import UniversalProductFilters from '@shared/components/ui/ProductFilters';
import { LuxuryFilterSidebar } from '@shared/components/ui';
import { getWhatsAppLink } from '@core/utils/constants';
import { useCatalog } from '../hooks/useCatalog';
import DownloadCatalogButton from '@shared/components/ui/DownloadCatalogButton';

/**
 * Full Catalog Page
 * Displays all products in a comprehensive grid layout with advanced filters
 */
const CatalogView = () => {
  useScrollToTop();
  useScrollReveal();
  const { addToCart } = useCart();
  
  // Use catalog hook for all catalog logic
  const {
    selectedCategory,
    selectedSubcategory,
    selectedSize,
    selectedSegment,
    sortBy,
    categories,
    subcategories,
    sizes,
    categoryProducts,
    segments,
    filteredProducts,
    totalProducts,
    hasActiveFilters,
    setCategory,
    setSelectedSubcategory,
    setSelectedSize,
    setSelectedSegment,
    setSortBy,
    resetFilters,
    getPrettySubcategoryName,
    getProductSegment,
    getWarrantyLabel,
    getWarrantyYears,
  } = useCatalog();

  return (
    <>
      <Helmet>
        <title>Catálogo Completo - Vive | Tecnología en Descanso</title>
        <meta name="description" content="Explora la colección oficial 2026 de Vive. Colchones de resorte y espuma con tecnología MP. Venta directa de fábrica en Perú." />
        <meta property="og:title" content="Catálogo Completo - Vive | Colchones Premium en Perú" />
        <meta property="og:description" content="Explora nuestra colección de colchones de resorte y espuma. Tecnología de descanso avanzada, venta directa de fábrica." />
        <meta property="og:image" content="https://vive.pe/logo-main.jpg" />
        <meta property="og:url" content="https://vive.pe/catalogo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catálogo Completo - Vive | Colchones Premium" />
        <meta name="twitter:description" content="Explora nuestra colección de colchones. Tecnología avanzada, venta directa de fábrica." />
        <meta name="twitter:image" content="https://vive.pe/logo-main.jpg" />
      </Helmet>

      <MainLayout>
        <div className="pb-24 bg-white dark:bg-black transition-colors duration-700">
          {/* Sticky CTA Cotizar por WhatsApp - solo mobile */}
          <a
            href={getWhatsAppLink('Hola Vive, deseo cotizar productos del catálogo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-black text-sm uppercase tracking-widest shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
            Cotizar por WhatsApp
          </a>

          <SectionLayout background="white">

            {/* Main Catalog View: Sidebar + Grid */}
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Desktop Luxury Sidebar */}
              <div className="hidden lg:block">
                <LuxuryFilterSidebar
                  selectedCategory={selectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  selectedSize={selectedSize}
                  categories={categories}
                  subcategoryOptions={subcategories.map(s => ({ 
                    id: s, 
                    name: s === 'todos' ? 'Todos los modelos' : getPrettySubcategoryName(s) 
                  }))}
                  sizeOptions={sizes.map(s => ({ 
                    id: s, 
                    name: s === 'todos' ? 'Todas' : s 
                  }))}
                  onCategoryChange={setCategory}
                  onSubcategoryChange={setSelectedSubcategory}
                  onSizeChange={setSelectedSize}
                  onReset={resetFilters}
                  activeFiltersCount={hasActiveFilters ? 1 : 0}
                />
              </div>

              {/* Mobile Filter Toggle (Keep existing or update) */}
              <div className="lg:hidden mb-12">
                <div className="bg-white dark:bg-zinc-950 rounded-3xl p-6 border border-gray-100 dark:border-white/5 shadow-sm">
                  <UniversalProductFilters
                    selectedCategory={selectedCategory}
                    selectedSubcategory={selectedSubcategory}
                    selectedSize={selectedSize}
                    sortBy={sortBy}
                    categories={categories}
                    subcategories={subcategories}
                    sizes={sizes}
                    onCategoryChange={setCategory}
                    onSubcategoryChange={setSelectedSubcategory}
                    onSizeChange={setSelectedSize}
                    onSortChange={setSortBy}
                    showSort={true}
                    showCategory={true}
                    compact={true}
                  />
                </div>
              </div>

              {/* Products Content Area */}
              <div className="flex-1">
                {/* Luxury Page Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-1 bg-vive-600 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-vive-600">Catálogo Vive 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                      Arquitectura <br /> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">del Descanso</span>
                    </h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {/* Catalog Export Button */}
                    <DownloadCatalogButton />
                    
                    {/* Sort Info / Summary */}
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Resultados</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {totalProducts} <span className="text-sm font-medium text-gray-500">Modelos</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Segment Filter Chips */}
                <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up">
                  {segments.map((seg) => {
                    const active = selectedSegment === seg.id;
                    
                    // Count products that match this segment, ignoring current segment filter
                    // but respecting other active filters (category, size, etc.)
                    const baseProducts = categoryProducts.filter(product => {
                      const subcategoryMatch = selectedSubcategory === 'todos' || product.subcategory === selectedSubcategory;
                      const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
                      return subcategoryMatch && sizeMatch;
                    });
                    
                    const count = seg.id === 'todos'
                      ? baseProducts.length
                      : baseProducts.filter(p => getProductSegment(p) === seg.id).length;
                    
                    // Don't show chips with 0 products
                    if (count === 0 && seg.id !== 'todos') return null;

                    return (
                      <button
                        key={seg.id}
                        onClick={() => setSelectedSegment(seg.id)}
                        className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all duration-500 flex items-center gap-2 ${
                          active
                            ? 'bg-vive-600 text-white shadow-md shadow-vive-600/20'
                            : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                        }`}
                      >
                        {seg.label}
                        <span className={`px-1.5 py-0.5 rounded-md text-[7px] ${
                          active ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-white/10 text-gray-400'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Catalog Grid - Imagen protagonista */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredProducts.map((product, index) => (
                    <div key={product.id} className="group flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-gray-100 dark:border-white/5">
                        <Link to={`/producto/${product.id}`} className="absolute inset-0 flex items-center justify-center p-2">
                          <img
                            src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=600&q=75&auto=format`}
                            alt={`${product.name} - Colchón Vive Perú`}
                            className="w-full h-full object-contain"
                            width="500"
                            height="625"
                            loading="lazy"
                          />
                        </Link>
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          {/* Segment Tag */}
                          <span className={`px-2.5 py-1 text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg ${
                            getProductSegment(product) === 'premium' ? 'bg-amber-500 text-black' :
                            getProductSegment(product) === 'intermedio' ? 'bg-vive-600 text-white' :
                            getProductSegment(product) === 'economico' ? 'bg-gray-900 text-white' :
                            'bg-black/80 text-white'
                          }`}>
                            {segments.find(s => s.id === getProductSegment(product))?.label || 'Serie'}
                          </span>
                          {/* Warranty Tag removed as per user request */}
                        </div>
                      </div>
                      <div className="pt-3 flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-[8px] font-black text-vive-500 uppercase tracking-[0.3em]">{getPrettySubcategoryName(product.subcategory) || 'Diseño'}</p>
                          <h3 className="text-xs font-display font-black text-gray-900 dark:text-white uppercase tracking-tight truncate">{product.name}</h3>
                        </div>
                        <a
                          href={getWhatsAppLink(`Hola Vive, deseo información sobre ${product.name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 px-3 py-2 bg-green-600 text-white rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-green-700 transition-colors flex items-center gap-1.5"
                        >
                          <FaWhatsapp className="w-3 h-3" /> Cotizar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-20 bg-gray-50 dark:bg-zinc-900/50 rounded-[3rem] border border-dashed border-gray-200 dark:border-white/5">
                    <div className="max-w-md mx-auto">
                      <div className="w-20 h-20 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <span className="text-3xl">🔍</span>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
                        Sin Coincidencias en la Selección
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-8 text-xs uppercase tracking-widest font-bold">
                        Ajusta tus filtros para descubrir nuevas posibilidades de descanso.
                      </p>
                      <button
                        onClick={resetFilters}
                        className="bg-black dark:bg-white text-white dark:text-black font-black py-4 px-10 rounded-2xl text-[10px] uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5"
                      >
                        Limpiar Búsqueda
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SectionLayout>
        </div>
      </MainLayout>
    </>
  );
};

export default CatalogView;

