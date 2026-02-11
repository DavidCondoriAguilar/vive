import React, { useState } from 'react';
import { FaPlus, FaMinus, FaWhatsapp, FaTools } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';

const ProductActions = ({ product, onAddToCart, onShowSpecs }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        onAddToCart({
            ...product,
            quantity,
            selectedSize
        });
    };

    return (
        <div className="space-y-6 animate-in slide-in-from-bottom duration-1000">
            {/* Selection Grid - Highly Compact */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100 dark:border-white/5">
                {/* Size Selection */}
                <div className="space-y-1.5">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 font-sans">Dimensión</label>
                    <div className="relative">
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/10 rounded-xl px-3 py-1.5 text-[11px] font-bold appearance-none cursor-pointer focus:ring-1 focus:ring-vive-600 transition-all text-gray-900 dark:text-white"
                        >
                            {product.sizes?.map(s => <option key={s} value={s} className="bg-white dark:bg-black">{s}</option>)}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <span className="text-[8px]">▼</span>
                        </div>
                    </div>
                </div>

                {/* Quantity Control */}
                <div className="space-y-1.5 pl-4 border-l border-gray-100 dark:border-white/5">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 font-sans">Cantidad</label>
                    <div className="flex items-center justify-between bg-gray-50 dark:bg-zinc-900/50 rounded-xl px-3 py-1.5 h-[32px]">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaMinus className="w-2 h-2" />
                        </button>
                        <span className="text-[11px] font-black w-6 text-center">{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaPlus className="w-2 h-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Actions Block - Elite Impact */}
            <div className="space-y-3">
                <button
                    onClick={handleAddToCart}
                    className="w-full py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-black uppercase tracking-[0.3em] text-[9px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
                >
                    Agregar a mi Cotización
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <a
                        href={getWhatsAppLink(`Hola Vive, me interesa el modelo ${product.name} en medida ${selectedSize}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 border border-gray-100 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group"
                    >
                        <FaWhatsapp className="text-vive-500 text-xs group-hover:scale-110 transition-transform" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Asesoría Elite</span>
                    </a>
                    <button
                        onClick={onShowSpecs}
                        className="flex items-center justify-center gap-2 py-2.5 border border-gray-100 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group"
                    >
                        <FaTools className="text-vive-600 text-xs group-hover:rotate-12 transition-transform" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Ficha Técnica</span>
                    </button>
                </div>
            </div>

            <p className="text-[7px] text-center text-gray-400 font-bold uppercase tracking-[0.3em] opacity-60">
                Respuesta garantizada express
            </p>
        </div>
    );
};

export default ProductActions;
