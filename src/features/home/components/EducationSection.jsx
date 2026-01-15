import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '@/components/common/Image';

const guideItems = [
    {
        id: 1,
        title: "Cómo elegir tu colchón ideal",
        desc: "Firmeza, material y tamaño. Todo lo que debes saber antes de decidir.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
        cta: "Leer Guía",
        tag: "Experiencia"
    },
    {
        id: 3,
        title: "¿Qué tamaño es para ti?",
        desc: "Desde Plaza y Media hasta King Size. Encuentra el ajuste perfecto.",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
        cta: "Ver Dimensiones",
        tag: "Guía Pro"
    }
];

const EducationSection = () => {
    return (
        <section className="py-32 bg-white dark:bg-black transition-colors duration-700 relative overflow-hidden" id="education">
            {/* Background Accent */}
            <div className="absolute inset-0 dream-noise opacity-50 dark:opacity-20" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-50/30 dark:bg-gold-900/5 -skew-x-12 transform origin-top translate-x-1/2" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-gold-500" />
                            <span className="text-gold-500 text-xs font-black tracking-[0.5em] uppercase">
                                Guía de Descanso
                            </span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-display font-black text-gray-900 dark:text-white leading-[0.9] uppercase tracking-tighter">
                            Inspiración <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                                & Educación
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm border-l-2 border-gold-200 dark:border-gold-800/30 pl-6 py-2">
                        Nuestro compromiso va más allá de la venta. Queremos que tomes la decisión más inteligente para tus próximos 10 años.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {guideItems.map((item, idx) => (
                        <div key={idx} className="group relative h-[500px] lg:h-[600px] overflow-hidden rounded-[3rem] bg-gray-100 dark:bg-zinc-900 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Image Container */}
                            <div className="absolute inset-0">
                                <LazyImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                {/* Dynamic Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Floating Tag */}
                            <div className="absolute top-8 right-8 z-20">
                                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-end z-20">
                                <h3 className="text-3xl lg:text-5xl font-display font-black text-white uppercase tracking-tight mb-6 leading-none">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-lg font-normal mb-8 max-w-md leading-relaxed hidden sm:block">
                                    {item.desc}
                                </p>

                                <Link
                                    to={`/blog/${item.id}`}
                                    className="group/btn relative w-fit flex items-center gap-4 text-white font-display font-black text-[11px] uppercase tracking-[0.25em] transition-all"
                                >
                                    <span className="relative z-10">{item.cta}</span>
                                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gold-500 transition-all duration-300 group-hover/btn:w-40 group-hover/btn:gap-3 overflow-hidden">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover/btn:w-full" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
