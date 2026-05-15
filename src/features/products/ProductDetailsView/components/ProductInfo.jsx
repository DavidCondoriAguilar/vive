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
            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-vive-600/70">Concepto de Descanso</label>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-semibold leading-relaxed tracking-tight max-w-xl italic">
                   "{product.description || 'Ingeniería de vanguardia diseñada para quienes buscan el equilibrio perfecto entre soporte y suavidad.'}"
                </p>
            </div>

            {/* Static Dimensions Info - Premium Grid */}
            {product.dimensionsInfo && (
                <div className="space-y-3 animate-in fade-in slide-in-from-left duration-1000 delay-300">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Dimensiones del Sistema</label>
                    <div className="grid grid-cols-3 gap-3">
                        {product.dimensionsInfo.map((dim) => (
                            <div key={dim.label} className="bg-gray-50/50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-3 rounded-2xl flex flex-col items-center justify-center group hover:border-vive-500/30 transition-colors">
                                <span className="text-[8px] font-black text-vive-600 uppercase tracking-widest mb-1 group-hover:scale-110 transition-transform">{dim.label}</span>
                                <span className="text-[10px] font-bold text-gray-900 dark:text-white whitespace-nowrap">{dim.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Firmness Spectrum - 2026 'Surprise' Edition */}
            {product.firmness && (
                <div className="space-y-6 pt-2 animate-in fade-in slide-in-from-left duration-1000 delay-500">
                    <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Spectrum de Confort</label>
                            <p className="text-[8px] font-bold text-gray-500 uppercase tracking-tight">Nivel de Soporte Adaptativo</p>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200/50 dark:border-white/5">
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-vive-600"></span>
                            <span className="text-[9px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                                {product.firmness}/10 {product.firmnessLabel}
                            </span>
                        </div>
                    </div>

                    <div className="relative py-8">
                        {/* Background Spectrum Track */}
                        <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full relative overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-vive-500 via-yellow-400 to-orange-600 opacity-90" />
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[1px]" />
                        </div>

                        {/* Floating Aura Indicator */}
                        <div 
                            className="absolute top-1/2 -translate-y-1/2 transition-all duration-1500 cubic-bezier(0.19, 1, 0.22, 1)"
                            style={{ left: `${(product.firmness / 10) * 100}%` }}
                        >
                            {/* Floating Tooltip */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center group">
                                <div className={`px-4 py-1.5 rounded-xl text-[11px] font-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20 transition-all duration-700 scale-110 ${
                                    product.firmness <= 3 ? 'bg-cyan-500 shadow-cyan-500/50' :
                                    product.firmness <= 7 ? 'bg-vive-600 shadow-vive-600/50' :
                                    'bg-orange-600 shadow-orange-600/50'
                                }`}>
                                    {product.firmnessLabel}
                                </div>
                                <div className="w-px h-4 bg-gradient-to-b from-white to-transparent mt-1" />
                            </div>

                            {/* Main Aura Ring */}
                            <div className={`w-8 h-8 -ml-4 rounded-full border-[3px] border-white dark:border-zinc-900 shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-700 ring-8 ring-opacity-20 flex items-center justify-center ${
                                product.firmness <= 3 ? 'bg-cyan-500 ring-cyan-500' :
                                product.firmness <= 7 ? 'bg-vive-600 ring-vive-600' :
                                'bg-orange-600 ring-orange-600'
                            }`}>
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* Semantic Zones */}
                    <div className="grid grid-cols-3 gap-1 px-1">
                        <div className="flex flex-col items-start space-y-2">
                            <div className="h-1 w-full bg-cyan-400/30 rounded-full" />
                            <span className="text-[7px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Nube (Suave)</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="h-1 w-full bg-vive-500/30 rounded-full" />
                            <span className="text-[7px] font-black text-vive-600 uppercase tracking-widest">Equilibrio</span>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                            <div className="h-1 w-full bg-orange-500/30 rounded-full" />
                            <span className="text-[7px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">Soporte (Firme)</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Nota de Cotización Directa */}
            <div className="py-4 px-6 bg-gray-50/50 dark:bg-zinc-900/40 rounded-3xl border border-gray-100 dark:border-white/5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-vive-600 animate-pulse"></div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                    Solicite una cotización personalizada según volumen y medidas directamente con nuestro equipo comercial.
                </p>
            </div>

            {/* DNA de Marca - Calidad y Tecnología */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400">
                        <FaAward className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Calidad Élite</h4>
                        <p className="text-[8px] font-bold text-gray-500 uppercase">Respaldo Directo</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400">
                        <FaFlask className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Tecnología MP</h4>
                        <p className="text-[8px] font-bold text-gray-500 uppercase">Arquitectura Superior</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
