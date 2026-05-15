import React from 'react';
import { Link } from 'react-router-dom';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@shared/components/ui/Buttons';
import { useCart } from '@shared/contexts/CartContext';
import { getPrettySubcategoryName } from '@core/utils/constants';

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
    <div className="group bg-white dark:bg-[#0A0A0A] rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 h-full flex flex-col border border-gray-50 dark:border-white/5">
      <div className="relative overflow-hidden bg-white aspect-[4/5] flex items-center justify-center p-2">
        <Link to={`/producto/${product.id}`} className="block h-full w-full" aria-label={`Ver detalles de ${product.name}`}>
          <img
            src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=600&q=75&auto=format`}
            alt={`${product.name} - Colchón premium ${product.category} fabricado por Vive en Perú`}
            className="w-full h-full object-contain"
            width="500"
            height="625"
            loading="lazy"
          />
        </Link>
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-vive-600 dark:bg-vive-500 text-white dark:text-black text-[8px] font-black uppercase tracking-widest rounded-full">
              {product.badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col flex-1">
        <span className="text-vive-600 dark:text-vive-500 text-[8px] font-black uppercase tracking-[0.2em] block leading-tight truncate">
          {getPrettySubcategoryName(product.subcategory)}
        </span>
        <Link to={`/producto/${product.id}`}>
          <h3 className="text-xs font-display font-bold text-gray-900 dark:text-white mt-0.5 mb-2 leading-tight truncate hover:text-vive-500 transition-colors">{product.name}</h3>
        </Link>
        <div className="flex flex-col gap-1.5 mt-auto">
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-black text-[8px] tracking-[0.25em] uppercase rounded-lg transition-all duration-500 hover:bg-vive-600 dark:hover:bg-vive-500 flex items-center justify-center gap-1.5"
          >
            Agregar <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
