import React from 'react';
import { FaShoppingCart, FaEye, FaWhatsapp } from 'react-icons/fa';
import { DetailsButton, PriceInquiryButton } from '../../ui/Buttons';
import { Link } from 'react-router-dom';

const ProductCard = ({
  product,
  selectedSize,
  onAddToCart,
  onQuickView
}) => {
  console.log('ProductCard rendered:', { product, onQuickView }); // Debug log



  return (
    <div className="bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 h-full flex flex-col">
      {/* Product Image - Mismas medidas que el carrusel */}
      <div className="relative overflow-hidden bg-gray-50 dark:bg-dream-dark-surface p-6" style={{ aspectRatio: '16/9' }}>
        <Link to={`/producto/${product.id}`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-[10s] group-hover:scale-110"
          />
        </Link>
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Content - Mismas medidas que el carrusel */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest">
            {product.subcategory}
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

        {/* Size */}
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Medida: {product.sizes.join(', ')}
        </div>

        {/* Actions row - MISMO PATRÓN ELEGANCE 2026 */}
        <div className="flex flex-col gap-4 mt-auto">
          <PriceInquiryButton product={product} size={selectedSize === 'todos' ? null : selectedSize} />

          <div className="flex gap-2">
            {/* Botón del carrito - ELEGANCE 2026 */}
            <button
              onClick={() => onAddToCart(product, 1, selectedSize === 'todos' ? null : selectedSize)}
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
            
            {/* Botón de detalles - MINIMAL LUXURY */}
            <button
              onClick={() => window.location.href = `/producto/${product.id}`}
              className="group relative w-12 h-12 bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white transition-all duration-700 hover:border-black dark:hover:border-white hover:scale-[1.05] active:scale-[0.95]"
              title="Ver Detalles"
            >
              <svg className="w-5 h-5 mx-auto transition-transform duration-700 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
