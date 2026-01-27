import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useScrollToTop } from '@/hooks/useTheme';
import { FaSearch, FaFilter, FaThLarge, FaList, FaWhatsapp, FaArrowRight, FaChevronDown, FaEye } from 'react-icons/fa';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useCart } from '@/contexts/CartContext';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import UniversalProductFilters from '@/components/home/CategoriesSection/ProductFilters';
import { ENHANCED_CATALOG, CATEGORIES, getWhatsAppLink } from '@/utils/constants';

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
        <title>Catálogo Completo - Sueño Dorado | Expertos en Descanso</title>
        <meta name="description" content="Explora nuestra colección completa de colchones de resorte y espuma, bases y muebles de dormitorio. Calidad de fábrica con garantía total." />
      </Helmet>

      <MainLayout>
        <div className="pt-32 pb-24 bg-white dark:bg-dream-dark-bg transition-colors duration-700">
          <SectionLayout background="gray">
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
            <div className="bg-white dark:bg-dream-dark-surface rounded-[2.5rem] p-6 sm:p-8 md:p-12 mb-16 border border-gray-100 dark:border-dream-dark-border">
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
                <div key={product.id} className="group">
                  {/* Product Card */}
                  <div className="bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2">

                    {/* Product Image */}
                    <div className="relative aspect-[4/3] bg-white dark:bg-dream-dark-surface overflow-hidden">
                      <Link to={`/producto/${product.id}`} className="block w-full h-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-opacity duration-300 cursor-pointer"
                        />
                      </Link>

                      {/* Overlay Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                          <FaEye className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </button>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                          {product.badge || 'Nuevo'}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest">
                          {product.subcategory}
                        </span>
                        <Link to={`/producto/${product.id}`} className="block">
                          <h3 className="text-lg font-black text-gray-900 dark:text-white mt-2 mb-3 leading-tight hover:text-gold-500 transition-colors cursor-pointer">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-auto">
                        <PriceInquiryButton product={product} />
                        <div className="flex gap-2">
                          <DetailsButton to={`/producto/${product.id}`} className="flex-1" />
                          <QuoteIconButton onClick={() => addToCart(product, 1)} />
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
                  <div className="w-20 h-20 bg-gray-100 dark:bg-dream-dark-surface rounded-full flex items-center justify-center mx-auto mb-6">
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
