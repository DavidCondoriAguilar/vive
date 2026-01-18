import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { FEATURED_PRODUCTS, getWhatsAppLink } from '@/utils/constants';
import { PrimaryButton, WhatsAppButton } from '@/components/ui/Buttons';

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
                                            <PrimaryButton
                                                onClick={() => window.location.href = `/producto/${product.id}`}
                                                className="flex-grow justify-center"
                                            >
                                                Ver Detalles
                                            </PrimaryButton>
                                            <WhatsAppButton
                                                onClick={() => {
                                                    const message = `Hola Sueño Dorado, me interesa el ${product.name} de la categoría ${categoryTitle}. Me gustaría saber más sobre este modelo.`;
                                                    window.open(getWhatsAppLink(message), '_blank');
                                                }}
                                                className="w-14 h-14 p-0 justify-center"
                                                showArrow={false}
                                            />
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
