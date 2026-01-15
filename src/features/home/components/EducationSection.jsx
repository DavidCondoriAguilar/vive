import React from 'react';

const guideItems = [
    {
        title: "Cómo elegir tu colchón ideal",
        desc: "Firmeza, material y tamaño. Todo lo que debes saber antes de decidir.",
        image: "https://images.unsplash.com/photo-1519974310459-6a573188d797?auto=format&fit=crop&q=80&w=800",
        cta: "Leer Guía"
    },
    {
        title: "¿Qué tamaño es para ti?",
        desc: "Desde Plaza y Media hasta King Size. Encuentra el ajuste perfecto.",
        image: "https://images.unsplash.com/photo-1621510456681-23a0164e96bb?auto=format&fit=crop&q=80&w=800",
        cta: "Ver Dimensiones"
    }
];

const EducationSection = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#050505] transition-colors duration-700" id="education">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="max-w-xl mb-16">
                    <span className="text-gray-400 text-xs font-black tracking-[0.4em] uppercase mb-4 block">
                        Guía de Descanso
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-white leading-[1.1] uppercase tracking-tighter">
                        Inspiración <br />
                        <span className="text-gold-500">& Educación</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {guideItems.map((item, idx) => (
                        <div key={idx} className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 shadow-xl shadow-black/5">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-80 dark:opacity-40 transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-white dark:from-black via-transparent to-transparent">
                                <h3 className="text-2xl lg:text-3xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-8 max-w-sm">
                                    {item.desc}
                                </p>
                                <button className="w-fit px-8 py-3 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                                    {item.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
