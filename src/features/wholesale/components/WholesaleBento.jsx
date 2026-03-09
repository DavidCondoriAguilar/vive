import React from 'react';
import { FaTruck, FaCertificate, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const WholesaleBento = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Premium Card */}
            <div className="md:col-span-2 row-span-1 bg-white dark:bg-[#111] p-12 lg:p-16 flex flex-col justify-between border border-gray-100 dark:border-white/5 relative group overflow-hidden rounded-[3rem] shadow-xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-vive-500/5 rounded-full blur-[100px] group-hover:bg-vive-500/10 transition-colors duration-1000"></div>

                <div className="relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Quality Assurance</span>
                    </div>
                    <h3 className="text-4xl lg:text-6xl font-display font-medium text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                        Excelencia <br /> <span className="text-vive-500 serif italic lowercase">Sostenible</span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-text text-lg max-w-sm leading-relaxed">
                        Compromiso absoluto con estándares internacionales de fabricación, optimizando cada recurso para un impacto positivo.
                    </p>
                </div>

                <div className="relative z-10 mt-12 flex items-center gap-4 text-vive-500 font-bold text-[11px] uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500">
                    Nuestra Capacidad <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* Impact Card */}
            <div className="bg-vive-500 p-12 flex flex-col items-center justify-center text-center group rounded-[3rem] shadow-2xl relative overflow-hidden h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="relative z-10 space-y-4">
                    <span className="text-8xl lg:text-9xl font-display font-medium text-black tracking-tighter leading-none">100%</span>
                    <div className="space-y-1">
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60 block">Insumos de</span>
                        <span className="text-lg font-display font-black uppercase text-black">Primera Especialidad</span>
                    </div>
                </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gray-50 dark:bg-[#1a1a1a] p-12 border border-gray-100 dark:border-white/5 flex flex-col justify-between group rounded-[3rem] shadow-lg transition-all hover:bg-white dark:hover:bg-[#202020] h-[400px]">
                <div className="w-14 h-14 rounded-2xl bg-vive-500/10 flex items-center justify-center text-vive-500 text-3xl group-hover:bg-vive-500 group-hover:text-black transition-all duration-500">
                    <FaCertificate />
                </div>
                <div className="space-y-6">
                    <h4 className="font-display font-medium text-2xl text-gray-900 dark:text-white tracking-tight">Stock Proyectado</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-text leading-relaxed">
                        Gestionamos inventarios estratégicos para garantizar entregas masivas en tiempos récord sin comprometer la frescura de los materiales.
                    </p>
                </div>
            </div>

            {/* Logistics Card */}
            <div className="md:col-span-2 lg:col-span-4 bg-gray-900 dark:bg-[#0c0c0c] p-12 lg:p-20 border border-white/5 flex flex-col justify-center overflow-hidden relative group rounded-[4rem] shadow-2xl mt-8">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Smart Logistics</span>
                            </div>
                            <h3 className="text-5xl lg:text-7xl font-display font-medium text-white leading-none tracking-tight">
                                Logística <span className="text-vive-500 serif italic lowercase">Premium</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 font-text text-lg max-w-md leading-relaxed">
                            Contamos con una flota especializada y certificada para asegurar que cada pieza llegue en perfectas condiciones, directo de fábrica a su destino.
                        </p>
                    </div>

                    <div className="flex justify-end lg:pr-10 relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-vive-500 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
                            <FaTruck className="text-vive-500/10 text-[14rem] lg:text-[20rem] transform -rotate-12 group-hover:rotate-0 transition-all duration-1000 relative z-10" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-12 right-12 flex gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full bg-vive-500/20 group-hover:bg-vive-500 transition-colors duration-500`} style={{ transitionDelay: `${i * 100}ms` }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WholesaleBento;

