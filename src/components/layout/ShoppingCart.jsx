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

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-md transition-opacity duration-700 animate-fade-in"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div className={`fixed right-0 top-0 bottom-0 z-[210] w-full max-w-[450px] bg-white dark:bg-[#080808] border-l border-gray-100 dark:border-white/5 transition-transform duration-1000 cubic-bezier(0.19, 1, 0.22, 1) transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="px-10 py-12 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Tu Selección</h2>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                {getTotalItems()} {getTotalItems() === 1 ? 'Modelo' : 'Modelos'} en lista
              </p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black dark:hover:text-white transition-all"
            >
              Cerrar
              <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center group-hover:rotate-90 transition-transform">
                <FaTimes />
              </div>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-10 custom-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-start justify-center text-left py-20">
                <div className="h-px w-20 bg-gray-100 dark:bg-white/5 mb-8"></div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">Lista Vacía</h3>
                <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed mb-10">Inspírese en nuestra colección para encontrar el descanso que merece.</p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/catalogo');
                  }}
                  className="text-[10px] font-black text-vive-600 uppercase tracking-[0.4em] border-b-2 border-vive-600/10 hover:border-vive-600 transition-all pb-2"
                >
                  Explorar Galería
                </button>
              </div>
            ) : (
              <div className="space-y-10 pb-10">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${index}`}
                    className="flex gap-8 group animate-fade-in"
                  >
                    {/* Item Image */}
                    <div className="w-24 h-24 bg-gray-50 dark:bg-zinc-900/50 rounded-3xl overflow-hidden flex-shrink-0 p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <FaTimes className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-[9px] font-black text-vive-600 uppercase tracking-widest px-2 py-1 bg-vive-600/5 rounded">
                          {item.selectedSize}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="text-gray-300 hover:text-black dark:hover:text-white"
                          >
                            <FaMinus className="w-2.5 h-2.5" />
                          </button>
                          <span className="text-[10px] font-black w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="text-gray-300 hover:text-black dark:hover:text-white"
                          >
                            <FaPlus className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">P/C</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-10 border-t border-gray-100 dark:border-white/5 space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Asesoría Directa</span>
                  <p className="text-[10px] text-gray-900 dark:text-white font-black uppercase tracking-[0.2em]">Cotización Especializada</p>
                </div>
                <div className="h-px flex-1 mx-6 bg-gray-100 dark:bg-white/5 mb-1.5"></div>
                <span className="text-[10px] font-black text-vive-600 uppercase tracking-[0.2em]">WhatsApp</span>
              </div>

              <button
                onClick={processOrder}
                className="w-full h-20 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl shadow-black/10 dark:shadow-white/5"
              >
                <FaWhatsapp className="w-5 h-5" />
                Solicitar Cotización
              </button>

              <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest opacity-50">
                Respuesta instantánea por parte de un asesor senior
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
