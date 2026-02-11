import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '@/components/ui/ProductCard';

const CategoriesCarousel = ({
    filteredProducts,
    currentSlide,
    itemsPerView,
    carouselRef,
    handlers,
    prevSlide,
    nextSlide,
    selectedSize,
    addToCart,
    openProductModal,
    getGapForCurrentScreen
}) => {
    return (
        <>
            {/* Compact Navigation & Status */}
            <div className="flex items-center justify-between mb-8 px-4 sm:px-12">
                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:bg-vive-600 hover:text-white transition-all duration-300 active:scale-90"
                        >
                            <FaChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:bg-vive-600 hover:text-white transition-all duration-300 active:scale-90"
                        >
                            <FaChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="h-4 w-px bg-gray-200 dark:bg-white/10 hidden sm:block"></div>
                    <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                        Mostrando <span className="text-gray-900 dark:text-white">{Math.min(currentSlide + itemsPerView, filteredProducts.length)}</span> de {filteredProducts.length}
                    </p>
                </div>

                <div className="hidden sm:block">
                    <span className="text-[10px] font-bold text-vive-600 uppercase tracking-widest animate-pulse">Desliza para ver más →</span>
                </div>
            </div>

            {/* Carousel Viewport */}
            <div className="relative">
                <div
                    className="overflow-hidden"
                    ref={carouselRef}
                    {...handlers}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentSlide * (100 / itemsPerView))}%)`,
                            gap: itemsPerView > 1 ? getGapForCurrentScreen() : '0px'
                        }}
                    >
                        {filteredProducts.map((product) => (
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
                                    selectedSize={selectedSize}
                                    onAddToCart={(product, quantity, size) => addToCart(product, quantity, size)}
                                    onQuickView={openProductModal}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesCarousel;
