import React, { useState } from 'react';
import { FaWaveSquare, FaCrosshairs, FaBolt } from 'react-icons/fa';
import { GiSoundWaves, GiCottonFlower, GiSpinalCoil } from 'react-icons/gi';
import RevealSection from '@/components/ui/RevealSection';

const EngineeringTeaser = () => {
    const [activeLayer, setActiveLayer] = useState(0);

    const layers = [
        {
            id: '01',
            name: "Bamboo Protect™ Shell",
            subtitle: "Barrera Térmica Orgánica",
            desc: "Tejido termorregulador inteligente con fibras de bambú de alto gramaje. Disipa el calor corporal en <120s, manteniendo una superficie seca y fresca incluso en climas extremos.",
            icon: <GiCottonFlower className="w-10 h-10" />,
            metrics: ["-3.5°C Sensación Térmica", "Escudo Hipoalergénico"],
            color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
            label: "Control de Clima"
        },
        {
            id: '02',
            name: "Bio-Response™ Memory",
            subtitle: "Viscoelástica de Gravedad Cero",
            desc: "Ingeniería aeroespacial adaptada al descanso. Espuma de ultra-alta densidad (65kg/m³) que elimina puntos de presión en hombros y cadera, optimizando el flujo sanguíneo durante el REM.",
            icon: <GiSoundWaves className="w-10 h-10" />,
            metrics: ["65kg/m³ Ultra-Density", "Memoria de Adaptación 4D"],
            color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
            label: "Presión Cero"
        },
        {
            id: '03',
            name: "ActiveFlow™ Matrix",
            subtitle: "Núcleo de Transición Dinámica",
            desc: "Arquitectura de celdas abiertas que permite una ventilación cruzada constante. Actúa como el amortiguador principal del sistema, evitando el hundimiento y garantizando la durabilidad estructural.",
            icon: <FaWaveSquare className="w-10 h-10" />,
            metrics: ["Oxigenación Celular", "Soporte Multi-Punto"],
            color: "bg-purple-500/10 text-purple-400 border-purple-500/30",
            label: "Ventilación 360"
        },
        {
            id: '04',
            name: "Titan-Pocket™ Core",
            subtitle: "Suspensión de Acero Templado",
            desc: "La base de nuestra ingeniería. 880+ resortes independientes ensacados individualmente. Aleación de titanio y acero al carbono que garantiza independencia total de movimientos.",
            icon: <GiSpinalCoil className="w-10 h-10" />,
            metrics: ["880+ Puntos de Apoyo", "Independencia de Lechos"],
            color: "bg-vive-500/10 text-vive-400 border-vive-500/30",
            label: "Soporte Infinito"
        }
    ];

    return (
        <section className="py-24 md:py-48 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-1000">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-20 lg:mb-28">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-vive-500/10 border border-vive-500/20 rounded-sm mb-6">
                        <FaBolt className="text-vive-500 text-xs animate-pulse" />
                        <span className="text-[10px] font-mono font-black text-vive-600 dark:text-vive-400 uppercase tracking-[0.4em]">
                            Product_Architecture_v2.0
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-[110px] font-display font-black text-gray-900 dark:text-white uppercase leading-[0.75] tracking-tighter">
                        Ingeniería <span className="text-vive-500 font-brand lowercase italic tracking-normal">Vive</span>
                    </h2>
                    <h3 className="mt-8 text-xl md:text-3xl font-display font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">
                        / al revés y al derecho /
                    </h3>
                </div>

                {/* Main Interaction Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
                    
                    {/* LEFT: 3D Visualization */}
                    <div className="lg:col-span-6 relative h-[500px] md:h-[800px] flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {layers.map((layer, idx) => {
                                const isActive = activeLayer === idx;
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveLayer(idx)}
                                        className={`absolute w-full h-32 md:h-44 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            ${isActive ? 'z-30' : 'z-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0'}`}
                                        style={{
                                            transform: `perspective(2500px) rotateX(55deg) rotateZ(-35deg) 
                                                       translateY(${(idx - activeLayer) * 120}px) 
                                                       translateZ(${isActive ? 120 : 0}px)
                                                       translateX(${isActive ? 30 : 0}px)`,
                                            top: '50%',
                                            marginTop: '-5.5rem'
                                        }}
                                    >
                                        <div className={`absolute inset-0 rounded-[3rem] border-2 backdrop-blur-3xl transition-all duration-500 overflow-hidden
                                            ${isActive ? `${layer.color} border-vive-500/60 shadow-[0_40px_80px_rgba(41,156,71,0.2)]` : 'bg-gray-100/10 dark:bg-white/5 border-gray-200 dark:border-white/10'}`}>
                                            
                                            {/* Animated Scan Bar for Active Layer */}
                                            {isActive && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
                                            )}

                                            <div className="relative h-full flex items-center justify-between px-12">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-mono font-bold opacity-30 uppercase mb-2">Technical_Layer_{layer.id}</span>
                                                    <h4 className={`text-xl md:text-2xl font-black uppercase tracking-tighter ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                                                        {layer.label}
                                                    </h4>
                                                </div>
                                                <div className={`transform transition-all duration-700 ${isActive ? 'scale-125 text-vive-500' : 'scale-100 text-gray-400'}`}>
                                                    {layer.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Perspective Depth */}
                                        <div className="absolute top-full left-[2.5rem] w-[calc(100%-5rem)] h-8 bg-black/10 dark:bg-white/5 rounded-b-[2.5rem] transform -skew-x-[45deg] origin-top"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Data Intel Panel */}
                    <div className="lg:col-span-6">
                        <RevealSection delay={200}>
                            <div className="bg-gray-50/50 dark:bg-[#080808] rounded-[4rem] p-8 md:p-16 border border-gray-100 dark:border-white/5 shadow-3xl relative overflow-hidden h-[650px] flex flex-col justify-between">
                                {/* HUD Grid & Crosshairs */}
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.02)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.01)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none"></div>
                                <FaCrosshairs className="absolute top-10 right-10 text-gray-200 dark:text-white/10 w-16 h-16" />

                                <div className="relative">
                                    {layers.map((l, idx) => (
                                        <div
                                            key={idx}
                                            className={`transition-all duration-700 absolute inset-0
                                                ${activeLayer === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                                        >
                                            <div className="flex items-center gap-8 mb-12">
                                                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-vive-500 shadow-2xl">
                                                    {l.icon}
                                                </div>
                                                <div>
                                                    <h5 className="text-[11px] font-black uppercase text-vive-500 tracking-[0.4em] font-mono mb-2">{l.subtitle}</h5>
                                                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">{l.name}</h3>
                                                </div>
                                            </div>

                                            <div className="border-l-4 border-vive-500/30 pl-10 mb-12">
                                                <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl leading-relaxed italic font-medium">
                                                    {l.desc}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {l.metrics.map((m, i) => (
                                                    <div key={i} className="px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center gap-4 group hover:border-vive-500/30 transition-colors">
                                                        <div className="w-2 h-2 rounded-full bg-vive-500 animate-pulse"></div>
                                                        <span className="text-[11px] font-black uppercase tracking-widest text-gray-900 dark:text-gray-100">{m}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Interactive Control Dock */}
                                <div className="relative z-10 pt-10 border-t border-gray-200 dark:border-white/5 flex items-center justify-between">
                                    <div className="flex gap-4">
                                        {layers.map((l, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveLayer(idx)}
                                                className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-mono transition-all duration-500 border
                                                    ${activeLayer === idx 
                                                        ? 'bg-vive-500 text-black border-vive-500 shadow-2xl scale-110' 
                                                        : 'bg-transparent text-gray-400 border-gray-200 dark:border-white/10 hover:border-vive-500/40 hover:text-vive-500'}`}
                                            >
                                                <span className="text-xs font-black leading-none mb-1">{l.id}</span>
                                                <div className={`w-1 h-1 rounded-full bg-black/40 ${activeLayer === idx ? 'opacity-100' : 'opacity-0'}`}></div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="hidden sm:block text-right">
                                        <div className="text-[10px] font-mono font-black text-vive-500 mb-1">Status: Calibration_Success</div>
                                        <div className="text-[10px] font-mono text-gray-400">Layer_Selection: 0{activeLayer + 1} / 04</div>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EngineeringTeaser;
