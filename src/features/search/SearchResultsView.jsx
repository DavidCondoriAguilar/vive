import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MdSearch, MdFilterList, MdArrowBack } from 'react-icons/md';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import { ProductCard } from '@/components/ui/Cards';
import { PrimaryButton, SecondaryButton, DetailsButton, PriceInquiryButton } from '@/components/ui/Buttons';
import { ENHANCED_CATALOG } from '@/utils/constants';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/hooks/useFavorites';
import { useTheme } from '@/hooks/useTheme';

const SearchResultsView = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevant');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  
  const { addToCart, getTotalItems } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const { theme } = useTheme();

  // Algoritmo de búsqueda avanzado
  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true);
      
      if (!query.trim()) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      const term = query.toLowerCase().trim();
      const results = [];

      ENHANCED_CATALOG.forEach(product => {
        let score = 0;
        const searchableText = [
          product.name,
          product.subcategory,
          product.category,
          product.description,
          ...(product.features || [])
        ].join(' ').toLowerCase();

        // Búsqueda exacta (máximo puntaje)
        if (product.name.toLowerCase().includes(term)) {
          score += 100;
        }

        // Búsqueda de palabras individuales
        const searchWords = term.split(' ');
        searchWords.forEach(word => {
          if (product.name.toLowerCase().includes(word)) {
            score += 50;
          }
          if (product.subcategory.toLowerCase().includes(word)) {
            score += 30;
          }
          if (product.category.toLowerCase().includes(word)) {
            score += 20;
          }
          if (searchableText.includes(word)) {
            score += 10;
          }
        });

        // Búsqueda por características
        product.features?.forEach(feature => {
          if (feature.toLowerCase().includes(term)) {
            score += 25;
          }
        });

        // Búsqueda por tamaños
        product.sizes?.forEach(size => {
          if (size.toLowerCase().includes(term)) {
            score += 15;
          }
        });

        if (score > 0) {
          results.push({
            ...product,
            score
          });
        }
      });

      setSearchResults(results);
      setIsLoading(false);
    };

    const timer = setTimeout(performSearch, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Filtrar resultados
  const filteredResults = searchResults.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const sizeMatch = selectedSize === 'all' || product.sizes?.includes(selectedSize);
    return categoryMatch && sizeMatch;
  });

  // Ordenar resultados
  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'relevant':
        return b.score - a.score;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Obtener categorías y tamaños disponibles
  const availableCategories = ['all', ...new Set(searchResults.map(p => p.category))];
  const availableSizes = ['all', ...new Set(searchResults.flatMap(p => p.sizes || []))];

  return (
    <>
      <Helmet>
        <title>Resultados de búsqueda: "{query}" - Sueño Dorado</title>
        <meta name="description" content={`Busca "${query}" en Sueño Dorado. Encuentra ${searchResults.length} productos relacionados.`} />
      </Helmet>

      <MainLayout>
        <div className="pt-32 pb-24 bg-white dark:bg-dream-dark-bg transition-colors duration-700">
          <SectionLayout background="gray">
            {/* Search Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors duration-200"
                >
                  <MdArrowBack className="w-5 h-5" />
                  <span className="text-sm">Volver</span>
                </Link>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 dark:text-white uppercase leading-tight tracking-tighter mb-6">
                Resultados de <span className="text-gold-500">Búsqueda</span>
              </h1>
              <div className="flex items-center justify-center gap-3 mb-4">
                <MdSearch className="w-6 h-6 text-gold-500" />
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  "{query}"
                </p>
              </div>
              {!isLoading && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sortedResults.length} producto{sortedResults.length !== 1 ? 's' : ''} encontrado{sortedResults.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Filters Bar */}
            <div className="bg-white dark:bg-dream-dark-surface rounded-2xl border border-gray-100 dark:border-dream-dark-border p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-xs font-black text-gold-500 uppercase tracking-widest mb-2">
                    Categoría
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-dream-dark-bg border border-gray-200 dark:border-dream-dark-border text-gray-900 dark:text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  >
                    {availableCategories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'Todas las categorías' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size Filter */}
                <div>
                  <label className="block text-xs font-black text-gold-500 uppercase tracking-widest mb-2">
                    Medida
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-dream-dark-bg border border-gray-200 dark:border-dream-dark-border text-gray-900 dark:text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  >
                    {availableSizes.map(size => (
                      <option key={size} value={size}>
                        {size === 'all' ? 'Todas las medidas' : size}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <div>
                  <label className="block text-xs font-black text-gold-500 uppercase tracking-widest mb-2">
                    Ordenar por
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-dream-dark-bg border border-gray-200 dark:border-dream-dark-border text-gray-900 dark:text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  >
                    <option value="relevant">Más relevante</option>
                    <option value="name">Alfabético</option>
                  </select>
                </div>

                {/* Reset Filters */}
                <div className="flex items-end">
                  <SecondaryButton
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSize('all');
                      setSortBy('relevant');
                    }}
                    className="w-full"
                  >
                    Restablecer filtros
                  </SecondaryButton>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
              </div>
            ) : sortedResults.length === 0 ? (
              /* No Results State */
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-dream-dark-surface rounded-full flex items-center justify-center mx-auto mb-6">
                  <MdSearch className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  No hay resultados para "{query}". Intenta con otros términos o navega por nuestras categorías.
                </p>
                <Link to="/catalogo">
                  <PrimaryButton showArrow>
                    Ver catálogo completo
                  </PrimaryButton>
                </Link>
              </div>
            ) : (
              /* Results Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedResults.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-dream-dark-surface">
                      <Link to={`/producto/${product.id}`} className="block w-full h-full">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                      {product.badge && (
                        <div className="absolute top-4 left-4 z-10 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest">
                          {product.subcategory || 'Premium'}
                        </span>
                        <Link to={`/producto/${product.id}`}>
                          <h3 className="text-lg font-black text-gray-900 dark:text-white mt-2 mb-3 leading-tight hover:text-gold-500 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="mt-auto flex flex-col gap-3">
                        <PriceInquiryButton product={product} />
                        <div className="flex gap-2">
                          <DetailsButton to={`/producto/${product.id}`} className="flex-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </SectionLayout>
        </div>
      </MainLayout>
    </>
  );
};

export default SearchResultsView;
