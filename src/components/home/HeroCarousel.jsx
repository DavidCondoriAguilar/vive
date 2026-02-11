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

  // Simplified y Robust Autoplay Logic
  useEffect(() => {
    if (!isAutoPlay || !isLoaded) {
      setProgress(0);
      return;
    }

    // Set an interval to change the slide
    const slideTimer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    // Reset progress y start it for the current slide
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
      className={`relative w-full h-[90dvh] lg:h-[85dvh] overflow-hidden bg-[#050505] transition-opacity duration-1000 group/carousel ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ref={carouselRef}
      {...handlers}
    >
      {/* 1. Background Layers (Sophisticated Image Treatment) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1.5s] cubic-bezier(0.4, 0, 0.2, 1)
              ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover grayscale-[0.2] brightness-[0.6]"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            {/* Elite Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>

      {/* 2. Technical Architectural Grid (The "Vive" Aesthetic) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, #ffffff11 1px, transparent 1px), linear-gradient(to bottom, #ffffff11 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      {/* 3. Main Content: Editorial Split Layout */}
      <div className="relative z-20 container mx-auto h-full px-6 lg:px-20 flex items-center">
        <div className="w-full lg:w-[65%] mt-12">
          {slides.map((slide, index) => (
            <div
              key={`content-${slide.id}`}
              className={`absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out
                ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20 pointer-events-none'}
              `}
            >
              {/* Industrial Tag */}
              <div className="inline-flex items-center gap-4 px-5 py-2 bg-vive-600/10 border border-vive-600/30 rounded-full mb-8 overflow-hidden relative group/tag">
                <div className="absolute inset-0 bg-vive-600/10 -translate-x-full group-hover/tag:translate-x-0 transition-transform duration-500"></div>
                <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-pulse relative z-10"></span>
                <span className="text-[10px] font-black text-vive-500 uppercase tracking-[0.4em] relative z-10">{slide.badge} // SYSTEM_ACTIVE</span>
              </div>

              {/* Massive Editorial Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-[100px] font-display font-black text-white leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl">
                {slide.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {i === 1 ? <br /> : ''}
                    <span className={i > 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-vive-500 to-white italic font-light lowercase' : ''}>
                      {word}{' '}
                    </span>
                  </React.Fragment>
                ))}
              </h2>

              {/* Technical Subtext Side by Side with Features */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-sm">
                  <h3 className="text-vive-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Estrategia_Core</h3>
                  <p className="text-white font-text text-sm uppercase tracking-widest">{slide.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {slide.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-vive-500 rounded-full"></div>
                      <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Node: Dual Protocol Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={() => navigate('/catalogo')}
                  className="group relative w-full sm:w-80 px-12 py-7 bg-vive-600 text-white overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(41,156,71,0.2)] active:scale-95"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    <span className="font-black tracking-[0.4em] uppercase text-[10px]">Iniciar Exploración</span>
                    <FaChevronRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>

                <a
                  href={getWhatsAppLink(`Hola Vive, solicito información especializada sobre ${slide.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-80 px-12 py-7 border border-white/20 text-white overflow-hidden transition-all duration-500 hover:border-vive-500/50"
                >
                  <div className="absolute inset-0 bg-vive-500/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    <span className="font-bold tracking-[0.4em] uppercase text-[10px] group-hover:text-vive-500 transition-colors">Solicitar Asistencia</span>
                    <div className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-ping"></div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Secondary Node: The "Status Terminal" (Right Side) */}
        <div className="hidden lg:flex flex-col items-end gap-12 absolute right-20 top-1/2 -translate-y-1/2">
          <div className="space-y-4 text-right">
            <span className="text-[10px] font-black text-vive-500 uppercase tracking-[0.5em] block">Navigation // Interface</span>
            <div className="flex flex-col gap-4 items-end">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group flex items-center gap-4 outline-none"
                >
                  <span className={`text-[10px] font-mono font-bold transition-all duration-500 ${index === currentSlide ? 'text-white' : 'text-gray-600 group-hover:text-vive-500'}`}>0{index + 1}</span>
                  <div className={`h-px transition-all duration-500 ${index === currentSlide ? 'w-16 bg-vive-500' : 'w-8 bg-gray-800 group-hover:w-12 group-hover:bg-vive-500'}`}></div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 border border-white/5 bg-black/40 backdrop-blur-3xl rounded-sm max-w-[280px] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Efficiency Status</span>
              <span className="text-[9px] font-mono text-vive-500 font-bold tracking-widest">NOMINAL [98.2%]</span>
            </div>
            <div className="h-1 bg-white/5 w-full">
              <div
                className="h-full bg-vive-500 transition-all duration-[7s] linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-[9px] font-mono text-gray-500 leading-relaxed uppercase tracking-widest">
              Cada sistema de descanso Vive es verificado bajo protocolos de precisión industrial 4.0.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Mobile Layout UI Nodes */}
      <div className="lg:hidden absolute bottom-10 left-0 w-full flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[2px] rounded-full transition-all duration-500 ${index === currentSlide ? 'w-12 bg-vive-500 shadow-[0_0_10px_rgba(41,156,71,0.5)]' : 'w-6 bg-white/20'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-6 z-30 lg:hidden">
        <span className="text-[8px] font-mono text-vive-500/50 uppercase tracking-[0.3em]">VIVE_OS_V.2.6 // AUTORIZED_ACCESS</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
