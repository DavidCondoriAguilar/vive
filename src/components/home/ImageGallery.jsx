import React, { useState, useEffect } from 'react';
import { FaExpand, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageGallery = ({ images = [], title = "Galería de Productos" }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  if (!images.length) return null;

  const openFullscreen = (index) => {
    setSelectedImage(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const nextSlide = () => {
    const maxSlide = Math.max(0, images.length - itemsPerView);
    setCurrentSlide(prev => Math.min(prev + itemsPerView, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - itemsPerView, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index * itemsPerView);
  };

  const visibleImages = images.slice(currentSlide, currentSlide + itemsPerView);
  const totalSlides = Math.ceil(images.length / itemsPerView);
  const currentSlideIndex = Math.floor(currentSlide / itemsPerView);

  return (
    <div className="py-12 gradient-variant-1 grid-variant-1 relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400">Explora nuestros productos en detalle</p>
        </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        {images.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
                currentSlide === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-100 hover:scale-110'
              }`}
              aria-label="Anterior"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= images.length - itemsPerView}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
                currentSlide >= images.length - itemsPerView
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100 hover:scale-110'
              }`}
              aria-label="Siguiente"
            >
              <FaChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Images Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  onClick={() => openFullscreen(index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt || `Imagen ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaExpand className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold">{image.title || `Producto ${index + 1}`}</h3>
                    {image.description && (
                      <p className="text-gray-200 text-sm">{image.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
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
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === selectedImage
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
    </div>
  );
};

export default ImageGallery;
