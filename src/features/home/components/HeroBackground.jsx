import React from 'react';

const HeroBackground = ({ slides, currentSlide }) => {
    return (
        <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-[2.5s] ease-in-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    {/* Main Banner - Set to cover full width/height of the 1300x500 container */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        width="1300"
                        height="500"
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding={index === 0 ? "sync" : "async"}
                        className={`w-full h-full object-cover object-[5%_top] transition-opacity duration-1000 ease-in-out 
                            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
                            ${slide.pureImage ? 'grayscale-0 brightness-100' : 'grayscale-[0.3] brightness-[0.4]'}
                        `}
                        style={{
                            imageRendering: 'auto'
                        }}
                        loading={index === 0 ? "eager" : "lazy"}
                    />


                </div>
            ))}
        </div>
    );
};

export default HeroBackground;
