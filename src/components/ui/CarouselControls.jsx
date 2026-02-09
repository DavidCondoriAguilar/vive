import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselControls = ({
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
  itemsPerView,
  totalItems
}) => {
  return (
    <>
      {totalItems > itemsPerView && (
        <>
          <button
            onClick={onPrev}
            disabled={!canGoPrev}
            aria-label="Anterior producto"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 text-gray-400 dark:text-gray-500 hover:text-gold-500 transition-all duration-300 ${canGoPrev
              ? 'opacity-100 hover:scale-125'
              : 'opacity-10 cursor-not-allowed'
              }`}
          >
            <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" aria-hidden="true" />
          </button>
          <button
            onClick={onNext}
            disabled={!canGoNext}
            aria-label="Siguiente producto"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 text-gray-400 dark:text-gray-500 hover:text-gold-500 transition-all duration-300 ${canGoNext
              ? 'opacity-100 hover:scale-125'
              : 'opacity-10 cursor-not-allowed'
              }`}
          >
            <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10" aria-hidden="true" />
          </button>
        </>
      )}
    </>
  );
};

export default CarouselControls;
