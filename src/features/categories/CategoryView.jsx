import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ENHANCED_CATALOG, CATEGORIES, getWhatsAppLink, getPrettySubcategoryName } from '@/utils/constants';
import { DetailsButton, PriceInquiryButton, QuoteIconButton } from '@/components/ui/Buttons';
import { useCart } from '@/contexts/CartContext';

const CategoryView = ({ categoryId: propCategoryId }) => {
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
        let matchesCategory = p.category === activeCategoryId;

        // For dormitorio routes with subId, check subcategory instead
        if (activeCategoryId === 'dormitorio' && subId) {
            matchesCategory = true; // Allow all categories, will filter by subcategory
        }

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
            <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-700">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in-up">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-white dark:bg-dream-dark-surface rounded-2xl overflow-hidden border border-gray-100 dark:border-dream-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-vive-500/10 hover:-translate-y-2 h-full flex flex-col">
                                    {/* Product Image - MISMAS MEDIDAS EXACTAS QUE EL CARRUSEL */}
                                    <div className="relative overflow-hidden bg-white dark:bg-dream-dark-surface p-6" style={{ aspectRatio: '16/9' }}>
                                        <Link to={`/producto/${product.id}`} className="block h-full w-full">
                                            <img
                                                src={`${product.image}${product.image.includes('?') ? '&' : '?'}w=400&q=75&auto=format`}
                                                alt={product.name}
                                                className="w-full h-full object-contain transition-transform duration-[10s] group-hover:scale-110"
                                                width="400"
                                                height="225"
                                                loading="lazy"
                                            />
                                        </Link>

                                        {/* Badge - Igual que el carrusel */}
                                        {product.badge && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                                    {product.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 bg-gray-50/50 dark:bg-zinc-900/50">
                                        <div className="mb-4">
                                            <p className="text-[10px] font-black text-vive-500 uppercase tracking-widest mb-2">{getPrettySubcategoryName(product.subcategory) || product.category}</p>
                                            <Link to={`/producto/${product.id}`}>
                                                <h3 className="text-lg font-black text-gray-900 dark:text-white mt-2 mb-3 leading-tight hover:text-vive-500 transition-colors">{product.name}</h3>
                                            </Link>
                                        </div>

                                        {/* Enhanced Product Information */}
                                        <div className="space-y-3 mb-6">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Key Features */}
                                            <div className="space-y-2">
                                                {product.features && product.features.slice(0, 3).map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-vive-500 rounded-full flex-shrink-0"></span>
                                                        <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Key Specifications */}
                                            {product.especificaciones && (
                                                <div className="pt-3 border-t border-gray-100 dark:border-white/5">
                                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                                        {Object.entries(product.especificaciones).slice(0, 4).map(([key, value], idx) => (
                                                            <div key={idx} className="flex justify-between">
                                                                <span className="text-gray-600 dark:text-gray-400 capitalize">{key}:</span>
                                                                <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center gap-2">
                                                {product.sizes && (
                                                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-black text-gray-700 dark:text-gray-300 rounded-full">
                                                        <span className="mr-1">📏</span>
                                                        {product.sizes.length} tamaños
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col gap-3 mt-auto">
                                            <PriceInquiryButton product={product} size={selectedSize === 'todos' ? null : selectedSize} />
                                            <div className="flex gap-2">
                                                <DetailsButton to={`/producto/${product.id}`} className="flex-1" />
                                                <QuoteIconButton onClick={() => addToCart(product, 1, selectedSize === 'todos' ? null : selectedSize)} />
                                            </div>
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
