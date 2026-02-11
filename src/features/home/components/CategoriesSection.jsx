import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ENHANCED_CATALOG } from '@/utils/constants';
import { useCart } from '@/contexts/CartContext';
import ProductNotification from '@/components/ui/ProductNotification';
import SectionLayout from '@/components/layout/SectionLayout';
import { useDragCarousel } from '@/hooks/useDragCarousel';
import EngineeringGrid from '@/components/ui/EngineeringGrid';

// Sub-components
import CategoriesHeader from './CategoriesHeader';
import CategoriesFilters from './CategoriesFilters';
import CategoriesCarousel from './CategoriesCarousel';

const CategoriesSection = () => {
  const [selectedType, setSelectedType] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart } = useCart();

  const types = ['todos', ...new Set(ENHANCED_CATALOG.map(p => p.subcategory).filter(Boolean))];
  const sizes = ['todos', ...new Set(ENHANCED_CATALOG.flatMap(p => p.sizes || []).filter(Boolean))];

  const typeOptions = types.map(t => ({ id: t, name: t === 'todos' ? 'Todos los modelos' : t }));
  const sizeOptions = sizes.map(s => ({ id: s, name: s === 'todos' ? 'Todas las medidas' : s }));

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

  const getGapForCurrentScreen = () => {
    if (typeof window === 'undefined') return '1.5rem';
    return window.innerWidth >= 1024 ? '2rem' : '1.5rem';
  };

  const filteredProducts = ENHANCED_CATALOG.filter(product => {
    const typeMatch = selectedType === 'todos' || product.subcategory === selectedType;
    const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
    return typeMatch && sizeMatch;
  });

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1 >= filteredProducts.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 < 0 ? filteredProducts.length - 1 : prev - 1));
  };

  const { carouselRef, handlers } = useDragCarousel((direction) => {
    if (direction === 'next') nextSlide();
    else prevSlide();
  });

  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Subtle Luxury Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-vive-600/[0.02] pointer-events-none"></div>

        <CategoriesFilters
          typeOptions={typeOptions}
          sizeOptions={sizeOptions}
          selectedType={selectedType}
          selectedSize={selectedSize}
          onTypeChange={(val) => { setSelectedType(val); setCurrentSlide(0); }}
          onSizeChange={(val) => { setSelectedSize(val); setCurrentSlide(0); }}
          resultsCount={filteredProducts.length}
        />

        <CategoriesCarousel
          filteredProducts={filteredProducts}
          currentSlide={currentSlide}
          itemsPerView={itemsPerView}
          carouselRef={carouselRef}
          handlers={handlers}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          selectedSize={selectedSize}
          addToCart={addToCart}
          openProductModal={(product) => { setSelectedProduct(product); setIsModalOpen(true); }}
          getGapForCurrentScreen={getGapForCurrentScreen}
        />

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-vive-500 to-vive-600 hover:from-vive-600 hover:to-vive-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-vive-500/25 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11l-3 3m0 0l-3-3m3 3V8" />
              </svg>
              Ver Catálogo Completo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>

      <ProductNotification
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedProduct(null); }}
        selectedSize={selectedSize === 'todos' ? null : selectedSize}
      />
    </section>
  );
};

export default CategoriesSection;
