import React from 'react';

const ProductActions = ({ 
    product, 
    selectedSize, 
    onSpecsClick 
}) => {
    const whatsappMessage = `Hola, quiero comprar el ${product.name} en tamaño ${selectedSize}.`;
    const whatsappUrl = `https://wa.me/51989223448?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-medium uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-80"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Comprar Ahora
            </a>
            <button 
                onClick={onSpecsClick}
                className="px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-xs sm:text-sm font-medium uppercase tracking-[0.15em] rounded-sm transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
                Ficha Técnica
            </button>
        </div>
    );
};

export default ProductActions;
