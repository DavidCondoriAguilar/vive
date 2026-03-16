import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserNinja, FaBed, FaBrain, FaArrowRight } from 'react-icons/fa';
import RevealSection from '@/components/ui/RevealSection';

const SleepTestTeaser = () => {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleQuickAnswer = (answer) => {
        setIsProcessing(true);
        // Fast, high-tech transition to the full test
        setTimeout(() => {
            navigate('/test-de-sueno', { state: { initialAnswer: answer } });
        }, 800);
    };

    return (
        <section className="py-24 md:py-40 w-full bg-[#030303] relative border-b border-white/5 flex items-center justify-center">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-4xl">
                <RevealSection className="text-center">
                    
                    <div className={!isProcessing ? "opacity-100 transition-opacity duration-700 relative z-10" : "opacity-0 absolute inset-0 transition-opacity duration-700 pointer-events-none"}>
                        
                        {/* Minimalist Header */}
                        <div className="flex flex-col items-center justify-center space-y-6 mb-16">
                            <FaBrain className="text-4xl md:text-5xl text-vive-500 opacity-80" />
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-display uppercase tracking-tighter leading-[0.9]">
                                Inteligencia <br className="hidden md:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 italic font-brand lowercase tracking-normal">
                                    biomecánica
                                </span>
                            </h2>
                            <p className="text-gray-400 font-medium text-base md:text-lg max-w-lg mx-auto leading-relaxed pt-4">
                                No adivines tu descanso. Nuestro algoritmo diseña tu entorno de sueño basándose en tu morfología.
                            </p>
                        </div>

                        {/* Interactive Quiz Trigger */}
                        <div className="w-full mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all duration-500 group">
                            <h3 className="text-gray-300 tracking-[0.2em] uppercase font-black text-[10px] md:text-xs mb-8 text-center">
                                Pregunta Analítica 01
                            </h3>
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-10 text-center font-display">
                                ¿En qué posición duermes habitualmente?
                            </h4>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <button 
                                    onClick={() => handleQuickAnswer('lado')}
                                    className="flex flex-col items-center justify-center gap-4 p-8 bg-black/40 hover:bg-vive-500/10 border border-white/5 hover:border-vive-500/30 rounded-2xl transition-all duration-300 focus:outline-none"
                                >
                                    <FaUserNinja className="text-3xl md:text-4xl text-gray-500 group-hover:text-vive-400 transition-colors" />
                                    <span className="text-white font-black uppercase tracking-widest text-xs md:text-sm">De Lado</span>
                                </button>
                                
                                <button 
                                    onClick={() => handleQuickAnswer('espalda')}
                                    className="flex flex-col items-center justify-center gap-4 p-8 bg-black/40 hover:bg-vive-500/10 border border-white/5 hover:border-vive-500/30 rounded-2xl transition-all duration-300 focus:outline-none"
                                >
                                    <FaBed className="text-3xl md:text-4xl text-gray-500 group-hover:text-vive-400 transition-colors" />
                                    <span className="text-white font-black uppercase tracking-widest text-xs md:text-sm">Boca Arriba/Abajo</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Ultra Minimalist Processing State */}
                    {isProcessing && (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-vive-500 to-transparent animate-ping mb-8"></div>
                            <h3 className="text-white font-mono uppercase tracking-[0.3em] font-black text-xs md:text-sm mb-4">
                                Procesando Morfología
                            </h3>
                            <div className="flex items-center gap-2 text-gray-500 font-mono text-[9px] uppercase tracking-widest">
                                Iniciando Test de Sueño <FaArrowRight className="animate-pulse" />
                            </div>
                        </div>
                    )}

                </RevealSection>
            </div>
        </section>
    );
};

export default SleepTestTeaser;
