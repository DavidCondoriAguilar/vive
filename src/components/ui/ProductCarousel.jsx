import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForward, MdOutlineArrowBack } from 'react-icons/md';
import { PrimaryButton } from '@/components/ui/Buttons';
import { useDragCarousel } from '@/hooks/useDragCarousel';
import { CATEGORIES } from '@/utils/constants';

const ProductCarousel = ({ products = [], title = "Nuestra Colección" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

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

  const filteredProducts = products.filter(product => {
    return selectedCategory === 'Todos' || product.category === selectedCategory.toLowerCase();
  });

  const canGoNext = currentIndex < filteredProducts.length - itemsPerView;
  const canGoPrev = currentIndex > 0;

  const handleSlideChange = (direction) => {
    if (direction === 'next' && canGoNext) setCurrentIndex(prev => prev + 1);
    else if (direction === 'prev' && canGoPrev) setCurrentIndex(prev => prev - 1);
  };

  const { carouselRef, isDragging, dragDistance, handlers } = useDragCarousel(handleSlideChange);

  useEffect(() => setCurrentIndex(0), [selectedCategory]);

  return (
    <div className="py-24">
      {/* Header & Controls - High Visibility */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 px-4">
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-white uppercase leading-tight tracking-tighter mb-4">
            {title}
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-[2px] bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 transition-all duration-1000 ease-out shadow-[0_0_10px_#d4af37]"
                style={{ width: `${((currentIndex + itemsPerView) / filteredProducts.length) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-black text-gold-500 uppercase tracking-widest whitespace-nowrap">
              {currentIndex + itemsPerView} / {filteredProducts.length}
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
            Explora nuestra colección selecta con un solo clic.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {/* Slide Indicators - Minimalist */}
          <div className="hidden sm:flex gap-2">
            {filteredProducts.slice(0, Math.max(0, filteredProducts.length - itemsPerView + 1)).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex
                  ? 'w-8 bg-gold-500'
                  : 'w-2 bg-gray-200 dark:bg-gray-800'
                  }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleSlideChange('prev')}
              disabled={!canGoPrev}
              className={`w-14 h-14 rounded-2xl border border-gray-100 dark:border-white/10 flex items-center justify-center transition-all ${!canGoPrev ? 'opacity-20 cursor-not-allowed' : 'hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105 active:scale-95 shadow-lg shadow-black/5'}`}
            >
              <MdOutlineArrowBack className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleSlideChange('next')}
              disabled={!canGoNext}
              className={`w-14 h-14 rounded-2xl border border-gray-100 dark:border-white/10 flex items-center justify-center transition-all ${!canGoNext ? 'opacity-20 cursor-not-allowed' : 'hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105 active:scale-95 shadow-lg shadow-black/5'}`}
            >
              <MdOutlineArrowForward className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 px-4">
        {['Todos', 'Resorte', 'Espuma', 'Dormitorio', 'Muebles'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedCategory === cat
              ? 'bg-gold-500 border-gold-500 text-white shadow-lg shadow-gold-500/20'
              : 'bg-transparent border-gray-100 dark:border-white/5 text-gray-400 hover:border-gold-500/30'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Viewport */}
      <div className="relative overflow-hidden cursor-grab active:cursor-grabbing" ref={carouselRef} {...handlers}>
        <div
          className="flex gap-8 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% + ${isDragging ? dragDistance : 0}px))` }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 group"
              style={{ width: `calc(${100 / itemsPerView}% - 24px)` }}
            >
              <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-[2.5rem] border border-transparent hover:border-gray-100 dark:hover:border-white/5 transition-all duration-700 hover:bg-white dark:hover:bg-zinc-900 h-full flex flex-col">
                <Link to={`/producto/${product.id}`} className="block aspect-[4/5] overflow-hidden rounded-[2rem] bg-white dark:bg-black p-6 mb-8 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                  />
                  {product.badge && (
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-gold-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </Link>

                <div className="space-y-3 flex-grow flex flex-col">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{product.subcategory}</h4>
                    <Link to={`/producto/${product.id}`}>
                      <h3 className="text-lg font-display font-black text-gray-900 dark:text-white uppercase tracking-tight line-clamp-1 hover:text-gold-500 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="pt-4 mt-auto flex items-center justify-between gap-4">
                    <span className="text-xl font-display font-black text-gray-900 dark:text-white">
                      S/ {product.price.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                    </span>
                    <Link
                      to={`/producto/${product.id}`}
                      className="flex-grow sm:flex-initial px-6 py-3 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 text-center flex items-center justify-center gap-2"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Detalle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;