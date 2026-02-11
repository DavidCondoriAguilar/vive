import React from 'react';
import { FaStar, FaAward, FaFlask } from 'react-icons/fa';

const ProductInfo = ({ product }) => {
    return (
        <div className="space-y-6 animate-in slide-in-from-right duration-1000">
            {/* Boutique Header - More Compact */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-vive-600 bg-vive-600/5 px-3 py-1.5 rounded-full border border-vive-600/10">
                        {product.badge || 'Colección Gold'}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <FaStar className="w-2 h-2 text-yellow-500" />
                        <span className="text-[9px] font-bold text-gray-400">4.8 (124 reviews)</span>
                    </div>
                </div>

                <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white">
                    {product.name}
                </h1>

                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Estado</span>
                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">En Exhibición</span>
                    </div>
                    <div className="w-px h-6 bg-gray-100 dark:bg-white/5"></div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Categoría</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">{product.category || 'Premium'}</span>
                    </div>
                </div>
            </div>

            {/* Editorial Description - Tighter */}
            <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Visión de Diseño</label>
                <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-lg">
                    {product.description || 'Ingeniería de vanguardia diseñada para quienes buscan el equilibrio perfecto entre soporte y suavidad.'}
                </p>
            </div>

            {/* Price Info - Integrated y Slim */}
            <div className="py-4 px-6 bg-gray-50/50 dark:bg-zinc-900/40 rounded-3xl border border-gray-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Inversión Sugerida</p>
                    <span className="text-xl font-black text-gray-900 dark:text-white">Consultar con Asesor</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-white/10"></div>
                <p className="text-[8px] text-gray-500 font-bold uppercase tracking-tight max-w-[120px]">
                    Cotización personalizada por volúmenes
                </p>
            </div>

            {/* Trust DNA - Smaller y more joined */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400">
                        <FaAward className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Garantía Real</h4>
                        <p className="text-[8px] font-bold text-gray-500 uppercase">Respaldo directo</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400">
                        <FaFlask className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Tecnología MP</h4>
                        <p className="text-[8px] font-bold text-gray-500 uppercase">Máxima Durabilidad</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
