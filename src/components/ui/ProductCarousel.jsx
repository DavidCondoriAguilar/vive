import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForward, MdOutlineArrowBack } from 'react-icons/md';
import { useDragCarousel } from '@/hooks/useDragCarousel';

/**
 * Product Carousel Component
 * Displays products in a clean, scrollable carousel format with drag functionality and filters
 */
const ProductCarousel = ({ products = [], title = "Nuestros Productos" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSize, setSelectedSize] = useState('Todas las medidas');

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'Todos' || product.type === selectedCategory.toLowerCase();
    const sizeMatch = selectedSize === 'Todas las medidas' || product.size === selectedSize;
    return categoryMatch && sizeMatch;
  });

  const canGoNext = currentIndex < filteredProducts.length - itemsPerView;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSlideChange = (direction) => {
    if (direction === 'next' && canGoNext) {
      handleNext();
    } else if (direction === 'prev' && canGoPrev) {
      handlePrev();
    }
  };

  const { carouselRef, isDragging, dragDistance, handlers } = useDragCarousel(handleSlideChange);

  // Reset index when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, selectedSize]);

  if (!products.length) return null;

  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Calidad directa de fábrica para tu descanso perfecto
          </p>
        </div>

        <Link
          to="/catalogo"
          className="hidden sm:flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium transition-colors"
        >
          Ver todo el catálogo
          <MdOutlineArrowForward className="w-4 h-4" />
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filtros:</h3>
          <div className="flex flex-wrap gap-2">
            {['Todos', 'Espuma', 'Resortes'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Todas las medidas</h3>
          <div className="flex flex-wrap gap-2">
            {['Todas las medidas', '1 Plz', '1.5 Plz', '2 Plz', 'Queen', 'King'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative" ref={carouselRef}>
        {/* Navigation Arrows */}
        {filteredProducts.length > itemsPerView && (
          <>
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
                !canGoPrev 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-100 hover:scale-110'
              }`}
              aria-label="Anterior"
            >
              <MdOutlineArrowBack className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
                !canGoNext
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100 hover:scale-110'
              }`}
              aria-label="Siguiente"
            >
              <MdOutlineArrowForward className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Products Carousel Container */}
        <div 
          className={`overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          {...handlers}
        >
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% + ${isDragging ? dragDistance : 0}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
            }}
          >
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - 24px)` }}
              >
                <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {product.originalPrice && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        S/ {product.price.toLocaleString()}
                      </span>
                      <Link
                        to={`/producto/${product.id}`}
                        className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        Ver →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        {filteredProducts.length > itemsPerView && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-gray-800 dark:bg-white'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No se encontraron productos con los filtros seleccionados.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSelectedSize('Todas las medidas');
              }}
              className="mt-4 text-gold-600 hover:text-gold-700 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Mobile CTA */}
      <div className="sm:hidden mt-6 text-center">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors"
        >
          Ver todo el catálogo
          <MdOutlineArrowForward className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCarousel;