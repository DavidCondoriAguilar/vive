import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineBed, MdOutlineWeekend, MdOutlineHouse, MdOutlineInventory } from 'react-icons/md';

const categories = [
    {
        id: 'colchones',
        title: 'Colchones',
        subtitle: '15 Modelos',
        desc: 'Soporte ortopédico y confort premium.',
        icon: MdOutlineBed,
        href: '/categorias/colchones'
    },
    {
        id: 'camas',
        title: 'Camas',
        subtitle: '8 Bases',
        desc: 'Estructuras sólidas de madera selecta.',
        icon: MdOutlineWeekend,
        href: '/categorias/camas'
    },
    {
        id: 'dormitorios',
        title: 'Dormitorios',
        subtitle: '4 Sets',
        desc: 'Ambientes completos para tu descanso.',
        icon: MdOutlineHouse,
        href: '/categorias/dormitorios'
    },
    {
        id: 'accesorios',
        title: 'Accesorios',
        subtitle: '12 Items',
        desc: 'Almohadas y protectores de alta gama.',
        icon: MdOutlineInventory,
        href: '/categorias/accesorios'
    }
];

const CategorySection = () => {
    return (
        <section className="relative py-24 bg-white dark:bg-black transition-colors duration-700 overflow-hidden" id="categories">
            {/* 2026 Background Elements */}
            <div className="absolute inset-0 dream-dots opacity-20 dark:opacity-10" />
            <div className="absolute inset-0 dream-noise" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
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
                            to={cat.href}
                            className="group relative p-8 bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/5 border border-gray-100 dark:border-white/5 hover:border-gold-500/20"
                        >
                            {/* Icon */}
                            <div className="mb-6 text-4xl text-gray-300 dark:text-white/20 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-500">
                                <cat.icon />
                            </div>

                            {/* Content */}
                            <span className="text-xs font-black text-gold-500 uppercase tracking-[0.2em] mb-3 block">
                                {cat.subtitle}
                            </span>
                            <h3 className="text-xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
                                {cat.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6 leading-relaxed">
                                {cat.desc}
                            </p>

                            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white group-hover:text-gold-500 transition-colors">
                                Explorar
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Special Offer Card */}
                <div className="mt-16">
                    <Link
                        to="/ofertas"
                        className="group relative w-full p-12 bg-gradient-to-r from-gold-500/10 to-gold-500/5 dark:from-gold-500/20 dark:to-gold-500/10 rounded-[2rem] border border-gold-500/20 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/10 hover:border-gold-500/30"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-3 block">
                                    Ofertas Especiales
                                </span>
                                <h3 className="text-3xl lg:text-5xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2">
                                    LANZAMIENTOS & <span className="text-gold-500">OFERTAS</span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                                    Descuentos de fábrica hasta <span className="text-gold-500 font-black">-40%</span>
                                </p>
                            </div>
                            <div className="text-gold-500/20 group-hover:text-gold-500/40 transition-colors duration-500">
                                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="m15 9-6 6"/>
                                    <path d="m9 9 6 6"/>
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
