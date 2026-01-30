import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CATEGORIES, ENHANCED_CATALOG } from '@/utils/constants';
import { FaShoppingCart, FaStar, FaChevronLeft, FaChevronRight, FaWhatsapp, FaTags, FaRulerCombined } from 'react-icons/fa';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useCart } from '@/contexts/CartContext';
import ProductNotification from '@/components/ui/ProductNotification';
import FilterDropdown from '@/components/ui/FilterDropdown';
import SectionLayout from '@/components/layout/SectionLayout';
import { useDragCarousel } from '@/hooks/useDragCarousel';
import ProductCard from '@/components/ui/ProductCard'; // MISMO COMPONENTE QUE PRODUCTCAROUSEL

const CategoriesSection = () => {
  const [selectedType, setSelectedType] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart, getTotalItems } = useCart();

  const types = ['todos', ...new Set(ENHANCED_CATALOG.map(p => p.subcategory).filter(Boolean))];
  const sizes = ['todos', ...new Set(ENHANCED_CATALOG.flatMap(p => p.sizes || []).filter(Boolean))];

  const typeOptions = types.map(t => ({ id: t, name: t === 'todos' ? 'Todos los modelos' : t }));
  const sizeOptions = sizes.map(s => ({ id: s, name: s === 'todos' ? 'Todas las medidas' : s }));

  // Responsive items per view - Configurado para 3 productos en desktop
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);  // mobile: 1 producto
      else if (window.innerWidth < 768) setItemsPerView(2);  // tablet: 2 productos
      else setItemsPerView(3); // desktop: exactamente 3 productos
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const getGapForCurrentScreen = () => {
    if (typeof window === 'undefined') return '1.5rem';
    return window.innerWidth >= 1024 ? '2rem' : '1.5rem';
  };

  const getGapInPixels = () => {
    if (typeof window === 'undefined') return 24; // 1.5rem = 24px
    return window.innerWidth >= 1024 ? 32 : 24; // 2rem = 32px, 1.5rem = 24px
  };

  const filteredProducts = ENHANCED_CATALOG.filter(product => {
    const typeMatch = selectedType === 'todos' || product.subcategory === selectedType;
    const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
    return typeMatch && sizeMatch;
  });

  const nextSlide = () => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      // Si llegamos al final, volvemos al inicio (carrusel infinito)
      return next >= filteredProducts.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => {
      const prevSlide = prev - 1;
      // Si estamos en el inicio, vamos al final (carrusel infinito)
      return prevSlide < 0 ? filteredProducts.length - 1 : prevSlide;
    });
  };

  const { carouselRef, handlers } = useDragCarousel((direction) => {
    if (direction === 'next') nextSlide();
    else prevSlide();
  });

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <SectionLayout background="gray">
      <div className="relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block animate-fade-in">Catálogo Oficial</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
            Nuestros <span className="text-gold-500">Productos</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto">
            Calidad directa de fábrica para tu descanso perfecto. Ingeniería peruana de clase mundial.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16 px-4">
          <FilterDropdown
            label="Línea / Modelo"
            placeholder="Todos los modelos"
            options={typeOptions}
            value={selectedType}
            onChange={(val) => {
              setSelectedType(val);
              setCurrentSlide(0);
            }}
            icon={FaTags}
          />
          <FilterDropdown
            label="Medida"
            placeholder="Todas las medidas"
            options={sizeOptions}
            value={selectedSize}
            onChange={(val) => {
              setSelectedSize(val);
              setCurrentSlide(0);
            }}
            icon={FaRulerCombined}
          />
        </div>

        {/* Carousel Navigation Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50/50 dark:bg-white/[0.02] p-6 rounded-3xl border border-gray-100 dark:border-white/5">
          <div className="flex flex-col gap-2 flex-grow max-w-xs w-full sm:w-auto">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Vista Rápida</span>
              <span className="text-xs font-bold text-gold-500">
                {Math.min(currentSlide + itemsPerView, filteredProducts.length)} / {filteredProducts.length}
              </span>
            </div>
            <div className="h-[2px] w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 transition-all duration-700 ease-out"
                style={{ width: `${(Math.min(currentSlide + itemsPerView, filteredProducts.length) / filteredProducts.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-[9px] font-black text-gray-400 uppercase tracking-widest animate-pulse">Desliza para explorar o usa las flechas laterales</span>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative px-0 sm:px-12">
          {/* Side Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 text-gray-400 dark:text-gray-500 hover:text-gold-500 transition-all duration-300 hover:scale-125 active:scale-95`}
          >
            <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 text-gray-400 dark:text-gray-500 hover:text-gold-500 transition-all duration-300 hover:scale-125 active:scale-95`}
          >
            <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>

          {/* Wrapper Principal del Carrusel */}
          <div
            className="overflow-hidden"
            ref={carouselRef}
            {...handlers}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * (100 / itemsPerView))}%)`, // DESLIZAMIENTO DE 1 EN 1
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

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/25 relative overflow-hidden"
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
        onClose={closeProductModal}
        selectedSize={selectedSize === 'todos' ? null : selectedSize}
      />
    </SectionLayout>
  );
};

export default CategoriesSection;
