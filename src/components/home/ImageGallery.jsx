import React, { useState, useEffect } from 'react';
import { FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageGallery = ({ images = [], title = "Nuestra Galería de Productos" }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen();
      }
    };

    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  if (!images.length) return null;

  const openFullscreen = (index) => {
    setSelectedImage(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-700">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vive-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Elite Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-vive-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Portafolio Visual</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase leading-[0.9] tracking-tighter">
              Inspiración <br /> <span className="text-vive-500 italic font-light">en cada Detalle</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-sm md:text-right">
            Explora la estética y la ingeniería detrás de nuestros productos más exclusivos. Calidad que se puede ver.
          </p>
        </div>

        {/* Bento-Style Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group cursor-pointer rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700"
              onClick={() => openFullscreen(index)}
            >
              {/* Image with zoom effect */}
              <img
                src={image.url}
                alt={image.alt || `Imagen ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover Indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <FaExpand className="w-4 h-4" />
                </div>
              </div>

              {/* Content Detail */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-vive-500 text-[9px] font-black uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Vista Exclusiva</div>
                <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  {image.title || `Captura 0${index + 1}`}
                </h3>
                {image.description && (
                  <p className="text-gray-400 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status - Minimalist */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-gray-200 dark:bg-white/10"></div>
          <span className="text-gray-400 dark:text-gray-600 font-bold text-[10px] uppercase tracking-[0.4em]">Fin de Galería</span>
          <div className="h-[1px] w-12 bg-gray-200 dark:bg-white/10"></div>
        </div>
      </div>

      {/* Modern Fullscreen Lightbox */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-8 right-8 z-[60] w-14 h-14 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-vive-500 hover:text-black transition-all group"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group/modal overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
              <img
                src={images[selectedImage]?.url || ''}
                alt={images[selectedImage]?.alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="mt-10 text-center animate-fade-in-up">
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">
                {images[selectedImage]?.title}
              </h3>
              <p className="text-gray-500 font-medium text-lg max-w-2xl">{images[selectedImage]?.description}</p>
            </div>
          </div>

          {/* Nav Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-vive-500 hover:text-black transition-all group"
              >
                <FaChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev + 1) % images.length); }}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-vive-500 hover:text-black transition-all group"
              >
                <FaChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
