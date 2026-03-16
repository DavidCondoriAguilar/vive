import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaInfoCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useCart } from '@shared/contexts/CartContext';
import { getPrettySubcategoryName } from '@core/utils/constants';

const ProductCard = ({ product, selectedSize = null, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, 1, selectedSize || product.sizes[0]);
    } else {
      addToCart(product, 1, selectedSize || product.sizes[0]);
    }
  };

  return (
    <div className="group bg-white dark:bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] hover:-translate-y-3 h-full flex flex-col relative border border-gray-100 dark:border-white/5 active:scale-[0.98]">
      
      {/* Visual Header: Image + Floating Status */}
      <div className="relative overflow-hidden bg-white aspect-[5/4] flex items-center justify-center p-6 sm:p-10">
        <Link
          to={`/producto/${product.id}`}
          className="block h-full w-full"
          aria-label={`Ver detalles de ${product.name}`}
        >
          <img
            src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=600&q=85&auto=format`}
            alt={product.name}
            className="w-full h-full object-contain"
            width="600"
            height="450"
            loading="lazy"
          />
        </Link>

        {/* Dynamic Badge System */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
            {product.badge && (
                <span className="px-3 py-1 bg-vive-500 text-black text-[8px] font-black uppercase tracking-[0.2em] rounded-sm shadow-xl shadow-vive-500/20">
                    {product.badge}
                </span>
            )}
            <span className="px-3 py-1 bg-black/5 dark:bg-white/5 backdrop-blur-md text-gray-500 dark:text-gray-400 text-[8px] font-bold uppercase tracking-[0.2em] rounded-sm border border-black/5 dark:border-white/10">
                Fábrica Directa
            </span>
        </div>
      </div>

      {/* Editorial Content Block */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
             <span className="w-6 h-[1px] bg-vive-500/50"></span>
             <span className="text-vive-600 dark:text-vive-500 text-[9px] font-black uppercase tracking-[0.3em] leading-none">
                {getPrettySubcategoryName(product.subcategory)}
             </span>
          </div>
          
          <Link to={`/producto/${product.id}`}>
            <h3 className="text-2xl font-display font-black text-gray-900 dark:text-white mb-4 leading-tight hover:text-vive-500 transition-colors uppercase tracking-tighter">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed font-medium mb-6">
            {product.description}
          </p>
          
          {/* Expert Specs Row */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-50 dark:border-white/5">
                <div className="flex items-center gap-2">
                    <FaRegCheckCircle className="text-vive-500 text-[10px]" />
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{product.sizes.length} Medidas</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegCheckCircle className="text-vive-500 text-[10px]" />
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Entrega 48h</span>
                </div>
          </div>
        </div>

        {/* Action HUD */}
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={handleAddToCart}
            className="flex-1 group/btn relative bg-gray-900 dark:bg-white text-white dark:text-black font-black text-[9px] tracking-[0.2em] uppercase py-5 rounded-2xl transition-all duration-500 hover:bg-vive-600 dark:hover:bg-vive-500 hover:text-white dark:hover:text-black shadow-lg shadow-black/5 dark:shadow-none overflow-hidden flex items-center justify-center gap-3"
          >
            <FaCartPlus className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
            <span className="relative z-10">Comprar</span>
          </button>

          <Link
            to={`/producto/${product.id}`}
            className="w-14 h-14 rounded-2xl border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-vive-600 dark:hover:text-vive-500 hover:border-vive-500/30 transition-all duration-300 group/info"
            title="Ver detalles"
          >
            <FaInfoCircle className="w-5 h-5 group-hover/info:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
