import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';

const HeroContent = ({ slides, currentSlide, navigate }) => {
    return (
        <div className="w-full lg:w-[65%] mt-24 relative h-full">
            {slides.map((slide, index) => (
                <div
                    key={`content-${slide.id}`}
                    className={`absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out
                        ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20 pointer-events-none'}
                    `}
                >
                    {/* Etiqueta de Confianza */}
                    <div className="inline-flex items-center gap-4 px-5 py-2 bg-vive-600/5 border border-vive-600/20 rounded-full mb-8 overflow-hidden relative group/tag">
                        <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-pulse relative z-10"></span>
                        <span className="text-[10px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.4em] relative z-10">{slide.badge} // FÁBRICA VIVE</span>
                    </div>

                    {/* Massive Editorial Heading - Reduced Scale for Better Fitting */}
                    <h2 className="text-4xl md:text-5xl lg:text-8xl font-display font-black text-white leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl">
                        {slide.title.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                <span className={i > 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-vive-500 to-white italic font-light lowercase' : ''}>
                                    {word}{' '}
                                </span>
                            </React.Fragment>
                        ))}
                    </h2>

                    {/* Texto Secundario y Características */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-sm">
                            <h3 className="text-vive-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Garantía de Descanso</h3>
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

                    {/* Botón Principal: Boutique Style */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <button
                            onClick={() => navigate('/catalogo')}
                            className="group relative w-full sm:w-80 px-12 py-7 bg-white text-black overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95 rounded-2xl"
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
                            className="group relative w-full sm:w-80 px-12 py-7 border border-white/10 text-white overflow-hidden transition-all duration-700 hover:border-vive-500 rounded-2xl flex items-center justify-center gap-4 bg-white/5 backdrop-blur-xl"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-4">
                                <span className="font-bold tracking-[0.4em] uppercase text-[10px] group-hover:text-vive-500 transition-colors">Asesoría Premium</span>
                                <div className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-pulse"></div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroContent;
