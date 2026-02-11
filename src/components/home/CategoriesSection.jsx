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
      <div className="relative overflow-hidden">
        {/* Subtle Background Engineering Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none rotate-12 -translate-y-1/2">
          <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        </div>

        {/* Section Header: Industrial Authority */}
        <div className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-4 px-4 py-1 bg-vive-600/5 border border-vive-600/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.5em]">Catálogo Oficial // Fábrica</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-display font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter leading-[0.9]">
            Nuestros <br className="hidden md:block" /> <span className="text-vive-600 dark:text-vive-500 italic font-light lowercase">productos</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Ingeniería peruana de clase mundial. <br className="hidden md:block" />
            <span className="text-gray-900 dark:text-white font-bold">Calidad directa</span> para un descanso sin compromisos.
          </p>
        </div>

        {/* Filters: Technical Control Panel */}
        <div className="max-w-4xl mx-auto mb-20 px-4">
          <div className="bg-white dark:bg-[#0A0A0A] p-4 md:p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col md:flex-row gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <FaTags className="text-6xl text-gray-400" />
            </div>
            <div className="flex-1">
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
            </div>
            <div className="w-px h-12 bg-gray-100 dark:bg-white/10 hidden md:block self-end mb-2"></div>
            <div className="flex-1">
              <FilterDropdown
                label="Dimensión / Medida"
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
          </div>
          <div className="mt-4 flex justify-between px-2">
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Protocol: Selective_Filter_V.2</span>
            <span className="text-[9px] font-mono text-vive-600/50 font-bold uppercase tracking-widest">Active_Results: {filteredProducts.length}</span>
          </div>
        </div>

        {/* Carousel Status: Technical HUD */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-100/50 dark:bg-white/[0.02] p-8 border border-gray-200 dark:border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-200 dark:bg-white/5">
            <div
              className="h-full bg-vive-600 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(41,156,71,0.5)]"
              style={{ width: `${(Math.min(currentSlide + itemsPerView, filteredProducts.length) / filteredProducts.length) * 100}%` }}
            />
          </div>
          <div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Registro de Visualización</h4>
            <p className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter">
              {Math.min(currentSlide + itemsPerView, filteredProducts.length)} <span className="text-gray-300 dark:text-gray-700">/</span> {filteredProducts.length} <span className="text-xs text-vive-600 ml-2 font-mono">MOD_EXPLORE</span>
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 py-3 px-6 border border-gray-200 dark:border-white/10 rounded-full bg-white dark:bg-black/40">
            <span className="text-[9px] font-black text-vive-600 uppercase tracking-widest animate-pulse">Desliza para explorar ingeniería Vive</span>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative px-0 sm:px-12">
          {/* Side Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 text-gray-400 dark:text-gray-500 hover:text-vive-500 transition-all duration-300 hover:scale-125 active:scale-95`}
          >
            <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 text-gray-400 dark:text-gray-500 hover:text-vive-500 transition-all duration-300 hover:scale-125 active:scale-95`}
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
        onClose={closeProductModal}
        selectedSize={selectedSize === 'todos' ? null : selectedSize}
      />
    </SectionLayout>
  );
};

export default CategoriesSection;
