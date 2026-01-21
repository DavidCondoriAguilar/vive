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
      <div className="relative bg-white dark:bg-gray-800 rounded-none shadow-2xl p-6 max-w-md w-full glass-grid animate-fade-scale border border-gray-200 dark:border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-none flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Product Content */}
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-none overflow-hidden flex-shrink-0">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-2xl">🛏️</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 truncate">
              {product.name}
            </h3>

            {selectedSize && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Talla: {selectedSize}
              </p>
            )}

            <div className="text-sm font-black text-gold-600 mb-3 uppercase tracking-widest">
              Precio por Consultar
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <PrimaryButton
                onClick={handleAddToCart}
                className="flex-1 text-[9px] px-3 py-3 justify-center rounded-xl"
                showArrow={false}
              >
                Agregar
              </PrimaryButton>

              <WhatsAppButton
                onClick={handleWhatsApp}
                className="flex-1 text-[9px] px-3 py-3 justify-center rounded-xl"
              >
                Consultar
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Quick Description */}
        {product.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductNotification;
