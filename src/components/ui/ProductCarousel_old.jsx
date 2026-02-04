import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaLayerGroup } from 'react-icons/fa';
import { PrimaryButton, DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useDragCarousel } from '@/hooks/useDragCarousel';
import { useCart } from '@/contexts/CartContext';
import { CATEGORIES } from '@/utils/constants';
import FilterDropdown from '@/components/ui/FilterDropdown';

const ProductCarousel = ({ products = [], title = "Nuestra Colección" }) => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const filteredProducts = products.filter(product => {
    return selectedCategory === 'Todos' || product.category === selectedCategory.toLowerCase();
  });

  const canGoNext = currentIndex < filteredProducts.length - itemsPerView;
  const canGoPrev = currentIndex > 0;

  const handleSlideChange = (direction) => {
    if (direction === 'next' && canGoNext) setCurrentIndex(prev => prev + 1);
    else if (direction === 'prev' && canGoPrev) setCurrentIndex(prev => prev - 1);
  };

  const getGapForCurrentScreen = () => {
    if (typeof window === 'undefined') return '1.5rem';
    return window.innerWidth >= 1024 ? '2rem' : '1.5rem';
  };

  const getGapInPixels = () => {
    if (typeof window === 'undefined') return 24; // 1.5rem = 24px
    return window.innerWidth >= 1024 ? 32 : 24; // 2rem = 32px, 1.5rem = 24px
  };

  useEffect(() => setCurrentIndex(0), [selectedCategory]);

  const { carouselRef, isDragging, dragDistance, isAnimating, handlers } = useDragCarousel(handleSlideChange);

  const filterOptions = [
    { id: 'Todos', name: 'Todos los productos', description: 'Explora nuestra colección completa' },
    { id: 'Resorte', name: 'Colchones de Resorte', description: 'Sistema de resortes tradicionales' },
    { id: 'Espuma', name: 'Colchones de Espuma', description: 'Poliseda, Resilense, Splendido, Topacio' },
    { id: 'Dormitorio', name: 'Dormitorio', description: 'Cunas, Bases, Cabeceras' }
  ];

  const getFilterDescription = () => {
    switch (selectedCategory) {
      case 'Espuma':
        return 'Líneas: Poliseda • Plus Resilense • Splendido • Topacio';
      case 'Resorte':
        return 'Avance • Marco de Poliuretano • Gold • Diamont • Infantil';
      case 'Dormitorio':
        return 'Incluye: Cunas • Bases • Cabeceras';
      default:
        return 'Calidad directa de fábrica para tu descanso perfecto';
    }
  };

  return (
    <div className="relative">
      {/* Header & Controls - High Visibility */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
        <div className="max-w-xl">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Selección Premium</span>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-white uppercase leading-tight tracking-tighter mb-6">
            {title}
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-[2px] bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 transition-all duration-1000 ease-out shadow-[0_0_10px_#d4af37]"
                style={{ width: `${((currentIndex + itemsPerView) / Math.max(1, filteredProducts.length)) * 100}% ` }}
              />
            </div>
            <span className="text-[10px] font-black text-gold-500 uppercase tracking-widest whitespace-nowrap">
              {currentIndex + itemsPerView} / {filteredProducts.length}
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
            {getFilterDescription()}
          </p>
        </div>

        {/* New Filter Dropdown for Carousel */}
        <div className="w-full lg:w-72">
          <FilterDropdown
            label="Filtrar por Colección"
            placeholder="Seleccionar Categoría"
            options={filterOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            icon={FaLayerGroup}
          />
        </div>
      </div>


      {/* Active Filter Description - Contexto para el usuario */}
      {selectedCategory !== 'Todos' && (
        <div className="mb-8">
          <div className="bg-gold-50 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <div>
                <span className="text-[10px] font-black text-gold-600 dark:text-gold-400 uppercase tracking-widest">
                  Filtrando por: {filterOptions.find(f => f.id === selectedCategory)?.name}
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {getFilterDescription()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Viewport */}
      <div className={`relative overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} active:cursor-grabbing`} ref={carouselRef} {...handlers} tabIndex={0} role="region" aria-label="Carrusel de productos">
        {/* Navigation Arrows - Positioned inside viewport */}
        {filteredProducts.length > itemsPerView && (
          <>
            <button
              onClick={() => handleSlideChange('prev')}
              disabled={!canGoPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all shadow-xl ${canGoPrev
                ? 'bg-white/90 dark:bg-white/10 text-black dark:text-white hover:scale-110'
                : 'bg-white/30 dark:bg-white/5 text-gray-400 cursor-not-allowed'
                }`}
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => handleSlideChange('next')}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all shadow-xl ${canGoNext
                ? 'bg-white/90 dark:bg-white/10 text-black dark:text-white hover:scale-110'
                : 'bg-white/30 dark:bg-white/5 text-gray-400 cursor-not-allowed'
                }`}
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Product Track */}
        <div
          data-carousel-track
          className={`flex transition-transform ${isAnimating ? 'duration-500 ease-out' : 'duration-0'} ${isDragging ? '' : 'ease-out'}`}
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView} + ${itemsPerView > 1 ? getGapInPixels() / itemsPerView : 0}px)))`,
            '--base-transform': `translateX(calc(-${currentIndex} * (100% / ${itemsPerView} + ${itemsPerView > 1 ? getGapInPixels() / itemsPerView : 0}px)))`,
            gap: itemsPerView > 1 ? getGapForCurrentScreen() : '0px'
          }}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
            >
              <div className="bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-dream-dark-surface">
                  <Link to={`/producto/${product.id}`} className="block h-full w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                    />
                  </Link>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      {product.badge || 'Nuevo'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest">
                      {product.subcategory}
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
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Intenta seleccionar otra categoría para ver más productos.
            </p>
            <button
              onClick={() => setSelectedCategory('Todos')}
              className="bg-black dark:bg-white text-white dark:text-black font-black py-3 px-8 rounded-xl text-sm uppercase tracking-widest transition-all"
            >
              Ver Todos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
