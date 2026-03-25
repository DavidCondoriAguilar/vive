import React from 'react';
import { LuFactory, LuCpu, LuTruck, LuShieldCheck } from 'react-icons/lu';

const WholesaleBenefits = ({ benefits }) => {
    const icons = [<LuFactory />, <LuCpu />, <LuTruck />, <LuShieldCheck />];

    return (
        <section className="py-32 bg-white dark:bg-[#080808] transition-colors duration-1000 relative overflow-hidden">
            {/* Minimalist Tech Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:32px_32px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* Minimal Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
                    <div className="space-y-6 max-w-2xl">
                        <div className="flex items-center gap-4 animate-fade-in">
                            <span className="w-12 h-[1px] bg-vive-500"></span>
                            <span className="text-vive-500 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
                                Ventaja Industrial
                            </span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-display text-gray-950 dark:text-white tracking-tighter uppercase font-light leading-[0.85]">
                            Infraestructura de <br /> 
                            <span className="text-vive-500 italic font-serif font-medium lowercase">última generación</span>
                        </h2>
                    </div>
                    <div className="max-w-xs border-l-2 border-vive-500/20 pl-8 py-2">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-brand leading-relaxed">
                            Venta directa de fábrica sin intermediarios. Tecnología de exportación y logística sincronizada para escalar su negocio.
                        </p>
                    </div>
                </div>

                {/* Minimalist Grid System */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-white/[0.01]">
                    {benefits.map((benefit, idx) => (
                        <div 
                            key={idx} 
                            className="p-12 border-gray-100 dark:border-white/5 md:border-r border-b lg:last:border-r-0 space-y-12 group hover:bg-white dark:hover:bg-white/[0.02] transition-all duration-700"
                        >
                            {/* Card Header: Icon & Indexing */}
                            <div className="flex justify-between items-center">
                                <div className="text-vive-500 text-4xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out">
                                    {icons[idx] || <LuFactory />}
                                </div>
                                <span className="text-[10px] font-mono font-black text-gray-200 dark:text-white/5 group-hover:text-vive-500/10 transition-colors uppercase select-none">
                                    0{idx + 1}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="space-y-4">
                                <h3 className="text-gray-950 dark:text-white text-xl font-display uppercase tracking-widest group-hover:text-vive-500 transition-colors duration-500">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed font-text">
                                    {benefit.desc}
                                </p>
                            </div>

                            {/* Technical Specs / Minimal Stats */}
                            <div className="pt-8 border-t border-gray-100 dark:border-white/5 space-y-4">
                                {benefit.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono font-extrabold text-gray-950 dark:text-gray-200 tracking-[0.2em] uppercase">
                                            {spec.split(':')[0]}
                                        </span>
                                        <span className="text-[10px] font-mono text-vive-500 font-black">
                                            {spec.split(':')[1] || ''}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WholesaleBenefits;
