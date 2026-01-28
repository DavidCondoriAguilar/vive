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
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
            {product.badge || 'Nuevo'}
          </span>
        </div>
      </div>

      {/* Product Info */}
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

        <div className="flex flex-col gap-3 mt-auto">
          <PriceInquiryButton product={product} />
          <div className="flex gap-2">
            <DetailsButton to={`/producto/${product.id}`} className="flex-1" />
            <QuoteIconButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
