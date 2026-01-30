import React, { useState, useEffect } from 'react';
import { useDragCarousel } from '@/hooks/useDragCarousel';
import { useCart } from '@/contexts/CartContext';
import ProductCard from './ProductCard';
import CarouselControls from './CarouselControls';
import CarouselHeader from './CarouselHeader';
import CarouselFilterSection from './CarouselFilterSection';

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

  const canGoNext = true; // Siempre habilitado para carrusel infinito
  const canGoPrev = true; // Siempre habilitado para carrusel infinito

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setCurrentIndex(prev => {
        const next = prev + 1;
        // Si llegamos al final, volvemos al inicio (carrusel infinito)
        return next >= filteredProducts.length ? 0 : next;
      });
    } else if (direction === 'prev') {
      setCurrentIndex(prev => {
        const prevSlide = prev - 1;
        // Si estamos en el inicio, vamos al final (carrusel infinito)
        return prevSlide < 0 ? filteredProducts.length - 1 : prevSlide;
      });
    }
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
        return 'Avance: Marco de Acero • Marco de Poliuretano • Gold • Diamont • Infantil';
      case 'Dormitorio':
        return 'Incluye: Cunas • Bases • Cabeceras';
      default:
        return 'Calidad directa de fábrica para tu descanso perfecto';
    }
  };

  return (
    <div className="relative">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
        <CarouselHeader
          title={title}
          currentIndex={currentIndex}
          itemsPerView={itemsPerView}
          totalItems={filteredProducts.length}
          description={getFilterDescription()}
        />

        {/* Filter Dropdown */}
        <CarouselFilterSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          filterOptions={filterOptions}
          showActiveFilter={false}
        />
      </div>

      {/* Active Filter Description */}
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
      <div className={`relative overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} active:cursor-grabbing`} 
           ref={carouselRef} 
           {...handlers} 
           tabIndex={0} 
           role="region" 
           aria-label="Carrusel de productos">
        
        {/* Navigation Arrows */}
        <CarouselControls
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          onPrev={() => handleSlideChange('prev')}
          onNext={() => handleSlideChange('next')}
          itemsPerView={itemsPerView}
          totalItems={filteredProducts.length}
        />

        {/* Product Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * (100 / itemsPerView))}%)`, // DESLIZAMIENTO DE 1 EN 1
            gap: itemsPerView > 1 ? getGapForCurrentScreen() : '0px'
          }}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
              style={{
                flex: itemsPerView === 3 ? '0 0 33.33%' : itemsPerView === 2 ? '0 0 50%' : '0 0 100%',
                scrollSnapAlign: 'start'
              }}
            >
              <ProductCard 
                product={product}
                onAddToCart={(product, quantity, size) => addToCart(product, quantity, size)}
              />
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
