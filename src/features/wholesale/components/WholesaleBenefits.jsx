import React from 'react';
import { FaShieldAlt, FaChartBar, FaExpand, FaTruckLoading } from 'react-icons/fa';

const WholesaleBenefits = ({ benefits, factoryProductionImg }) => {
    return (
        <section className="py-24 lg:py-48 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-1000">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">

                    {/* Left: Messaging & Strategy */}
                    <div className="lg:col-span-6 space-y-24">
                        <div className="space-y-12">
                            <div className="flex items-center gap-4 overflow-hidden">
                                <span className="h-[2px] w-12 bg-vive-500"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-vive-600 dark:text-vive-400">
                                    VIVE MAYORISTA // VENTAJA INDUSTRIAL
                                </span>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-[clamp(3rem,7vw,7rem)] font-display font-light text-gray-950 dark:text-white leading-[0.9] tracking-tighter">
                                    La Ventaja de una <br />
                                    <span className="text-vive-500 italic serif font-medium lowercase">planta</span> <br />
                                    de última generación.
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-text leading-tight max-w-xl">
                                    Venta directa de fábrica. <span className="text-gray-900 dark:text-white font-bold">Sin intermediarios</span>. Tecnología de exportación y logística sincronizada para su negocio.
                                </p>
                            </div>
                        </div>

                        {/* Technical Benefit Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="group p-10 border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] transition-all duration-700 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-vive-500/5 hover:-translate-y-2">
                                    <div className="w-12 h-12 mb-8 flex items-center justify-center bg-white dark:bg-black border border-gray-100 dark:border-white/10 text-vive-500 group-hover:bg-vive-500 group-hover:text-white transition-all duration-500">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-display font-medium text-gray-950 dark:text-white mb-4 uppercase tracking-tight">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 dark:text-gray-500 font-text leading-relaxed mb-6">
                                        {benefit.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                                        {benefit.specs.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1 h-1 bg-vive-500 rounded-full"></div>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-gray-950 dark:text-white/80">
                                                    {spec}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Immersive Production Visual */}
                    <div className="lg:col-span-6 lg:sticky lg:top-32">
                        <div className="relative group">
                            {/* Main Industrial Image */}
                            <div className="relative aspect-[4/5] overflow-hidden border border-gray-100 dark:border-white/10 bg-gray-100 dark:bg-white/5">
                                <img
                                    src={factoryProductionImg}
                                    alt="Vive Production Plant"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2.5s] ease-out"
                                />

                                {/* Overlay Technical HUD */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                                    <div className="px-4 py-1 bg-vive-500 text-black text-[9px] font-black uppercase tracking-widest">
                                        Producción en Vivo
                                    </div>
                                    <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest">
                                        SISTEMA_VIVE_V.4.2
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-px bg-vive-500"></span>
                                            <span className="text-[10px] font-bold text-vive-500 uppercase tracking-[0.3em] font-mono">Calidad Certificada</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-display text-white leading-[0.9] tracking-tighter uppercase font-light">
                                            Excelencia <br />
                                            <span className="font-serif italic text-vive-500 lowercase font-medium">industrial</span>
                                        </h3>
                                        <p className="text-gray-400 text-sm font-text max-w-sm leading-relaxed">
                                            Test de resiliencia bajo estándar ISO para garantizar <span className="text-white">máxima durabilidad</span>.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10">
                                            <div className="text-2xl font-display text-white mb-1">ISO 9001</div>
                                            <div className="text-[8px] text-gray-500 uppercase tracking-widest">Gestión de Calidad</div>
                                        </div>
                                        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10">
                                            <div className="text-2xl font-display text-white mb-1">OEKO-TEX</div>
                                            <div className="text-[8px] text-gray-500 uppercase tracking-widest">Seguridad Textil</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Made in" Badge */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-950 text-white flex flex-col items-center justify-center p-8 text-center border border-white/10 group-hover:rotate-6 transition-transform duration-700">
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-vive-500 mb-2">HERENCIA</span>
                                <span className="text-2xl font-display uppercase tracking-widest font-light">Perú</span>
                                <div className="mt-4 w-6 h-px bg-white/20"></div>
                                <span className="mt-4 text-[7px] text-gray-500 uppercase tracking-widest">Fabricado con Orgullo</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WholesaleBenefits;
