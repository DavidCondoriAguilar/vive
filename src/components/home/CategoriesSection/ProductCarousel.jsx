import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from './ProductCard';
import { useDragCarousel } from '@/hooks/useDragCarousel';

const ProductCarousel = ({
  products,
  itemsPerView,
  currentSlide,
  onNextSlide,
  onPrevSlide,
  selectedSize,
  onAddToCart,
  onQuickView
}) => {
  const canGoNext = currentSlide < products.length - itemsPerView;
  const canGoPrev = currentSlide > 0;

  const handleSlideChange = (direction) => {
    if (direction === 'next' && canGoNext) {
      onNextSlide();
    } else if (direction === 'prev' && canGoPrev) {
      onPrevSlide();
    }
  };

  const { carouselRef, isDragging, dragDistance, handlers } = useDragCarousel(handleSlideChange);

  return (
    <div className="relative" ref={carouselRef} {...handlers}>
      {/* Navigation Arrows */}
      {products.length > itemsPerView && (
        <>
          <button
            onClick={onPrevSlide}
            disabled={!canGoPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 dark:text-gray-500 hover:text-gold-500 transition-all duration-300 ${!canGoPrev
              ? 'opacity-20 cursor-not-allowed'
              : 'hover:scale-125'
              }`}
            aria-label="Anterior"
          >
            <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={onNextSlide}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 dark:text-gray-500 hover:text-gold-500 transition-all duration-300 ${!canGoNext
              ? 'opacity-20 cursor-not-allowed'
              : 'hover:scale-125'
              }`}
            aria-label="Siguiente"
          >
            <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>
        </>
      )}

      {/* Products Carousel */}
      <div
        className={`overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        {...handlers}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(calc(-${currentSlide * (100 / itemsPerView)}% + ${isDragging ? dragDistance : 0}px))`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard
                product={product}
                selectedSize={selectedSize}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      {products.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const targetSlide = index * itemsPerView;
                // This would need to be passed from parent
                console.log('Navigate to slide:', targetSlide);
              }}
              className={`w-2 h-2 rounded-full transition-all ${Math.floor(currentSlide / itemsPerView) === index
                ? 'bg-gold-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
