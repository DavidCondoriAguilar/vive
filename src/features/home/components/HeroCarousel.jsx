import React, { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/utils/constants';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "El Descanso que Mereces",
            subtitle: "Tecnología de vanguardia para noches perfectas.",
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1920",
            label: "Nueva Colección 2026"
        },
        {
            id: 2,
            title: "Delivery Gratis en Lima",
            subtitle: "Entregamos tu sueños en la puerta de tu hogar.",
            image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920",
            label: "Logística Premium"
        },
        {
            id: 3,
            title: "Cuotas Sin Intereses",
            subtitle: "Paga tu comodidad poco a poco con tus tarjetas favoritas.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920",
            label: "Medios de Pago"
        }
    ];

    const waLink = getWhatsAppLink("Hola Sueño Dorado, vengo de la web y me gustaría recibir asesoría personalizada para elegir mi colchón ideal.");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full h-[85vh] overflow-hidden bg-black group transition-all duration-700 pt-20">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover select-none"
                    />

                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 z-10 flex items-center">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className={`max-w-2xl transition-all duration-1000 delay-300 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                                <span className="text-gold-500 font-display text-sm lg:text-lg tracking-[0.5em] uppercase mb-8 block font-black drop-shadow-lg flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-gold-500 inline-block"></span>
                                    {slide.label}
                                </span>

                                <h2 className="text-[3rem] lg:text-[5.5rem] xl:text-[6.5rem] font-display font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)] lg:[-webkit-text-stroke:2px_rgba(255,255,255,0.8)] hover:text-white/10 transition-all duration-700 leading-[0.9] mb-6 lg:mb-8 tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-300 text-base lg:text-xl font-medium leading-relaxed mb-8 lg:mb-10 max-w-lg border-l-2 border-gold-500/50 pl-6 backdrop-blur-sm bg-black/10 rounded-r-xl py-2">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <a
                                        href="#catalog"
                                        className="group/btn w-full sm:w-auto px-12 py-5 bg-gold-500 text-white font-display font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gold-600 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.5)] text-center relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Explorar Ahora</span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                    </a>
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-display font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-3 group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse group-hover:scale-150 transition-transform"></div>
                                        Asesoría Personalizada
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 ${currentSlide === index
                            ? 'w-12 h-1.5 bg-gold-500'
                            : 'w-2 h-1.5 bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Side Progress Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gold-500 z-40 transition-all duration-[8000ms] ease-linear" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
        </section>
    );
};

export default HeroCarousel;
