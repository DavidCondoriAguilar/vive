import React from 'react';

const HeroControls = ({ slides, currentSlide, goToSlide, progress }) => {
    const SLIDE_DURATION = 7000;

    return (
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-10">
            {slides.map((slide, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ver slide ${index + 1}: ${slide.title}`}
                    className="group relative flex flex-col items-center"
                >
                    {/* Progress Track Vertical */}
                    <div className="w-[1px] h-12 bg-white/10 rounded-full relative overflow-hidden mb-3">
                        {index === currentSlide && (
                            <div
                                className="absolute inset-0 bg-vive-500 origin-top shadow-[0_0_10px_rgba(41,156,71,0.5)]"
                                style={{
                                    transform: `scaleY(${progress / 100})`,
                                    transition: progress === 0 ? 'none' : `transform ${SLIDE_DURATION}ms linear`
                                }}
                            />
                        )}
                        {index < currentSlide && (
                            <div className="absolute inset-0 bg-white/30" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center gap-2 transition-all duration-500">
                        <span className={`text-[8px] font-mono font-black transition-all duration-500 ${index === currentSlide ? 'text-vive-500 rotate-90 translate-y-2' : 'text-white/20'}`}>
                            0{index + 1}
                        </span>

                        {/* Status Dot */}
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 border border-white/10 ${index === currentSlide ? 'bg-vive-500 scale-150 border-vive-500' : 'bg-transparent group-hover:bg-white/20'}`} />
                    </div>

                    {/* Hover Tooltip (Label) */}
                    <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none">
                        <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-md">
                            {slide.badge}
                        </span>
                    </div>
                </button>
            ))}
        </div>
    );
};


export default HeroControls;

