import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ENHANCED_CATALOG, CATEGORIES, getWhatsAppLink } from '@/utils/constants';
import { PrimaryButton, WhatsAppButton } from '@/components/ui/Buttons';

const CategoryView = ({ categoryId: propCategoryId }) => {
    const { categoryId: paramCategoryId, subId } = useParams();
    const location = useLocation();
    const activeCategoryId = propCategoryId || paramCategoryId;

    // Parse query params for initial filters
    const searchParams = new URLSearchParams(location.search);
    const initialLine = searchParams.get('l');

    const [activeSub, setActiveSub] = useState(initialLine || 'todos');
    const [selectedSize, setSelectedSize] = useState('todos');
    const [selectedWarranty, setSelectedWarranty] = useState('todos');
    const [selectedThickness, setSelectedThickness] = useState('todos');

    useEffect(() => {
        window.scrollTo(0, 0);
        const line = new URLSearchParams(location.search).get('l');
        if (line) setActiveSub(line);
        else if (!subId) setActiveSub('todos');

        setSelectedSize('todos');
        setSelectedWarranty('todos');
        setSelectedThickness('todos');
    }, [activeCategoryId, location.search, subId]);

    const currentCategory = CATEGORIES.find(c => c.id === activeCategoryId);

    useEffect(() => {
        if (subId) {
            const sub = currentCategory?.subcategories?.find(s => s.slug === subId);
            if (sub) setActiveSub(sub.filter);
        }
    }, [subId, currentCategory]);

    const categoryNames = {
        resorte: 'Colchones de Resorte',
        espuma: 'Colchones de Espuma',
        dormitorio: 'Bases y Cabeceras',
        cunas: 'Línea Infantil',
        muebles: 'Muebles y Juegos de Sala'
    };

    const categoryTitle = categoryNames[activeCategoryId] || 'Categoría';

    const products = ENHANCED_CATALOG.filter(p => {
        const matchesCategory = p.category === activeCategoryId;
        const matchesSub = activeSub === 'todos' || p.subcategory === activeSub;
        const matchesSize = selectedSize === 'todos' || (p.sizes && p.sizes.includes(selectedSize));
        const matchesWarranty = selectedWarranty === 'todos' || p.warranty === selectedWarranty;
        const matchesThickness = selectedThickness === 'todos' || p.thickness === selectedThickness;

        return matchesCategory && matchesSub && matchesSize && matchesWarranty && matchesThickness;
    });

    const availableSizes = ['todos', ...new Set(ENHANCED_CATALOG.filter(p => p.category === activeCategoryId).flatMap(p => p.sizes || []))];
    const availableWarranties = ['todos', ...new Set(ENHANCED_CATALOG.filter(p => p.category === activeCategoryId).map(p => p.warranty).filter(Boolean))];
    const availableThickness = activeCategoryId === 'espuma' ? ['todos', ...new Set(ENHANCED_CATALOG.filter(p => p.category === activeCategoryId).map(p => p.thickness).filter(Boolean))] : null;

    return (
        <MainLayout>
            <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-700">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 animate-fade-in">
                        <div className="max-w-2xl text-left">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                                <Link to="/" className="hover:text-gold-500 transition-colors">Inicio</Link>
                                <span>/</span>
                                <Link to="/catalogo" className="hover:text-gold-500 transition-colors">Catálogo</Link>
                                <span>/</span>
                                <span className="text-gray-900 dark:text-white">{categoryTitle}</span>
                            </nav>
                            <h1 className="text-4xl lg:text-7xl font-display font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">
                                {categoryTitle}
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                {products.length} productos filtrados
                            </span>
                        </div>
                    </div>

                    {/* Advanced Filter Panel */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-8 bg-gray-50 dark:bg-white/2 rounded-[2rem] border border-gray-100 dark:border-white/5 animate-fade-in-up">
                        {/* SubCategory / Line */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Línea / Modelo</label>
                            <select
                                value={activeSub}
                                onChange={(e) => setActiveSub(e.target.value)}
                                className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-gold-500 transition-all"
                            >
                                <option value="todos">Todas las líneas</option>
                                {currentCategory?.subcategories?.map(sub => (
                                    <option key={sub.filter} value={sub.filter}>{sub.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Size */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tamaño</label>
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-gold-500 transition-all"
                            >
                                {availableSizes.map(size => <option key={size} value={size}>{size === 'todos' ? 'Todas las medidas' : size}</option>)}
                            </select>
                        </div>

                        {/* Warranty */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Garantía</label>
                            <select
                                value={selectedWarranty}
                                onChange={(e) => setSelectedWarranty(e.target.value)}
                                className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-gold-500 transition-all"
                            >
                                {availableWarranties.map(w => <option key={w} value={w}>{w === 'todos' ? 'Todas las garantías' : w}</option>)}
                            </select>
                        </div>

                        {/* Thickness (Foam Only) */}
                        {availableThickness && (
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Espesor (Grosor)</label>
                                <select
                                    value={selectedThickness}
                                    onChange={(e) => setSelectedThickness(e.target.value)}
                                    className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-gold-500 transition-all"
                                >
                                    {availableThickness.map(t => <option key={t} value={t}>{t === 'todos' ? 'Todos los espesores' : t}</option>)}
                                </select>
                            </div>
                        )}
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
                                                <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-2">{product.subcategory || product.category}</p>
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
                                                className="flex-grow flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-all duration-500 hover:shadow-xl hover:shadow-black/5"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                Ver Detalle
                                            </Link>
                                            <WhatsAppButton
                                                onClick={() => {
                                                    const message = `Hola Sueño Dorado, me gustaría recibir más información sobre el colchón ${product.name} de la línea ${product.subcategory || product.category}. ¡Gracias!`;
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
