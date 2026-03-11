import React from 'react';
import { FaTimes, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/contexts/CartContext';
import { getWhatsAppLink } from '@/utils/constants';

const ProductModal = ({ product, isOpen, onClose, selectedSize = null }) => {
  const { addToCart } = useCart();

  console.log('ProductModal rendered:', { product, isOpen, selectedSize }); // Debug log

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const validPrice = isNaN(numPrice) ? 0 : numPrice;
    return `S/. ${validPrice.toFixed(2)}`;
  };

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize);
    onClose();
  };

  const handleWhatsAppOrder = () => {
    const message = `*Consulta de Producto - Sueño Dorado*\n\n` +
      `*Producto:*\n` +
      `• ${product.name}\n` +
      `${selectedSize ? `• Talla: ${selectedSize}\n` : ''}` +
      `• Precio: ${formatPrice(selectedSize ? product.sizes?.[selectedSize] || product.price : product.price)}\n\n` +
      `*Mensaje:*\n` +
      `Hola, estoy interesado(a) en este producto. ¿Podrían darme más información?\n\n` +
      `---\n` +
      `*Sueño Dorado - Fábrica de Colchones Premium*`;
    
    const whatsappLink = getWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden glass-grid">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors shadow-lg"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Product Image */}
          <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-900">
            <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl text-gray-500 dark:text-gray-400">🛏️</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Imagen no disponible</p>
                  </div>
                </div>
              )}

              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-vive-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                {product.category && (
                  <p className="text-vive-500 font-medium">{product.category}</p>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-vive-600">
                  {formatPrice(selectedSize ? product.sizes?.[selectedSize] || product.price : product.price)}
                </span>
                {selectedSize && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Talla: {selectedSize}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Descripción
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Características
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-vive-500 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && Object.keys(product.sizes).length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tallas Disponibles
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.entries(product.sizes).map(([size, price]) => (
                      <div 
                        key={size}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          size === selectedSize
                            ? 'border-vive-500 bg-vive-50 dark:bg-vive-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <div className="font-medium text-gray-900 dark:text-white">{size}</div>
                        <div className="text-sm text-vive-600 font-bold">{formatPrice(price)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials */}
              {product.materials && product.materials.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Materiales
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Warranty */}
              {product.warranty && (
                <div className="bg-vive-50 dark:bg-vive-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-vive-700 dark:text-vive-400 mb-1">
                    Garantía
                  </h4>
                  <p className="text-vive-600 dark:text-vive-300">{product.warranty}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-vive-500 hover:bg-vive-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Consultar por WhatsApp
                </button>

                <button
                  onClick={onClose}
                  className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
