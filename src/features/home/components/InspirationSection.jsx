import React from 'react';

const environments = [
    {
        title: "Suites Master",
        category: "Confort Absoluto",
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Espacios Reales",
        category: "Elegancia Pura",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Kid's Dreams",
        category: "Diversión y Descanso",
        image: "https://images.unsplash.com/photo-1519974310459-6a573188d797?auto=format&fit=crop&q=80&w=800",
    }
];

const InspirationSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-gold-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block">
                            Experiencia Sueño Dorado
                        </span>
                        <h2 className="text-4xl md:text-5xl font-brand font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">
                            Explora e <span className="text-gold-500">Inspirate</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg font-medium leading-relaxed">
                            Diseñamos más que colchones, creamos santuarios de descanso. Descubre cómo transformar tu habitación en un hotel de 5 estrellas.
                        </p>
                    </div>
                    <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white border-b-2 border-gold-500 pb-2 hover:gap-6 transition-all">
                        Ver Galería Completa
                        <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {environments.map((env, idx) => (
                        <div key={idx} className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                            <img
                                src={env.image}
                                alt={env.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-gold-500 text-[10px] font-black tracking-[0.3em] uppercase mb-2">
                                    {env.category}
                                </span>
                                <h3 className="text-white text-2xl font-brand font-black uppercase tracking-tight mb-4">
                                    {env.title}
                                </h3>
                                <div className="w-0 group-hover:w-16 h-1 bg-gold-500 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InspirationSection;
