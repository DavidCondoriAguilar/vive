import React from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const WholesaleFinalCTA = ({ whatsappLink }) => {
    return (
        <div className="mt-24 md:mt-40 bg-gray-900 dark:bg-[#0c0c0c] p-12 md:p-32 text-center relative overflow-hidden group shadow-3xl rounded-[4rem] border border-white/5">
            {/* Minimalist Background Ambience with Enhanced Vive Green Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-vive-500/20 via-transparent to-vive-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(41,156,71,0.15)_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(41,156,71,0.1)_0%,transparent_50%)]"></div>

            {/* Subtle Noise/Grain and Grid for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="relative z-10 space-y-16">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                    <span className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">Canal de Negocios Exclusivo</span>
                </div>

                <div className="space-y-8">
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-medium text-white leading-[1.0] tracking-tight">
                        Escalamos su <br />
                        <span className="text-vive-500 serif italic lowercase">Visión</span> de negocio.
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-text max-w-3xl mx-auto leading-relaxed">
                        Desarrollamos proyectos a medida con un control de calidad industrial insuperable. Tu próximo éxito comercial comienza con un descanso de <span className="text-white font-medium">clase mundial</span>.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative w-full md:w-auto px-16 py-7 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
                    >
                        Solicitar Propuesta Comercial
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative w-full md:w-auto px-16 py-7 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 hover:border-vive-500/50 transition-all flex items-center justify-center gap-4"
                    >
                        <FaWhatsapp className="text-lg text-vive-500" />
                        Atención WhatsApp VIP
                    </a>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/5 max-w-5xl mx-auto">
                    {[
                        { label: "Protocolo QA", value: "Internacional" },
                        { label: "Capacidad", value: "Industrial Pro" },
                        { label: "Logística", value: "Sincronizada" }
                    ].map((item, i) => (
                        <div key={i} className="space-y-2">
                            <span className="text-[10px] items-center font-bold text-vive-500 uppercase tracking-widest opacity-60">
                                {item.label}
                            </span>
                            <span className="block text-sm font-display font-medium text-gray-300 uppercase tracking-widest">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WholesaleFinalCTA;

