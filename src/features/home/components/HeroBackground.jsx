import React from 'react';

const HeroBackground = ({ slides, currentSlide }) => {
    return (
        <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-[2s] ease-in-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className={`w-full h-full object-cover grayscale-[0.2] brightness-[0.5] transition-transform duration-[10s] linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                    {/* Cinematic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                </div>
            ))}
        </div>
    );
};

export default HeroBackground;
