import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FaTruck,
    FaTools,
    FaRecycle,
    FaShieldAlt,
    FaClock,
    FaStar,
    FaCheckCircle,
    FaFire,
    FaShare,
    FaChevronRight,
    FaChevronLeft,
    FaMinus,
    FaPlus,
    FaWhatsapp,
    FaBuilding
} from 'react-icons/fa';
import { MdVerifiedUser, MdClose } from 'react-icons/md';
import MainLayout from '@/layouts/MainLayout';
import { ENHANCED_CATALOG, getWhatsAppLink } from '@/utils/constants';
import LazyImage from '@/components/common/Image';
import ProductSpecsModal from '@/components/product/ProductSpecsModal';
import ProductActions from '@/components/product/ProductActions';
import { useCart } from '@/contexts/CartContext';
import { useProductSpecs } from '../../hooks/useProductSpecs.jsx';

const ProductDetailsView = () => {
    const { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [showSpecsModal, setShowSpecsModal] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [showZoomWindow, setShowZoomWindow] = useState(false);

    const product = useMemo(() => {
        const found = ENHANCED_CATALOG.find(p => p.id === productId);
        return found || ENHANCED_CATALOG[0];
    }, [productId]);

    const productImages = product.images || [product.image];

    const handleMouseMove = (e) => {
        if (!isZoomed) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setZoomPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
        setShowZoomWindow(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
        setShowZoomWindow(false);
    };

    const { addToCart, getTotalItems } = useCart();
    const { specs, detailedSpecs } = useProductSpecs(product);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product && product.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]);
        }
    }, [product]);

    if (!product) return null;

    const sizes = product.sizes || ['1.5 Plazas', '2 Plazas', 'Queen', 'King'];

    // Generate descriptive alt text for accessibility
    const getAltText = (imageName, productName) => {
        if (imageName.includes('main') || imageName.includes('-main')) {
            return `${productName} - Vista principal del colchón, mostrando su diseño y acabado premium`;
        } else if (imageName.includes('diag') || imageName.includes('diagonal')) {
            return `${productName} - Vista diagonal del colchón, mostrando su grosor y estructura`;
        } else if (imageName.includes('two') || imageName.includes('-two')) {
            return `${productName} - Vista secundaria del colchón, mostrando detalles adicionales`;
        } else if (imageName.includes('detalle') || imageName.includes('technical')) {
            return `${productName} - Especificaciones técnicas y estructura interna del colchón`;
        } else {
            return `${productName} - Imagen del colchón premium Sueño Dorado`;
        }
    };

    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>{product.name} - Colchón Premium Sueño Dorado | Precio por Consultar</title>
                <meta name="description" content={`Compra el ${product.name}, colchón premium de Sueño Dorado. ${product.description || 'Experimenta la cima del descanso peruano con resortes pocket y envío gratis en Lima.'}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <link rel="canonical" href={`https://suenodorado.pe/producto/${productId}`} />

                {/* Open Graph */}
                <meta property="og:title" content={`${product.name} - Colchón Premium Sueño Dorado`} />
                <meta property="og:description" content={`Compra el ${product.name}, colchón premium de Sueño Dorado. ${product.description || 'Experimenta la cima del descanso peruano con resortes pocket y envío gratis en Lima.'}`} />
                <meta property="og:image" content={`https://suenodorado.pe${product.image}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={`${product.name} - Colchón Premium Sueño Dorado`} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={`https://suenodorado.pe/producto/${productId}`} />
                <meta property="og:site_name" content="Sueño Dorado" />
                <meta property="og:locale" content="es_PE" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${product.name} - Colchón Premium Sueño Dorado`} />
                <meta name="twitter:description" content={`Compra el ${product.name}, colchón premium de Sueño Dorado. ${product.description || 'Experimenta la cima del descanso peruano con resortes pocket y envío gratis en Lima.'}`} />
                <meta name="twitter:image" content={`https://suenodorado.pe${product.image}`} />
                <meta name="twitter:site" content="@suenodorado" />

                {/* Additional SEO */}
                <meta name="keywords" content={`${product.name}, colchón, sueñodorado, peru, resortes, descanso, garantía, ${product.category}, ${product.subcategory}`} />
                <meta name="author" content="Sueño Dorado" />
                <meta name="language" content="Spanish" />

                {/* Enhanced Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": product.name,
                        "description": product.description || "Colchón premium con resortes pocket independientes",
                        "image": `https://suenodorado.pe${product.image}`,
                        "brand": {
                            "@type": "Brand",
                            "name": "Sueño Dorado"
                        },
                        "category": product.category,
                        "offers": {
                            "@type": "AggregateOffer",
                            "priceCurrency": "PEN",
                            "price": product.price || "0",
                            "availability": "https://schema.org/InStock",
                            "seller": {
                                "@type": "Organization",
                                "name": "Sueño Dorado",
                                "url": "https://suenodorado.pe"
                            }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "124"
                        },
                        "additionalProperty": [
                            {
                                "@type": "PropertyValue",
                                "name": "Categoría",
                                "value": product.category
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Tamaños disponibles",
                                "value": product.sizes?.join(", ") || ""
                            }
                        ]
                    })}
                </script>
            </Helmet>



            <MainLayout>
                {/* Luxury Hero Section */}
                <div className="min-h-screen bg-white dark:bg-black">
                    {/* Minimalist Navigation Breadcrumb */}
                    <div className="border-b border-gray-100 dark:border-gray-900">
                        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                                <nav className="flex items-center gap-1 sm:gap-2 text-xs font-light tracking-widest text-gray-600 overflow-x-auto" aria-label="Breadcrumb">
                                    <Link to="/" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">Inicio</Link>
                                    <FaChevronRight className="w-2 h-2 flex-shrink-0" />
                                    <Link to="/catalogo" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">Catálogo</Link>
                                    <FaChevronRight className="w-2 h-2 flex-shrink-0" />
                                    <span className="text-black dark:text-white font-medium truncate">{product.name}</span>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Subtle URL Indicator */}
                    <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 mt-16">
                        <div className="container mx-auto px-4 sm:px-6 py-2">
                            <div className="flex items-center gap-2 text-[11px] font-medium tracking-widest text-gray-500">
                                <span>Inicio</span>
                                <span>/</span>
                                <span>Detalle</span>
                                <span>/</span>
                                <span>Producto</span>
                                <span>/</span>
                                <span className="text-gray-700 dark:text-gray-200 font-semibold">{product.name}</span>
                            </div>
                        </div>
                    </div>

                    {/* Luxury Product Grid */}
                    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                        {/* Botón Volver - Ahora en posición estática que desaparece al bajar */}
                        <div className="mb-8 flex justify-start">
                            <button
                                onClick={() => window.history.back()}
                                className="group flex items-center gap-3 px-5 py-2.5 bg-white dark:bg-zinc-900/50 hover:bg-black dark:hover:bg-white text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <FaChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                                <span>Volver al Catálogo</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24">

                            {/* LEFT: Luxury Image Gallery */}
                            <div className="space-y-4 sm:space-y-6">
                                {/* Main Image with Professional Zoom */}
                                <div className="relative">
                                    {/* Main Image Container - ADAPTADO PARA PRODUCTOS DE DIFERENTES PROPORCIONES */}
                                    <div
                                        className="relative bg-white dark:bg-dream-dark-surface p-6 overflow-hidden group cursor-zoom-in rounded-lg max-w-full max-h-[500px] md:max-h-[600px] flex items-center justify-center"
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <LazyImage
                                            src={productImages[activeImageIndex]}
                                            alt={getAltText(productImages[activeImageIndex], product.name)}
                                            priority={true}
                                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                                        />

                                        {/* Zoom Indicator Lens */}
                                        {isZoomed && (
                                            <div
                                                className="absolute w-24 h-24 border-2 border-white rounded-full pointer-events-none shadow-2xl z-10"
                                                style={{
                                                    left: `${zoomPosition.x}%`,
                                                    top: `${zoomPosition.y}%`,
                                                    transform: 'translate(-50%, -50%)',
                                                    background: 'rgba(255, 255, 255, 0.15)',
                                                    backdropFilter: 'blur(1px)',
                                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                                }}
                                            />
                                        )}

                                        {/* Luxury Overlay Elements */}
                                        <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20">
                                            <span className="px-2 sm:px-4 py-1 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                                {isZoomed ? 'Zoom Activo' : 'Zoom HD Disponible'}
                                            </span>
                                        </div>

                                        <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex gap-2 sm:gap-3 z-20">
                                            <button
                                                className="w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                                                aria-label="Compartir este producto"
                                            >
                                                <FaShare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Professional Zoom Window */}
                                    {showZoomWindow && (
                                        <div
                                            className="absolute bg-white rounded-lg shadow-2xl border border-gray-200 z-30 pointer-events-none"
                                            style={{
                                                top: '0',
                                                right: '0',
                                                width: window.innerWidth >= 1024 ? '100%' : '80%',
                                                height: window.innerWidth >= 1024 ? '100%' : '60%',
                                                transform: window.innerWidth >= 1024 ? 'translateX(105%)' : 'translateY(105%)',
                                                background: `url(${productImages[activeImageIndex]})`,
                                                backgroundSize: '250%', // Reducido de 300% a 250%
                                                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                                backgroundRepeat: 'no-repeat',
                                                imageRendering: 'auto', // Cambiado de 'crisp-edges' a 'auto'
                                                filter: 'none', // Removidos filtros que afectan calidad
                                            }}
                                        >
                                            <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-xs font-black rounded">
                                                2.5X ZOOM HD
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                                    {productImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImageIndex(index)}
                                            aria-label={`Ver imagen ${index + 1} de ${product.name}`}
                                            className={`rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === index
                                                ? 'border-black dark:border-white shadow-lg'
                                                : 'border-gray-200 dark:border-gray-800 hover:border-gray-400'
                                                }`}
                                        >
                                            <LazyImage
                                                src={image}
                                                alt={getAltText(image, product.name)}
                                                className="w-full h-full object-contain bg-white dark:bg-dream-dark-surface transition-opacity duration-300"
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Technical Details Section - Separated for better visibility */}
                                {product.technicalImage && (
                                    <div className="mt-16 sm:mt-20 space-y-6 border-t border-gray-100 dark:border-gray-800 pt-12 sm:pt-20">
                                        <h3 className="text-sm sm:text-base font-black text-black dark:text-white uppercase tracking-widest">Detalles Técnicos</h3>
                                        <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                                            <LazyImage
                                                src={product.technicalImage}
                                                alt={getAltText(product.technicalImage, product.name)}
                                                className="w-full h-auto object-contain"
                                                width="800"
                                                height="450"
                                            />

                                            {/* Technical Info Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h4 className="text-white font-black text-lg mb-2">Sistema Interno</h4>
                                                    <p className="text-white/90 text-sm">
                                                        Descubre la tecnología MP (Máxima Permanencia) y el refuerzo perimetral que garantizan la durabilidad de tu colchón
                                                    </p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* RIGHT: Luxury Product Info */}
                            <div className="space-y-6 sm:space-y-8">
                                {/* Product Header */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-2">
                                            <span className="inline-block px-2 sm:px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest rounded">
                                                {product.badge || 'Económica'}
                                            </span>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="flex text-black">
                                                    {'★★★★★'.split('').map((s, i) => <span key={i} className="text-sm">{s}</span>)}
                                                </div>
                                                <span className="text-xs text-gray-600 dark:text-gray-400 font-light">(124 Reseñas)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black text-black dark:text-white leading-tight uppercase tracking-tight">
                                        {product.name}
                                    </h1>

                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-lg">
                                        {product.description}
                                    </p>

                                    {/* Professional Specs Trigger */}
                                    <div className="pt-2">
                                        <button
                                            onClick={() => setShowSpecsModal(true)}
                                            className="group flex items-center gap-3 text-gold-500 hover:text-gold-600 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all">
                                                <FaTools className="w-4 h-4" />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Especificaciones</span>
                                                <span className="text-[12px] font-bold border-b border-gold-500/20 group-hover:border-gold-500 transition-all">Ver Análisis Técnico</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4 py-8 px-8 bg-gray-50/50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/10 transition-colors" />

                                    <span className="text-[10px] font-black text-gold-500 uppercase tracking-[0.4em] block mb-2">Presupuesto Personalizado</span>

                                    <div className="flex flex-col gap-6">


                                        <a
                                            href={getWhatsAppLink(`Hola Sueño Dorado, estoy interesado(a) en el producto *${product.name}*.\nTalla: ${selectedSize || 'Por definir'}\n¿Podrían brindarme el precio y disponibilidad?`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1 uppercase tracking-widest text-xs"
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            Solicitar Cotización Inmediata
                                        </a>
                                    </div>

                                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest leading-relaxed mt-4">
                                        Asesoría premium gratuita incluida • Respuesta en menos de 5 min
                                    </p>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { icon: FaClock, text: "Entrega Veloz" },
                                        { icon: FaTruck, text: "Envío Gratis" },
                                        { icon: MdVerifiedUser, text: "Calidad Premium" },
                                        { icon: FaFire, text: "Stock Limitado" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-full">
                                            <item.icon className="w-4 h-4 text-black dark:text-white" />
                                            <span className="text-xs font-medium text-black dark:text-white uppercase tracking-widest">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Size Selection */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black text-black dark:text-white uppercase tracking-widest">Selecciona tu Tamaño</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-6 py-3 rounded-full border-2 transition-all font-black text-xs uppercase tracking-widest ${selectedSize === size
                                                    ? 'border-black bg-black text-white shadow-lg'
                                                    : 'border-gray-200 dark:border-gray-800 text-gray-600 hover:border-gray-400'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black text-black dark:text-white uppercase tracking-widest">Cantidad</h4>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-full">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors rounded-l-full"
                                            >
                                                <FaMinus className="w-4 h-4" />
                                            </button>
                                            <span className="w-16 text-center font-black text-lg">{quantity}</span>
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors rounded-r-full"
                                            >
                                                <FaPlus className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <span className="text-xs text-gray-500 font-light">Ajustar pedido</span>
                                    </div>
                                </div>

                                {/* CTA Buttons - REMOVED (duplicated below) */}

                                {/* Enhanced Technical Features Section - UNIFICADO */}
                                <div className="border-t border-gray-100 dark:border-gray-900 pt-8">
                                    <h3 className="text-sm font-black text-black dark:text-white uppercase tracking-widest mb-6">Beneficios y características</h3>

                                    {/* Unified Technical Specs - Juntos y optimizados */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* COLCHÓN */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                    R
                                                </span>
                                                {product.category === 'dormitorio' ? 'BASE' : 'COLCHÓN'}
                                            </h4>
                                            <div className="space-y-2">
                                                {(product.technicalSpecs?.colchon || product.features || [
                                                    "Tela Premium de alta calidad",
                                                    "Acolchado ergonómico",
                                                    "Diseño anatómico",
                                                    "Equilibrio firmeza-confort",
                                                    "Tratamiento antiácaros"
                                                ]).map((spec, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="text-black text-lg mt-0.5 leading-none">•</span>
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* COMPONENTES */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-8 h-8 bg-gray-200 text-black rounded-full flex items-center justify-center text-xs font-bold">+</span>
                                                COMPONENTES
                                            </h4>
                                            <div className="space-y-2">
                                                {(product.technicalSpecs?.componentes || product.componentes || [
                                                    "Tela Premium acolchada",
                                                    "Espuma de poliuretano",
                                                    "Lámina de Notex",
                                                    "Núcleo de alta resiliencia",
                                                    "Lámina de Notex",
                                                    "Espuma protectora"
                                                ]).map((component, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="text-black text-lg mt-0.5 leading-none">•</span>
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{component}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced B2B Actions */}
                                <div className="border-t border-gray-100 dark:border-gray-900 pt-8">
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => {
                                                if (!selectedSize) {
                                                    alert('Por favor selecciona un tamaño');
                                                    return;
                                                }

                                                addToCart(product, quantity, selectedSize);
                                            }}
                                            className="w-full bg-black hover:bg-gray-950 text-white font-black py-5 rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-widest text-sm border border-white/10"
                                        >
                                            Agregar a mi Cotización
                                        </button>

                                        <div className="text-center">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                {getTotalItems() > 0
                                                    ? `Tienes ${getTotalItems()} productos para cotizar`
                                                    : 'Solicita una cotización sin compromiso'}
                                            </span>
                                        </div>

                                        {/* WhatsApp Direct Button */}
                                        <a
                                            href={getWhatsAppLink(`Hola Sueño Dorado, estoy interesado(a) en recibir información sobre ${product.name}.`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black py-5 rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            Asesoría Personalizada VIP
                                        </a>

                                        {/* B2B Inquiry Button */}
                                        <a
                                            href={getWhatsAppLink(`Hola, soy un cliente mayorista interesado en el producto: *${product.name}*\nTalla: ${selectedSize || 'Por definir'}\nCantidad estimada: ${quantity} unidades\n¿Podrían enviarme una cotización corporativa especial?`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-transparent border-2 border-gray-200 dark:border-white/10 hover:border-gold-500 text-gray-900 dark:text-white font-black py-5 rounded-full transition-all hover:text-gold-500 uppercase tracking-widest text-[10px] flex items-center justify-center gap-3"
                                        >
                                            <FaBuilding className="w-4 h-4" />
                                            Consulta de Venta por Mayor (B2B)
                                        </a>
                                    </div>
                                </div>

                                {/* Product SKU */}
                                <div className="border-t border-gray-100 dark:border-gray-900 pt-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500 font-light uppercase tracking-widest">SKU:</span>
                                            <span className="ml-2 text-xs font-black text-gray-900 dark:text-white uppercase">{product.sku || 'SUE-GOLD-MP-001'}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                                <FaShare className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Specs Modal */}
                <ProductSpecsModal
                    product={product}
                    isOpen={showSpecsModal}
                    onClose={() => setShowSpecsModal(false)}
                    specs={specs}
                    detailedSpecs={detailedSpecs}
                />
            </MainLayout>
        </>
    );
};

export default ProductDetailsView;
