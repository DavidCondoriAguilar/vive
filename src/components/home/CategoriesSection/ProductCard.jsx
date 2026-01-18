import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductCard = ({ 
  product, 
  selectedSize, 
  onAddToCart, 
  onQuickView, 
  onToggleFavorite, 
  isFavorite 
}) => {
  console.log('ProductCard rendered:', { product, onQuickView }); // Debug log

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const validPrice = isNaN(numPrice) ? 0 : numPrice;
    return `S/. ${validPrice.toFixed(2)}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
        >
          <FaHeart className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-current' : ''}`} />
        </button>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onQuickView(product)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-gold-500 transition-all transform scale-0 group-hover:scale-100 mr-2"
            title="Vista rápida"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Size */}
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Medida: {product.sizes.join(', ')}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gold-600">
            {formatPrice(product.price)}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => {
                console.log('Ver detalles clicked for product:', product); // Debug log
                onQuickView(product);
              }}
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded-lg transition-colors"
              title="Ver detalles"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button 
              onClick={() => onAddToCart(product, 1, selectedSize === 'todos' ? null : selectedSize)}
              className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white p-2 rounded-lg transition-colors group-hover:bg-gold-500 group-hover:text-gray-900"
              title="Agregar al carrito"
            >
              <FaShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
