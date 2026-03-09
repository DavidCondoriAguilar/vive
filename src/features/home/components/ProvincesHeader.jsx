import React from 'react';

const ProvincesHeader = () => {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-end justify-between mb-24 gap-12">
            <div className="lg:col-span-8 w-full">
                <div className="inline-flex items-center gap-4 px-4 py-2 bg-vive-600/5 dark:bg-vive-500/5 border border-vive-600/20 rounded-full mb-10 overflow-hidden relative group/tag">
                    <div className="absolute inset-0 bg-gradient-to-r from-vive-500/10 to-transparent animate-shimmer"></div>
                    <span className="w-2 h-2 bg-vive-600 rounded-full animate-pulse relative z-10 shadow-[0_0_10px_rgba(41,156,71,1)]"></span>
                    <span className="text-[10px] font-mono font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.5em] relative z-10">
                        Logística Nacional // Centro de Distribución
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-[85px] font-display font-black text-gray-900 dark:text-white uppercase leading-[0.82] tracking-tighter">
                    Despachamos a
                    <span className="font-brand italic font-light lowercase text-4xl md:text-5xl lg:text-7xl text-vive-500 tracking-normal capitalize block mt-2">
                        todo el Perú
                    </span>
                </h2>
            </div>
            <div className="lg:col-span-4 space-y-8 lg:text-right w-full">
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed font-text">
                    Lima y provincias vía <span className="text-gray-900 dark:text-white font-black underline decoration-vive-500 decoration-4 underline-offset-8">flota propia</span> y alianzas estratégicas para asegurar la integridad de tu descanso.
                </p>
                <div className="flex lg:justify-end gap-3">
                    <div className="px-4 py-2 bg-vive-500 text-black font-mono text-[9px] font-black uppercase tracking-[0.2em] rounded-sm shadow-lg shadow-vive-500/20">
                        Enviando ahora
                    </div>
                    <div className="px-4 py-2 border border-black/10 dark:border-white/10 text-gray-400 font-mono text-[9px] font-black uppercase tracking-[0.2em] rounded-sm italic">
                        Directo de Fábrica
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvincesHeader;
