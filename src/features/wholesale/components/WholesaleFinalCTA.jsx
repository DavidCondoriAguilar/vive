import React from 'react';

const WholesaleFinalCTA = ({ onOpenForm, whatsappLink }) => {
    return (
        <div className="mt-20 bg-gray-900 dark:bg-black p-16 md:p-32 text-center relative overflow-hidden group shadow-2xl rounded-[3rem] transition-colors border border-white/5">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vive-500/50 to-transparent"></div>

            {/* Technical HUD Backdrop */}
            <div className="absolute top-10 right-10 opacity-10 hidden md:block text-right font-mono text-[10px] text-vive-500 uppercase tracking-widest leading-relaxed">
                B2B_PROTOCOL: ACTIVE<br />
                FACTORY_DIRECT: SYNCED<br />
                LOGISTICS_NODE: LIMA_HQ
            </div>

            <div className="relative z-10 space-y-10">
                <div className="inline-flex items-center gap-4 px-6 py-2 bg-vive-500/10 border border-vive-500/20 rounded-full">
                    <span className="w-2 h-2 bg-vive-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-black text-vive-500 uppercase tracking-[0.5em]">Executive Channel Open</span>
                </div>

                <h2 className="text-4xl md:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter uppercase transition-all duration-700">
                    Escalamos su <br /> <span className="text-vive-500 italic font-light lowercase">visión de negocio</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-400 font-text max-w-2xl mx-auto leading-relaxed">
                    Fabricamos en serie, eliminamos intermediarios y garantizamos el <span className="text-white font-bold">éxito estructural</span> de su proyecto corporativo, inmobiliario u hotelero.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                    <button
                        onClick={onOpenForm}
                        className="group relative w-full md:w-auto px-12 py-7 bg-vive-600 dark:bg-vive-500 text-white dark:text-black font-black text-xs uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-xl overflow-hidden"
                    >
                        <span className="relative z-10">Iniciar Propuesta Elite</span>
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-12 py-7 border border-white/20 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                    >
                        Asesoría WhatsApp VIP
                    </a>
                </div>

                <div className="pt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-vive-500 rounded-full"></span>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Control de calidad</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-vive-500 rounded-full"></span>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Estándares de fabricación</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-vive-500 rounded-full"></span>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Despacho 48-72h Lima</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WholesaleFinalCTA;
