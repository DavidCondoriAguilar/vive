import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ProductActions = ({ product, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= 99) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        onAddToCart({
            ...product,
            selectedSize,
            quantity
        });
    };

    return (
        <div className="space-y-6">
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Selecciona tu Tamaño
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                                    selectedSize === size
                                        ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                                        : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Quantity Selection */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Cantidad
                </label>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            disabled={quantity <= 1}
                        >
                            <FaMinus className="w-3 h-3" />
                        </button>
                        <span className="px-4 py-2 font-medium min-w-[60px] text-center">
                            {quantity}
                        </span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            disabled={quantity >= 99}
                        >
                            <FaPlus className="w-3 h-3" />
                        </button>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        Ajustar pedido
                    </span>
                </div>
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-6 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
                Agregar a mi Cotización
            </button>

            {/* Additional Info */}
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Tienes {quantity * (product.price || 0)} productos para cotizar
            </div>
        </div>
    );
};

export default ProductActions;
