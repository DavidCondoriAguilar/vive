import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaShieldAlt, FaCheckCircle, FaExclamationCircle, FaArrowRight, FaMobileAlt, FaShower, FaCloudSun, FaTemperatureLow } from 'react-icons/fa';
import { LuBrainCircuit, LuWind, LuLayers, LuBookOpen } from 'react-icons/lu';
import heroImg from '@/assets/images/generated/mayorista-first-section.webp';
import biomechanicalImg from '@/assets/images/generated/body-anatomy-info.webp';
import { getWhatsAppLink } from '@core/utils/constants';
import { ROUTES } from '@/router/routes';

const RestMasterclass = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('posture');

    const sections = [
        {
            id: 'posture',
            title: 'Bio-Alineación',
            subtitle: 'Posicionamiento biomecánico',
            icon: <LuLayers />,
            color: 'from-vive-500 to-emerald-500',
            bgGradient: 'from-vive-500/10 to-emerald-500/5'
        },
        {
            id: 'environment',
            title: 'Clima Perfecto',
            subtitle: 'Temperatura + Aire = Mejor sueño',
            icon: <LuWind />,
            color: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-500/10 to-cyan-500/5'
        },
        {
            id: 'maintenance',
            title: 'Higiene del Sueño',
            subtitle: '7 rituales nocturnos',
            icon: <FaShieldAlt />,
            color: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-500/10 to-pink-500/5'
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleWhatsAppConsult = (subject) => {
        const message = `Hola Vive, estoy interesado en una asesoría sobre *${subject}* de la Guía de Descanso.`;
        window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    };

    // Scroll-based section detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id.replace('section-', ''));
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
        );

        sections.forEach((section) => {
            const element = document.getElementById(`section-${section.id}`);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-white dark:bg-[#050505] transition-colors duration-700 min-h-screen relative overflow-x-hidden w-full box-border">
            <style dangerouslySetInnerHTML={{
                __html: `
                .masterclass-rounded { border-radius: 2.5rem !important; }
                .masterclass-rounded-full { border-radius: 9999px !important; }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}} />

            {/* 1. HERO - MINIMALIST */}
            <div className="relative w-full bg-gradient-to-br from-[#050505] via-[#0a0f0a] to-[#050505] pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full mb-8">
                            <span className="h-2 w-2 rounded-full bg-vive-500 animate-pulse"></span>
                            <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-vive-400">Método Vive® 2026</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold text-white leading-tight mb-6">
                            Domina el arte del <span className="text-vive-500 italic font-serif">Sueño Profundo</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Transforma <span className="text-white font-medium">6 horas de sueño en 8 horas de recuperación real</span>. Sin pastillas. Solo ciencia aplicada.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button
                                onClick={() => handleWhatsAppConsult('Asesoría Especializada')}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-vive-500 to-emerald-500 text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-vive-500/25"
                            >
                                Auditoría Gratuita →
                            </button>
                            <button
                                onClick={() => navigate(ROUTES.SLEEP_TEST)}
                                className="w-full sm:w-auto px-8 py-4 bg-white/[0.05] text-white border border-white/20 font-bold rounded-full hover:bg-white/[0.08] transition-all"
                            >
                                Test de 2 minutos
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
                            <span>+2,400 personas lo usan</span>
                            <div className="w-px h-4 bg-gray-700"></div>
                            <span className="text-vive-400">Resultados en 7 días</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. METODOLOGÍA VIVE - SCROLL SECTIONS */}
            <div id="exploration-section" className="py-16 lg:py-24 container mx-auto px-4 lg:px-12">
                
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-vive-500 mb-4">Metodología Vive</h2>
                    <p className="text-3xl sm:text-4xl lg:text-6xl font-display text-gray-900 dark:text-white leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                        Optimice cada ciclo de su <span className="text-vive-500 italic font-serif">descanso celular</span>
                    </p>
                </div>

                {/* Mobile - Horizontal Sticky Nav */}
                <div className="lg:hidden sticky top-20 z-30 mb-12 -mx-4 px-4 overflow-x-auto scrollbar-hide pb-4">
                    <div className="flex gap-3 min-w-max">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`flex items-center gap-2 py-3 px-5 rounded-full whitespace-nowrap transition-all duration-500 border-2 ${
                                    activeSection === section.id
                                        ? `bg-gradient-to-r ${section.color} border-transparent text-white shadow-lg scale-105`
                                        : 'bg-white dark:bg-black border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400'
                                }`}
                            >
                                <span className="text-lg">{section.icon}</span>
                                <span className="font-bold text-sm uppercase tracking-wider">{section.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Desktop - Sticky Side Navigation */}
                    <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32 z-20">
                        <div className="space-y-2">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                                        activeSection === section.id
                                            ? `bg-gradient-to-r ${section.bgGradient} border border-vive-500/30`
                                            : 'hover:bg-gray-50 dark:hover:bg-white/5'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                                            activeSection === section.id
                                                ? `bg-gradient-to-r ${section.color} text-white`
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-400'
                                        }`}>
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{section.title}</h3>
                                            <p className="text-xs text-gray-500">{section.subtitle}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* CTA Card - Desktop */}
                        <div className="mt-6 p-5 bg-vive-600 rounded-xl text-white">
                            <h4 className="font-semibold mb-2 text-sm">¿Su índice de confort?</h4>
                            <p className="text-xs opacity-90 mb-3">Evaluación en 2 minutos.</p>
                            <button
                                onClick={() => navigate(ROUTES.SLEEP_TEST)}
                                className="w-full py-3 bg-white text-vive-600 font-bold text-xs rounded-full hover:scale-105 transition-all"
                            >
                                Iniciar Test →
                            </button>
                        </div>
                    </div>

                    {/* Content Area - All Sections Visible */}
                    <div className="lg:col-span-8 space-y-24 lg:space-y-32">

                    {/* SECTION 1: BIO-ALINEACIÓN - MINIMALIST */}
                    <div id="section-posture" className="scroll-mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="relative">
                                <img src={biomechanicalImg} className="w-full h-auto rounded-2xl" alt="Biomecánica" />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">Bio-Alineación</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Tu columna alineada = recuperación celular óptima.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex gap-3 items-center">
                                        <FaCheckCircle className="text-vive-500 text-sm" />
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Columna en posición neutral</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <FaCheckCircle className="text-vive-500 text-sm" />
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Apoyo cervical adecuado</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                                    <p className="text-xs text-orange-500 flex items-center gap-2">
                                        <FaExclamationCircle /> Evite dormir boca abajo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: CLIMA PERFECTO - MINIMALIST */}
                    <div id="section-environment" className="scroll-mt-32">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">Clima Perfecto</h3>
                            <p className="text-gray-600 dark:text-gray-400">18-22°C = 3x más sueño profundo</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-white/5">
                                <div className="text-4xl font-bold text-blue-500 mb-2">3x</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Sueño profundo</div>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-white/5">
                                <div className="text-4xl font-bold text-blue-500 mb-2">-60%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Conciliación</div>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-white/5">
                                <div className="text-4xl font-bold text-blue-500 mb-2">-75%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Despertares</div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: HIGIENE DEL SUEÑO - MINIMALIST */}
                    <div id="section-maintenance" className="scroll-mt-32">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">7 Rituales Nocturnos</h3>
                            <p className="text-gray-600 dark:text-gray-400">Hábitos simples, resultados reales</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { icon: <FaMobileAlt />, title: 'Sin pantallas', desc: '90 min antes' },
                                { icon: <FaShower />, title: 'Ducha tibia', desc: 'Antes de dormir' },
                                { icon: <FaCloudSun />, title: 'Infusión', desc: 'Manzanilla + magnesio' },
                                { icon: <LuBookOpen />, title: 'Lectura', desc: '15 min libro físico' },
                                { icon: <LuBrainCircuit />, title: 'Respiración', desc: 'Método 4-7-8' },
                                { icon: <FaTemperatureLow />, title: 'Temperatura', desc: '18-22°C' },
                                { icon: <FaClock />, title: 'Hora fija', desc: 'Todos los días' }
                            ].map((ritual, i) => (
                                <div key={i} className="p-5 rounded-xl border border-gray-100 dark:border-white/10 hover:border-vive-500/30 transition-all">
                                    <div className="text-xl text-vive-500 mb-2">{ritual.icon}</div>
                                    <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{ritual.title}</div>
                                    <div className="text-xs text-gray-500">{ritual.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Final */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-vive-600 to-emerald-600 rounded-2xl text-white text-center">
                            <h4 className="text-2xl font-bold mb-2">Desafío 7 Noches</h4>
                            <p className="text-sm opacity-90 mb-6">Si no duermes mejor, te devolvemos tu dinero</p>
                            <button onClick={() => handleWhatsAppConsult('Desafío 7 Noches')} className="px-8 py-4 bg-white text-vive-600 font-bold text-sm rounded-full hover:scale-105 transition-all">
                                ¡Acepto el desafío! →
                            </button>
                        </div>

                        {/* Mobile CTA Card */}
                        <div className="lg:hidden mt-12 p-6 bg-vive-600 rounded-2xl shadow-2xl shadow-vive-500/20 text-white">
                            <h4 className="font-display text-lg mb-2">¿Cuál es su índice de confort?</h4>
                            <p className="text-xs opacity-90 mb-4">Evaluación biomecánica en 2 minutos.</p>
                            <button
                                onClick={() => navigate(ROUTES.SLEEP_TEST)}
                                className="w-full py-4 bg-white text-vive-600 font-black text-[10px] uppercase tracking-[0.2em] rounded-full"
                            >
                                Iniciar Test de Sueño →
                            </button>
                        </div>
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
