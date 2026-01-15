import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "El Descanso que Mereces",
            subtitle: "Tecnología de vanguardia para noches perfectas.",
            image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=1920",
            label: "Nueva Colección 2026"
        },
        {
            id: 2,
            title: "Delivery Gratis en Lima",
            subtitle: "Entregamos tu sueños en la puerta de tu hogar.",
            image: "https://images.unsplash.com/photo-1586528116311-ad86d7c71798?auto=format&fit=crop&q=80&w=1920",
            label: "Logística Premium"
        },
        {
            id: 3,
            title: "Cuotas Sin Intereses",
            subtitle: "Paga tu comodidad poco a poco con tus tarjetas favoritas.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1920",
            label: "Medios de Pago"
        }
    ];

    const waMessage = encodeURIComponent("Hola Sueño Dorado, vengo de la web y me gustaría recibir asesoría personalizada para elegir mi colchón ideal.");
    const waLink = `https://wa.me/51989223448?text=${waMessage}`;

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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 z-10 flex items-center">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className={`max-w-2xl transition-all duration-700 delay-300 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <span className="text-gold-500 font-display text-sm lg:text-base tracking-[0.4em] uppercase mb-6 block font-black">
                                    {slide.label}
                                </span>
                                <h2 className="text-[3rem] lg:text-[5.5rem] font-display font-black text-white leading-[1] mb-8 tracking-tighter uppercase">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed mb-12">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <a
                                        href="#catalog"
                                        className="w-full sm:w-auto px-12 py-5 bg-white text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-2xl text-center"
                                    >
                                        Explorar Ahora
                                    </a>
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-display font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-3"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        WhatsApp Asesoría
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
