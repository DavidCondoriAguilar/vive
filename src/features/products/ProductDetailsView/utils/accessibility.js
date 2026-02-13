export const getAltText = (imageName, productName) => {
    if (!imageName || !productName) return 'Imagen de producto';

    if (imageName.includes('main') || imageName.includes('-main')) {
        return `${productName} - Vista principal del colchón, mostrando su diseño y acabado premium`;
    } else if (imageName.includes('diag') || imageName.includes('diagonal')) {
        return `${productName} - Vista diagonal del colchón, mostrando su grosor y estructura`;
    } else if (imageName.includes('two') || imageName.includes('-two')) {
        return `${productName} - Vista secundaria del colchón, mostrando detalles adicionales`;
    } else if (imageName.includes('detalle') || imageName.includes('technical')) {
        return `${productName} - Especificaciones técnicas y estructura interna del colchón`;
    } else {
        return `${productName} - Innovación en descanso por Vive`;
    }
};

export const getStructuredData = (product) => {
    if (!product) return {};

    const hasPrice = product.price != null && product.price !== '' && Number(product.price) > 0;
    const offers = {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Vive",
            "url": "https://vive.pe"
        }
    };
    if (hasPrice) {
        offers.priceCurrency = "PEN";
        offers.price = String(product.price);
    }

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description || "Colchón premium con resortes pocket independientes",
        "image": `https://vive.pe${product.image}`,
        "brand": {
            "@type": "Brand",
            "name": "Vive"
        },
        "category": product.category,
        "offers": offers,
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
    };
};
