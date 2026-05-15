import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '@shared/hooks/useScrollReveal';
import MainLayout from '@/layouts/MainLayout';
import { ENHANCED_CATALOG, CATEGORIES, getWhatsAppLink, getPrettySubcategoryName } from '@core/utils/constants';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@shared/components/ui/Buttons';
import { useCart } from '@shared/contexts/CartContext';

const CategoryView = ({ categoryId: propCategoryId }) => {
    useScrollReveal();
    const { addToCart } = useCart();
    const { categoryId: paramCategoryId, subId } = useParams();
    const location = useLocation();

    // Map special routes to categoryIds
    const routeToCategoryMap = {
        '/colchones-resorte': 'resorte',
        '/colchones-espuma': 'espuma'
    };

    // Map special dormitorio routes to subIds
    const routeToSubIdMap = {
        '/dormitorio/box-universal': 'box-universal',
        '/dormitorio/box-premium': 'box-premium',
        '/dormitorio/cama-universal-brazos': 'cama-universal-brazos',
        '/dormitorio/cama-premium-brazos': 'cama-premium-brazos',
        '/dormitorio/muebles': 'muebles'
    };

    const currentPath = location.pathname;
    const mappedCategoryId = routeToCategoryMap[currentPath];
    const mappedSubId = routeToSubIdMap[currentPath];

    // Special handling for dormitorio routes
    const isDormitorioRoute = currentPath.startsWith('/dormitorio/');
    const dormitorioCategoryId = isDormitorioRoute ? 'dormitorio' : null;

    const activeCategoryId = propCategoryId || paramCategoryId || mappedCategoryId || dormitorioCategoryId;
    const effectiveSubId = subId || mappedSubId;

    // Parse query params for initial filters
    const searchParams = new URLSearchParams(location.search);
    const initialLine = searchParams.get('l');

    const [activeSub, setActiveSub] = useState(initialLine || 'todos');
    const [selectedSize, setSelectedSize] = useState('todos');
    const [selectedThickness, setSelectedThickness] = useState('todos');

    useEffect(() => {
        window.scrollTo(0, 0);
        const line = new URLSearchParams(location.search).get('l');
        if (line) setActiveSub(line);
        else if (!effectiveSubId) setActiveSub('todos');

        setSelectedSize('todos');
        setSelectedThickness('todos');
    }, [activeCategoryId, location.search, effectiveSubId]);

    const currentCategory = CATEGORIES.find(c => c.id === activeCategoryId);

    useEffect(() => {
        if (effectiveSubId) {
            const sub = currentCategory?.subcategories?.find(s => s.slug === effectiveSubId);
            if (sub) setActiveSub(sub.filter);
        }
    }, [effectiveSubId, currentCategory]);

    const categoryNames = {
        resorte: 'Colchones de Resorte',
        espuma: 'Colchones de Espuma',
        dormitorio: 'Bases y Cabeceras',
        cunas: 'Línea Infantil',
        muebles: 'Muebles y Juegos de Sala'
    };

    const categoryTitle = categoryNames[activeCategoryId] || 'Categoría';

    const products = ENHANCED_CATALOG.filter(p => {
        // Special handling for dormitorio subcategories
        const matchesCategory = p.category === activeCategoryId;

        const matchesSize = selectedSize === 'todos' || (p.sizes && p.sizes.includes(selectedSize));
        const matchesThickness = selectedThickness === 'todos' || p.thickness === selectedThickness;
        const matchesSub = activeSub === 'todos' || p.subcategory === activeSub;

        return matchesCategory && matchesSub && matchesSize && matchesThickness;
    });

    // Fix available filters for dormitorio subcategories
    const getProductsForFilters = () => {
        if (activeCategoryId === 'dormitorio' && effectiveSubId) {
            return ENHANCED_CATALOG.filter(p => p.subcategory === activeSub);
        }
        return ENHANCED_CATALOG.filter(p => p.category === activeCategoryId);
    };

    const productsForFilters = getProductsForFilters();

    const availableSizes = ['todos', ...new Set(productsForFilters.flatMap(p => p.sizes || []))];
    const availableThickness = activeCategoryId === 'espuma' ? ['todos', ...new Set(productsForFilters.map(p => p.thickness).filter(Boolean))] : null;

    return (
        <MainLayout>
            <Helmet>
                <title>{categoryTitle} | Vive Fábrica de Colchones</title>
                <meta name="description" content={`Explora nuestra línea de ${categoryTitle}. Venta directa de fábrica con tecnología de descanso avanzada en Perú.`} />
                <meta property="og:title" content={`${categoryTitle} | Vive - Fábrica de Colchones en Perú`} />
                <meta property="og:description" content={`Explora nuestra línea de ${categoryTitle}. Calidad premium directo de fábrica con envíos a todo Perú.`} />
                <meta property="og:image" content="https://vive.pe/logo-main.jpg" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${categoryTitle} | Vive`} />
                <meta name="twitter:description" content={`Explora nuestra línea de ${categoryTitle}. Venta directa de fábrica.`} />
                <meta name="twitter:image" content="https://vive.pe/logo-main.jpg" />
            </Helmet>
            <div className="pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-700">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 animate-fade-in">
                        <div className="max-w-2xl text-left">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
                                <Link to="/" className="hover:text-vive-500 transition-colors">Inicio</Link>
                                <span>/</span>
                                <Link to="/catalogo" className="hover:text-vive-500 transition-colors">Catálogo</Link>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-8 bg-white dark:bg-white/2 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm animate-fade-in-up">
                        {/* SubCategory / Line */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Línea / Modelo</label>
                            <select
                                value={activeSub}
                                onChange={(e) => setActiveSub(e.target.value)}
                                className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-vive-500 transition-all"
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
                                className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-vive-500 transition-all"
                            >
                                {availableSizes.map(size => <option key={size} value={size}>{size === 'todos' ? 'Todas las medidas' : size}</option>)}
                            </select>
                        </div>


                        {/* Thickness (Foam Only) */}
                        {availableThickness && (
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Espesor (Grosor)</label>
                                <select
                                    value={selectedThickness}
                                    onChange={(e) => setSelectedThickness(e.target.value)}
                                    className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 dark:text-white outline-none focus:border-vive-500 transition-all"
                                >
                                    {availableThickness.map(t => <option key={t} value={t}>{t === 'todos' ? 'Todos los espesores' : t}</option>)}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Products Grid */}
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-vive-500/10 hover:-translate-y-2 flex flex-col">
                                    {/* Product Image - Protagonista */}
                                    <div className="relative overflow-hidden bg-white dark:bg-dream-dark-surface" style={{ aspectRatio: '4/5' }}>
                                        <Link to={`/producto/${product.id}`} className="block h-full w-full">
                                            <div className="w-full h-full flex items-center justify-center p-2">
                                                <img
                                                    src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=600&q=75&auto=format`}
                                                    alt={`${product.name} - Colchón Vive Perú`}
                                                    className="w-full h-full object-contain"
                                                    width="500"
                                                    height="625"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>

                                        {product.badge && (
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 bg-black/80 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                                                    {product.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-3 flex flex-col flex-1 bg-gray-50/50 dark:bg-zinc-900/50">
                                        <p className="text-[8px] font-black text-vive-500 uppercase tracking-[0.2em] truncate">{getPrettySubcategoryName(product.subcategory) || product.category}</p>
                                        <Link to={`/producto/${product.id}`}>
                                            <h3 className="text-xs font-black text-gray-900 dark:text-white mt-0.5 mb-2 truncate hover:text-vive-500 transition-colors">{product.name}</h3>
                                        </Link>
                                        <div className="flex flex-col gap-1.5 mt-auto">
                                            <PriceInquiryButton product={product} size={selectedSize === 'todos' ? null : selectedSize} />
                                            <DetailsButton to={`/producto/${product.id}`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center animate-fade-in">
                            <p className="text-gray-400 font-display text-xl uppercase tracking-widest">Lo sentimos, no encontramos productos en esta categoría aún.</p>
                            <Link to="/" className="mt-8 inline-block text-vive-500 font-black uppercase text-xs tracking-[0.3em] border-b-2 border-vive-500 pb-2">Volver al Inicio</Link>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default CategoryView;
