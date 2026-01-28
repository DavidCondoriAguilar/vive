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
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all shadow-xl ${
              canGoPrev
                ? 'bg-white/90 dark:bg-white/10 text-black dark:text-white hover:scale-110'
                : 'bg-white/30 dark:bg-white/5 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all shadow-xl ${
              canGoNext
                ? 'bg-white/90 dark:bg-white/10 text-black dark:text-white hover:scale-110'
                : 'bg-white/30 dark:bg-white/5 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </>
      )}
    </>
  );
};

export default CarouselControls;
