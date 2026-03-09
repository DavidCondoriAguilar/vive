import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaThermometerHalf, FaCloudSun, FaShieldAlt, FaSyncAlt, FaSprayCan, FaInfoCircle, FaWind, FaBed, FaCheckCircle, FaExclamationCircle, FaArrowRight } from 'react-icons/fa';
import { LuBrainCircuit, LuWind, LuLayers, LuSnowflake } from 'react-icons/lu';
import heroImg from '@/assets/images/generated/mayorista-first-section.webp';
import biomechanicalImg from '@/assets/images/generated/body-anatomy-info.webp';
import { getWhatsAppLink } from '@/utils/constants';
import { ROUTES } from '@/router/routes';

const SECTION_DURATION = 8000; // 8 seconds per section

const RestMasterclass = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('posture');
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);
    const progressRef = useRef(null);

    const sections = [
        {
            id: 'posture',
            title: 'Bio-Alineación',
            description: 'La ciencia de posicionar el cuerpo para la recuperación celular óptima.',
            icon: <LuLayers />,
            color: 'bg-vive-500'
        },
        {
            id: 'environment',
            title: 'Atmósfera Zen',
            description: 'Control de temperatura y calidad de aire para ciclos REM ininterrumpidos.',
            icon: <LuWind />,
            color: 'bg-blue-500'
        },
        {
            id: 'maintenance',
            title: 'Protocolo de Vida',
            description: 'Mantenimiento preventivo para preservar la integridad del sistema MP.',
            icon: <FaShieldAlt />,
            color: 'bg-gray-800'
        }
    ];

    const handleWhatsAppConsult = (subject) => {
        const message = `Hola Vive, estoy interesado en una asesoría sobre *${subject}* de la Guía de Descanso.`;
        window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    };

    // Auto-rotation logic
    const advanceSection = useCallback(() => {
        setActiveSection(prev => {
            const ids = sections.map(s => s.id);
            const currentIdx = ids.indexOf(prev);
            return ids[(currentIdx + 1) % ids.length];
        });
        setProgress(0);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        // Progress animation
        setProgress(0);
        const startTime = Date.now();
        progressRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            setProgress(Math.min((elapsed / SECTION_DURATION) * 100, 100));
        }, 50);

        // Section advance timer
        timerRef.current = setTimeout(() => {
            advanceSection();
        }, SECTION_DURATION);

        return () => {
            clearTimeout(timerRef.current);
            clearInterval(progressRef.current);
        };
    }, [activeSection, isPaused, advanceSection]);

    const handleManualSelect = (id) => {
        clearTimeout(timerRef.current);
        clearInterval(progressRef.current);
        setActiveSection(id);
        setProgress(0);
    };

    return (
        <section className="bg-white dark:bg-[#050505] transition-colors duration-700 min-h-screen relative overflow-x-hidden w-full box-border">
            <style dangerouslySetInnerHTML={{
                __html: `
                .masterclass-rounded { border-radius: 2.5rem !important; }
                .masterclass-rounded-full { border-radius: 9999px !important; }
                @keyframes float-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float-subtle 6s ease-in-out infinite; }
                
                /* Custom mask for hero */
                .hero-mask {
                    mask-image: linear-gradient(to right, black 50%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to right, black 50%, transparent 100%);
                }
                @media (max-width: 1024px) {
                    .hero-mask {
                        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                        -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                    }
                }
            `}} />

            {/* 1. MASTERCLASS HERO — TYPOGRAPHY DRIVEN CINEMATIC */}
            <div className="relative min-h-screen flex items-center overflow-hidden w-full bg-[#050505] transition-colors duration-1000">
                {/* 1. LAYER: TECHNICAL UNDERLAY (GRIDS & VECTORS) */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#299C4715_1px,transparent_1px),linear-gradient(to_bottom,#299C4715_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#299C4708_0%,transparent_70%)]"></div>
                </div>

                {/* 2. LAYER: AMBIENT GLOWS */}
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-vive-500/10 blur-[150px] rounded-full animate-pulse-slow"></div>
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-vive-500/5 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 lg:px-24 relative z-10 w-full pt-20">
                    <div className="max-w-6xl">
                        {/* Technical Label */}
                        <div className="flex items-center gap-4 mb-8 lg:mb-12 animate-in fade-in slide-in-from-left-4 duration-1000">
                            <div className="flex -space-x-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-vive-500 shadow-[0_0_10px_#299C47]"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-vive-500/30"></span>
                            </div>
                            <span className="text-[10px] font-mono lg:text-[11px] font-black uppercase tracking-[0.5em] text-vive-400">
                                Protocolo v2.26 // Estudio Biomecánico
                            </span>
                        </div>

                        {/* Disruptive Headline */}
                        <h1 className="text-[clamp(2.8rem,10vw,8.5rem)] font-display text-white leading-[0.85] tracking-tighter mb-12 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <span className="text-gray-500 font-light block mb-2 lg:mb-4">Ingeniería del</span>
                            <span className="relative inline-block lg:py-4">
                                <span className="absolute inset-0 bg-vive-500/10 blur-[40px] rounded-full"></span>
                                <span className="relative italic font-serif text-vive-500 font-medium">sueño profundo</span>
                            </span>
                        </h1>

                        {/* Mission Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end border-t border-white/5 pt-12 lg:pt-20">

                            {/* Mission Text */}
                            <div className="lg:col-span-7 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                                <p className="text-2xl lg:text-[2.8rem] font-brand leading-[1.1] tracking-tight group">
                                    <span className="text-gray-600 group-hover:text-gray-400 transition-colors duration-700 block">No buscamos que duerma más.</span>
                                    <span className="text-white font-medium italic mt-2 block opacity-90">Buscamos que su tiempo sea reparado con precisión industrial.</span>
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                                    <button
                                        onClick={() => handleWhatsAppConsult('Asesoría Especializada')}
                                        className="group relative px-12 py-6 bg-white text-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] masterclass-rounded-full"
                                    >
                                        <span className="relative z-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                                            SOLICITAR AUDITORÍA
                                            <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-vive-500 to-vive-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                                    </button>

                                    <div className="flex flex-col gap-1 border-l border-white/10 pl-8">
                                        <span className="text-[9px] font-mono font-bold text-vive-500/60 uppercase tracking-widest">Sistema de Recuperación</span>
                                        <span className="text-sm font-serif italic text-white/40">Estándar de Alta Fidelidad</span>
                                    </div>
                                </div>
                            </div>

                            {/* Live Metrics Dashboard */}
                            <div className="lg:col-span-5 w-full animate-in fade-in slide-in-from-right-4 duration-1000 delay-700">
                                <div className="grid grid-cols-3 gap-8 p-10 bg-white/[0.02] border border-white/5 backdrop-blur-xl masterclass-rounded relative group">
                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-vive-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

                                    <div className="space-y-4">
                                        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Eficiencia</div>
                                        <div className="text-3xl lg:text-5xl font-display font-light text-vive-500 tracking-tighter transition-all group-hover:scale-110">95%</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Silencio</div>
                                        <div className="text-3xl lg:text-5xl font-display font-light text-white tracking-tighter">22db</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Sensores</div>
                                        <div className="text-3xl lg:text-5xl font-display font-light text-white tracking-tighter">4K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical TECH BAR */}
                <div className="absolute left-10 bottom-24 -rotate-90 origin-left hidden xl:flex items-center gap-10 opacity-20 hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-mono font-black text-white uppercase tracking-[0.6em]">Arquitectura Biomecánica Vive // v2.0</span>
                    <div className="h-px w-24 bg-gradient-to-r from-vive-500 to-transparent"></div>
                </div>

                {/* Floating Navigation Dots */}
                <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-10 z-30">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-vive-500/30 to-transparent absolute left-1/2 -translate-x-1/2 -top-24"></div>
                    {sections.map(s => (
                        <div key={s.id} className="group relative flex items-center justify-end">
                            <span className="mr-6 py-2 px-4 bg-black/80 backdrop-blur-xl border border-vive-500/30 text-[9px] font-mono font-black text-vive-400 uppercase tracking-[0.2em] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none masterclass-rounded shadow-2xl">
                                {s.title}
                            </span>
                            <button
                                onClick={() => {
                                    setActiveSection(s.id);
                                    document.getElementById('exploration-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`w-2 h-2 transition-all duration-500 ${activeSection === s.id ? 'bg-vive-500 scale-[2] shadow-[0_0_15px_rgba(41,156,71,0.5)]' : 'bg-white/40 group-hover:bg-vive-500 group-hover:scale-150'}`}
                                aria-label={`Section: ${s.title}`}
                            />
                        </div>
                    ))}
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-vive-500/30 to-transparent absolute left-1/2 -translate-x-1/2 -bottom-24"></div>
                </div>
            </div>




            {/* 2. DYNAMIC EXPLORATION */}
            <div id="exploration-section" className="py-20 lg:py-48 container mx-auto px-4 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">

                    {/* Architectural Navigation */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-2 z-20 w-full">
                        <div className="mb-10 lg:mb-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-vive-500 mb-4 sm:mb-6">Metodología Vive</h2>
                            <p className="text-2xl sm:text-3xl lg:text-5xl font-display text-gray-900 dark:text-white leading-[1.1] tracking-tighter">Optimice cada ciclo de su descanso celular.</p>
                        </div>

                        <div className="flex flex-col gap-2 w-full"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleManualSelect(section.id)}
                                    className={`group w-full text-left p-6 lg:p-10 transition-all duration-500 relative overflow-hidden ${activeSection === section.id
                                        ? 'bg-gray-50 dark:bg-white/[0.05]'
                                        : 'opacity-40 hover:opacity-100 hover:bg-gray-50/50 dark:hover:bg-white/[0.01]'
                                        } masterclass-rounded`}
                                >
                                    {/* Progress bar — only on active section */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-200 dark:bg-white/10">
                                        <div
                                            className="w-full bg-vive-500 transition-all ease-linear"
                                            style={{
                                                height: activeSection === section.id ? `${progress}%` : '0%',
                                                transitionDuration: activeSection === section.id ? '50ms' : '300ms'
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-4 lg:gap-8 pl-4">
                                        <div className={`text-xl lg:text-3xl transition-all duration-500 ${activeSection === section.id ? 'text-vive-500 scale-110' : 'text-gray-400 group-hover:text-vive-500'}`}>
                                            {section.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg lg:text-2xl font-display font-medium text-gray-900 dark:text-white uppercase tracking-tight">{section.title}</h3>
                                            <div className={`overflow-hidden transition-all duration-700 ${activeSection === section.id ? 'max-h-24 opacity-100 mt-2 sm:mt-4' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-[10px] lg:text-sm text-gray-500 dark:text-gray-400 font-text font-medium uppercase tracking-[0.1em] leading-relaxed">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="pt-10 mt-10 border-t border-gray-100 dark:border-white/5">
                            <div className="p-8 lg:p-10 bg-vive-600 masterclass-rounded shadow-2xl shadow-vive-500/20 text-white relative overflow-hidden group w-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 masterclass-rounded-full -translate-x-5 -translate-y-5 lg:-translate-x-10 lg:-translate-y-10 group-hover:scale-150 transition-transform duration-1000"></div>
                                <h4 className="font-display text-xl sm:text-2xl mb-4 relative z-10 leading-tight">¿Cuál es su índice <br /> de confort?</h4>
                                <p className="text-xs sm:text-sm opacity-90 mb-6 lg:mb-8 relative z-10 font-text leading-relaxed">Evaluación biomecánica técnica en menos de 2 minutos.</p>
                                <button
                                    onClick={() => navigate(ROUTES.SLEEP_TEST)}
                                    className="w-full py-4 lg:py-5 bg-white text-vive-600 font-black text-[10px] lg:text-[11px] uppercase tracking-[0.2em] masterclass-rounded hover:shadow-2xl transition-all duration-500"
                                >
                                    Iniciar Test de Sueño →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Immersive Detail Display */}
                    <div className="lg:col-span-7 bg-white dark:bg-black w-full min-w-0">
                        <div className="relative min-h-[400px] transition-all duration-700 w-full overflow-hidden">

                            {/* BIOMECHANICS INFOGRAPHIC */}
                            {activeSection === 'posture' && (
                                <div className="space-y-12 lg:space-y-24 animate-in fade-in slide-in-from-right-10 duration-1000 w-full">
                                    <div className="relative w-full bg-gray-50 dark:bg-white/[0.02] masterclass-rounded overflow-hidden border border-gray-100 dark:border-white/5">
                                        <img src={biomechanicalImg} className="w-full h-auto object-contain" alt="Biomecánica del Sueño" />

                                        <div className="absolute inset-0 pointer-events-none">
                                            <div className="absolute top-[20%] left-[15%] flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-vive-500 animate-ping"></div>
                                                <div className="bg-black/90 backdrop-blur-md px-2 py-0.5 text-[6px] font-mono text-white uppercase tracking-widest border border-white/10">Sincronización Cervical</div>
                                            </div>
                                            <div className="absolute top-[50%] left-[45%] flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-vive-500 animate-ping"></div>
                                                <div className="bg-black/90 backdrop-blur-md px-2 py-0.5 text-[6px] font-mono text-white uppercase tracking-widest border border-white/10">Neutralidad de Columna</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-10 lg:space-y-16 w-full">
                                        <div className="flex items-center gap-4">
                                            <span className="h-px w-12 bg-vive-500"></span>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-vive-500">Manual de Bio-Alineación</h4>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full">
                                            <div className="space-y-4 p-6 lg:p-10 border border-gray-100 dark:border-white/5 masterclass-rounded hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-500 group">
                                                <div className="w-10 h-10 rounded-full bg-vive-500/10 flex items-center justify-center text-vive-500 group-hover:bg-vive-500 group-hover:text-white transition-all duration-500">
                                                    <FaCheckCircle className="text-lg" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h5 className="text-lg lg:text-2xl font-display text-gray-950 dark:text-white uppercase tracking-tighter">Neutralidad Ósea</h5>
                                                    <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400 font-text leading-relaxed">
                                                        Mantenga la columna en posición neutral. Si duerme de lado, use una almahada para equilibrar las caderas.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-4 p-6 lg:p-10 border border-gray-100 dark:border-white/5 masterclass-rounded hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-500 group">
                                                <div className="w-10 h-10 rounded-full bg-vive-500/10 flex items-center justify-center text-vive-500 group-hover:bg-vive-500 group-hover:text-white transition-all duration-500">
                                                    <FaCheckCircle className="text-lg" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h5 className="text-lg lg:text-2xl font-display text-gray-950 dark:text-white uppercase tracking-tighter">Apoyo Cervical</h5>
                                                    <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400 font-text leading-relaxed">
                                                        Garantice el apoyo sellando el espacio oreja-hombro con una superficie de resiliencia adaptativa.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2 space-y-6 p-8 lg:p-14 border border-orange-500/20 bg-orange-500/5 masterclass-rounded relative overflow-hidden w-full">
                                                <div className="flex items-center gap-4 text-orange-600 dark:text-orange-500">
                                                    <FaExclamationCircle className="text-2xl lg:text-3xl" />
                                                    <h5 className="text-xl lg:text-3xl font-display uppercase tracking-tighter">Anomalía: Posición Prona</h5>
                                                </div>
                                                <p className="text-sm lg:text-lg text-gray-700 dark:text-gray-300 font-text leading-relaxed">
                                                    Evite dormir boca abajo. Provoca <span className="text-orange-600 dark:text-orange-400 font-bold">estrés neuro-muscular</span> y micro-traumas que degradan la recuperación celular nocturna.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ENVIRONMENT SECTION */}
                            {activeSection === 'environment' && (
                                <div className="space-y-12 lg:space-y-24 animate-in fade-in slide-in-from-right-10 duration-1000 w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Temperature Visual — CSS-based, no external image */}
                                        <div className="h-[300px] lg:h-[400px] masterclass-rounded flex flex-col items-center justify-center overflow-hidden group border border-blue-500/20 relative bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15)_0%,transparent_70%)]"></div>
                                            <LuSnowflake className="text-6xl lg:text-8xl text-blue-400/30 group-hover:text-blue-400/60 transition-all duration-1000 group-hover:rotate-90" />
                                            <div className="mt-6 text-center relative z-10">
                                                <div className="text-5xl lg:text-7xl font-display font-light text-white tracking-tighter">18°C</div>
                                                <div className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-[0.4em] mt-2">Temperatura Ideal</div>
                                            </div>
                                        </div>
                                        {/* Humidity Card */}
                                        <div className="h-[300px] lg:h-[400px] bg-[#0a0a0a] masterclass-rounded flex flex-col items-center justify-center p-8 gap-6 text-center border border-white/5">
                                            <FaThermometerHalf className="text-4xl text-blue-500" />
                                            <span className="text-white text-2xl lg:text-3xl font-display uppercase tracking-tighter">Higiene Térmica</span>
                                            <p className="text-[10px] text-blue-400/60 uppercase tracking-[0.3em] font-mono">Humedad: 45% - 55% [Óptimo]</p>
                                        </div>
                                    </div>

                                    <div className="space-y-10 lg:space-y-16 w-full">
                                        <h4 className="text-4xl lg:text-8xl font-display text-gray-950 dark:text-white leading-[0.85] tracking-tighter">El Factor <span className="text-blue-500 italic serif font-medium">Criónico</span></h4>
                                        <p className="text-lg lg:text-3xl text-gray-500 dark:text-gray-400 font-text leading-tight tracking-tight">
                                            La micro-ventilación es ingeniería de flujo. Usamos grafito bidireccional para neutralizar el calor latente.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                                            {[
                                                { label: 'Ventilación', value: '+40%', desc: 'Flujo aerodinámico constante' },
                                                { label: 'Disipación', value: 'Ultra rápido', desc: 'Tejido con grafeno inteligente' }
                                            ].map((stat, i) => (
                                                <div key={i} className="p-8 lg:p-12 border border-gray-100 dark:border-white/10 masterclass-rounded flex flex-col gap-3 hover:bg-blue-500/[0.03] transition-all duration-700 group w-full">
                                                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">{stat.label}</span>
                                                    <span className="text-3xl lg:text-6xl font-display text-gray-950 dark:text-white tracking-tighter">{stat.value}</span>
                                                    <span className="text-[10px] text-blue-500 font-mono tracking-widest uppercase">{stat.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* CARE PROTOCOLS */}
                            {activeSection === 'maintenance' && (
                                <div className="space-y-12 lg:space-y-24 animate-in fade-in slide-in-from-right-10 duration-1000 w-full">
                                    <div className="bg-gray-50 dark:bg-white/[0.03] masterclass-rounded p-8 lg:p-20 relative overflow-hidden border border-gray-100 dark:border-white/5 shadow-2xl w-full">
                                        <div className="absolute top-[-2rem] right-0 text-[10rem] font-black text-gray-950/[0.02] dark:text-white/[0.02] leading-none pointer-events-none select-none">VIVE</div>
                                        <div className="relative z-10 space-y-12 lg:space-y-24 w-full">
                                            <div className="space-y-4">
                                                <h4 className="text-3xl lg:text-7xl font-display text-gray-950 dark:text-white uppercase tracking-tighter leading-[0.9]">Protocolo <span className="text-vive-500 italic serif lowercase font-medium">vital</span></h4>
                                                <p className="text-base lg:text-2xl text-gray-500 dark:text-gray-400 font-text max-w-xl leading-snug tracking-tight">
                                                    Inversión diseñada para una década de confort estructural inalterado.
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 lg:gap-6 w-full">
                                                {[
                                                    { icon: <FaSprayCan />, title: 'Sanidad Molecular', desc: 'Aspire el núcleo cada 90 días para neutralizar la acumulación de partículas.' },
                                                    { icon: <FaSyncAlt />, title: 'Equilibrio MP', desc: 'Gire el sistema (180°) cada semestre para redistribuir la fatiga mecánica.' },
                                                    { icon: <FaBed />, title: 'Barrera Vive', desc: 'Protector transpirable obligatorio para mantener la homeostasis interna.' }
                                                ].map((step, i) => (
                                                    <div key={i} className="group flex flex-col md:flex-row gap-6 p-6 lg:p-8 items-start border border-transparent hover:border-gray-200 dark:hover:border-white/10 bg-white/50 dark:bg-black/50 transition-all duration-700 masterclass-rounded hover:shadow-2xl w-full">
                                                        <div className="w-12 h-12 masterclass-rounded bg-vive-500/10 flex items-center justify-center text-vive-500 shrink-0 group-hover:bg-vive-500 group-hover:text-white transition-all duration-700">
                                                            {step.icon}
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h5 className="font-bold text-gray-950 dark:text-white uppercase text-xs tracking-[0.2em]">{step.title}</h5>
                                                            <p className="text-xs lg:text-lg text-gray-500 dark:text-gray-400 font-text leading-relaxed">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* BLOQUE DE CERTIFICACIONES */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-8 border-t border-gray-200 dark:border-white/5">
                                                {[
                                                    { code: 'ISO 9001', label: 'Gestión de Calidad', desc: 'Certificación internacional en procesos de producción.' },
                                                    { code: 'OEKO-TEX', label: 'Seguridad Textil', desc: 'Telas libres de sustancias nocivas para la piel y la salud.' },
                                                    { code: 'Descanse · Duerma', label: 'Bienestar Total', desc: 'Fabricación orientada 100% a la reparación celular profunda.' },
                                                ].map((cert, i) => (
                                                    <div key={i} className="p-4 rounded-xl border border-vive-500/20 bg-vive-500/5 group/cert hover:bg-vive-500/10 transition-colors">
                                                        <div className="text-[10px] font-black text-vive-500 uppercase tracking-widest mb-1">{cert.code}</div>
                                                        <div className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-tighter mb-1">{cert.label}</div>
                                                        <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">{cert.desc}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-10 lg:p-20 bg-gradient-to-br from-gray-900 to-black masterclass-rounded text-white shadow-3xl flex flex-col lg:flex-row gap-12 items-center justify-between relative overflow-hidden group w-full">
                                        <div className="max-w-lg space-y-6 relative z-10">
                                            <h4 className="text-3xl lg:text-6xl font-display font-light uppercase tracking-tighter leading-[0.9]">Maximice su <br /> <span className="text-vive-500 italic serif lowercase font-medium">Inversión</span></h4>
                                            <p className="opacity-70 text-base lg:text-xl leading-relaxed font-text tracking-tight">
                                                Garantizamos que su sistema Vive mantendrá el 98% de su resiliencia original tras 3,000 ciclos.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto relative z-10">
                                            <button
                                                onClick={() => handleWhatsAppConsult('Asistencia Técnica Expertos')}
                                                className="px-8 py-5 bg-vive-500 text-black font-black text-xs uppercase tracking-[0.3em] masterclass-rounded hover:scale-105 transition-all shadow-xl shadow-vive-500/20"
                                            >
                                                Asistencia Técnica
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. MANIFESTO BAND */}
            <div className="bg-gray-950 py-32 lg:py-64 overflow-hidden relative w-full">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#299C4720_1px,transparent_1px),linear-gradient(to_bottom,#299C4720_1px,transparent_1px)] bg-[size:160px_160px]"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col items-center text-center space-y-12 lg:space-y-20 w-full">
                        <div className="w-px h-24 lg:h-32 bg-gradient-to-b from-transparent via-vive-500 to-transparent"></div>
                        <h2 className="text-[clamp(1.5rem,5vw,6rem)] font-display font-light text-white tracking-tighter leading-[1] max-w-6xl break-words w-full px-4">
                            Usted pasa un tercio de su vida durmiendo. <br />
                            <span className="text-vive-500 font-medium italic serif lowercase">Hagamos que valga la pena cada milisegundo.</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-20 items-center text-gray-500 px-4">
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em]">Vive Technology_2026</span>
                            <div className="h-px w-8 sm:w-12 lg:w-24 bg-white/10 hidden md:block"></div>
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em]">Salud y Placer Vital</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4. FINAL CTA */}
            <div id="contact-expert" className="py-24 lg:py-64 bg-white dark:bg-[#050505] relative overflow-hidden w-full">
                <div className="container mx-auto px-4 lg:px-20 relative z-10 w-full overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-32 items-end lg:items-center justify-between w-full">
                        <div className="space-y-10 lg:space-y-20 max-w-4xl w-full">
                            <div className="inline-block px-4 py-2 border border-gray-200 dark:border-white/10 masterclass-rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-vive-500 bg-vive-500/5">
                                Consultor Especialista en Descanso
                            </div>
                            <h2 className="text-[clamp(1.8rem,7vw,7.5rem)] lg:text-[clamp(2.5rem,8vw,8rem)] font-display font-medium text-gray-950 dark:text-white leading-[0.85] tracking-tighter uppercase break-words w-full">
                                Redefina su <br />
                                <span className="text-vive-500 italic serif lowercase decoration-vive-500/20 underline underline-offset-[10px] lg:underline-offset-[25px]">descanso</span> mañana —
                            </h2>
                            <p className="text-lg lg:text-4xl text-gray-500 dark:text-gray-400 font-text leading-[1.1] tracking-tight max-w-2xl">
                                Nuestros consultores biomecánicos analizan su morfología para garantizar el soporte exacto.
                            </p>
                        </div>

                        <div className="w-full lg:w-[400px] space-y-6">
                            <button
                                onClick={() => handleWhatsAppConsult('Agendar Asesoría Final')}
                                className="w-full group relative py-8 lg:py-12 bg-black dark:bg-white text-white dark:text-black masterclass-rounded-full font-black text-xs lg:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.3em] overflow-hidden transition-all hover:shadow-4xl"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Agendar Asesoría
                                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-vive-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                            </button>
                            <div className="flex justify-between items-center px-4">
                                <span className="text-[8px] text-gray-400 uppercase tracking-widest font-black">Respuesta</span>
                                <span className="text-[8px] text-vive-500 uppercase tracking-widest font-black">Menos de 120 minutos</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RestMasterclass;
