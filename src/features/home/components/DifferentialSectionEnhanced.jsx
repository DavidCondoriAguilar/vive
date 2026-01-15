import React, { useState, useRef, useEffect } from 'react';
import LazyImage from '@/components/common/Image';

const DifferentialSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Materiales Nobles",
            description: "Espumas de alta densidad y resortes pocket con certificación internacional ISO 9001",
            stats: "100% Premium"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: "Maestría Artesanal",
            description: "Cada costura supervisada por expertos con más de 15 años en la industria",
            stats: "15+ Años"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Hecho en Perú",
            description: "Fabricación 100% nacional con los más altos estándares de calidad",
            stats: "Orgullo Peruano"
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            ref={sectionRef}
            className="relative py-16 md:py-24 lg:py-48 overflow-hidden group"
            id="differential"
        >
            {/* Modal - Factory Tour */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsModalOpen(false)} />
                    <div className="relative bg-zinc-950 border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl animate-modal-up">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-8 right-8 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                            {/* Visual Side */}
                            <div className="relative h-64 lg:h-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover"
                                    alt="Nuestra Planta"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent hidden lg:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden" />

                                <div className="absolute bottom-8 left-8">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-gold-500 rounded-full text-white text-[10px] font-black uppercase tracking-widest animate-pulse">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        Tour En Vivo
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-12 lg:p-16 flex flex-col justify-center gap-8 overflow-y-auto">
                                <div className="space-y-4">
                                    <h3 className="text-3xl lg:text-5xl font-display font-black text-white uppercase leading-none">
                                        Vive la Experiencia <br />
                                        <span className="text-gold-500">Sueño Dorado</span>
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Descubre los secretos detrás de tu descanso. Te invitamos a conocer nuestra planta en Puente Piedra, donde la ingeniería y la artesanía se unen.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-gold-500 font-black text-xl mb-1">99.9%</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Pureza de Material</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-gold-500 font-black text-xl mb-1">Cert. ISO</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Calidad Global</div>
                                    </div>
                                </div>

                                <div className="pt-6 space-y-4">
                                    <a
                                        href="https://wa.me/51989223448?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20a%20su%20planta."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 bg-gold-500 hover:bg-gold-600 text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02]"
                                    >
                                        Agendar Visita por WhatsApp
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </a>
                                    <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                                        Visitas presenciales de Lunes a Sábado de 9:00 AM a 5:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1600")`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 z-[1]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                    {/* Header - Centered */}
                    <div className={`space-y-8 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 lg:w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                            <span className="text-gold-500 text-sm lg:text-base font-black tracking-[0.5em] uppercase block">
                                Nuestra Filosofía
                            </span>
                            <div className="w-12 lg:w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-8xl font-display font-black text-white leading-tight uppercase tracking-tighter">
                            Diseñados para <br />
                            <span className="text-gold-500 relative inline-block">
                                Descansar
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-pulse-slow"></div>
                            </span>, <br />
                            no solo para vender.
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                            En Sueño Dorado no fabricamos volúmenes infinitos, creamos
                            <span className="text-gold-400 font-bold"> piezas de descanso </span>
                            pensadas en el bienestar real del cuerpo.
                        </p>
                    </div>

                    {/* Features Grid - Responsive Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-16 md:mb-20">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                                onClick={() => setActiveFeature(index)}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className={`h-full p-6 md:p-8 rounded-[1.5rem md:rounded-[2rem] border transition-all duration-500 backdrop-blur-md ${activeFeature === index
                                    ? 'bg-gold-500/20 border-gold-500/50 shadow-[0_20px_50px_rgba(212,175,55,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:border-gold-500/30'
                                    }`}>
                                    <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeFeature === index
                                            ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30'
                                            : 'bg-white/10 text-gold-500 group-hover:bg-white/20'
                                            }`}>
                                            {feature.icon}
                                        </div>

                                        <div className="space-y-3 md:space-y-4">
                                            <div className="flex flex-col items-center gap-2">
                                                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full transition-all duration-300 ${activeFeature === index
                                                    ? 'bg-gold-500 text-white'
                                                    : 'bg-white/10 text-gold-400'
                                                    }`}>
                                                    {feature.stats}
                                                </span>
                                                <h4 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-wider">
                                                    {feature.title}
                                                </h4>
                                            </div>
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className={`pt-6 md:pt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`} style={{ animationDelay: '0.8s' }}>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex flex-col items-center"
                        >
                            <div className="relative inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-black rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                                <span className="relative z-10 text-sm md:text-base uppercase tracking-[0.2em]">Conocer Nuestra Planta</span>
                                <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>

                            <p className="text-xs text-gold-500/80 mt-6 uppercase tracking-[0.3em] font-black">
                                Tours virtuales disponibles • Agenda tu visita
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DifferentialSection;
