import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const WholesaleSolutions = ({ markets, onSelectMarket }) => {
    return (
        <section className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-vive-600 dark:text-vive-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">B2B Strategy / Node Selection</span>
                        <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                            Soluciones <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 dark:from-vive-500 dark:to-vive-200 uppercase">Especializadas</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg font-text max-w-sm border-l border-gray-100 dark:border-white/10 pl-6">
                        Sistemas diseñados bajo estándares internacionales de alto tráfico e ingeniería ergonómica.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    {markets.map((market, idx) => (
                        <div
                            key={market.id}
                            className="group relative h-[600px] overflow-hidden bg-gray-50 dark:bg-black flex flex-col justify-end p-12 transition-all cursor-pointer"
                            onClick={() => onSelectMarket(market)}
                        >
                            {/* Image Background - Standardized Pattern Treatment */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={market.image}
                                    alt={market.title}
                                    className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                                />
                                {/* Internal Technical Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        backgroundImage: 'radial-gradient(#299C47 1px, transparent 1px)',
                                        backgroundSize: '24px 24px'
                                    }}>
                                </div>
                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#050505] dark:via-[#050505]/70 dark:to-transparent"></div>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="text-vive-600 dark:text-vive-500 text-4xl mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-sm">
                                    {market.icon}
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-vive-600 dark:text-vive-500 text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-sm">{market.tag}</span>
                                    <div className="h-px w-8 bg-vive-600/20"></div>
                                </div>
                                <h3 className="text-3xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-sm">{market.title}</h3>
                                <h4 className="text-vive-700 dark:text-vive-300 text-[10px] font-bold uppercase tracking-widest mb-4 italic">{market.subtitle}</h4>

                                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 overflow-hidden leading-relaxed">
                                    {market.description}
                                </p>

                                <div className="pt-6">
                                    <button className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-3 group-hover:gap-6 transition-all border-b border-vive-600 dark:border-vive-500 pb-1">
                                        Iniciar Análisis <FaArrowRight className="text-vive-600 dark:text-vive-500" />
                                    </button>
                                </div>
                            </div>

                            {/* Corner Label */}
                            <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-[9px] font-mono text-gray-900 dark:text-vive-500 tracking-[0.3em]">SEGMENT_ID_0{idx + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WholesaleSolutions;
