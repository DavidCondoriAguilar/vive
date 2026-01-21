import React from 'react';
import { FaShoppingCart, FaHeart, FaEye, FaWhatsapp } from 'react-icons/fa';
import { DetailsButton, PriceInquiryButton } from '../../ui/Buttons';
import { Link } from 'react-router-dom';

const ProductCard = ({
  product,
  selectedSize,
  onAddToCart,
  onQuickView,
  onToggleFavorite,
  isFavorite
}) => {
  console.log('ProductCard rendered:', { product, onQuickView }); // Debug log



  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
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

      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col flex-1">
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

        {/* Actions row */}
        <div className="flex flex-col gap-3 mt-auto">
          <PriceInquiryButton product={product} size={selectedSize === 'todos' ? null : selectedSize} />

          <div className="flex gap-3">
            <DetailsButton to={`/producto/${product.id}`} className="flex-[1.5]" />

            <button
              onClick={() => onAddToCart(product, 1, selectedSize === 'todos' ? null : selectedSize)}
              className="group relative overflow-hidden bg-gray-900 dark:bg-zinc-800 hover:bg-gold-500 text-white w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 hover:scale-105 flex-shrink-0"
              title="Agregar a mi Cotización"
            >
              <FaShoppingCart className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
