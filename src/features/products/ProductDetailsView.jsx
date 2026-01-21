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
    FaHeart,
    FaShare,
    FaChevronRight,
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
    const [isWishlist, setIsWishlist] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const product = useMemo(() => {
        const found = ENHANCED_CATALOG.find(p => p.id === productId);
        return found || ENHANCED_CATALOG[0];
    }, [productId]);

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

    return (
        <>
            <Helmet>
                <title>{product.name} - Colchón Premium Sueño Dorado | Precio por Consultar</title>
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
                            "availability": "https://schema.org/InStock",
                            "price": "0",
                            "priceCurrency": "PEN",
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
                {/* Luxury Hero Section */}
                <div className="min-h-screen bg-white dark:bg-black">
                    {/* Minimalist Navigation Breadcrumb */}
                    <div className="border-b border-gray-100 dark:border-gray-900">
                        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                            <nav className="flex items-center gap-1 sm:gap-2 text-xs font-light tracking-widest text-gray-500 overflow-x-auto">
                                <Link to="/" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">Inicio</Link>
                                <FaChevronRight className="w-2 h-2 flex-shrink-0" />
                                <Link to="/catalogo" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">Catálogo</Link>
                                <FaChevronRight className="w-2 h-2 flex-shrink-0" />
                                <span className="text-black dark:text-white font-medium truncate">{product.name}</span>
                            </nav>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24">

                            {/* LEFT: Luxury Image Gallery */}
                            <div className="space-y-4 sm:space-y-6">
                                {/* Main Image */}
                                <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 overflow-hidden group">
                                    <LazyImage
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    {/* Luxury Overlay Elements */}
                                    <div className="absolute top-3 sm:top-6 right-3 sm:right-6">
                                        <span className="px-2 sm:px-4 py-1 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                            Zoom HD Disponible
                                        </span>
                                    </div>

                                    {/* Wishlist & Share */}
                                    <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex gap-2 sm:gap-3">
                                        <button
                                            onClick={() => setIsWishlist(!isWishlist)}
                                            className="w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                                        >
                                            <FaHeart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlist ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                                        </button>
                                        <button className="w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                                            <FaShare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImageIndex(i - 1)}
                                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === i - 1
                                                ? 'border-black dark:border-white shadow-lg'
                                                : 'border-gray-200 dark:border-gray-800 hover:border-gray-400'
                                                }`}
                                        >
                                            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                <span className="text-xs text-gray-400">{i}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
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
                                                <span className="text-xs text-gray-500 font-light">(124 Reseñas)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black text-black dark:text-white leading-tight uppercase tracking-tight">
                                        {product.name}
                                    </h1>

                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-lg">
                                        {product.description}
                                    </p>
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
                                        { icon: FaShieldAlt, text: "Garantía Real" },
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

                                {/* Enhanced Technical Features Section */}
                                <div className="border-t border-gray-100 dark:border-gray-900 pt-8">
                                    <h3 className="text-sm font-black text-black dark:text-white uppercase tracking-widest mb-6">Beneficios y características</h3>

                                    {/* Product Features Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        {/* Colchón Features */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">C</span>
                                                COLCHÓN
                                            </h4>
                                            <div className="space-y-3">
                                                {[
                                                    "Tela tejida de punto con diseño 3D",
                                                    "Tela higroscópica que absorbe la humedad",
                                                    "Tela con acabado antihongos-antibacterias-antiácaros",
                                                    "Espuma viscoelástica D70 adaptable",
                                                    "Doble capa Zebra HR y HD para soporte",
                                                    "Sistema One Side (una cara)",
                                                    "Sensación ultra suave premium",
                                                    `Garantía del colchón ${product.warranty || '10 años'}`
                                                ].map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <FaCheckCircle className="w-4 h-4 text-black dark:text-white flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Additional Components */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-8 h-8 bg-gray-200 text-black rounded-full flex items-center justify-center text-xs">+</span>
                                                COMPONENTES
                                            </h4>
                                            <div className="space-y-3">
                                                {[
                                                    "Tarima estructural reforzada",
                                                    "Cabecera tapizada a juego",
                                                    "Soporte lumbar integrado",
                                                    "Base antideslizante",
                                                    "Sistema de ventilación superior"
                                                ].map((component, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <FaCheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{component}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quality Certifications */}
                                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl mb-8">
                                        <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Certificaciones de Calidad</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                                                    <span className="text-white dark:text-black text-xs font-black">✓</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-gray-900 dark:text-white">Proceso de Desinfección</p>
                                                    <p className="text-[9px] text-gray-500">Sanización certificada</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                                                    <span className="text-white dark:text-black text-xs font-black">ID</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-gray-900 dark:text-white">Chip de Identificación</p>
                                                    <p className="text-[9px] text-gray-500">Trazabilidad garantizada</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                                                    <span className="text-white dark:text-black text-xs font-black">LAB</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-gray-900 dark:text-white">Laboratorios Acreditados</p>
                                                    <p className="text-[9px] text-gray-500">Certificación internacional</p>
                                                </div>
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
                                            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black py-5 rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            Asesoría Personalizada VIP
                                        </a>

                                        {/* B2B Inquiry Button */}
                                        <a
                                            href={getWhatsAppLink(`Hola, soy un cliente mayorista interesado en el producto: *${product.name}*\nTalla: ${selectedSize || 'Por definir'}\nCantidad estimada: ${quantity} unidades\n¿Podrían enviarme una cotización corporativa especial?`)}
                                            target="_blank"
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
                                            <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                                <FaHeart className="w-4 h-4 text-gray-600 dark:text-gray-400" />
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
