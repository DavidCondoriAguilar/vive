import React from 'react';

const CarouselHeader = ({
  title,
  currentIndex,
  itemsPerView,
  totalItems,
  description
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
      <div className="max-w-xl">
        <span className="text-vive-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Selección Premium</span>
        <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-white uppercase leading-tight tracking-tighter mb-6">
          {title}
        </h2>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 h-[2px] bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-vive-500 transition-all duration-1000 ease-out shadow-[0_0_10px_#299C47]"
              style={{ width: `${((currentIndex + itemsPerView) / Math.max(1, totalItems)) * 100}% ` }}
            />
          </div>
          <span className="text-[10px] font-black text-vive-500 uppercase tracking-widest whitespace-nowrap">
            {currentIndex + itemsPerView} / {totalItems}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselHeader;
