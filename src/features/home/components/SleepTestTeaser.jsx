import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserNinja, FaBed, FaBrain, FaArrowRight } from 'react-icons/fa';
import RevealSection from '@/components/ui/RevealSection';

const SleepTestTeaser = () => {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleQuickAnswer = (answer) => {
        setIsProcessing(true);
        setTimeout(() => {
            navigate('/test-de-sueno', { state: { initialAnswer: answer } });
        }, 800);
    };

    return (
        <section className="py-16 md:py-24 w-full bg-[#050505] relative border-y border-white/5 overflow-hidden transition-colors duration-1000">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,156,71,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10 w-full">
                <RevealSection>
                    {!isProcessing ? (
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            {/* Left: Tactical Branding */}
                            <div className="flex flex-col items-center lg:items-start space-y-4 max-w-md text-center lg:text-left group">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-vive-500/10 rounded-lg">
                                        <FaBrain className="text-vive-500 text-lg" />
                                    </div>
                                    <span className="text-vive-500 font-mono text-[9px] tracking-[0.4em] uppercase font-black">Test de Morfología</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display text-white tracking-tighter uppercase font-light leading-[0.9]">
                                    Inteligencia <br className="hidden md:block"/>
                                    <span className="text-vive-500 italic font-serif lowercase font-medium">biomecánica</span>
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-text max-w-xs leading-relaxed">
                                    No adivines tu descanso. Nuestro algoritmo diseña tu entorno de sueño basándose en tu morfología única.
                                </p>
                            </div>

                            {/* Right: Compressed Quick Action */}
                            <div className="flex-1 w-full max-w-2xl bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:border-vive-500/30 hover:bg-vive-500/[0.01] transition-all duration-1000">
                                <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                                    <div className="space-y-1 text-center md:text-left">
                                        <span className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">Pregunta 01: Posición</span>
                                        <h4 className="text-lg md:text-xl font-display text-white uppercase tracking-tighter">
                                            ¿Cómo sueles dormir?
                                        </h4>
                                    </div>
                                    
                                    <div className="flex gap-4 w-full md:w-auto">
                                        <button 
                                            onClick={() => handleQuickAnswer('lado')}
                                            className="flex-1 md:flex-none flex items-center justify-center gap-4 px-8 py-5 bg-white text-black hover:bg-vive-500 hover:text-white transition-all duration-500 rounded-2xl active:scale-95 group/btn shadow-xl shadow-white/5"
                                        >
                                            <FaUserNinja className="text-lg group-hover/btn:-rotate-12 transition-transform" />
                                            <span className="font-display font-black uppercase tracking-widest text-[10px]">De Lado</span>
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleQuickAnswer('espalda')}
                                            className="flex-1 md:flex-none flex items-center justify-center gap-4 px-8 py-5 bg-transparent border border-white/20 text-white hover:border-vive-500 hover:text-vive-500 transition-all duration-500 rounded-2xl active:scale-95 group/btn"
                                        >
                                            <FaBed className="text-lg group-hover/btn:translate-y-[-2px] transition-transform" />
                                            <span className="font-display font-black uppercase tracking-widest text-[10px]">Boca Arriba</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Compressed Processing State */
                        <div className="flex flex-col items-center justify-center py-10 scale-90 animate-pulse">
                            <div className="w-px h-12 bg-gradient-to-b from-transparent via-vive-500 to-transparent mb-6"></div>
                            <h3 className="text-white font-mono uppercase tracking-[0.2em] font-black text-xs mb-3">
                                Escaneando Perfil...
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600 font-mono text-[8px] uppercase tracking-widest">
                                Precisión de descanso al 99% <FaArrowRight />
                            </div>
                        </div>
                    )}
                </RevealSection>
            </div>
        </section>
    );
};

export default SleepTestTeaser;
