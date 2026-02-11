import React from 'react';

const ProvincesHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-4 px-4 py-1 bg-vive-600/5 dark:bg-vive-500/5 border border-vive-600/10 dark:border-vive-500/10 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-ping"></span>
                    <span className="text-[10px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.5em]">Logística Nacional // Centro de Distribución</span>
                </div>
                <h2 className="text-4xl md:text-[100px] font-display font-black text-gray-900 dark:text-white uppercase leading-[0.82] tracking-tighter">
                    Despachamos a <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 dark:from-vive-500 dark:to-white italic font-light lowercase">todo el Perú</span>
                </h2>
            </div>
            <div className="max-w-sm space-y-6 text-right">
                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">
                    Lima y provincias vía <span className="text-gray-900 dark:text-white font-bold underline decoration-vive-500 decoration-2">flota propia</span> y agencias estratégicas. Llegamos donde estés.
                </p>
                <div className="flex justify-end gap-3">
                    <span className="text-[10px] font-mono text-vive-600 dark:text-vive-500 font-black border border-vive-600/20 px-3 py-1 rounded-sm uppercase tracking-widest">Enviando ahora</span>
                    <span className="text-[10px] font-mono text-gray-400 font-bold border border-gray-100 dark:border-white/5 px-3 py-1 rounded-sm uppercase tracking-widest">Directo de Fábrica</span>
                </div>
            </div>
        </div>
    );
};

export default ProvincesHeader;
