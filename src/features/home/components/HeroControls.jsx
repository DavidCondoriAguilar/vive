import React from 'react';

const HeroControls = ({ slides, currentSlide, goToSlide, progress }) => {
    return (
        <div className="hidden lg:flex flex-col items-end gap-12 absolute right-20 top-1/2 -translate-y-1/2 z-30">
            <div className="space-y-6 text-right">
                <span className="text-[10px] font-black text-vive-500 uppercase tracking-[0.6em] block opacity-50">Explora la Colección</span>
                <div className="flex flex-col gap-6 items-end">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="group flex items-center gap-6 outline-none"
                        >
                            <span className={`text-[11px] font-mono font-bold transition-all duration-700 ${index === currentSlide ? 'text-white scale-110' : 'text-white/20 group-hover:text-vive-500'}`}>0{index + 1}</span>
                            <div className={`h-[2px] transition-all duration-700 ease-out ${index === currentSlide ? 'w-24 bg-vive-500 shadow-[0_0_15px_rgba(41,156,71,0.6)]' : 'w-10 bg-white/10 group-hover:w-16 group-hover:bg-white/30'}`}></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroControls;
