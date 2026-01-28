import React from 'react';
import { FaShoppingCart, FaTimes, FaPlus, FaMinus, FaTrash, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getTotal,
    getTotalItems,
    processOrder
  } = useCart();

  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsCartOpen]);

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const validPrice = isNaN(numPrice) ? 0 : numPrice;
    return `S/. ${validPrice.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
  };

  return (
    <>
      {/* Floating Cart Trigger - Left Side Positioning (Anti-clash with Chatbot) */}
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className={`fixed bottom-8 left-8 z-40 flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 w-14 h-14 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 active:scale-95 border border-white/10 dark:border-black/5 hover:bg-black group ${isCartOpen ? 'opacity-0 pointer-events-none -translate-x-10' : 'opacity-100'}`}
      >
        <div className="relative flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-black text-white ring-2 ring-white dark:ring-gray-900 shadow-lg animate-pulse-subtle">
              {getTotalItems()}
            </span>
          )}
        </div>
      </button>

      {/* Backdrop with Click-to-Close */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-md transition-opacity duration-500 animate-fade-in"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar Drawer */}
      <div className={`fixed right-0 top-0 bottom-0 z-[200] w-full max-w-md sm:max-w-lg bg-white dark:bg-zinc-950 shadow-[-20px_0_50px_rgba(0,0,0,0.2)] transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">

          {/* Header - Fixed */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 border-b border-gray-100 dark:border-white/5 flex items-center justify-between bg-white dark:bg-zinc-950 sticky top-0 z-20">
            <div>
              <h2 className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter">Tu Pedido</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {getTotalItems()} {getTotalItems() === 1 ? 'Artículo' : 'Artículos'} Seleccionados
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 hover:text-gold-500 flex items-center justify-center transition-all hover:bg-gray-100 dark:hover:bg-white/10 group"
              aria-label="Cerrar Carrito"
            >
              <svg className="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items List - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-4 sm:py-6 custom-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-[2rem] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-2">Carrito Vacío</h3>
                <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">Sus sueños merecen lo mejor. Agregue un colchón para comenzar.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-8 text-[10px] font-black text-gold-500 uppercase tracking-[0.3em] border-b border-gold-500/30 hover:border-gold-500 transition-all pb-1"
                >
                  Continuar Explorando
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${index}`}
                    className="flex gap-6 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Item Image */}
                    <div className="relative w-24 h-24 bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden flex-shrink-0 border border-transparent group-hover:border-gold-500/20 transition-all">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 py-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-gray-300 hover:text-red-500 transition-colors"
                          aria-label="Eliminar"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {item.selectedSize && (
                        <span className="text-[9px] font-black text-gold-500 uppercase tracking-widest block mb-4">
                          {item.selectedSize}
                        </span>
                      )}

                      <div className="flex items-center justify-between">
                        {/* Quantity UI */}
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-xl p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 text-gray-500 hover:text-red-500 shadow-sm transition-all"
                          >
                            <span className="text-lg font-light">−</span>
                          </button>
                          <span className="w-4 text-center text-xs font-black text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 text-gray-500 hover:text-green-500 shadow-sm transition-all"
                          >
                            <span className="text-lg font-light">+</span>
                          </button>
                        </div>

                        <span className="text-[10px] font-black text-gold-500 uppercase tracking-widest">
                          Precio por Consultar
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Sticky */}
          {cartItems.length > 0 && (
            <div className="px-6 sm:px-8 py-6 sm:py-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/5 space-y-4 sm:space-y-6">
              <div className="flex justify-between items-end border-b border-gray-100 dark:border-white/5 pb-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Gestión de Pedido</span>
                  <p className="text-[11px] text-gray-900 dark:text-white font-black uppercase tracking-widest">Consultar Precios vía WhatsApp</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-gold-500 uppercase tracking-widest">
                    Asesoría Premium
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={processOrder}
                  className="w-full bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white py-5 sm:py-6 rounded-[1.5rem] font-black text-sm sm:text-base uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center group min-h-[60px] sm:min-h-[70px]"
                >
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    <div className="text-center">
                      <span className="block font-black text-sm sm:text-base uppercase tracking-widest">Consultar Precios</span>
                      <span className="text-[10px] sm:text-xs opacity-75 block mt-1 font-medium uppercase tracking-widest">Finalizar Cotización</span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 text-[9px] sm:text-xs font-black text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase tracking-[0.3em] transition-colors"
                >
                  Seguir Comprando
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8l-8 5-8-5V6l8 5 8-5v2zm0-4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" /></svg>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
