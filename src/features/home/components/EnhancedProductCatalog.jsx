import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ENHANCED_CATALOG, getWhatsAppLink } from '@/utils/constants';

const EnhancedProductCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('todos');

    const products = ENHANCED_CATALOG;

    const categories = [
        { id: 'todos', name: 'Todos', count: products.length },
        { id: 'luxury', name: 'Lujo', count: products.filter(p => p.category === 'luxury').length },
        { id: 'premium', name: 'Premium', count: products.filter(p => p.category === 'premium').length },
        { id: 'classic', name: 'Clásico', count: products.filter(p => p.category === 'classic').length },
        { id: 'professional', name: 'Profesional', count: products.filter(p => p.category === 'professional').length }
    ];

    const filteredProducts = activeCategory === 'todos'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="relative py-32 bg-white dark:bg-black transition-colors duration-700 overflow-hidden" id="catalogo">
            {/* 2025 Aesthetic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
                <div className="absolute inset-0 dream-noise opacity-20 dark:opacity-10"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-gold-500"></span>
                        <span className="text-gold-500 text-xs font-black tracking-[0.5em] uppercase">Exclusividad Peruana</span>
                    </div>
                    <h2 className="text-5xl lg:text-8xl font-display font-black text-gray-900 dark:text-white leading-[0.85] uppercase tracking-tighter mb-10">
                        SUEÑO <br />
                        <span className="text-gold-500">DORADO</span> <br />
                        <span className="text-gray-200 dark:text-zinc-800 italic">CATÁLOGO</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-xl lg:text-2xl font-medium max-w-2xl leading-relaxed">
                        "Descubra la perfección en cada detalle. Diseñados por expertos, creados para sueños inolvidables."
                    </p>
                </div>

                {/* Modern Filter Interface */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-20">
                    <div className="flex flex-wrap items-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 border ${activeCategory === category.id
                                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-transparent shadow-2xl scale-105'
                                    : 'bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-gold-500/50 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <span className="flex items-center gap-3 font-display font-black text-[10px] uppercase tracking-widest relative z-10">
                                    {category.name}
                                    <span className={`text-[8px] px-2 py-0.5 rounded-full ${activeCategory === category.id
                                        ? 'bg-gold-500 text-white'
                                        : 'bg-gray-200 dark:bg-white/10 text-gray-500'
                                        }`}>
                                        {category.count}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="h-[1px] flex-grow bg-gray-100 dark:bg-white/5 hidden md:block" />

                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {filteredProducts.length} Modelos Disponibles
                    </div>
                </div>

                {/* Luxury Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col h-full animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Visual Container */}
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-50 dark:bg-zinc-900 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 border border-transparent hover:border-gold-500/20">
                                {/* Advanced 2025 Badge System */}
                                <div className="absolute top-8 left-8 z-20">
                                    <div className={`backdrop-blur-md border px-6 py-2 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-110 ${product.category === 'luxury'
                                        ? 'bg-gray-900/90 border-gold-500 text-gold-500'
                                        : product.category === 'premium'
                                            ? 'bg-blue-600/80 border-blue-400 text-white'
                                            : 'bg-white/80 dark:bg-white/20 border-white/40 text-black dark:text-white'
                                        }`}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                                        <span className="relative text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${product.category === 'luxury' ? 'bg-gold-500 animate-pulse' : 'bg-current opacity-70'
                                                }`}></span>
                                            {product.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Image */}
                                <Link to={`/producto/${product.id}`} className="absolute inset-0 flex items-center justify-center p-12">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800';
                                        }}
                                    />
                                </Link>

                                {/* Quick Info Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <span key={idx} className="text-[8px] font-black text-white/70 uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to={`/producto/${product.id}`} className="block w-full text-center py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-gold-500 hover:text-white transition-colors">
                                        Explorar Ficha Técnica
                                    </Link>
                                </div>
                            </div>

                            {/* Info Block */}
                            <div className="mt-8 px-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-2">
                                        <span className="text-gold-500 text-[9px] font-black uppercase tracking-[0.3em]">
                                            {product.category}
                                        </span>
                                        <h3 className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none group-hover:text-gold-500 transition-colors">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-gray-400 text-[9px] uppercase tracking-widest block mb-1">Inversión</span>
                                        <p className="text-2xl font-display font-black text-gray-900 dark:text-white">
                                            S/ {product.price.toLocaleString('es-PE')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span className="text-xs text-gray-400 font-medium">Desde {product.sizes[0]}</span>
                                    <a
                                        href={getWhatsAppLink(`Hola Sueño Dorado, me apasiona el modelo ${product.name}. Deseo recibir atención para mi compra.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-green-500 font-black text-[10px] uppercase tracking-widest hover:text-green-600 transition-colors"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Asesoría Vía Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA / Contact Group */}
                <div className="mt-40 relative group">
                    <div className="absolute inset-0 bg-gold-500 rounded-[4rem] rotate-1 scale-[1.02] opacity-10 group-hover:rotate-0 transition-transform duration-700"></div>
                    <div className="relative bg-zinc-950 rounded-[4rem] p-12 lg:p-24 text-center overflow-hidden">
                        {/* Decorative Background for CTA */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gold-500 to-transparent blur-[120px]"></div>
                            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500 to-transparent blur-[120px]"></div>
                        </div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-gold-500 text-xs font-black tracking-[0.5em] uppercase mb-8 block">Atención Preferencial</span>
                            <h3 className="text-4xl lg:text-7xl font-display font-black text-white leading-[0.9] uppercase tracking-tighter mb-10">
                                ¿Busca algo <br />
                                <span className="text-gold-500 italic">Especial?</span>
                            </h3>
                            <p className="text-gray-400 text-lg lg:text-xl font-medium mb-12">
                                Nuestro equipo de especialistas está listo para diseñar el set de descanso que su cuerpo y su hogar merecen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href={getWhatsAppLink("Hola Sueño Dorado, busco un set de descanso especial y personalizado.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-12 py-5 bg-gold-500 text-white rounded-2xl font-display font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold-500/20"
                                >
                                    Hablar con un Experto
                                </a>
                                <Link
                                    to="/contacto"
                                    className="px-12 py-5 border border-white/20 text-white rounded-2xl font-display font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                                >
                                    Visitar Tienda
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnhancedProductCatalog;
