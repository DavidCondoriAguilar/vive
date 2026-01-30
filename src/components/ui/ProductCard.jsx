import React from 'react';
import { Link } from 'react-router-dom';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product, selectedSize = null, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, 1, selectedSize);
    } else {
      addToCart(product, 1, selectedSize);
    }
  };

  return (
    <div className="bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 h-full flex flex-col">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50 dark:bg-dream-dark-surface p-6" style={{ aspectRatio: '16/9' }}>
        <Link to={`/producto/${product.id}`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-[10s] group-hover:scale-110"
          />
        </Link>

        {/* Badge - MISMO PATRÓN QUE CATEGORIES SECTION */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <span className="text-gold-500 text-[9px] font-bold uppercase tracking-widest">
            {product.subcategory}
          </span>
          <Link to={`/producto/${product.id}`}>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1 mb-2 leading-tight hover:text-gold-500 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Size - MISMO PATRÓN QUE CATEGORIES SECTION */}
        <div className="text-[10px] font-medium text-gray-400 dark:text-gray-500 mb-4 italic">
          Medida: {product.sizes.join(', ')}
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <PriceInquiryButton product={product} />
          <div className="flex gap-2">
            {/* Botón del carrito - ELEGANCE 2026 */}
            <button
              onClick={handleAddToCart}
              className="flex-1 group relative overflow-hidden bg-black dark:bg-white text-white dark:text-black font-light text-xs tracking-[0.15em] uppercase py-4 px-6 rounded-none border-0 transition-all duration-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Agregar al Carrito</span>
              </span>
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </button>


            {/* Botón de detalles - ELEGANCE 2026 + TEXTO HOVER */}
            <button
              onClick={() => window.location.href = `/producto/${product.id}`}
              className="group relative w-20 h-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-black/30 dark:border-white/30 text-black dark:text-white transition-all duration-700 hover:border-black dark:hover:border-white hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center px-4 overflow-hidden"
              title="Ver Detalles"
            >
              {/* Texto "Detalles" - SIEMPRE VISIBLE */}
              <span className="text-xs font-light tracking-[0.1em] uppercase transition-all duration-300 group-hover:tracking-[0.15em]">
                Detalles
              </span>

              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Pro glow effect */}
              <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
