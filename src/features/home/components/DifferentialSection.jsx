import React from 'react';
import { getWhatsAppLink } from '@/utils/constants';

const DifferentialSection = () => {
    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-black overflow-hidden" id="differential">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side */}
                    <div className="relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200"
                                alt="Calidad Vive"
                                className="w-full aspect-[4/5] object-cover"
                            />
                        </div>
                        {/* Floating elements for "Differential" feel */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-vive-500 rounded-full flex items-center justify-center animate-pulse-slow p-8 text-center text-white font-display font-black text-xs uppercase tracking-widest leading-tight">
                            Hecho en Perú
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-vive-500/20 rounded-full -z-10 bg-vive-50/50 dark:bg-vive-900/10 blur-[60px]"></div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-vive-500 text-xs font-black tracking-[0.4em] uppercase block">
                                Nuestra Filosofía
                            </span>
                            <h2 className="text-4xl lg:text-6xl font-display font-black text-gray-900 dark:text-white leading-[1.1] uppercase tracking-tighter">
                                Diseñados para <br />
                                <span className="text-vive-500">Descansar</span>, <br />
                                no solo para vender.
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed max-w-lg">
                                En Vive no fabricamos volúmenes infinitos, creamos sistemas de descanso pensados en la alta duración y el bienestar real.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <div className="w-12 h-0.5 bg-vive-500"></div>
                                <h4 className="text-sm font-display font-black text-gray-900 dark:text-white uppercase tracking-widest">Materiales Nobles</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    Usamos espumas de alta densidad y resortes pocket con certificación internacional.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-0.5 bg-vive-500"></div>
                                <h4 className="text-sm font-display font-black text-gray-900 dark:text-white uppercase tracking-widest">Maestría Artesanal</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    Cada costura es supervisada por expertos con más de 15 años en la industria.
                                </p>
                            </div>
                        </div>

                        <a
                            href={getWhatsAppLink("Hola Vive, me gustaría conocer más sobre su proceso de fabricación estratégica y visitar su planta.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-gray-900 dark:text-white border-b-2 border-vive-500 pb-2 hover:gap-8 transition-all group"
                        >
                            Conocer Nuestra Planta
                            <svg className="w-5 h-5 text-vive-500 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DifferentialSection;
