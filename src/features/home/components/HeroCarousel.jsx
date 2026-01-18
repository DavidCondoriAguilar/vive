import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Sueño Dorado",
      subtitle: "Fabricación Premium",
      description: "Colchones hechos desde cero en Lima, Perú",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 2,
      title: "Calidad Industrial",
      subtitle: "Tecnología Alemana",
      description: "Máquinas y procesos de fabricación europea",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 3,
      title: "Entrega Inmediata",
      subtitle: "Todo en Stock",
      description: "Producción continua para entrega inmediata",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  currentSlide === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-light text-white mb-4 leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-4xl font-light text-white/80 mb-6">
                  {slide.subtitle}
                </h2>

                {/* Description */}
                <p className="text-lg text-white/70 mb-12 max-w-lg leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA */}
                <Link
                  to="/catalogo"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>Ver Colección</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
