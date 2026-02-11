import React from 'react';

const WholesaleAnatomy = ({ premiumCutawayImg, onOpenForm }) => {
    return (
        <section className="py-24 md:py-40 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center overflow-visible">
                    <div className="lg:col-span-6 relative order-2 lg:order-1">
                        <div className="relative z-10 group">
                            <div className="absolute -inset-10 bg-vive-600/5 dark:bg-vive-500/10 blur-[120px] rounded-full"></div>
                            <img src={premiumCutawayImg} alt="Vive Technology Anatomy" className="relative z-10 w-full rounded-2xl border border-gray-100 dark:border-white/5 group-hover:scale-[1.01] transition-transform duration-1000 shadow-2xl" />

                            {/* Call-out Labels - Repositioned to stay inside bounds */}
                            <div className="absolute top-[20%] right-0 lg:-right-4 z-20 flex items-center gap-3 group/callout max-w-[180px]">
                                <div className="w-6 h-6 rounded-full border border-vive-600 dark:border-vive-500 flex items-center justify-center animate-pulse flex-shrink-0 bg-white/50 backdrop-blur-sm">
                                    <div className="w-2 h-2 rounded-full bg-vive-600 dark:bg-vive-500"></div>
                                </div>
                                <div className="px-4 py-3 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-sm opacity-0 group-hover/callout:opacity-100 transition-all shadow-xl translation-x-2">
                                    <span className="block text-[8px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-widest mb-1">Layer_Top</span>
                                    <span className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-tighter">Cotton-Sensation™</span>
                                </div>
                            </div>

                            <div className="absolute bottom-[30%] left-0 lg:-left-4 z-20 flex flex-row-reverse items-center gap-3 group/callout max-w-[180px]">
                                <div className="w-6 h-6 rounded-full border border-vive-600 dark:border-vive-500 flex items-center justify-center animate-pulse flex-shrink-0 bg-white/50 backdrop-blur-sm">
                                    <div className="w-2 h-2 rounded-full bg-vive-600 dark:bg-vive-500"></div>
                                </div>
                                <div className="px-4 py-3 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-sm opacity-0 group-hover/callout:opacity-100 transition-all text-right shadow-xl -translation-x-2">
                                    <span className="block text-[8px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-widest mb-1">System_Core</span>
                                    <span className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-tighter">Pocket-Spring Elite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-start-7 lg:col-span-6 space-y-8 lg:space-y-12 order-1 lg:order-2 lg:pl-10">
                        <div className="space-y-4">
                            <span className="text-vive-600 dark:text-vive-500 text-[10px] font-black uppercase tracking-[0.5em] block">Engineering Architecture</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-gray-900 dark:text-white leading-[1] lg:leading-[0.9] tracking-tighter uppercase whitespace-normal">
                                Más allá de <br /> <span className="italic font-light lowercase text-vive-600 dark:text-vive-500">la superficie</span>
                            </h2>
                        </div>

                        <div className="space-y-1">
                            {[
                                { title: "Núcleos Independientes", desc: "Sistema de resortes pocket encapsulados individualmente para cero transferencia de movimiento." },
                                { title: "High Resilience (HR)", desc: "Capas de espuma de alta elasticidad y retorno que mantienen la ergonomía año tras año." },
                                { title: "Soporte Ergonómico", desc: "Cada diseño de núcleo es validado por especialistas para asegurar la alineación de la columna." }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-5 lg:gap-8 p-6 lg:p-8 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-b border-black/5 dark:border-white/5 last:border-0 transition-all relative overflow-visible">
                                    <span className="text-2xl lg:text-3xl font-display font-black text-black/10 dark:text-white/10 group-hover:text-vive-500/30 transition-colors flex-shrink-0">0{i + 1}</span>
                                    <div className="space-y-1 flex-1">
                                        <h4 className="text-base lg:text-lg font-display font-black text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-vive-500 transition-all">{item.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-text text-sm lg:text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 lg:pt-8 flex justify-center lg:justify-start">
                            <button onClick={onOpenForm} className="group relative w-full lg:w-auto px-8 lg:px-12 py-5 lg:py-6 bg-transparent border border-gray-900 dark:border-vive-500 text-gray-900 dark:text-vive-500 font-black text-[9px] lg:text-[10px] uppercase tracking-[0.4em] hover:bg-gray-900 hover:text-white dark:hover:bg-vive-500 dark:hover:text-black transition-all">
                                Descargar Catálogo Técnico .PDF
                                <div className="absolute top-0 right-0 w-2 h-2 bg-gray-900 dark:bg-vive-500 -translate-y-1 translate-x-1"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholesaleAnatomy;
