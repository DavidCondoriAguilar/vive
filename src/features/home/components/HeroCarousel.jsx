import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDragCarousel } from '@shared/hooks/useDragCarousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sub-components
import HeroBackground from './HeroBackground';
import HeroControls from './HeroControls';
import EngineeringGrid from '@shared/components/ui/EngineeringGrid';
import DownloadCatalogButton from '@shared/components/ui/DownloadCatalogButton';
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

      {/* Download CTA — bottom-left */}
      <div className="absolute bottom-8 lg:bottom-10 left-6 lg:left-10 z-30 pointer-events-auto animate-fade-in-up delay-700">
        <DownloadCatalogButton />
      </div>

      {/* Navigation — Minimal Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 px-3 lg:px-6 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="group/btn-prev w-12 h-12 flex items-center justify-center pointer-events-auto relative"
          aria-label="Anterior"
        >
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover/btn-prev:bg-white/5 transition-all duration-700"></div>
          <svg className="relative w-6 h-6 text-vive-500/40 group-hover/btn-prev:text-vive-500 -translate-x-[1px] group-hover/btn-prev:-translate-x-[3px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="group/btn-next w-12 h-12 flex items-center justify-center pointer-events-auto relative"
          aria-label="Siguiente"
        >
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover/btn-next:bg-white/5 transition-all duration-700"></div>
          <svg className="relative w-6 h-6 text-vive-500/40 group-hover/btn-next:text-vive-500 translate-x-[1px] group-hover/btn-next:translate-x-[3px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-6 left-6 z-30 lg:hidden text-white/50">
        <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Fábrica Vive // Perú 2026</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
