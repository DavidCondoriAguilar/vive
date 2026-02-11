import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { useCart } from '@/contexts/CartContext';
import { getStructuredData, getAltText } from './utils/accessibility';
import { useProductDetails, useProductImages, useProductSEO } from './hooks/useProductDetails';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTechnicalSpecs from './components/ProductTechnicalSpecs';
import ProductActions from './components/ProductActions';
import ProductSpecsModal from '@/components/product/ProductSpecsModal';

const ProductDetailsView = () => {
    const { productId } = useParams();
    const { product, loading, error } = useProductDetails();
    const { productImages, activeImageIndex, setActiveImageIndex } = useProductImages(product);
    const seoData = useProductSEO(product);
    const structuredData = getStructuredData(product);
    const { addToCart } = useCart();

    // Responsive back button
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAddToCart = (productData) => {
        addToCart(productData);
        // Show success notification
    };

    const handleBack = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
        window.history.back();
        
        setTimeout(() => {
            const savedPosition = sessionStorage.getItem('scrollPosition');
            if (savedPosition) {
                window.scrollTo(0, parseInt(savedPosition));
                sessionStorage.removeItem('scrollPosition');
            }
        }, 100);
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Producto no encontrado</div>;

    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <link rel="canonical" href={seoData.canonical} />

                {/* Open Graph */}
                <meta property="og:title" content={seoData.openGraph.title} />
                <meta property="og:description" content={seoData.openGraph.description} />
                <meta property="og:image" content={seoData.openGraph.image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={`${product.name} - Colchón Premium Sueño Dorado`} />
                <meta property="og:type" content={seoData.openGraph.type} />
                <meta property="og:url" content={seoData.canonical} />
                <meta property="og:site_name" content="Sueño Dorado" />
                <meta property="og:locale" content="es_PE" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            
            {/* Responsive Back Button */}
            <button 
                style={{ 
                    position: 'fixed',
                    bottom: isMobile ? '20px' : 'auto',
                    top: isMobile ? 'auto' : '160px',
                    right: '20px', 
                    zIndex: 60, 
                    backgroundColor: '#f8f9fa', 
                    color: '#495057', 
                    padding: isMobile ? '12px 16px' : '10px 18px', 
                    borderRadius: '25px', 
                    fontSize: isMobile ? '14px' : '13px', 
                    fontWeight: '600', 
                    cursor: 'pointer', 
                    border: '1px solid #dee2e6',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }} 
                onClick={handleBack}
            >
                ← Volver
            </button>
            
            <MainLayout>
                <div className="min-h-screen bg-white dark:bg-black">
                    {/* Breadcrumb */}
                    <div className="border-b border-gray-100 dark:border-gray-900">
                        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                            <nav className="flex items-center gap-2 text-sm font-light tracking-widest text-gray-500">
                                <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Inicio</a>
                                <span className="text-vive-500">›</span>
                                <a href="/catalogo" className="hover:text-black dark:hover:text-white transition-colors">Catálogo</a>
                                <span className="text-vive-500">›</span>
                                <span className="text-black dark:text-white font-medium">{product.name}</span>
                            </nav>
                        </div>
                    </div>

                    {/* Product Content - Layout mejorado */}
                    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
                            {/* Left Column - Images */}
                            <div className="space-y-6">
                                <ProductImageGallery
                                    productImages={productImages}
                                    activeImageIndex={activeImageIndex}
                                    setActiveImageIndex={setActiveImageIndex}
                                    productName={product.name}
                                />
                            </div>

                            {/* Right Column - Info */}
                            <div className="space-y-8">
                                <ProductInfo product={product} />
                                <ProductActions 
                                    product={product} 
                                    onAddToCart={handleAddToCart}
                                />
                            </div>
                        </div>

                        {/* Technical Specifications - Separación clara */}
                        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
                            <ProductTechnicalSpecs product={product} />
                        </div>
                    </div>
                </div>

                <ProductSpecsModal
                    product={product}
                    isOpen={false}
                    onClose={() => {}}
                />
            </MainLayout>
        </>
    );
};

export default ProductDetailsView;
