import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { getWhatsAppLink } from '@core/utils/constants';

const WholesaleSolutions = ({ markets }) => {
    return (
        <section className="py-24 md:py-48 bg-white dark:bg-[#080808] relative overflow-hidden transition-colors duration-1000">
            {/* Minimalist Background Detail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* Header Section: Minimalist & Clean */}
                <div className="max-w-4xl mb-24 space-y-8">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-vive-500/5 border border-vive-500/10 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-vive-500"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-vive-600 dark:text-vive-400">
                            Ecosistemas B2B Personalizados
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                        Soluciones para <br />
                        <span className="text-vive-500 serif italic lowercase">Proyectos</span> de alto rendimiento.
                    </h2>

                </div>

                {/* Refined Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {markets.map((market, idx) => (
                        <div
                            key={market.id}
                            className={`group relative overflow-hidden rounded-[2.5rem] transition-all duration-700 border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-[#111] flex flex-col
                                ${idx === 0 ? 'md:col-span-12 lg:col-span-7 h-[600px] lg:h-[700px]' :
                                    idx === 1 ? 'md:col-span-6 lg:col-span-5 h-[600px] lg:h-[700px]' :
                                        'md:col-span-6 lg:col-span-12 h-[500px] lg:h-[550px]'}
                            `}
                        >
                            {/* Visual Asset */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={market.image}
                                    alt={market.title}
                                    className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-[0.6] transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>
                            </div>

                            {/* Content Layer */}
                            <div className="relative flex flex-col h-full p-10 lg:p-14 z-10 justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-2xl group-hover:bg-vive-500 group-hover:text-black transition-all duration-500">
                                        {market.icon}
                                    </div>
                                    <span className="text-[10px] items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase tracking-widest font-medium backdrop-blur-sm">
                                        {market.tag}
                                    </span>
                                </div>

                                <div className="space-y-8">
                                    <div className="max-w-xl">
                                        <h3 className="text-4xl lg:text-5xl font-display font-medium text-white mb-4 tracking-tight">
                                            {market.title}
                                        </h3>
                                        <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg font-text leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            {market.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-8">
                                        {market.details?.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-vive-500 shadow-[0_0_8px_rgba(41,156,71,0.5)]"></div>
                                                <span className="text-[9px] lg:text-[11px] font-medium text-gray-300 uppercase tracking-widest">
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <a
                                            href={getWhatsAppLink(`Hola Vive, solicito asesoría mayorista especializada para el sector de *${market.title}*.`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative px-8 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl"
                                        >
                                            Solicitar Propuesta
                                            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-light hidden sm:block">
                                            {market.subtitle}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WholesaleSolutions;

