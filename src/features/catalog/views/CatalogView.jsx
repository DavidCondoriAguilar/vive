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
    sortBy,
    categories,
    subcategories,
    sizes,
    filteredProducts,
    totalProducts,
    hasActiveFilters,
    setCategory,
    setSelectedSubcategory,
    setSelectedSize,
    setSortBy,
    resetFilters,
    getPrettySubcategoryName,
  } = useCatalog();

  return (
    <>
      <Helmet>
        <title>Catálogo Completo - Vive | Tecnología en Descanso</title>
        <meta name="description" content="Explora la colección oficial 2026 de Vive. Tecnología MP y manufactura avanzada en colchones de resorte y espuma de alta permanencia." />
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

                {/* Catalog Grid - Precise & Unified */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                  {filteredProducts.map((product, index) => (
                    <div key={product.id} className="group flex flex-col h-full">
                      <div className="relative flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                        {/* Visual Container - FORCE PURE WHITE FOR BLENDING */}
                        <div className="relative aspect-[4/5] rounded-t-[2rem] overflow-hidden bg-white transition-all duration-700 group-hover:shadow-[0_40px_60px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/5">

                          {/* Status / Category Badge - Marketing Optimized */}
                          <div className="absolute top-6 left-6 z-20">
                            <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md border border-gray-100 dark:border-white/10 px-5 py-2 rounded-full shadow-sm">
                              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-vive-500 animate-bounce"></span>
                                {product.badge || (product.subcategory === 'Diamont' ? 'Premium Suite' : 'Expert Series')}
                              </span>
                            </div>
                          </div>

                          {/* Main Product Image Link */}
                          <Link to={`/producto/${product.id}`} className="absolute inset-0 flex items-center justify-center p-2">
                            <div
                              className="w-full h-full flex items-center justify-center transition-transform duration-1000"
                              style={{
                                transform: 
                                    product.id === 'ventto-marco' ? 'scale(1.35)' : 
                                    product.id === 'sense-premium' ? 'scale(1.45)' : 
                                    product.id === 'vanora-dp' ? 'scale(1.70)' : 
                                    product.id === 'kai' ? 'scale(1.85)' :
                                    product.id === 'infinito' ? 'translateY(-12px) scale(1.1)' : 
                                    product.id === 'goldencito' ? 'translateY(-12px) scale(1.1)' : 
                                    product.id === 'gea-pt-mp-two-ortopedico-de-lujo' ? 'scale(1.30)' : 
                                    product.id === 'itta' ? 'scale(1.35)' : 
                                    product.id === 'enna-mp' ? 'scale(1.25)' : 
                                    product.id === 'riveteado' ? 'scale(1.45)' :
                                    product.id === 'extra-descanso' ? 'scale(1.30)' :
                                    product.id === 'buen-descanso' ? 'scale(1.35)' :
                                    'scale(1.1)'
                              }}
                            >
                              <img
                                src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=400&q=75&auto=format`}
                                alt={product.name}
                                className="w-full h-full object-contain transition-transform duration-1000 scale-[0.85]"
                                width="400"
                                height="500"
                                loading="lazy"
                              />
                            </div>
                          </Link>

                          {/* Professional Hover Overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white/80 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                            <div className="flex gap-3">
                              <Link
                                to={`/producto/${product.id}`}
                                className="flex-1 py-5 bg-gray-950 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-vive-500 transition-all duration-300 text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                              >
                                Ver Detalle
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Info Block - FLEX-1 TO UNIFY HEIGHT */}
                        <div className="flex-1 px-4 py-10 text-center bg-gray-50/30 dark:bg-zinc-900/20 rounded-b-[2rem] border-x border-b border-gray-100 dark:border-white/5 transition-all duration-700 group-hover:shadow-[0_40px_60px_rgba(0,0,0,0.03)] group-hover:-translate-y-1 flex flex-col justify-between">
                          <div>
                            <span className="text-vive-500 text-[9px] font-black uppercase tracking-[0.5em] mb-3 block">
                              {getPrettySubcategoryName(product.subcategory) || 'Diseño de Autor'}
                            </span>
                            <h3 className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-vive-500 transition-all duration-500 min-h-[3rem] flex items-center justify-center">
                              {product.name}
                            </h3>
                          </div>

                          <div className="flex flex-col gap-4 items-center">
                            <div className="w-8 h-[1px] bg-gray-100 dark:bg-white/10" />
                            <div className="flex items-center justify-center">
                              <a
                                href={getWhatsAppLink(`Hola Vive, deseo información estratégica sobre el modelo ${product.name}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 dark:text-green-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-vive-500 transition-colors flex items-center gap-2 group/wa"
                              >
                                Cotizar <FaWhatsapp className="w-4 h-4 group-hover/wa:scale-125 transition-transform" />
                              </a>
                            </div>
                          </div>
                        </div>
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

