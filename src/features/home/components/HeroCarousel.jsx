import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDragCarousel } from '@/hooks/useDragCarousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sub-components
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroControls from './HeroControls';
import EngineeringGrid from '@/components/ui/EngineeringGrid';
import kaiBanner from '@/assets/images/banners/kai-caorusel.png';
import carousel2 from '@/assets/images/banners/carousel2.png';
import geminiBanner from '@/assets/images/banners/gemini-hero.png';

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
      variant: 'premium',
      image: kaiBanner,
      title: 'Vive Kai',
      subtitle: 'Confort Infinito',
      badge: 'LANZAMIENTO',
      tech: 'KAI Fusion Flow',
      hideContent: true,
      pureImage: true,
      specs: [
        { label: 'Núcleo', value: 'High Density' },
        { label: 'Tejido', value: 'Cool Touch' },
        { label: 'Soporte', value: 'Ortopédico' },
        { label: 'Calidad', value: 'Premium' }
      ]
    },
    {
      id: 2,
      variant: 'premium-4k',
      image: carousel2,
      title: 'Diseño Superior',
      subtitle: 'Resolución Maestra',
      badge: 'PREMIUM',
      tech: '4K Ultra Fidelity',
      hideContent: true,
      pureImage: true,
      specs: [
        { label: 'Imagen', value: 'Ultra HD' },
        { label: 'Fidelidad', value: '100%' },
        { label: 'Detalle', value: 'Nivel Master' },
        { label: 'Impacto', value: 'Cine' }
      ]
    },
    {
      id: 3,
      variant: 'comfort',
      image: geminiBanner,
      title: 'Descanso Perfecto',
      subtitle: 'Cuerpo y Mente',
      badge: 'BIENESTAR',
      tech: 'Ergo-Dynamic',
      hideContent: true,
      pureImage: true,
      specs: [
        { label: 'Soporte', value: 'Total' },
        { label: 'Balance', value: 'Híbrido' },
        { label: 'Confort', value: 'Máximo' },
        { label: 'Garantía', value: '15 años' }
      ]
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || !isLoaded) {
      setProgress(0);
      return;
    }

    const slideTimer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

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
      className={`relative w-full h-[92dvh] lg:h-[88dvh] min-h-[600px] overflow-hidden bg-[#050505] transition-opacity duration-1000 group/carousel ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ref={carouselRef}
      {...handlers}
    >
      <HeroBackground slides={slides} currentSlide={currentSlide} />

      <EngineeringGrid color="#299C47" opacity="0.04" size="60px" />

      {/* Content Overlay - Optimized for Clean Banners */}
      <div className="absolute inset-0 z-20 pointer-events-none pt-[80px] lg:pt-[120px]">
        <div className="container mx-auto h-full flex items-center justify-start px-6 lg:px-20">
          <HeroContent slides={slides} currentSlide={currentSlide} navigate={navigate} />
        </div>
      </div>

      {/* Navigation Arrows - Minimalist 2026 Concept */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 px-4 lg:px-8 flex justify-between pointer-events-none transition-all duration-700">
        <button
          onClick={prevSlide}
          className="w-12 h-20 flex items-center justify-center text-white/20 hover:text-white transition-all duration-500 pointer-events-auto group/btn-nav active:scale-95"
          aria-label="Anterior"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-8 h-8 bg-vive-500/0 group-hover/btn-nav:bg-vive-500/10 blur-xl rounded-full transition-all duration-700"></div>
            <svg className="w-8 h-8 stroke-[1px] transition-transform duration-500 group-hover/btn-nav:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-20 flex items-center justify-center text-white/20 hover:text-white transition-all duration-500 pointer-events-auto group/btn-nav active:scale-95"
          aria-label="Siguiente"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-8 h-8 bg-vive-500/0 group-hover/btn-nav:bg-vive-500/10 blur-xl rounded-full transition-all duration-700"></div>
            <svg className="w-8 h-8 stroke-[1px] transition-transform duration-500 group-hover/btn-nav:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>

      <div className="absolute bottom-6 left-6 z-30 lg:hidden text-white/50">
        <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Fábrica Vive // Perú 2026</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
