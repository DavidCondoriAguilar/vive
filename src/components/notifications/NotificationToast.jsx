import React, { useEffect } from 'react';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';

const NotificationToast = ({ 
  message, 
  productName, 
  isVisible, 
  onClose,
  duration = 1500 
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn">
      <div className="bg-green-500 text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3 min-w-[300px] border border-green-400/20">
        <div className="flex-shrink-0">
          <FaShoppingCart className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">
            {message}
          </p>
          {productName && (
            <p className="text-xs opacity-90 mt-0.5">
              {productName}
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <FaCheck className="w-4 h-4 text-green-200" />
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
