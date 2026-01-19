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

      {/* Backdrop - No auto-close on backdrop click */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Cart Drawer - Lateral Derecha - Professional Positioning */}
      <div className={`fixed right-0 top-20 bottom-0 z-[60] bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 ease-out w-full max-w-xl overflow-hidden transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} lg:max-w-lg rounded-l-2xl`}>
        {/* Handle Bar - Solo visible en mobile */}
        <div className="lg:hidden flex justify-center py-3">
          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Cart Header - Professional Design with Filters */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                  <FaShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Tu Carrito
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'} • {getTotalItems() > 0 ? 'Listo para pagar' : 'Agrega productos'}
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 bg-gold-500 text-white text-xs font-bold rounded-lg hover:bg-gold-600 transition-colors"
              >
                Todos
              </button>
              <button
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Espuma
              </button>
              <button
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Resortes
              </button>
            </div>
            
            {/* Minimal Close Button */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all hover:scale-105 border border-gray-200 dark:border-gray-600"
              aria-label="Cerrar carrito"
            >
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Items - Enhanced Professional Layout */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12">
              <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-300 dark:text-gray-600">
                <FaShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">Tu carrito está vacío</h3>
              <p className="text-sm text-gray-500 mb-6 max-w-xs">¡Explora nuestros colchones y encuentra el perfecto para ti!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-gold-500/20"
              >
                Explorar Productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => {
                let price;
                if (item.selectedSize && item.sizes && item.sizes[item.selectedSize]) {
                  price = item.sizes[item.selectedSize];
                } else {
                  price = item.price;
                }

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
                        <div className="flex items-center gap-1 bg-gray-50 dark:bg-white/5 rounded-lg p-1.5 border border-gray-200 dark:border-gray-600">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="w-6 h-6 sm:w-8 sm:h-8 min-w-[24px] min-h-[24px] sm:min-w-[32px] sm:min-h-[32px] flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors text-gray-900 dark:text-white hover:text-red-500 border border-gray-300 dark:border-gray-600 shadow-sm"
                            aria-label="Disminuir cantidad"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="text-sm sm:text-base font-bold w-8 text-center text-gray-900 dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="w-6 h-6 sm:w-8 sm:h-8 min-w-[24px] min-h-[24px] sm:min-w-[32px] sm:min-h-[32px] flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors text-gray-900 dark:text-white hover:text-green-500 border border-gray-300 dark:border-gray-600 shadow-sm"
                            aria-label="Aumentar cantidad"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        <span className="font-display font-bold text-sm sm:text-base text-gold-500">
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
          <div className="border-t border-gray-100 dark:border-white/5 p-4 sm:p-6">
            {/* Mobile Instructions */}
            <div className="lg:hidden mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-blue-900 dark:text-blue-100">
                    <strong>¿Cómo comprar?</strong> Ajusta cantidades y presiona "Completar Pedido" para finalizar vía WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block">Total a pagar</span>
                <span className="text-xs text-gray-400">Incluye envío a domicilio</span>
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
                {formatPrice(getTotal())}
              </span>
            </div>
            <button
              onClick={processOrder}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3.5 sm:py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Completar Pedido por WhatsApp</span>
            </button>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Pago seguro
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                Envío gratis
              </span>
            </div>
            
            {/* Minimalist Close Button - Bottom */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-4 w-full py-2 text-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm font-medium transition-colors underline decoration-1 underline-offset-2"
              aria-label="Cerrar carrito"
            >
              Seguir comprando
            </button>
          </div>
        )}
        
        {/* Close Button for Empty Cart */}
        {cartItems.length === 0 && (
          <div className="p-4 sm:p-6">
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-2 text-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm font-medium transition-colors underline decoration-1 underline-offset-2"
              aria-label="Cerrar carrito"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
