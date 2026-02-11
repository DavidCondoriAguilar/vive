import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import EngineeringGrid from '@/components/ui/EngineeringGrid';

const WholesaleHero = ({ isVisible, onOpenForm }) => {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]" id="wholesale-hero">
            <EngineeringGrid color="#299C47" opacity="0.05" size="100px" />

            {/* Subtle Radial Glows for Depth */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-vive-500/10 blur-[160px] rounded-full"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-vive-500/5 blur-[160px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Technical Status Bar */}
                    <div className={`flex items-center gap-6 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                        <div className="flex items-center gap-3 px-4 py-2 bg-vive-500/10 border border-vive-500/20 rounded-full backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vive-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-vive-500"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-vive-400">Directo Planta</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-vive-500/30 to-transparent"></div>
                        <span className="text-[10px] font-mono text-vive-500/40 hidden md:block uppercase tracking-widest">
                            Industrial Logic // Core.v2
                        </span>
                    </div>

                    {/* Main Content Lockup */}
                    <div className="space-y-12">
                        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <span className="inline-block text-[11px] font-black tracking-[0.6em] uppercase text-gray-500 border-l-2 border-vive-500 pl-6">
                                Atmósfera de Hotel de Lujo — Colchones Vive
                            </span>

                            <h1 className="text-[10vw] lg:text-[120px] font-display font-black text-white leading-[0.8] tracking-[-0.06em] uppercase">
                                Ingeniería <br />
                                <span className="text-vive-500">del</span> <span className="italic font-light lowercase">Descanso</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-gray-400 font-text leading-tight max-w-2xl border-l border-white/10 pl-8">
                                Impulsamos el éxito de tiendas y socios comerciales con piezas de
                                <span className="text-white font-bold ml-2">alta rotación</span>, escala industrial y soluciones estratégicas para el
                                <span className="text-vive-500 italic ml-2 border-b border-vive-500/30">sector hotelero</span>.
                            </p>
                        </div>

                        {/* Action Unit */}
                        <div className={`flex flex-col sm:flex-row items-center gap-10 pt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={onOpenForm}
                                className="group relative px-14 py-8 bg-vive-500 overflow-hidden transition-all hover:pr-20 active:scale-95 w-full sm:w-auto"
                            >
                                <div className="relative z-10 flex items-center gap-4 text-black text-xs font-black uppercase tracking-widest">
                                    Iniciar Cotización
                                    <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                                </div>
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
                            </button>

                            <div className="flex items-center gap-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-vive-500 mb-1">Capacidad</span>
                                    <span className="text-sm font-display text-gray-400 uppercase tracking-tighter italic">Industria 4.0 // Ilimitada</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-vive-500 mb-1">Logística</span>
                                    <span className="text-sm font-display text-gray-400 uppercase tracking-tighter italic">Cobertura Nacional Total</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Floating Indicators */}
            <div className="absolute bottom-12 right-12 hidden lg:block space-y-3 opacity-20 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center justify-end gap-4">
                    <span className="text-[9px] font-mono text-vive-400 text-right uppercase tracking-[0.2em]">Efficiency Coefficient: 0.98</span>
                    <span className="w-12 h-[1px] bg-vive-500"></span>
                </div>
                <div className="flex items-center justify-end gap-4">
                    <span className="text-[9px] font-mono text-vive-400 text-right uppercase tracking-[0.2em]">B2B Node Connectivity: Active</span>
                    <span className="w-12 h-[1px] bg-vive-500"></span>
                </div>
            </div>
        </section>
    );
};

export default WholesaleHero;
