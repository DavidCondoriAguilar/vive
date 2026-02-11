import React from 'react';
import { FaArrowRight, FaShip } from 'react-icons/fa';

const ProvincesCTA = ({ waLink }) => {
    return (
        <div className="relative bg-gray-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] opacity-15 grayscale group-hover:scale-105 transition-transform duration-[4s]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vive-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-3 py-1 bg-vive-500 text-black font-black text-[9px] uppercase tracking-widest mb-8">Protocolo de Envío</div>
                    <h3 className="text-4xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                        ¿Su ciudad no figura <br />
                        en el <span className="text-vive-500">listado principal?</span>
                    </h3>
                    <p className="text-gray-400 text-xl font-medium mb-12 leading-relaxed font-text">
                        En Vive no tenemos límites. Creamos <span className="text-white">rutas especiales</span> personalizadas para que cada rincón del Perú experimente el confort que merece.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn bg-vive-600 dark:bg-vive-500 hover:bg-vive-700 dark:hover:bg-vive-400 text-white dark:text-black px-12 py-7 rounded-sm font-black text-xs uppercase tracking-[0.4em] transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-4"
                        >
                            Solicitar Ruta Especial <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                        </a>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-3xl border border-white/20 hover:bg-white/10 text-white px-12 py-7 rounded-sm font-black text-xs uppercase tracking-[0.4em] transition-all inline-flex items-center justify-center"
                        >
                            Detalles de Envío
                        </a>
                    </div>
                </div>

                <div className="hidden lg:flex justify-end relative">
                    <div className="relative">
                        <div className="absolute inset-0 bg-vive-500 blur-[80px] opacity-20"></div>
                        <FaShip className="text-vive-500/20 w-[400px] h-[400px] rotate-12 transition-transform duration-700 group-hover:rotate-0" />
                        <div className="absolute -top-10 -left-10 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-vive-500 rounded-full flex items-center justify-center text-black font-black text-xs">V.1</div>
                                <div>
                                    <div className="text-white font-black text-xs uppercase tracking-widest">Cobertura Total</div>
                                    <div className="text-vive-500 text-[8px] font-mono uppercase tracking-widest">Sincronización Regional</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvincesCTA;
