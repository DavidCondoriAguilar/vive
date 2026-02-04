import React, { useState, useRef } from 'react';
import LazyImage from '@/components/common/Image';
import { FaSearchPlus } from 'react-icons/fa';

const ProductImageGallery = ({ 
    productImages, 
    activeImageIndex, 
    setActiveImageIndex,
    productName 
}) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef();

    const handleMouseMove = (e) => {
        if (!isZoomed) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomPosition({ x, y });
    };

    const handleMouseEnter = () => setIsZoomed(true);
    const handleMouseLeave = () => setIsZoomed(false);

    return (
        <div className="space-y-6">
            {/* Main Image Container */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="relative bg-gray-50 dark:bg-dream-dark-surface p-6 overflow-hidden group cursor-zoom-in rounded-lg max-w-full max-h-[500px] md:max-h-[600px] flex items-center justify-center"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <LazyImage
                        src={productImages[activeImageIndex]}
                        alt={`${productName} - Vista principal`}
                        priority={true}
                        className="max-w-full max-h-full object-contain transition-opacity duration-300"
                    />

                    {/* Zoom Indicator */}
                    {isZoomed && (
                        <div
                            className="absolute w-24 h-24 border-2 border-white rounded-full pointer-events-none shadow-2xl z-10"
                            style={{
                                left: `${zoomPosition.x}%`,
                                top: `${zoomPosition.y}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    )}

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaSearchPlus className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`rounded-lg overflow-hidden border-2 transition-all ${
                            activeImageIndex === index
                                ? 'border-black dark:border-white shadow-lg'
                                : 'border-gray-200 dark:border-gray-800 hover:border-gray-400'
                        }`}
                    >
                        <LazyImage
                            src={image}
                            alt={`${productName} - Imagen ${index + 1}`}
                            className="w-full h-full object-contain bg-gray-50 dark:bg-dream-dark-surface transition-opacity duration-300"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImageGallery;
