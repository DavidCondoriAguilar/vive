import React from 'react';
import { FaShoppingCart, FaTimes, FaPlus, FaMinus, FaTrash, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';

const ShoppingCart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getTotalItems,
    processOrder
  } = useCart();

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const validPrice = isNaN(numPrice) ? 0 : numPrice;
    return `S/. ${validPrice.toFixed(2)}`;
  };

  if (!isCartOpen && cartItems.length === 0) {
    return null;
  }

  return (
    <>
      {/* Cart Toggle Button - Premium Floating */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 z-40 group border border-gold-500/20"
      >
        <div className="relative">
          <FaShoppingCart className="w-6 h-6" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white dark:border-black">
              {getTotalItems()}
            </span>
          )}
        </div>
        <span className="absolute bottom-full mb-3 right-0 bg-black/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-y-2 group-hover:translate-y-0 shadow-xl">
          Ver Carrito
        </span>
      </button>

      {/* Cart Sidebar - Glassmorphism & Premium */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white/95 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-50 border-l border-gray-100 dark:border-white/5 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

        {/* Cart Header */}
        <div className="bg-white dark:bg-gray-900 px-8 py-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-3">
              Tu Carrito <span className="text-gold-500">.</span>
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              {getTotalItems()} {getTotalItems() === 1 ? 'producto seleccionado' : 'productos seleccionados'}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
          >
            <FaTimes className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800" style={{ height: 'calc(100vh - 240px)' }}>
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60">
              <div className="w-24 h-24 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-300 dark:text-gray-600">
                <FaShoppingCart className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Tu carrito está vacío</h3>
              <p className="text-gray-500 mb-8 max-w-[200px]">¡Explora nuestro catálogo y encuentra el descanso perfecto!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gold-500 hover:text-gold-600 font-bold tracking-wide uppercase text-sm border-b-2 border-transparent hover:border-gold-500 transition-all"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => {
                const price = item.selectedSize ? item.sizes?.[item.selectedSize] || item.price : item.price;

                return (
                  <div key={`${item.id}-${item.selectedSize || 'default'}-${index}`} className="group relative flex gap-5 animate-fadeIn">
                    {/* Item Image */}
                    <div className="w-28 h-28 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100 dark:border-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg truncate pr-4">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          >
                            <FaTrash className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {item.selectedSize && (
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">
                            Talla: <span className="text-gray-600 dark:text-gray-300">{item.selectedSize}</span>
                          </p>
                        )}
                      </div>

                      <div className="flex items-end justify-between mt-2">
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-md transition-colors text-gray-500"
                          >
                            <FaMinus className="w-2.5 h-2.5" />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-md transition-colors text-gray-500"
                          >
                            <FaPlus className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <span className="font-display font-bold text-lg text-gold-500">
                          {formatPrice(price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cart Footer - Modern Checkout */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-900 p-8 border-t border-gray-100 dark:border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
            {/* Total Row */}
            <div className="flex justify-between items-end mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Estimado</span>
              <span className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                {formatPrice(getTotal())}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={processOrder}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 group"
              >
                <span>Completar Pedido</span>
                <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <p className="text-center mt-4 text-xs text-gray-400">
              Checkout seguro vía WhatsApp Business
            </p>
          </div>
        )}
      </div>

      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default ShoppingCart;
