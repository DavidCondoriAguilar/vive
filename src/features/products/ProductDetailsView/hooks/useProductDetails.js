import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ENHANCED_CATALOG } from '@core/utils/constants';

export const useProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 100));

                const foundProduct = ENHANCED_CATALOG.find(p => p.id === productId);

                if (!foundProduct) {
                    setError('Producto no encontrado');
                    return;
                }

                setProduct(foundProduct);
            } catch (err) {
                setError('Error al cargar el producto');
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    return { product, loading, error };
};

export const useProductImages = (product) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setActiveImageIndex(0);
        }
    }, [product]);

    const productImages = product?.images || [product?.image].filter(Boolean);

    return {
        productImages,
        activeImageIndex,
        setActiveImageIndex
    };
};

export const useProductSEO = (product) => {
    if (!product) return {};

    const brand = 'Vive';
    const categoryLabel = product.category === 'resorte' ? 'Colchón de Resortes' :
                          product.category === 'espuma' ? 'Colchón de Espuma' :
                          'Producto';

    const description = `${product.name}: ${categoryLabel} premium fabricado por ${brand} en Perú. ${product.features?.slice(0, 2).join(', ') || 'Tecnología de descanso avanzada'}. Compra directa de fábrica.`;

    return {
        title: `${product.name} - ${categoryLabel} Premium | ${brand} Perú`,
        description,
        canonical: `https://vive.pe/producto/${product.id}`,
        openGraph: {
            title: `${product.name} - ${brand} Perú`,
            description,
            image: `https://vive.pe${product.image}`,
            type: 'product'
        }
    };
};
