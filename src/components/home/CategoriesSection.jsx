import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, ENHANCED_CATALOG } from '@/utils/constants';
import { FaFilter, FaShoppingCart, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';
import ProductNotification from '@/components/ui/ProductNotification';

const CategoriesSection = () => {
  const [selectedType, setSelectedType] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [favorites, setFavorites] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart, getTotalItems } = useCart();

  const types = ['todos', ...new Set(ENHANCED_CATALOG.map(p => p.type))];
  const sizes = ['todos', ...new Set(ENHANCED_CATALOG.flatMap(p => p.sizes))];

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
    const typeMatch = selectedType === 'todos' || product.type === selectedType;
    const sizeMatch = selectedSize === 'todos' || product.sizes.includes(selectedSize);
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
    const maxSlide = Math.max(0, filteredProducts.length - itemsPerView);
    setCurrentSlide(prev => Math.min(prev + itemsPerView, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - itemsPerView, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index * itemsPerView);
  };

  // Modal handlers
  const openProductModal = (product) => {
    console.log('Opening notification for product:', product); // Debug log
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    console.log('Closing notification'); // Debug log
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Nuestros <span className="text-gold-500">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calidad directa de fábrica para tu descanso perfecto
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 clean-minimal px-4 py-2 rounded-lg">
            <FaFilter className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filtros:</span>
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap gap-2">
            {types.map(type => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setCurrentSlide(0); // Reset carousel when filter changes
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedType === type
                  ? 'bg-gold-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {type === 'todos' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Size Filter */}
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setCurrentSlide(0); // Reset carousel when filter changes
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSize === size
                  ? 'bg-gold-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {size === 'todos' ? 'Todas las medidas' : size}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {filteredProducts.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${currentSlide === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100 hover:scale-110'
                  }`}
                aria-label="Anterior"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide >= filteredProducts.length - itemsPerView}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${currentSlide >= filteredProducts.length - itemsPerView
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100 hover:scale-110'
                  }`}
                aria-label="Siguiente"
              >
                <FaChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Products Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
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
                      <Link to={`/producto/${product.id}`} className="block">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {product.badge}
                        </div>
                      )}

                      {/* Type Badge */}
                      <div className="absolute top-3 right-3 bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {product.type}
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
                      <Link to={`/producto/${product.id}`}>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-gold-500 transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Size */}
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Medida: {product.sizes.join(', ')}
                      </div>

                      {/* Price and CTA - Always at bottom */}
                      <div className="space-y-3 mt-auto">
                        <div className="text-2xl font-bold text-gold-600">
                          S/ {product.price}
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => openProductModal(product)}
                            className="flex-1 group relative overflow-hidden bg-white dark:bg-gray-800 border-2 border-gold-500/30 hover:border-gold-500 text-gray-900 dark:text-white px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5"
                            title="Ver detalles del producto"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Ver Detalle
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          </button>
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

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlideIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}
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
    </section >
  );
};

export default CategoriesSection;
