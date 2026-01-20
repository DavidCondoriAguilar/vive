import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useScrollToTop } from '@/hooks/useTheme';
import { FaEye, FaWhatsapp } from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import { ENHANCED_CATALOG, CATEGORIES, getWhatsAppLink } from '@/utils/constants';

/**
 * Full Catalog Page
 * Displays all products in a comprehensive grid layout with advanced filters
 */
const CatalogView = () => {
  useScrollToTop();

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
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>Catálogo Completo - Sueño Dorado | Expertos en Descanso</title>
        <meta name="description" content="Explora nuestra colección completa de colchones de resorte y espuma, bases y muebles de dormitorio. Calidad de fábrica con garantía total." />
      </Helmet>

      <MainLayout>
        <div className="pt-32 pb-24 bg-white dark:bg-black transition-colors duration-700">
          <SectionLayout>
            {/* Elite Header */}
            <div className="max-w-4xl mb-20 px-4 md:px-0">
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block animate-fade-in">Catálogo Oficial 2026</span>
              <h1 className="text-5xl md:text-7xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.9] tracking-tighter mb-8 animate-slide-up">
                Nuestros <br /><span className="text-gold-500">Productos</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl animate-fade-in delay-200">
                Calidad directa de fábrica para tu descanso perfecto. Explora nuestra ingeniería de confort diseñada en Perú.
              </p>
            </div>

            {/* Smart Filters Panel */}
            <div className="bg-white dark:bg-black rounded-[2.5rem] p-8 md:p-12 mb-16 border border-gray-100 dark:border-white/10 space-y-12">

              {/* Primary Category Filter */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-gray-200 dark:bg-white/20" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Categoría Principal</span>
                  <div className="h-[1px] flex-grow bg-gray-200 dark:bg-white/20" />
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubcategory('todos'); // Reset sub when category changes
                      }}
                      className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedCategory === cat.id
                        ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg scale-105'
                        : 'bg-white dark:bg-black border-gray-200 dark:border-white/20 text-gray-500 dark:text-gray-400 hover:border-gold-500/50'
                        }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Secondary Multi-Filters */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
                {/* Subcategory / Line */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-gold-500 uppercase tracking-widest block ml-2">Línea / Modelo</span>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white text-[11px] font-black uppercase tracking-widest rounded-2xl px-6 py-4 focus:ring-4 focus:ring-gold-500/10 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {subcategories.map(sub => (
                      <option key={sub} value={sub}>{sub === 'todos' ? 'Todos los Modelos' : sub}</option>
                    ))}
                  </select>
                </div>

                {/* Sizes Filter */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-gold-500 uppercase tracking-widest block ml-2">Medida Disponible</span>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white text-[11px] font-black uppercase tracking-widest rounded-2xl px-6 py-4 focus:ring-4 focus:ring-gold-500/10 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {sizes.map(size => (
                      <option key={size} value={size}>{size === 'todos' ? 'Cualquier Medida' : size}</option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block ml-2">Ordenar Por</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-white/5 border-transparent text-gray-600 dark:text-gray-400 text-[11px] font-black uppercase tracking-widest rounded-2xl px-6 py-4 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="featured">Predeterminado</option>
                    <option value="price-low">Menor Precio</option>
                    <option value="price-high">Mayor Precio</option>
                    <option value="name">Alfabético</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Stats */}
            <div className="flex justify-between items-center mb-12 px-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                  {sortedProducts.length} Productos encontrados
                </span>
              </div>
              {(selectedCategory !== 'todos' || selectedSubcategory !== 'todos' || selectedSize !== 'todos') && (
                <button
                  onClick={() => {
                    setSelectedCategory('todos');
                    setSelectedSubcategory('todos');
                    setSelectedSize('todos');
                  }}
                  className="text-[9px] font-black text-red-500 uppercase tracking-widest hover:underline transition-all"
                >
                  Limpiar Filtros ×
                </button>
              )}
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-0">
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white dark:bg-black p-6 rounded-[2.5rem] border border-transparent h-full flex flex-col animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link to={`/producto/${product.id}`} className="block aspect-[4/5] overflow-hidden rounded-[2rem] bg-white dark:bg-black p-6 mb-8 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    {product.badge && (
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-gold-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-gold-500/20">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </Link>

                  <div className="space-y-4 flex-grow flex flex-col">
                    <div>
                      <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{product.subcategory}</h4>
                      <Link to={`/producto/${product.id}`}>
                        <h3 className="text-xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight line-clamp-2 hover:text-gold-500 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    <div className="pt-6 mt-auto flex flex-col gap-4">
                      <div className="flex justify-between items-end">
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block">Desde</span>
                          <span className="text-2xl font-display font-black text-gray-900 dark:text-white tracking-tighter">
                            S/ {product.price?.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <span className="text-[9px] font-black text-gold-500 border border-gold-500/20 px-2 py-1 rounded-md uppercase tracking-widest">
                          {product.warranty} Gar.
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          to={`/producto/${product.id}`}
                          className="flex items-center justify-center gap-2 py-4 rounded-xl border border-gray-100 dark:border-white/20 bg-white dark:bg-black text-gray-900 dark:text-white text-[9px] font-black uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                        >
                          <FaEye className="w-3 h-3" />
                          Detalle
                        </Link>
                        <button
                          onClick={() => {
                            const message = `Hola Sueño Dorado, estoy interesado en el producto: ${product.name}. Deseo recibir información sobre precios y medidas.`;
                            window.open(getWhatsAppLink(message), '_blank');
                          }}
                          className="flex items-center justify-center gap-2 py-4 rounded-xl bg-green-500 text-white text-[9px] font-black uppercase tracking-widest hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20"
                        >
                          <FaWhatsapp className="w-3 h-3" />
                          Cotizar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-32 bg-white dark:bg-black rounded-[3rem] border border-dashed border-gray-200 dark:border-white/20">
                <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">No encontramos coincidencias</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-sm mx-auto">Prueba ajustando los filtros o reiniciando la búsqueda para encontrar tu colchón ideal.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('todos');
                    setSelectedSubcategory('todos');
                    setSelectedSize('todos');
                  }}
                  className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all"
                >
                  Reiniciar Catálogo
                </button>
              </div>
            )}
          </SectionLayout>
        </div>
      </MainLayout>
    </>
  );
};

export default CatalogView;