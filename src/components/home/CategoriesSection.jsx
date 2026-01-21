import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, ENHANCED_CATALOG } from '@/utils/constants';
import { FaFilter, FaShoppingCart, FaHeart, FaChevronLeft, FaChevronRight, FaTags, FaRulerCombined } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';
import ProductNotification from '@/components/ui/ProductNotification';
import FilterDropdown from '@/components/ui/FilterDropdown';

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
      else if (window.innerWidth < 1280) setItemsPerView(4);
      else setItemsPerView(5);
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
    <section className="py-20 professional-section">
      <div className="container mx-auto px-6 lg:px-20">

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
                style={{ width: `${((currentSlide + itemsPerView) / filteredProducts.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:block text-[9px] font-black text-gray-400 uppercase tracking-widest animate-pulse">Desliza para explorar</span>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`w-12 h-12 p-0 rounded-xl border border-gray-100 dark:border-white/5 flex items-center justify-center transition-all ${currentSlide === 0
                  ? 'opacity-20 cursor-not-allowed'
                  : 'bg-white dark:bg-zinc-900 text-gray-500 hover:border-gold-500 hover:text-gold-500 hover:scale-105 active:scale-95'
                  }`}
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= filteredProducts.length - itemsPerView}
                className={`w-12 h-12 p-0 rounded-xl border border-gray-100 dark:border-white/5 flex items-center justify-center transition-all ${currentSlide >= filteredProducts.length - itemsPerView
                  ? 'opacity-20 cursor-not-allowed'
                  : 'bg-white dark:bg-zinc-900 text-gray-500 hover:border-gold-500 hover:text-gold-500 hover:scale-105 active:scale-95'
                  }`}
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          {/* Products Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                transform: `translateX(calc(-${currentSlide} * (100% / ${itemsPerView} + ${itemsPerView > 1 ? '1.5rem / ' + itemsPerView : '0px'})))`,
                gap: itemsPerView > 1 ? '1.5rem' : '0px'
              }}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gray-50">
                      <Link to={`/detalle/producto/${product.id}`} className="block">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      {/* Badge (Only if different from subcategory) */}
                      {product.badge && product.badge !== product.subcategory && (
                        <div className="absolute top-3 left-3 bg-gold-500 text-white px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                          {product.badge}
                        </div>
                      )}

                      {/* Type Badge */}
                      <div className="absolute top-3 right-3 bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {product.subcategory || 'Premium'}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
                        aria-label="Agregar a favoritos"
                      >
                        <FaHeart className={`w-4 h-4 ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex flex-col flex-1">
                      <Link to={`/detalle/producto/${product.id}`}>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-gold-500 transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Size */}
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        {product.sizes ? `Medida: ${product.sizes.join(', ')}` : 'Medida estándar'}
                      </div>

                      {/* Price and CTA - Always at bottom */}
                      <div className="space-y-3 mt-auto">
                        <div className="text-2xl font-bold text-gold-600">
                          S/ {product.price}
                        </div>

                        <div className="flex gap-3">
                          <Link
                            to={`/detalle/producto/${product.id}`}
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest hover:bg-white dark:hover:bg-zinc-900 hover:text-gold-500 hover:border-gold-500 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5"
                            title="Ver detalles del producto"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ver Detalle
                          </Link>
                          <button
                            onClick={() => addToCart(product, 1, selectedSize === 'todos' ? null : selectedSize)}
                            className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 hover:from-gold-600 hover:to-gold-500 text-white p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 hover:scale-105"
                            title="Agregar al carrito"
                          >
                            <FaShoppingCart className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>

      {/* Product Notification */}
      <ProductNotification
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        selectedSize={selectedSize === 'todos' ? null : selectedSize}
      />
    </section>
  );
};

export default CategoriesSection;
