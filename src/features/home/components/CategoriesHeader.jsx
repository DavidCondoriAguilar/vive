import React from 'react';

const CategoriesHeader = () => {
    return (
        <div className="text-center mb-24 relative z-10">
            <div className="inline-flex items-center gap-4 px-5 py-2 bg-vive-600/5 border border-vive-600/20 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.4em]">Excelencia en Descanso</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-black text-gray-900 dark:text-white mb-10 uppercase tracking-tighter leading-[0.85]">
                La Colección <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 italic font-light lowercase">Exclusiva</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed px-4">
                Diseños pensados para transformar tu hogar en un santuario de paz.
                <span className="text-gray-900 dark:text-white font-bold block mt-2">Calidad certificada, confort sin límites.</span>
            </p>
        </div>
    );
};

export default CategoriesHeader;
