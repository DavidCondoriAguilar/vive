import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaLeaf, FaTruck, FaBuilding } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  const SLIDE_DURATION = 6000;

  const slides = [
    {
      id: 1,
      variant: 'zen',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069',
      title: 'Tu Salud es Nuestra Prioridad',
      subtitle: 'Triple Protección Certificada',
      features: ['Ozono', 'Rayos UV', 'Hermético'],
      badge: 'BIENESTAR'
    },
    {
      id: 2,
      variant: 'logistics',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      title: 'Envíos a Todo el Perú',
      subtitle: 'Lima, Callao y Provincias',
      features: ['Entrega 24h', 'Flota Propia', 'Nacional'],
      badge: 'RAPIDEZ'
    },
    {
      id: 3,
      variant: 'business',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071',
      title: 'Venta por Mayor & Corporativo',
      subtitle: 'Directo de nuestra Fábrica',
      features: ['Ahorro -50%', 'Hoteles', 'Tiendas'],
      badge: 'NEGOCIOS'
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    let interval;
    let startTime = Date.now();

    if (isAutoPlay) {
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentProgress = (elapsed / SLIDE_DURATION) * 100;

        if (currentProgress >= 100) {
          nextSlide();
          startTime = Date.now();
          setProgress(0);
        } else {
          setProgress(currentProgress);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  return (
    <section
      className={`relative w-full h-[100dvh] overflow-hidden bg-black transition-opacity duration-1000 group/carousel ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ref={containerRef}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
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
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* ULTRA MINIMALIST CONTENT BOX - FIXED FOR OVERFLOW */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 pb-20 px-6">
        {slides.map((slide, index) => (
          <div
            key={`content-${slide.id}`}
            className={`absolute flex flex-col items-center text-center transition-all duration-1000 max-w-5xl
              ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
          >
            {/* Adjusted Typography to prevent overflow in all resolutions */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight uppercase tracking-tighter drop-shadow-2xl transition-all duration-700">
              {slide.title}
            </h1>

            <h2 className="text-base md:text-xl font-medium text-gold-400 mb-8 md:mb-10 tracking-[0.2em] uppercase py-2 border-y border-gold-500/10">
              {slide.subtitle}
            </h2>

            {/* Premium Tags - Minimal */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
              {slide.features.map((feature, fIdx) => (
                <div key={fIdx} className="bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-[0.2em]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Direct Action Buttons - Large & Clear */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <button
                onClick={() => navigate('/catalogo')}
                className="w-56 sm:w-auto bg-gold-500 hover:bg-gold-600 text-black font-black px-8 py-3.5 rounded-full transition-all shadow-2xl uppercase tracking-[0.1em] text-[10px] md:text-xs"
              >
                Ver Catálogo
              </button>
              <a
                href={getWhatsAppLink(`Hola Sueño Dorado, estoy interesado en recibir información sobre ${slide.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-56 sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/40 font-bold px-8 py-3.5 rounded-full transition-all uppercase tracking-[0.1em] text-[10px] md:text-xs flex items-center justify-center"
              >
                WhatsApp
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
            className={`h-[3px] transition-all duration-500 rounded-full
              ${index === currentSlide ? 'w-16 bg-gold-500' : 'w-8 bg-white/20'}
            `}
          />
        ))}
      </div>

      {/* Simplified Nav Arrows */}
      {!isMobile && (
        <>
          <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-gold-500 transition-colors">
            <FaChevronLeft size={30} />
          </button>
          <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-gold-500 transition-colors">
            <FaChevronRight size={30} />
          </button>
        </>
      )}
    </section>
  );
};

export default HeroCarousel;
