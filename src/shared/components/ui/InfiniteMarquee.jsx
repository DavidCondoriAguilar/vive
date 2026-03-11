import React from 'react';

const InfiniteMarquee = ({ text = "ENVÍOS A NIVEL NACIONAL • DESCUENTOS EXCLUSIVOS POR LANZAMIENTO • CALIDAD PREMIUM DIRECTO DE FÁBRICA • EL DESCANSO QUE MERECES • " }) => {
    return (
        <div className="w-full bg-[#050505] overflow-hidden py-4 border-y border-white/5 relative group cursor-default">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>

            <div className="flex whitespace-nowrap animate-marquee relative z-0">
                <div className="flex items-center">
                    {[...Array(20)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[9px] md:text-[10px] font-display font-black text-vive-500 uppercase tracking-[0.4em] flex items-center group-hover:text-white transition-colors duration-700"
                        >
                            {text}
                            <span className="mx-8 text-vive-600/30 group-hover:text-vive-500 transition-colors">■</span>
                        </span>
                    ))}
                </div>
                {/* Mirror for Infinite Loop */}
                <div className="flex items-center" aria-hidden="true">
                    {[...Array(20)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[9px] md:text-[10px] font-display font-black text-vive-500 uppercase tracking-[0.4em] flex items-center group-hover:text-white transition-colors duration-700"
                        >
                            {text}
                            <span className="mx-8 text-vive-600/30 group-hover:text-vive-500 transition-colors">■</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteMarquee;
