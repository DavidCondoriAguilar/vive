import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useTheme';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import UniversalProductFilters from '@/components/home/CategoriesSection/ProductFilters';
import { ENHANCED_CATALOG, CATEGORIES, getWhatsAppLink, getPrettySubcategoryName } from '@/utils/constants';

/**
 * Full Catalog Page
 * Displays all products in a comprehensive grid layout with advanced filters
 */
const CatalogView = () => {
  useScrollToTop();
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedSubcategory, setSelectedSubcategory] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');

  // 1. Get products for the current category first
  const categoryProducts = ENHANCED_CATALOG.filter(p =>
    selectedCategory === 'todos' || p.category === selectedCategory
  );

  // 2. Derive dynamic filters ONLY from products in the selected category
  const subcategories = ['todos', ...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))];
  const sizes = ['todos', ...new Set(categoryProducts.flatMap(p => p.sizes || []).filter(Boolean))];

  const categories = [
    { id: 'todos', name: 'Todas las Categorías' },
    ...CATEGORIES.map(cat => ({ id: cat.id, name: cat.name }))
  ];

  // 3. Final Filtering
  const filteredProducts = categoryProducts.filter(product => {
    const subcategoryMatch = selectedSubcategory === 'todos' || product.subcategory === selectedSubcategory;
    const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
    return subcategoryMatch && sizeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>Catálogo Completo - Vive | Tecnología en Descanso</title>
        <meta name="description" content="Explora la colección oficial 2026 de Vive. Tecnología MP y manufactura avanzada en colchones de resorte y espuma de alta permanencia." />
      </Helmet>

      <MainLayout>
        <div className="pb-24 bg-white dark:bg-black transition-colors duration-700">
          <SectionLayout background="white">
            {/* Elite Header */}
            <div className="max-w-4xl mb-20 px-4 md:px-0 text-center mx-auto">
              <span className="text-vive-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block animate-fade-in">Catálogo Oficial 2026</span>
              <h1 className="text-5xl md:text-8xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.9] tracking-tighter mb-8 animate-slide-up">
                Sistemas de <br /><span className="text-vive-500 italic font-light">Descanso</span>
              </h1>
            </div>

            {/* Smart Filters Panel */}
            <div className="bg-white dark:bg-zinc-950 rounded-[2.5rem] p-6 sm:p-8 md:p-12 mb-16 border border-gray-100 dark:border-white/5 shadow-sm">
              <UniversalProductFilters
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                selectedSize={selectedSize}
                sortBy={sortBy}
                categories={categories}
                subcategories={subcategories}
                sizes={sizes}
                onCategoryChange={(cat) => {
                  setSelectedCategory(cat);
                  setSelectedSubcategory('todos');
                }}
                onSubcategoryChange={setSelectedSubcategory}
                onSizeChange={setSelectedSize}
                onSortChange={setSortBy}
                showSort={true}
                showCategory={true}
                compact={false}
              />
            </div>

            {/* Products Stats - Advanced Monitoring */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 px-2 gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-vive-500/20 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">
                    Modelos Disponibles: {sortedProducts.length}
                  </span>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Mostrando resultados de alta ingeniería
                  </p>
                </div>
              </div>

              {(selectedCategory !== 'todos' || selectedSubcategory !== 'todos' || selectedSize !== 'todos') && (
                <button
                  onClick={() => {
                    setSelectedCategory('todos');
                    setSelectedSubcategory('todos');
                    setSelectedSize('todos');
                  }}
                  className="px-5 py-2 bg-red-500/5 text-red-500 border border-red-500/20 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 active:scale-95"
                >
                  Restablecer Búsqueda ×
                </button>
              )}
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24 px-4 sm:px-6 md:px-0">
              {sortedProducts.map((product, index) => (
                <div key={product.id} className="group">
                  <div className="group relative flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
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
                      <Link to={`/producto/${product.id}`} className="absolute inset-0 flex items-center justify-center p-12">
                        <img
                          src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=400&q=75&auto=format`}
                          alt={product.name}
                          className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
                          width="400"
                          height="500"
                          loading="lazy"
                        />
                      </Link>

                      {/* Professional Hover Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white/80 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                        <div className="flex gap-3">
                          <Link
                            to={`/producto/${product.id}`}
                            className="flex-1 py-5 bg-gray-950 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-vive-500 transition-all duration-300 text-center"
                          >
                            Ver Detalle
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Info Block - BACKGROUND MOVED HERE */}
                    <div className="px-4 py-10 text-center bg-gray-50/50 dark:bg-zinc-900/40 rounded-b-[2rem] border-x border-b border-gray-100 dark:border-white/5 transition-all duration-700 group-hover:shadow-[0_40px_60px_rgba(0,0,0,0.05)] group-hover:-translate-y-1">
                      <span className="text-vive-500 text-[9px] font-black uppercase tracking-[0.5em] mb-3 block">
                        {getPrettySubcategoryName(product.subcategory) || 'Diseño de Autor'}
                      </span>
                      <h3 className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-vive-500 transition-all duration-500 group-hover:tracking-wider">
                        {product.name}
                      </h3>

                      <div className="flex flex-col gap-4 items-center">
                        <div className="w-8 h-[1px] bg-gray-100 dark:bg-white/10" />
                        <div className="flex items-center justify-center">
                          <a
                            href={getWhatsAppLink(`Hola Vive, deseo información estratégica sobre el modelo ${product.name}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 dark:text-green-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-green-800 transition-colors flex items-center gap-2 group/wa"
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
            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
                    No se encontraron productos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Intenta ajustar los filtros para ver más productos.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('todos');
                      setSelectedSubcategory('todos');
                      setSelectedSize('todos');
                    }}
                    className="bg-black dark:bg-white text-white dark:text-black font-black py-3 px-8 rounded-xl text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              </div>
            )}
          </SectionLayout>
        </div>
      </MainLayout>
    </>
  );
};

export default CatalogView;

