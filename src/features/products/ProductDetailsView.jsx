import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
    MdShield, 
    MdSettings, 
    MdVerified, 
    MdLayers 
} from 'react-icons/md';
import { 
    FaTruck, 
    FaTools, 
    FaRecycle 
} from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';
import { FEATURED_PRODUCTS } from '@/utils/constants';
import LazyImage from '@/components/common/Image';

const ProductDetailsView = () => {
    const { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState('2 Plazas');

    const product = useMemo(() => {
        const found = FEATURED_PRODUCTS.find(p => p.id === productId);
        return found || FEATURED_PRODUCTS[0];
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return null;

    const specs = [
        { label: 'Firmeza', value: 'Intermedia / Alta', icon: <MdShield className="w-5 h-5" /> },
        { label: 'Resortes', value: 'Pocket Independientes', icon: <MdSettings className="w-5 h-5" /> },
        { label: 'Garantía', value: '10 Años', icon: <MdVerified className="w-5 h-5" /> },
        { label: 'Material', value: 'Espuma Viscoelástica', icon: <MdLayers className="w-5 h-5" /> }
    ];

    const sizes = ['1.5 Plazas', '2 Plazas', 'Queen', 'King'];

    return (
        <>
            <Helmet>
                <title>{product.name} - Colchón Premium Sueño Dorado | S/ {product.price.toLocaleString('es-PE')}</title>
                <meta name="description" content={`Compra el ${product.name}, colchón premium de Sueño Dorado. ${product.description || 'Experimenta la cima del descanso peruano con resortes pocket y garantía de 10 años. Envío gratis en Lima.'}`} />
                <link rel="canonical" href={`https://suenodorado.pe/producto/${productId}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": product.name,
                        "description": product.description || "Colchón premium con resortes pocket independientes",
                        "image": product.image,
                        "brand": {
                            "@type": "Brand",
                            "name": "Sueño Dorado"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": product.price,
                            "priceCurrency": "PEN",
                            "availability": "https://schema.org/InStock",
                            "seller": {
                                "@type": "Organization",
                                "name": "Sueño Dorado"
                            }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "124"
                        }
                    })}
                </script>
            </Helmet>
            <MainLayout>
            <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-700">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-12 animate-fade-in">
                        <Link to="/" className="hover:text-gold-500 transition-colors">Inicio</Link>
                        <span>/</span>
                        <Link to="/categorias/colchones" className="hover:text-gold-500 transition-colors">Colchones</Link>
                        <span>/</span>
                        <span className="text-gray-900 dark:text-white">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                        {/* LEFT: Image Gallery */}
                        <div className="space-y-6 animate-fade-in">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 group">
                                <LazyImage
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Detail Magnifier Overlay (Aesthetic) */}
                                <div className="absolute top-8 left-8">
                                    <span className="px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                                        Zoom HD Disponible
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 cursor-pointer hover:border-gold-500 transition-all opacity-50 hover:opacity-100">
                                        <div className="w-full h-full flex items-center justify-center text-gold-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Product Info */}
                        <div className="space-y-12 animate-fade-in-up">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="px-3 py-1 bg-gold-500 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full">
                                        Más Vendido
                                    </span>
                                    <div className="flex text-gold-500 text-xs">
                                        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                        <span className="ml-2 text-gray-400 font-bold uppercase tracking-widest text-[9px]">(124 Reseñas)</span>
                                    </div>
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-display font-black text-gray-900 dark:text-white uppercase leading-none tracking-tighter">
                                    {product.name}
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg font-medium">
                                    Experimenta la cima del descanso peruano. Diseñado con tecnología de resortes pocket que eliminan la transferencia de movimiento.
                                </p>
                            </div>

                            <div className="flex items-baseline gap-6">
                                <span className="text-5xl font-display font-black text-gray-900 dark:text-white">
                                    S/ {product.price.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                                </span>
                                <span className="text-xl text-gray-400 line-through font-display">
                                    S/ {(product.price * 1.3).toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                                </span>
                            </div>

                            {/* Size Selection */}
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Selecciona tu Tamaño</h4>
                                <div className="flex flex-wrap gap-3">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-display font-black text-[10px] uppercase tracking-widest ${selectedSize === size
                                                ? 'border-gold-500 bg-gold-500 text-white shadow-xl shadow-gold-500/20 scale-105'
                                                : 'border-gray-100 dark:border-white/5 text-gray-400 hover:border-gold-500/30'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Key Specs Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {specs.map((spec) => (
                                    <div key={spec.label} className="p-6 rounded-[2rem] bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 group hover:bg-white dark:hover:bg-black transition-all">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl group-hover:scale-110 transition-transform">{spec.icon}</span>
                                            <div>
                                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{spec.label}</p>
                                                <p className="text-xs font-bold text-gray-900 dark:text-white uppercase">{spec.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`https://wa.me/51989223448?text=${encodeURIComponent(`Hola, quiero comprar el ${product.name} en tamaño ${selectedSize}.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-grow py-6 bg-gold-500 hover:bg-gold-600 text-white text-xs font-black uppercase tracking-[0.25em] rounded-full flex items-center justify-center gap-4 transition-all hover:scale-[1.03] shadow-2xl shadow-gold-500/25"
                                >
                                    Comprar Ahora
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <button className="px-10 py-6 border-2 border-gray-100 dark:border-white/10 text-gray-900 dark:text-white text-xs font-black uppercase tracking-[0.25em] rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                                    Ficha Técnica
                                </button>
                            </div>

                            {/* Trust Footer */}
                            <div className="pt-10 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
                                <div className="flex flex-col items-center gap-2">
                                    <FaTruck className="w-6 h-6 text-gold-500" />
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center">Envío Gratis<br />Lima Met.</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <FaTools className="w-6 h-6 text-gold-500" />
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center">Armado<br />Incluido</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <FaRecycle className="w-6 h-6 text-gold-500" />
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center">Cuotas<br />Sin Interés</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <MdVerified className="w-6 h-6 text-gold-500" />
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center">Garantía<br />Fábrica</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
             </div>
         </MainLayout>
         </>
     );
};

export default ProductDetailsView;
