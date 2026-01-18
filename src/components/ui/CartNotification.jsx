import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const CartNotification = ({ 
  productName, 
  quantity, 
  size, 
  isOpen, 
  onClose 
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Auto-close after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-gray-900/95 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-700/50 flex items-center gap-4 min-w-[300px]">
        {/* Success Icon */}
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <FaCheck className="w-5 h-5 text-white" />
        </div>
        
        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white">
            {productName}
          </p>
          <p className="text-sm text-gray-300">
            {quantity > 1 ? `${quantity} unidades` : '1 unidad'}
            {size && ` - Talla: ${size}`}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartNotification;
