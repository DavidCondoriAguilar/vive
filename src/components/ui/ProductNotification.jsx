import React, { useEffect } from 'react';
import { FaTimes, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';
import { getWhatsAppLink } from '@/utils/constants';
import { PrimaryButton, WhatsAppButton } from '@/components/ui/Buttons';

const ProductNotification = ({ product, isOpen, onClose, selectedSize = null }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      // Auto-close after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const validPrice = isNaN(numPrice) ? 0 : numPrice;
    return `S/. ${validPrice.toFixed(2)}`;
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1, selectedSize);
    onClose();
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const message = `*Consulta de Producto - Sueño Dorado*\n\n` +
      `*Producto:*\n` +
      `• ${product.name}\n` +
      `${selectedSize ? `• Talla: ${selectedSize}\n` : ''}\n` +
      `*Mensaje:*\n` +
      `Hola, estoy interesado(a) en este producto. ¿Podrían brindarme el precio y disponibilidad?\n\n` +
      `---\n` +
      `*Sueño Dorado - Fábrica de Colchones Premium*`;

    const whatsappLink = getWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Notification Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5 max-w-sm w-full animate-fade-scale border border-gray-200 dark:border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>

        {/* Product Content */}
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden flex-shrink-0">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-xl">🛏️</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0 pr-6">
            <h3 className="font-bold text-gray-900 dark:text-white text-base mb-0.5 truncate pr-2">
              {product.name}
            </h3>

            {selectedSize && (
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">
                Talla: {selectedSize}
              </p>
            )}

            <div className="text-[10px] font-bold text-gold-600 mb-3 uppercase tracking-widest">
              Precio por Consultar
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <PrimaryButton
                onClick={handleAddToCart}
                className="flex-1 text-[9px] px-2 py-2 rounded-lg"
                showArrow={false}
              >
                Agregar
              </PrimaryButton>

              <WhatsAppButton
                onClick={handleWhatsApp}
                className="flex-1 text-[9px] px-2 py-2 rounded-lg"
              >
                Consultar
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Quick Description */}
        {product.description && (
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-3 line-clamp-2 leading-relaxed italic">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductNotification;
