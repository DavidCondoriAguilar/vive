import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CATEGORIES, ENHANCED_CATALOG } from '@/utils/constants';
import { FaShoppingCart, FaStar, FaChevronLeft, FaChevronRight, FaWhatsapp, FaEye, FaHeart, FaTags, FaRulerCombined } from 'react-icons/fa';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useCart } from '@/contexts/CartContext';
import ProductNotification from '@/components/ui/ProductNotification';
import FilterDropdown from '@/components/ui/FilterDropdown';
import SectionLayout from '@/components/layout/SectionLayout';

const CategoriesSection = () => {
  const [selectedType, setSelectedType] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [favorites, setFavorites] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart, getTotalItems } = useCart();

  const types = ['todos', ...new Set(ENHANCED_CATALOG.map(p => p.subcategory).filter(Boolean))];
  const sizes = ['todos', ...new Set(ENHANCED_CATALOG.flatMap(p => p.sizes || []).filter(Boolean))];

  const typeOptions = types.map(t => ({ id: t, name: t === 'todos' ? 'Todos los modelos' : t }));
  const sizeOptions = sizes.map(s => ({ id: s, name: s === 'todos' ? 'Todas las medidas' : s }));

  // Responsive items per view
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

  const filteredProducts = ENHANCED_CATALOG.filter(product => {
    const typeMatch = selectedType === 'todos' || product.subcategory === selectedType;
    const sizeMatch = selectedSize === 'todos' || (product.sizes && product.sizes.includes(selectedSize));
    return typeMatch && sizeMatch;
  });

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const nextSlide = () => {
    const maxSlide = filteredProducts.length - itemsPerView;
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    const maxSlide = filteredProducts.length - itemsPerView;
    setCurrentSlide(Math.min(index, maxSlide));
  };

  // Modal handlers
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const visibleProducts = filteredProducts.slice(currentSlide, currentSlide + itemsPerView);
  const totalSlides = Math.ceil(filteredProducts.length / itemsPerView);
  const currentSlideIndex = Math.floor(currentSlide / itemsPerView);

  return (
    <SectionLayout>
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

        {/* Filters - Dropdowns for a cleaner look */}
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

        {/* Carousel Navigation Header - High Visibility */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50/50 dark:bg-white/[0.02] p-6 rounded-3xl border border-gray-100 dark:border-white/5">
          <div className="flex flex-col gap-2 flex-grow max-w-xs w-full sm:w-auto">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Vista Rápida</span>
              <span className="text-xs font-bold text-gold-500">
                {currentSlide + itemsPerView} / {filteredProducts.length}
              </span>
            </div>
            <div className="h-[2px] w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                style={{ width: `${((currentSlide + itemsPerView) / filteredProducts.length) * 100}% ` }}
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
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center transition-all shadow-xl ${currentSlide === 0
              ? 'opacity-0 pointer-events-none'
              : 'bg-white/90 dark:bg-zinc-900/90 text-gray-700 dark:text-gray-300 hover:bg-gold-500 hover:text-white hover:scale-110 active:scale-95 translate-x-1 sm:-translate-x-6'
              }`}
            aria-label="Anterior"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= filteredProducts.length - itemsPerView}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center transition-all shadow-xl ${currentSlide >= filteredProducts.length - itemsPerView
              ? 'opacity-0 pointer-events-none'
              : 'bg-white/90 dark:bg-zinc-900/90 text-gray-700 dark:text-gray-300 hover:bg-gold-500 hover:text-white hover:scale-110 active:scale-95 -translate-x-1 sm:translate-x-6'
              }`}
            aria-label="Siguiente"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
          {/* Products Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentSlide} * (100% / ${itemsPerView} + ${itemsPerView > 1 ? '1.5rem / ' + itemsPerView : '0px'})))`,
                gap: itemsPerView > 1 ? '1.5rem' : '0px'
              }}
            >
              {
                filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <div className="bg-white dark:bg-black rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 transition-all duration-700 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-900">
                        <Link to={`/producto/${product.id}`} className="block h-full w-full">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                        </Link>

                        {/* Badge (Only if different from subcategory) */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            {product.badge || 'Nuevo'}
                          </span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
                          aria-label="Agregar a favoritos"
                        >
                          <FaHeart className={`w-4 h-4 ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4">
                          <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest">
                            {product.subcategory || 'Premium'}
                          </span>
                          <Link to={`/producto/${product.id}`}>
                            <h3 className="text-lg font-black text-gray-900 dark:text-white mt-2 mb-3 leading-tight hover:text-gold-500 transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        {/* Price and CTA - Always at bottom */}
                        <div className="space-y-4 mt-auto">
                          <PriceInquiryButton product={product} size={selectedSize === 'todos' ? null : selectedSize} />

                          <div className="flex gap-2">
                            <DetailsButton to={`/producto/${product.id}`} className="flex-1" />
                            <QuoteIconButton onClick={() => addToCart(product, 1, selectedSize === 'todos' ? null : selectedSize)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div >
          </div >

        </div >

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
      </div >

      {/* Product Notification */}
      < ProductNotification
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        selectedSize={selectedSize === 'todos' ? null : selectedSize}
      />
    </SectionLayout>
  );
};

export default CategoriesSection;
