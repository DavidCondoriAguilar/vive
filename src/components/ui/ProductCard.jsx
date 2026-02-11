import React from 'react';
import { Link } from 'react-router-dom';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useCart } from '@/contexts/CartContext';
import { getPrettySubcategoryName } from '@/utils/constants';

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
    <div className="group bg-white dark:bg-[#0A0A0A] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:-translate-y-3 h-full flex flex-col relative border border-gray-50 dark:border-white/5">
      {/* Product Image - Gallery Treatment */}
      <div className="relative overflow-hidden bg-white aspect-[4/3] flex items-center justify-center p-8">
        <Link
          to={`/producto/${product.id}`}
          className="block h-full w-full"
          aria-label={`Ver detalles de ${product.name}`}
        >
          <img
            src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=600&q=75&auto=format`}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-[2s] group-hover:scale-105"
            width="600"
            height="450"
            loading="lazy"
          />
        </Link>

        {/* Floating Badge - Minimalist */}
        {product.badge && (
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1.5 bg-vive-600 dark:bg-vive-500 text-white dark:text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-vive-500/20">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info - Editorial Flow */}
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <span className="text-vive-600 dark:text-vive-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            {getPrettySubcategoryName(product.subcategory)}
          </span>
          <Link to={`/producto/${product.id}`}>
            <h3 className="text-xl font-display font-black text-gray-900 dark:text-white mb-2 leading-tight hover:text-vive-500 transition-colors uppercase tracking-tight">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        {/* Luxury Detail: Sizes as specialized dots or text */}
        <div className="flex items-center gap-2 mb-8 items-center">
          <div className="w-1 h-1 bg-vive-500 rounded-full"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
            Disponibilidad: {product.sizes.length} Medidas
          </span>
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <button
            onClick={handleAddToCart}
            className="group/btn relative w-full bg-gray-900 dark:bg-white text-white dark:text-black font-black text-[10px] tracking-[0.3em] uppercase py-5 px-6 rounded-2xl transition-all duration-500 hover:bg-vive-600 dark:hover:bg-vive-500 hover:text-white dark:hover:text-black overflow-hidden flex items-center justify-center gap-3"
          >
            <span className="relative z-10">Agregar al Carrito</span>
            <svg className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <Link
            to={`/producto/${product.id}`}
            className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em] text-center py-2 hover:text-vive-600 dark:hover:text-vive-500 transition-colors"
          >
            Conocer más detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
