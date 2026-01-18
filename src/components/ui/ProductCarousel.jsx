import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForward } from 'react-icons/md';

/**
 * Product Carousel Component
 * Displays products in a clean, scrollable carousel format
 */
const ProductCarousel = ({ products = [], title = "Nuestros Productos" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

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



  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

  if (!products.length) return null;

  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Explora nuestra colección premium
          </p>
        </div>

        <Link
          to="/catalogo"
          className="hidden sm:flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium transition-colors"
        >
          Ver todo el catálogo
          <MdOutlineArrowForward className="w-4 h-4" />
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Clean Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                      {product.badge}
                    </span>
                  </div>
                )}

                {product.originalPrice && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    S/ {product.price.toLocaleString()}
                  </span>
                  <Link
                    to={`/producto/${product.id}`}
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Navigation */}
        {products.length > itemsPerView && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-gray-800 dark:bg-white'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile CTA */}
      <div className="sm:hidden mt-6 text-center">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors"
        >
          Ver todo el catálogo
          <MdOutlineArrowForward className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCarousel;