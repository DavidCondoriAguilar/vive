import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { getWhatsAppLink } from '@/utils/constants';
import { useCart } from '@/contexts/CartContext';
import { FaPlus, FaMinus, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';

const ProductActions = ({
    product,
    selectedSize,
    onSpecsClick
}) => {
    const { addToCart, cartItems, processOrder } = useCart();
    const [quantity, setQuantity] = useState(1);
    const hasItems = cartItems.length > 0;

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    const whatsappUrl = getWhatsAppLink(`Hola Sueño Dorado, estoy interesado en el ${product.name}${selectedSize ? ` en tamaño ${selectedSize}` : ''}. Cantidad: ${quantity}.`);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Quantity Selector - Enhanced */}
            <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-zinc-800">
                <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Cantidad</span>
                    <p className="text-[9px] text-vive-500 font-bold uppercase tracking-widest leading-none">Ajustar pedido</p>
                </div>

                <div className="flex items-center gap-6 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-white/10 p-1.5 shadow-sm">
                    <button
                        onClick={handleDecrement}
                        className="w-10 h-10 p-0 flex items-center justify-center rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-gray-400 hover:text-red-500"
                        aria-label="Disminuir"
                    >
                        <FaMinus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center font-display font-black text-xl text-gray-900 dark:text-white">{quantity}</span>
                    <button
                        onClick={handleIncrement}
                        className="w-10 h-10 p-0 flex items-center justify-center rounded-xl hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors text-gray-400 hover:text-green-500"
                        aria-label="Aumentar"
                    >
                        <FaPlus className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {quantity >= 6 && (
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center gap-4 animate-bounce-subtle">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-green-600 dark:text-green-400 uppercase tracking-widest block">Beneficio Activado</span>
                        <p className="text-xs font-bold text-gray-900 dark:text-white uppercase">Precio de Fábrica disponible</p>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <PrimaryButton
                        onClick={() => addToCart(product, quantity, selectedSize)}
                        className="justify-center flex items-center gap-3 py-5 rounded-[1.5rem] tracking-[0.2em] text-[11px] h-16"
                    >
                        <FaShoppingCart className="w-4 h-4" />
                        Agregar al Carrito
                    </PrimaryButton>

                    {hasItems ? (
                        <button
                            onClick={processOrder}
                            className="justify-center flex items-center gap-3 py-5 rounded-[1.5rem] bg-green-500 hover:bg-green-600 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1 h-16"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            Finalizar Pedido
                        </button>
                    ) : (
                        <SecondaryButton
                            onClick={() => window.open(getWhatsAppLink(`Hola Sueño Dorado, solicito asesoría para el ${product.name}.`), '_blank')}
                            className="justify-center flex items-center gap-3 py-5 rounded-[1.5rem] tracking-[0.2em] text-[10px] h-16"
                        >
                            Asesoría Directa
                        </SecondaryButton>
                    )}
                </div>

                {hasItems && (
                    <p className="text-center text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] animate-pulse">
                        Tienes productos en el carrito listos para enviar
                    </p>
                )}
            </div>

            <button
                onClick={onSpecsClick}
                className="w-full py-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-vive-500 transition-colors border-t border-gray-100 dark:border-white/5 group flex items-center justify-center gap-3"
            >
                Ficha Técnica del Material
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    );
};

export default ProductActions;
