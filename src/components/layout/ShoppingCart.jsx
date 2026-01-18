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
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-gold-500 hover:bg-gold-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40 group"
      >
        <FaShoppingCart className="w-6 h-6" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {getTotalItems()}
          </span>
        )}
        <span className="absolute bottom-full mb-2 right-0 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Ver Carrito ({getTotalItems()} items)
        </span>
      </button>

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-96 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Cart Header */}
        <div className="bg-gold-500 text-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FaShoppingCart className="w-5 h-5" />
              Mi Carrito
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gold-100 mt-2">
            {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'}
          </p>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <FaShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Tu carrito está vacío</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-gold-500 hover:text-gold-600 font-medium"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => {
                const price = item.selectedSize ? item.sizes?.[item.selectedSize] || item.price : item.price;
                
                return (
                  <div key={`${item.id}-${item.selectedSize || 'default'}-${index}`} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <FaShoppingCart className="w-8 h-8" />
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        {item.selectedSize && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Talla: {item.selectedSize}
                          </p>
                        )}
                        <p className="text-gold-500 font-bold">
                          {formatPrice(price)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                          >
                            <FaMinus className="w-3 h-3" />
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                          >
                            <FaPlus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="ml-auto text-red-500 hover:text-red-600 transition-colors"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Item Subtotal */}
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Subtotal</span>
                        <span className="font-bold text-gray-900 dark:text-white">
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
          <div className="border-t border-gray-200 dark:border-gray-700 p-6">
            {/* Total */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Total:
              </span>
              <span className="text-xl font-bold text-gold-500">
                {formatPrice(getTotal())}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={processOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Procesar Pedido por WhatsApp
              </button>
              
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium transition-colors"
              >
                Vaciar Carrito
              </button>
              
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-gold-500 hover:text-gold-600 font-medium py-2"
              >
                Seguir Comprando
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};

export default ShoppingCart;
