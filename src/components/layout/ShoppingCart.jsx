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

  // Always render cart button
  return (
    <>
      {/* Cart Toggle Button - Premium Floating */}
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed bottom-8 left-8 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 z-40 group border border-gold-500/20"
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

      {/* Cart Modal - Bottom Sheet */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-50 max-h-[80vh] ${isCartOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>

        {/* Handle Bar */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Cart Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Tu Carrito <span className="text-gold-500">.</span>
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
          >
            <FaTimes className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(80vh - 200px)' }}>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-8 opacity-60">
              <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 text-gray-300 dark:text-gray-600">
                <FaShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Tu carrito está vacío</h3>
              <p className="text-xs text-gray-500 mb-4">¡Explora nuestro catálogo!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gold-500 hover:text-gold-600 font-bold text-xs border-b border-transparent hover:border-gold-500 transition-all"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => {
                const price = item.selectedSize ? item.sizes?.[item.selectedSize] || item.price : item.price;

                return (
                  <div key={`${item.id}-${item.selectedSize || 'default'}-${index}`} className="flex gap-3">
                    {/* Item Image */}
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm truncate pr-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <FaTrash className="w-3 h-3" />
                        </button>
                      </div>
                      {item.selectedSize && (
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">
                          Talla: <span className="text-gray-600 dark:text-gray-300">{item.selectedSize}</span>
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 rounded-md p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded transition-colors text-gray-500"
                          >
                            <FaMinus className="w-2 h-2" />
                          </button>
                          <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded transition-colors text-gray-500"
                          >
                            <FaPlus className="w-2 h-2" />
                          </button>
                        </div>
                        <span className="font-display font-bold text-sm text-gold-500">
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

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 dark:border-white/5 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total</span>
              <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                {formatPrice(getTotal())}
              </span>
            </div>
            <button
              onClick={processOrder}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 text-sm"
            >
              <span>Completar Pedido</span>
              <FaWhatsapp className="w-4 h-4" />
            </button>
            <p className="text-center mt-2 text-xs text-gray-400">
              Checkout seguro vía WhatsApp
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
