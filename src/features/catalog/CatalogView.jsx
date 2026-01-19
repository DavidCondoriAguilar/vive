import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useScrollToTop } from '@/hooks/useTheme';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import { PrimaryButton, WhatsAppButton } from '@/components/ui/Buttons';

import { ENHANCED_CATALOG, CATEGORIES } from '@/utils/constants';

/**
 * Full Catalog Page
 * Displays all products in a comprehensive grid layout
 */
const CatalogView = () => {
  useScrollToTop();

  const [filter, setFilter] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');

  // Use centralized products data
  const allProducts = ENHANCED_CATALOG;

  const categories = [
    { id: 'todos', name: 'Todos los productos', count: allProducts.length },
    ...CATEGORIES.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: allProducts.filter(p => p.category === cat.id || (cat.id === 'colchones' && ['luxury', 'premium', 'classic', 'professional'].includes(p.category))).length
    }))
  ];

  // If the filter is one of the main categories, we need to handle subcategories for colchones
  const getFilteredProducts = () => {
    if (filter === 'todos') return allProducts;

    // special handling for 'colchones' category to include its subcategories
    if (filter === 'colchones') {
      return allProducts.filter(p => ['luxury', 'premium', 'classic', 'professional'].includes(p.category));
    }

    return allProducts.filter(p => p.category === filter);
  };

  const filteredProducts = getFilteredProducts();


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        // Default sort (featured or random)
        return 0;
    }
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Catálogo - Sueño Dorado</title>
        <meta name="description" content="Catálogo de colchones premium Sueño Dorado. Calidad directa de fábrica." />
        <link rel="canonical" href="https://suenodorado.pe/catalogo" />
      </Helmet>

      <MainLayout>
        <SectionLayout>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white mb-4">
              Catálogo <span className="text-gold-500">Premium</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubre toda nuestra colección de colchones premium, diseñados para transformar tu descanso
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 border ${filter === category.id
                  ? 'bg-gold-500 text-white border-gold-500 shadow-lg shadow-gold-500/25'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gold-500/50 hover:text-gold-500'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sorting and Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 border-b border-gray-100 dark:border-gray-800 pb-8">
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Mostrando <span className="text-gold-600 dark:text-gold-400 font-bold">{sortedProducts.length}</span> producto{sortedProducts.length !== 1 ? 's' : ''}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white text-sm rounded-xl px-4 py-2 focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all outline-none"
              >
                <option value="featured">Destacados</option>
                <option value="price-low">Menor Precio</option>
                <option value="price-high">Mayor Precio</option>
                <option value="name">Nombre (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gold-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gold-600">
                        S/ {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          S/ {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <PrimaryButton
                      onClick={() => window.location.href = `/producto/${product.id}`}
                      className="flex-1 justify-center"
                    >
                      Ver Detalles
                    </PrimaryButton>

                    <WhatsAppButton
                      onClick={() => {
                        const message = `Hola Sueño Dorado, estoy interesado en el producto: ${product.name}. Deseo recibir información sobre precios y medidas.`;
                        window.open(getWhatsAppLink(message), '_blank');
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More or Pagination could go here */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </SectionLayout>
      </MainLayout>
    </>
  );
};

export default CatalogView;