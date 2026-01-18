import React, { useState, useEffect } from 'react';
import { FaExpand, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageGallery = ({ images = [], title = "Galería de Productos" }) => {
  // Modal logic states
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images.length) return null;

  const openFullscreen = (index) => {
    setSelectedImage(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Galería Visual</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mt-2 mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Descubre la elegancia y el detalle en cada uno de nuestros productos a través de nuestra galería.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => openFullscreen(index)}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt || `Imagen ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <FaExpand className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Text Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
                  {image.title || `Vista ${index + 1}`}
                </h3>
                {image.description && (
                  <p className="text-gray-200 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[60] w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Image */}
          <div className="max-w-6xl max-h-full">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt || `Imagen ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">
                {images[selectedImage].title || `Producto ${selectedImage + 1}`}
              </h3>
              {images[selectedImage].description && (
                <p className="text-gray-300 mt-2">{images[selectedImage].description}</p>
              )}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${index === selectedImage
                  ? 'border-gold-500 scale-110'
                  : 'border-white/30 hover:border-white/60'
                  }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Navigation Arrows in Fullscreen */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                aria-label="Anterior"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                aria-label="Siguiente"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
