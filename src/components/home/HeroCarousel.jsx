import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import { FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1920',
      title: 'Fabricamos Colchones en Perú',
      subtitle: 'Venta directa de fábrica',
      description: 'Espuma y resortes · Mayor y menor · Lima y provincias',
      badge: '40% OFF',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=1920',
      title: 'Colchones Premium',
      subtitle: 'Calidad hotelera para tu hogar',
      description: '10 años de garantía · Envío gratis · 100% peruano',
      badge: 'NUEVO',
      badgeColor: 'bg-green-500'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1920',
      title: 'Venta por Mayor',
      subtitle: 'Precios exclusivos B2B',
      description: 'Hoteles · Tiendas · Distribuidores · Despacho nacional',
      badge: 'B2B',
      badgeColor: 'bg-blue-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const ctaLink = getWhatsAppLink("Hola, estoy interesado en comprar colchones directamente de fábrica.");


  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden premium-section futuristic-lines">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Modern Overlay */}
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/80 to-transparent backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-20">
                <div className="max-w-2xl">
                  
                  {/* Badge */}
                  <div className={`inline-block ${slide.badgeColor} text-white px-6 py-3 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-white/20 shadow-lg`}>
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-4 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-2xl md:text-3xl font-brand text-gold-400 mb-4 drop-shadow-md">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <div className="flex flex-wrap gap-4 mb-8 text-gray-300 font-body">
                    {slide.description.split(' · ').map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4 text-gold-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/catalogo"
                      className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-heading text-lg transition-all hover:scale-105 shadow-xl backdrop-blur-sm border border-gold-400/30"
                    >
                      Comprar ahora
                      <FaArrowRight className="w-5 h-5" />
                    </Link>
                    
                    <a
                      href={ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 px-8 py-4 rounded-lg font-heading text-lg transition-all hover:scale-105 shadow-lg"
                    >
                      Cotizar por mayor
                      <FaArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-20 border border-white/20"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-20 border border-white/20"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all backdrop-blur-sm border border-white/30 ${
              index === currentSlide
                ? 'bg-gold-500 w-8 shadow-lg shadow-gold-500/50'
                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute bottom-8 right-8 w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-20 border border-white/20"
        aria-label={isAutoPlay ? 'Pausar' : 'Reproducir'}
      >
        {isAutoPlay ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <FaPlay className="w-4 h-4 ml-0.5" />
        )}
      </button>
    </section>
  );
};

export default HeroCarousel;
