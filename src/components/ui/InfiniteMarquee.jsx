import React from 'react';

const InfiniteMarquee = ({ text = "ENVÍOS A NIVEL NACIONAL • DESCUENTOS EXCLUSIVOS POR LANZAMIENTO • CALIDAD PREMIUM DIRECTO DE FÁBRICA • EL DESCANSO QUE MERECES • " }) => {
    return (
        <div className="w-full bg-black dark:bg-zinc-900 overflow-hidden py-3 border-y border-gold-500/20">
            <div className="flex whitespace-nowrap animate-marquee">
                <div className="flex items-center gap-4">
                    {[...Array(10)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[10px] md:text-xs font-black text-gold-500 uppercase tracking-[0.3em] flex items-center"
                        >
                            {text}
                            <span className="mx-4 text-white/20">•</span>
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-4" aria-hidden="true">
                    {[...Array(10)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[10px] md:text-xs font-black text-gold-500 uppercase tracking-[0.3em] flex items-center"
                        >
                            {text}
                            <span className="mx-4 text-white/20">•</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteMarquee;
