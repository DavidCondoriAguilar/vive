import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';
import { useDragCarousel } from '@/hooks/useDragCarousel';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 7000;

  const slides = [
    {
      id: 1,
      variant: 'zen',
      // Mobile optimized width (w=800) for faster LCP
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      title: 'Tu Salud es Nuestra Prioridad',
      subtitle: 'Triple Protección Certificada',
      features: ['Antialérgico', 'Antiácaros', 'Esterilizado'],
      badge: 'BIENESTAR'
    },
    {
      id: 2,
      variant: 'logistics',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
      title: 'Envíos a Todo el Perú',
      subtitle: 'Lima, Callao y Provincias',
      features: ['Entrega 24h', 'Flota Propia', 'Nacional'],
      badge: 'RAPIDEZ'
    },
    {
      id: 3,
      variant: 'business',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
      title: 'Venta por Mayor & Corporativo',
      subtitle: 'Directo de nuestra Fábrica',
      features: ['+30 Años Trayectoria', 'Ahorro -50%', 'Hoteles'],
      badge: 'NEGOCIOS'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const handleSlideChange = (direction) => {
    if (direction === 'next') nextSlide();
    else if (direction === 'prev') prevSlide();
  };

  const { carouselRef, handlers } = useDragCarousel(handleSlideChange);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Optimize initialization
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Simplified and Robust Autoplay Logic
  useEffect(() => {
    if (!isAutoPlay || !isLoaded) {
      setProgress(0);
      return;
    }

    // Set an interval to change the slide
    const slideTimer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    // Reset progress and start it for the current slide
    // Using a micro-timeout to ensure the transition kicks in
    setProgress(0);
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 50);

    return () => {
      clearInterval(slideTimer);
      clearTimeout(progressTimer);
    };
  }, [currentSlide, isAutoPlay, isLoaded, nextSlide]);

  return (
    <section
      className={`relative w-full h-[100dvh] overflow-hidden bg-black transition-opacity duration-700 group/carousel ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ref={carouselRef}
      {...handlers}
      onTouchStart={() => setIsAutoPlay(false)}
      onTouchEnd={() => setIsAutoPlay(true)}
    >
      {/* 100% Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* ULTRA MINIMALIST CONTENT BOX */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 pb-20 px-6">
        {slides.map((slide, index) => (
          <div
            key={`content-${slide.id}`}
            className={`absolute flex flex-col items-center text-center transition-all duration-1000 max-w-5xl
              ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight uppercase tracking-tighter drop-shadow-2xl transition-all duration-700 px-2">
              {slide.title}
            </h2>

            <h2 className="text-sm md:text-lg font-medium text-vive-400 mb-6 md:mb-8 tracking-[0.2em] uppercase py-2 border-y border-vive-500/10 px-4">
              {slide.subtitle}
            </h2>

            {/* Premium Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-6 md:mb-10 px-2">
              {slide.features.map((feature, fIdx) => (
                <div key={fIdx} className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="text-[7px] md:text-[9px] font-bold text-white uppercase tracking-[0.2em]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons - Modern 2026 Elite Design */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 px-2">
              {/* Primary: Catálogo */}
              <button
                onClick={() => navigate('/catalogo')}
                className="group relative w-full sm:w-64 overflow-hidden bg-vive-500 text-black px-10 py-4 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)] border border-vive-500 active:scale-95"
              >
                {/* Subtle Inner Glow Layer */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

                {/* Moving Light Beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                    Ver Catálogo
                  </span>
                  <svg
                    className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Corner Minimalist Accents (Refined) */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/20" />
              </button>

              {/* Secondary: WhatsApp */}
              <a
                href={getWhatsAppLink(`Hola Vive, estoy interesado en recibir información sobre ${slide.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-64 overflow-hidden border border-white/30 text-white px-10 py-4 transition-all duration-500 hover:border-vive-500"
              >
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vive-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs group-hover:text-vive-500 transition-colors duration-500">
                    Asesoría WA
                  </span>
                  <div className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Minimalist Hover Lines */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-vive-500 group-hover:w-full transition-all duration-500" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Minimalism Indicators */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-[3px] transition-all duration-500 rounded-full
              ${index === currentSlide ? 'w-16 bg-vive-500' : 'w-8 bg-white/20'}
            `}
          />
        ))}
      </div>

      {/* Simplified Nav Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Anterior slide"
        className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 text-white/40 hover:text-vive-500 transition-all duration-300 z-10"
      >
        <FaChevronLeft className="sm:w-10 sm:h-10 w-6 h-6" aria-hidden="true" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Siguiente slide"
        className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 text-white/40 hover:text-vive-500 transition-all duration-300 z-10"
      >
        <FaChevronRight className="sm:w-10 sm:h-10 w-6 h-6" aria-hidden="true" />
      </button>

      {/* Progress Bar (Global) */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-vive-500/30 pointer-events-none"
        style={{
          width: `${progress}%`,
          transition: progress === 100 ? `width ${SLIDE_DURATION}ms linear` : 'none'
        }}
      ></div>
    </section>
  );
};

export default HeroCarousel;
