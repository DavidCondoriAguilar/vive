import React, { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/utils/constants';
import { FaArrowUp } from 'react-icons/fa';
import ConocenosSection from '@/components/common/ConocenosSection';

const Hero = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const waLink = getWhatsAppLink("Hola Sueño Dorado, deseo recibir asesoría para mejorar mi descanso.");

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-black transition-colors duration-700">
                {/* Subtle Gradient Background */}
                <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-gold-50/30 dark:from-gold-900/10 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Content Area */}
                        <div className="max-w-xl animate-fade-in-up">
                            <span className="text-gold-500 font-display text-sm lg:text-base tracking-[0.4em] uppercase mb-6 block font-bold">
                                Descanso Real, Sueño Profundo
                            </span>
                            <h1 className="text-[2.8rem] lg:text-[5rem] font-display font-black text-gray-900 dark:text-white leading-[1] mb-8 tracking-tighter uppercase">
                                EL PLACER DE <br />
                                <span className="text-gold-500">DORMIR BIEN</span>
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed mb-12">
                                Transformamos tu descanso con tecnología de vanguardia y fabricación nacional. Porque un gran día comienza con la mejor noche.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <a
                                    href="#catalog"
                                    className="w-full sm:w-auto px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 text-center"
                                >
                                    Ver Colchones
                                </a>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-12 py-5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-display font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                                >
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Asesoría Personalizada
                                </a>
                            </div>
                        </div>

                        {/* Image Area - Focus on Calmness */}
                        <div className="relative group perspective-1000 hidden lg:block">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-y-3">
                                <img
                                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200"
                                    alt="Dormitorio Sueño Dorado"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                                {/* Overlay for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
                            <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 flex flex-col gap-4">
                                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white animate-fade-in-up">
                                    <p className="text-[10px] uppercase tracking-widest font-black mb-1">Tecnología</p>
                                    <p className="text-sm font-bold">Resortes Pocket</p>
                                </div>
                                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white animate-fade-in-up [animation-delay:200ms]">
                                    <p className="text-[10px] uppercase tracking-widest font-black mb-1">Calidad</p>
                                    <p className="text-sm font-bold">Fábrica Peruana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONÓCENOS Section */}
            <ConocenosSection />

            {/* Floating Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gold-500 hover:bg-gold-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                    }`}
                aria-label="Volver al inicio"
            >
                <FaArrowUp className="w-6 h-6 transition-transform group-hover:scale-110" />
            </button>
        </>
    );
};

export default Hero;
