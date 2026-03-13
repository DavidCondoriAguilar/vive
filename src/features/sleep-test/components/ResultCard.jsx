import React from 'react';
import { LuStar } from 'react-icons/lu';
import { RESORTE_PRODUCTS, ESPUMA_PRODUCTS } from '@/utils/catalogData';

export function ResultCard({ mattress, rank, onClick }) {
    const resorteMatch = RESORTE_PRODUCTS.find(p => p.id === mattress.id);
    const espumaMatch = ESPUMA_PRODUCTS?.find(p => p.id === mattress.id);
    const productData = resorteMatch || espumaMatch;

    const firmnessLabel = {
        muy_firme: 'Muy Firme',
        firme: 'Firme',
        intermedio: 'Intermedio',
        suave: 'Suave',
    };

    return (
        <div className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${rank === 0
            ? 'border-vive-500/40 bg-gradient-to-br from-vive-500/5 to-transparent shadow-2xl shadow-vive-500/10'
            : 'border-gray-100 dark:border-white/10 bg-white dark:bg-white/5'
            }`}>
            {rank === 0 && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-vive-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    <LuStar className="w-3 h-3" />
                    Tu Ideal
                </div>
            )}

            <div className="p-6 lg:p-8">
                {productData?.image && (
                    <div className="relative h-48 lg:h-64 rounded-2xl mb-6 bg-white dark:bg-white/5 flex flex-col items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                        <img
                            src={productData.image}
                            alt={mattress.name}
                            className="w-full h-full object-contain p-4 mix-blend-multiply dark:mix-blend-normal"
                        />
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <span className="text-[9px] font-mono font-black uppercase tracking-[0.25em] text-vive-500">{mattress.badge}</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mt-1">{mattress.name}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {mattress.firmness.map(f => (
                            <span key={f} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                                {firmnessLabel[f] || f}
                            </span>
                        ))}
                        {mattress.features.slice(0, 3).map(feat => (
                            <span key={feat} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-vive-500/10 text-vive-600 dark:text-vive-400">
                                {feat}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {mattress.why}
                    </p>

                    <button
                        onClick={() => onClick(mattress.id)}
                        className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                            ${rank === 0
                                ? 'bg-vive-500 hover:bg-vive-600 text-white shadow-lg shadow-vive-500/20'
                                : 'border-2 border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:border-vive-500/40'
                            }`}
                    >
                        Ver Colchón →
                    </button>
                </div>
            </div>
        </div>
    );
}
