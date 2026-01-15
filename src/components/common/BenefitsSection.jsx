import React from 'react';

const benefits = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: "Envíos rápidos",
        desc: "Seguridad en cada entrega"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Compra 100% Segura",
        desc: "Protección total de tus datos"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.012 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.012 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.012 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 001.012 1.946 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.012 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946 1.012 3.42 3.42 0 010-4.438 3.42 3.42 0 001.012-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00-1.012-1.946 3.42 3.42 0 014.438 0z" />
            </svg>
        ),
        title: "Garantía de Fábrica",
        desc: "Respaldo directo de marca"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
        title: "Atención Rápida",
        desc: "Soporte personalizado 24/7"
    }
];

const BenefitsSection = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-white/5">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gold-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white shadow-lg shadow-gold-500/5">
                                {benefit.icon}
                            </div>
                            <h3 className="text-sm font-display font-black uppercase tracking-widest mb-2 text-gray-900 dark:text-white">
                                {benefit.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
