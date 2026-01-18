import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { FEATURED_PRODUCTS, getWhatsAppLink } from '@/utils/constants';

const CategoryView = () => {
    const { categoryId } = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryId, location.search]);

    const categoryNames = {
        colchones: 'Colchones Premium',
        camas: 'Camas y Bases',
        dormitorios: 'Dormitorios Completos',
        accesorios: 'Accesorios de Descanso',
        ofertas: 'Ofertas Especiales'
    };

    const effectiveCategoryId = categoryId || (location.pathname.includes('ofertas') ? 'ofertas' : '');
    const categoryTitle = categoryNames[effectiveCategoryId] || 'Categoría';

    // Get filter data from URL
    const searchParams = new URLSearchParams(location.search);
    const sizeFilter = searchParams.get('t');
    const lineFilter = searchParams.get('l');

    // Filter logic: if 'ofertas', show all with "discount" logic or special tag
    let products = effectiveCategoryId === 'ofertas'
        ? FEATURED_PRODUCTS
        : FEATURED_PRODUCTS.filter(p => p.category && p.category.toLowerCase().includes(effectiveCategoryId.slice(0, 4)));

    // Extra filters for Mega Menu
    if (sizeFilter) {
        products = products.filter(p => p.sizes && p.sizes.includes(sizeFilter));
    }

    // Line simulation (since line/subcategory isn't strictly in DB, we map loosely or ignore)
    // In a real app, product would have a 'line' or 'subcategory' field.
    if (lineFilter) {
        // Simple search in name/features/badge
        products = products.filter(p =>
            p.name.toLowerCase().includes(lineFilter.toLowerCase()) ||
            p.badge.toLowerCase().includes(lineFilter.toLowerCase())
        );
    }

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-700">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-in">
                        <div className="max-w-2xl text-left">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                                <Link to="/" className="hover:text-gold-500 transition-colors">Inicio</Link>
                                <span>/</span>
                                <span className="text-gray-900 dark:text-white">Categoría</span>
                            </nav>
                            <h1 className="text-4xl lg:text-7xl font-display font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">
                                {categoryTitle}
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                {products.length} productos encontrados
                            </span>
                        </div>
                    </div>

                    {/* Filter Simple Placeholder */}
                    <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 dark:border-white/5 pb-8 animate-fade-in-up">
                        {['Todos', 'Pillow Top', 'Ortopédico', 'Pocket'].map((filter) => (
                            <button key={filter} className="px-6 py-2 rounded-full border border-gray-100 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all">
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in-up">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-[2.5rem] hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5 border border-transparent hover:border-gray-100 dark:hover:border-white/5">
                                    <Link to={`/producto/${product.id}`} className="block aspect-square mb-10 overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </Link>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-2">{product.category}</p>
                                                <Link to={`/producto/${product.id}`}>
                                                    <h3 className="text-xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tight hover:text-gold-500 transition-colors">{product.name}</h3>
                                                </Link>
                                            </div>
                                            <p className="text-xl font-display font-black text-gray-900 dark:text-white">
                                                S/ {product.price.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                                            </p>
                                        </div>
                                        <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex gap-4">
                                            <Link
                                                to={`/producto/${product.id}`}
                                                className="flex-grow py-4 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-[1.02] transition-transform flex items-center justify-center"
                                            >
                                                Ver Detalles
                                            </Link>
                                            <a
                                                href={getWhatsAppLink(`Hola Sueño Dorado, me interesa el ${product.name} de la categoría ${categoryTitle}. Me gustaría saber más sobre este modelo.`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all text-gray-400"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center animate-fade-in">
                            <p className="text-gray-400 font-display text-xl uppercase tracking-widest">Lo sentimos, no encontramos productos en esta categoría aún.</p>
                            <Link to="/" className="mt-8 inline-block text-gold-500 font-black uppercase text-xs tracking-[0.3em] border-b-2 border-gold-500 pb-2">Volver al Inicio</Link>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default CategoryView;
