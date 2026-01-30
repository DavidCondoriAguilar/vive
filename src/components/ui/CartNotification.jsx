import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';

const CartNotification = () => {
  const { notification, hideNotification } = useCart();
  const { isOpen, productName, quantity, size } = notification;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hideNotification]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-gray-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-gray-700/50 flex items-center gap-3 min-w-[280px]">
        {/* Success Icon */}
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <FaCheck className="w-4 h-4 text-white" />
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-white text-xs truncate">
            {productName}
          </p>
          <p className="text-[10px] text-gray-400 font-medium">
            Agregado: {quantity > 1 ? `${quantity} unidades` : '1 unidad'}
            {size && ` - ${size}`}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={hideNotification}
          className="text-gray-500 hover:text-white transition-colors p-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartNotification;
