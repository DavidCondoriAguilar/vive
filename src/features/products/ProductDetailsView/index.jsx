import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { useCart } from '@/contexts/CartContext';
import { getStructuredData } from './utils/accessibility';
import { useProductDetails, useProductImages, useProductSEO } from './hooks/useProductDetails';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductActions from './components/ProductActions';
import ProductEngineeringExhibit from './components/ProductEngineeringExhibit';
import ProductEngineeringDetails from './components/ProductEngineeringDetails';
import ProductSpecsModal from '@/components/product/ProductSpecsModal';

const ProductDetailsView = () => {
    const { productId } = useParams();
    const { product, loading, error } = useProductDetails();
    const { productImages, activeImageIndex, setActiveImageIndex } = useProductImages(product);
    const seoData = useProductSEO(product);
    const structuredData = getStructuredData(product);
    const { addToCart } = useCart();
    const [showSpecsModal, setShowSpecsModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
            <div className="w-10 h-10 border-4 border-vive-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (error || !product) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black space-y-4">
            <h2 className="text-xl font-black uppercase tracking-widest text-gray-400">Página no disponible</h2>
            <Link to="/catalogo" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold uppercase tracking-widest text-[10px]">
                Volver al Catálogo
            </Link>
        </div>
    );

    const handleAddToCart = (productData) => {
        addToCart(productData, productData.quantity, productData.selectedSize);
    };

    return (
        <>
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <link rel="canonical" href={seoData.canonical} />
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <MainLayout>
                <div className="min-h-screen bg-white dark:bg-[#050505] selection:bg-vive-600/30 pt-4 lg:pt-8">

                    {/* The Breadcrumb is provided by MainLayout, so we keep this space clear y tight */}
                    <div className="container mx-auto px-6 lg:px-20 py-4">
                        {/* Space placeholder if needed, otherwise transparent */}
                    </div>

                    {/* Integrated Presentation Grid - Tighter gaps */}
                    <div className="container mx-auto px-6 lg:px-20 pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                            {/* Left Column: Visuals & Engineering Exhibit */}
                            <div className="lg:col-span-6 flex flex-col items-stretch">
                                <ProductImageGallery
                                    productImages={productImages}
                                    activeImageIndex={activeImageIndex}
                                    setActiveImageIndex={setActiveImageIndex}
                                    productName={product.name}
                                />
                                <ProductEngineeringExhibit product={product} />
                            </div>

                            {/* Right Column: Narrative, Actions & Details */}
                            <div className="lg:col-span-6 flex flex-col">
                                <ProductInfo product={product} />
                                <div className="mt-6">
                                    <ProductActions
                                        product={product}
                                        onAddToCart={handleAddToCart}
                                        onShowSpecs={() => setShowSpecsModal(true)}
                                    />
                                </div>
                                <ProductEngineeringDetails product={product} />
                            </div>
                        </div>
                    </div>

                    {/* Trust Segment - Redesigned to be ultra-integrated */}
                    <div className="bg-gray-50/30 dark:bg-zinc-950/30 py-8 border-t border-gray-100 dark:border-white/5">
                        <div className="container mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60">
                            <div className="text-center sm:text-left">
                                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">Excelencia en cada fibra</p>
                                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Fabricación Nacional</h3>
                            </div>
                            <p className="max-w-md text-center sm:text-right text-[10px] text-gray-500 font-medium leading-relaxed">
                                Respaldamos cada producto con un control de calidad riguroso en nuestra planta propia, garantizando un descanso de clase mundial.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Legacy Tech Modal - Keeping for deep specs access */}
                <ProductSpecsModal
                    product={product}
                    isOpen={showSpecsModal}
                    onClose={() => setShowSpecsModal(false)}
                />
            </MainLayout>
        </>
    );
};

export default ProductDetailsView;
