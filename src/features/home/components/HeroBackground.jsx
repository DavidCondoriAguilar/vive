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
                        className={`w-full h-full object-cover object-[5%_top] transition-opacity duration-1000 ease-in-out 
                            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
                            ${slide.pureImage ? 'grayscale-0 brightness-100' : 'grayscale-[0.3] brightness-[0.4]'}
                        `}
                        style={{
                            imageRendering: 'auto'
                        }}
                        loading={index === 0 ? "eager" : "lazy"}
                    />

                    {/* Cinematic Rim Lighting & Masks - Hidden if pureImage */}
                    {!slide.pureImage && (
                        <>
                            {/* Base Dark Overlay */}
                            <div className="absolute inset-0 bg-[#050505]/60 block lg:hidden"></div>

                            {/* Left Editorial Gradient (Darker for text readability) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent w-full lg:w-[70%]"></div>

                            {/* Bottom Cinematic Fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>

                            {/* Right Soft Glow (Simulating Ambient Light) */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vive-500/5 to-transparent"></div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HeroBackground;
