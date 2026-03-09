import React from 'react';
import { FaFileDownload, FaBezierCurve, FaWind, FaArrowsAltH } from 'react-icons/fa';

const WholesaleAnatomy = ({ premiumCutawayImg }) => {
    return (
        <section className="py-24 lg:py-48 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-1000">
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left: THE BLUEPRINT VISUALIZATION */}
                    <div className="lg:col-span-7 relative group">
                        <div className="relative border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] p-4 lg:p-8">
                            <div className="relative overflow-hidden">
                                <img
                                    src={premiumCutawayImg}
                                    alt="Vive Internal Engineering"
                                    className="w-full grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] ease-out object-cover aspect-[4/3] lg:aspect-auto"
                                />
                                {/* Blueprint Lines HUD */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1/4 left-0 w-full h-px bg-vive-500/20"></div>
                                    <div className="absolute top-2/4 left-0 w-full h-px bg-vive-500/10"></div>
                                    <div className="absolute top-3/4 left-0 w-full h-px bg-vive-500/20"></div>
                                    <div className="absolute left-1/4 top-0 h-full w-px bg-vive-500/10"></div>
                                    <div className="absolute left-3/4 top-0 h-full w-px bg-vive-500/10"></div>
                                </div>
                            </div>

                            {/* Technical Annotations */}
                            <div className="absolute top-10 left-10 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <span className="w-4 h-4 rounded-full border border-vive-500 flex items-center justify-center">
                                        <span className="w-1 h-1 bg-vive-500 rounded-full animate-ping"></span>
                                    </span>
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white bg-black/80 px-3 py-1">Layer 01_RESILIENCE</div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-10 hidden md:block">
                                <div className="flex items-center gap-4 flex-row-reverse">
                                    <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center">
                                        <span className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></span>
                                    </span>
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white bg-black/80 px-3 py-1">Layer 04_CORE_POCKET</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: THE DATA SHEET NARRATIVE */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="h-[2px] w-10 bg-vive-500"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-vive-600 dark:text-vive-400">
                                    Internal Architecture
                                </span>
                            </div>
                            <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-display font-light text-gray-950 dark:text-white leading-[0.9] tracking-tighter">
                                Más allá de lo <br />
                                <span className="text-vive-500 italic serif font-medium lowercase">visible</span>.
                            </h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400 font-text leading-tight max-w-sm">
                                La verdadera calidad se encuentra en el interior. Nuestra arquitectura interna está diseñada para ofrecer una <span className="text-gray-950 dark:text-white font-bold">respuesta adaptativa</span> a cada fisionomía.
                            </p>
                        </div>

                        {/* Surgical Items List */}
                        <div className="space-y-4">
                            {[
                                {
                                    icon: <FaArrowsAltH />,
                                    title: "Resiliencia Adaptativa",
                                    desc: "Núcleos de alta densidad que recuperan su forma original garantizando durabilidad extrema.",
                                    tag: "HDV_90"
                                },
                                {
                                    icon: <FaBezierCurve />,
                                    title: "Aislamiento de Movimiento",
                                    desc: "Sistemas pocket encapsulados para una independencia de lechos absoluta.",
                                    tag: "IND_ZONE"
                                },
                                {
                                    icon: <FaWind />,
                                    title: "Termorregulación Activa",
                                    desc: "Materiales transpirables que mantienen un flujo de aire constante durante el descanso.",
                                    tag: "AIR_FLOW"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-8 p-10 items-start border border-gray-100 dark:border-white/5 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                                    <div className="text-vive-500 text-xl pt-1 group-hover:scale-125 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-lg font-display font-medium text-gray-950 dark:text-white uppercase tracking-tight">{item.title}</h4>
                                            <span className="text-[8px] font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest">{item.tag}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-text leading-relaxed opacity-80 group-hover:opacity-100">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Technical CTA */}
                        <div className="pt-4">
                            <button className="group relative w-full px-12 py-8 bg-black dark:bg-white text-white dark:text-black font-black text-[12px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                <span className="relative z-10 flex items-center justify-center gap-6">
                                    Descargar Dossier Técnico
                                    <FaFileDownload className="text-lg transition-transform group-hover:translate-y-1" />
                                </span>
                                <div className="absolute inset-0 bg-vive-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                            <div className="mt-4 flex items-center justify-between px-2">
                                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">Version 2.0_2026</span>
                                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">PDF _ 4.2MB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholesaleAnatomy;
