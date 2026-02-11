import React from 'react';
import { FaStar, FaShieldAlt, FaTruck } from 'react-icons/fa';

const ProductInfo = ({ product }) => {
    return (
        <div className="space-y-6">
            {/* Product Header */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-black text-black dark:text-white leading-tight mb-4">
                    {product.name}
                </h1>
                
                {/* Rating and Badge */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            (124 Reseñas)
                        </span>
                    </div>
                    {product.badge && (
                        <span className="px-3 py-1 bg-vive-500 text-black text-xs font-bold rounded-full">
                            {product.badge}
                        </span>
                    )}
                </div>

                {/* Price */}
                <div className="mb-6">
                    <div className="text-3xl font-bold text-black dark:text-white">
                        Precio por Consultar
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Precios especiales para mayoristas
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {product.description}
                </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <FaTruck className="w-5 h-5 text-vive-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                        Envío Gratis
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-5 h-5 text-vive-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                        Garantía
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <FaStar className="w-5 h-5 text-vive-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                        Calidad Premium
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-5 h-5 text-vive-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                        Stock Limitado
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
