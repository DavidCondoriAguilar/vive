import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ENHANCED_CATALOG } from '@/utils/constants';

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

    return {
        title: `${product.name} - Colchón Premium Sueño Dorado | Precio por Consultar`,
        description: `Compra el ${product.name}, colchón premium de Sueño Dorado. ${product.description || 'Experimenta la cima del descanso peruano con resortes pocket y envío gratis en Lima.'}`,
        canonical: `https://suenodorado.pe/producto/${product.id}`,
        openGraph: {
            title: `${product.name} - Colchón Premium Sueño Dorado`,
            description: `Compra el ${product.name}, colchón premium de Sueño Dorado. ${product.description || 'Experimenta la cima del descanso peruano con resortes pocket y envío gratis en Lima.'}`,
            image: `https://suenodorado.pe${product.image}`,
            type: 'product'
        }
    };
};
