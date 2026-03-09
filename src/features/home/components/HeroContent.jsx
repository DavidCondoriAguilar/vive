import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';

const HeroContent = ({ slides, currentSlide, navigate }) => {
    return (
        <div className="w-full relative h-full">
            {slides.map((slide, index) => (
                <div
                    key={`content-${slide.id}`}
                    className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ease-out
                        ${(index === currentSlide && !slide.hideContent) ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible pointer-events-none'}
                    `}
                >
                    {/* LEFT SECTOR: Editorial Branding */}
                    <div className="lg:col-span-7 mt-20 lg:mt-0 flex flex-col justify-center">
                        {/* Status Label */}
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-vive-600/10 border border-vive-600/20 rounded-full mb-4 lg:mb-8 w-fit backdrop-blur-md">
                            <span className="w-1 h-1 bg-vive-600 rounded-full animate-pulse"></span>
                            <span className="text-[9px] font-mono text-vive-600 uppercase tracking-[0.4em]">{slide.badge} // SISTEMA VIVE 2026</span>
                        </div>

                        {/* Massive Heading */}
                        <h2 className="text-4xl md:text-6xl lg:text-[85px] font-display font-black text-white leading-[0.9] tracking-tighter uppercase mb-4 lg:mb-8">
                            {slide.title.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                            <span className="block mt-2 font-brand italic font-light lowercase text-3xl md:text-5xl lg:text-6xl text-vive-500 tracking-normal capitalize">
                                {slide.subtitle}
                            </span>
                        </h2>

                        {/* Mobile Technical Integration (Only Mobile) */}
                        <div className="lg:hidden mt-2 space-y-4">
                            {/* Specs Pills */}
                            <div className="flex flex-wrap gap-2">
                                {slide.specs.map((spec, sIdx) => (
                                    <div key={sIdx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md">
                                        <p className="text-[7px] font-mono text-vive-500 uppercase tracking-widest">{spec.label}</p>
                                        <p className="text-white text-[9px] font-bold uppercase">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-3 pt-1">
                                <button
                                    onClick={() => navigate('/catalogo')}
                                    className="flex-1 py-3 bg-white text-black font-black uppercase tracking-[0.2em] text-[9px] rounded-xl active:scale-95 transition-transform"
                                >
                                    Catálogo
                                </button>
                                <a
                                    href={getWhatsAppLink(`Deseo información sobre ${slide.title}`)}
                                    className="flex-1 py-3 border border-vive-500 text-white font-bold uppercase tracking-[0.2em] text-[9px] rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform bg-vive-500/10"
                                >
                                    WhatsApp <div className="w-1 h-1 bg-vive-500 rounded-full animate-pulse"></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTOR: Technical Bento Card (Desktop Only) */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <div className="relative group/bento">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-vive-500/10 blur-3xl rounded-full opacity-0 group-hover/bento:opacity-100 transition-opacity duration-1000"></div>

                            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-6 lg:p-8 rounded-[40px] shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-700">
                                {/* Technical Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-vive-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-2 font-bold">Tech Module</h3>
                                        <p className="text-white text-xl lg:text-2xl font-display font-bold uppercase">{slide.tech}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1 h-1 rounded-full transition-all duration-1000 ${i === index ? 'bg-vive-500 scale-125 shadow-[0_0_8px_#299C47]' : 'bg-white/20'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[8px] font-mono text-white/30 uppercase tracking-tighter">Active System</span>
                                    </div>
                                </div>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {slide.specs.map((spec, sIdx) => (
                                        <div key={sIdx} className="p-3 lg:p-4 bg-white/[0.03] border border-white/5 rounded-2xl group/spec hover:bg-white/[0.08] transition-colors duration-500">
                                            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1 group-hover/spec:text-vive-500 transition-colors">{spec.label}</p>
                                            <p className="text-white text-[10px] lg:text-xs font-bold uppercase tracking-wider">{spec.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => navigate('/catalogo')}
                                        className="group w-full py-5 bg-white text-black overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] rounded-2xl relative"
                                    >
                                        <div className="relative z-10 flex items-center justify-center gap-4">
                                            <span className="font-black tracking-[0.4em] uppercase text-[10px]">Descubrir Colección</span>
                                            <FaChevronRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </button>

                                    <a
                                        href={getWhatsAppLink(`Hola Vive, deseo recibir asesoría personalizada sobre ${slide.title}.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 border border-white/10 text-white rounded-2xl flex items-center justify-center gap-4 bg-white/5 hover:border-vive-500 transition-all duration-500"
                                    >
                                        <span className="font-bold tracking-[0.4em] uppercase text-[10px]">Asesoría Premium</span>
                                        <div className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-pulse"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroContent;
