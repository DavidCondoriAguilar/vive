import React from 'react';
import { FaArrowRight, FaCrosshairs } from 'react-icons/fa';
import { LuBinary, LuFactory, LuShieldCheck } from 'react-icons/lu';
import b2bHeroImg from '@/assets/images/generated/b2b_industrial_hero_2026.png';

const WholesaleHero = ({ isVisible, onOpenForm }) => {
    const stats = [
        { value: 'Directo', label: 'Precio de Fábrica', accent: false },
        { value: '+5,000', label: 'Unidades / Mes', accent: true },
        { value: '48-72h', label: 'Logística Nacional', accent: false },
        { value: '+30', label: 'Años de Industria', accent: false }
    ];

    const techValues = [
        "ISO 9001 COMPLIANT",
        "HIGH VOLUME CAPACITY",
        "BIOMECHANICAL ENGINEERING",
        "DIRECT FROM SOURCE",
        "CUSTOM OEM SOLUTIONS",
        "NATIONWIDE LOGISTICS"
    ];

    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] transition-colors duration-700 select-none" id="wholesale-hero">
            {/* 1. LAYER: TECHNICAL UNDERLAY (GRIDS & VECTORS) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#299C4725_1px,transparent_1px),linear-gradient(to_bottom,#299C4725_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#299C4710_0,transparent_100%)]"></div>

                {/* Visual tech markers */}
                <div className="absolute top-1/4 left-10 p-4 border border-vive-500/20 rounded-sm">
                    <FaCrosshairs className="text-vive-500/30 animate-pulse" />
                </div>
                <div className="absolute bottom-1/4 right-10 p-4 border border-vive-500/20 rounded-sm">
                    <LuBinary className="text-vive-500/20" />
                </div>
            </div>

            {/* 2. LAYER: HERO IMAGE WITH DISRUPTIVE GRADIENTS */}
            <div className="absolute inset-0 z-0">
                <img
                    src={b2bHeroImg}
                    alt="Industrial Elite B2B"
                    className="absolute right-0 top-0 w-full lg:w-[68%] h-full object-cover opacity-40 lg:opacity-60 transition-all duration-2000 grayscale hover:grayscale-0"
                    style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
            </div>

            {/* 3. LAYER: INTERACTIVE CONTENT */}
            <div className="container mx-auto px-6 lg:px-20 relative z-10 w-full pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* LEFT CONTENT BLOCK */}
                    <div className="lg:col-span-8 space-y-10 lg:space-y-16">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-4 bg-vive-500/5 border border-vive-500/10 px-4 py-2 rounded-full backdrop-blur-sm animate-in fade-in slide-in-from-left-4 duration-700">
                                <span className="flex h-2 w-2 rounded-full bg-vive-500 animate-ping"></span>
                                <span className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-vive-400">
                                    ESTÁNDAR INDUSTRIAL PREMIUM
                                </span>
                            </div>

                            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-display text-white leading-[0.85] tracking-tighter">
                                Potencia <br />
                                <span className="text-vive-500 italic font-serif font-medium">B2B Solutions</span> —
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 font-brand leading-[1.3] max-w-2xl border-l border-vive-500/30 pl-6">
                                Redefinimos el estándar de descanso para el sector corporativo y hotelero.
                                <span className="text-white font-medium italic block mt-2 opacity-80">Capacidad manufacturera de exportación, escalada para proyectos de alta demanda.</span>
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
                            <button
                                onClick={onOpenForm}
                                className="group relative px-14 py-7 bg-white text-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)] active:shadow-none"
                            >
                                <span className="relative z-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-widest transition-transform group-hover:px-2">
                                    SOLICITAR DOSSIER INDUSTRIAL
                                    <FaArrowRight className="transition-transform group-hover:translate-x-3" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-vive-500 to-vive-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                            </button>

                            <div className="flex items-center gap-6 group cursor-default">
                                <div className="h-12 w-12 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-vive-500 transition-colors">
                                    <LuFactory className="text-vive-500 text-xl" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-gray-500 block">MANUFACTURING SINCE</span>
                                    <span className="text-sm font-serif italic text-white group-hover:text-vive-500 transition-colors">1994 — Lima, Perú</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STATS BLOCK (VERTICAL DASHBOARD STYLE) */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="bg-white/[0.02] border border-white/5 p-10 backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vive-500/0 via-vive-500 to-vive-500/0"></div>
                            <div className="space-y-12">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="space-y-3 group/item">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[8px] font-mono font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
                                            {stat.accent && <LuShieldCheck className="text-vive-500 text-xs animate-pulse" />}
                                        </div>
                                        <div className={`text-4xl xl:text-5xl font-display font-light tracking-tighter transition-all duration-700 ${stat.accent ? 'text-vive-500 scale-105' : 'text-white/80 group-hover/item:text-white'}`}>
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative crosshair */}
                            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-vive-500/20">COORD: 12.0464° S, 77.0428° W</div>
                        </div>
                    </div>
                </div>

                {/* HORIZONTAL TICKER BAR (MARQUEE) */}
                <div className="mt-20 lg:mt-32 border-y border-white/5 py-6 overflow-hidden flex whitespace-nowrap group">
                    <div className="flex animate-marquee group-hover:pause gap-12 lg:gap-24">
                        {[...techValues, ...techValues].map((val, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="h-1.5 w-1.5 rounded-full bg-vive-500"></span>
                                <span className="text-[10px] lg:text-[11px] font-mono font-black uppercase tracking-[0.3em] text-gray-600 hover:text-vive-400 transition-colors">
                                    {val}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SIDE TECH LABEL */}
            <div className="absolute left-6 bottom-32 -rotate-90 origin-left hidden xl:flex items-center gap-8 pointer-events-none opacity-20 hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.5em] text-white">
                    B2B // INDUSTRIAL_ACCESS_ONLY
                </span>
                <div className="h-px w-24 bg-gradient-to-r from-vive-500 to-transparent"></div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .pause {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
};

export default WholesaleHero;
