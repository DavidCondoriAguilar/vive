import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDragCarousel } from '@/hooks/useDragCarousel';

// Sub-components
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroControls from './HeroControls';
import EngineeringGrid from '@/components/ui/EngineeringGrid';

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
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      title: 'Tu Salud con Vive',
      subtitle: 'Protección Certificada',
      features: ['Antialérgico', 'Antiácaros', 'Esterilizado'],
      badge: 'BIENESTAR'
    },
    {
      id: 2,
      variant: 'logistics',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
      title: 'Envíos Nacionales',
      subtitle: 'Cobertura a todo el Perú',
      features: ['Entrega 24h', 'Flota Propia', 'Nacional'],
      badge: 'RAPIDEZ'
    },
    {
      id: 3,
      variant: 'business',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
      title: 'Soluciones B2B',
      subtitle: 'Precio directo de Fábrica',
      features: ['+30 Años', 'Ahorro -50%', 'Hoteles'],
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
      className={`relative w-full h-[100dvh] overflow-hidden bg-[#050505] transition-opacity duration-1000 group/carousel ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ref={carouselRef}
      {...handlers}
    >
      <HeroBackground slides={slides} currentSlide={currentSlide} />

      <EngineeringGrid color="#ffffff" opacity="0.1" size="60px" />

      <div className="relative z-20 container mx-auto h-full px-6 lg:px-20 flex items-center">
        <HeroContent slides={slides} currentSlide={currentSlide} navigate={navigate} />
        <HeroControls slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} progress={progress} />
      </div>

      {/* Mobile Layout UI Nodes */}
      <div className="lg:hidden absolute bottom-10 left-0 w-full flex justify-center items-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[2px] rounded-full transition-all duration-500 ${index === currentSlide ? 'w-12 bg-vive-500 shadow-[0_0_10px_rgba(41,156,71,0.5)]' : 'w-6 bg-white/20'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-6 z-30 lg:hidden text-white/50">
        <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Fábrica Vive // Perú 2026</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
