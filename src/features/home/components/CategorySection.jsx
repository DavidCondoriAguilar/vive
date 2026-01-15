import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'colchones',
        title: 'Colchones',
        models: '15 Modelos',
        desc: 'Soporte ortopédico y confort premium.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18m-9-4v4m-7 0a3 3 0 01-3-3V7a3 3 0 013-3h14a3 3 0 013 3v4a3 3 0 01-3 3m-14 0h14" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
        color: 'from-blue-500/10 to-transparent'
    },
    {
        id: 'camas',
        title: 'Camas',
        models: '8 Bases',
        desc: 'Estructuras sólidas de madera selecta.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18M3 8h18m-9-4v4m-7 0a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3m-14 0h14" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
        color: 'from-amber-500/10 to-transparent'
    },
    {
        id: 'dormitorios',
        title: 'Dormitorios',
        models: '4 Sets',
        desc: 'Ambientes completos para tu descanso.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800',
        color: 'from-zinc-500/10 to-transparent'
    },
    {
        id: 'accesorios',
        title: 'Accesorios',
        models: '12 Items',
        desc: 'Almohadas y protectores de alta gama.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1629949009765-40f745a55111?auto=format&fit=crop&q=80&w=800',
        color: 'from-slate-500/10 to-transparent'
    }
];

const CategorySection = () => {
    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-700" id="categories">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="max-w-xl mb-20">
                    <span className="text-gold-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block animate-fade-in">
                        Excelencia en Fabricación
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-display font-black text-gray-900 dark:text-white leading-[1.1] uppercase tracking-tighter">
                        NUESTRA <span className="text-gold-500">COLECCIÓN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/categorias/${cat.id}`}
                            className="group relative h-[500px] bg-gray-50 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-black/10 border border-gray-100 dark:border-white/5"
                        >
                            {/* Decorative Icon Background */}
                            <div className="absolute top-10 right-10 text-gray-200 dark:text-white/5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                                {cat.icon}
                            </div>

                            {/* Image with overlay */}
                            <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`}></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-10 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5 transition-colors duration-700 group-hover:bg-gray-50 dark:group-hover:bg-zinc-800">
                                <span className="text-[10px] font-black text-gold-500 uppercase tracking-[0.2em] mb-2 block">
                                    {cat.models}
                                </span>
                                <h3 className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
                                    {cat.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-8 leading-relaxed">
                                    {cat.desc}
                                </p>

                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white group-hover:gap-6 transition-all">
                                    Explorar Selección
                                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Special Offer Card */}
                <div className="mt-8">
                    <Link
                        to="/ofertas"
                        className="group relative w-full h-[200px] bg-red-600 rounded-[2.5rem] overflow-hidden flex items-center px-12 transition-all duration-700 hover:scale-[1.01] shadow-xl shadow-red-600/20"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-5xl font-display font-black text-white uppercase tracking-tighter mb-2">
                                LANZAMIENTOS & <span className="text-red-200">OFERTAS</span>
                            </h3>
                            <p className="text-red-100 text-sm font-medium uppercase tracking-widest">
                                Descuentos de fábrica hasta -40%
                            </p>
                        </div>
                        <div className="absolute right-12 text-white/10 group-hover:text-white/20 transform group-hover:translate-x-4 transition-all duration-700">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
