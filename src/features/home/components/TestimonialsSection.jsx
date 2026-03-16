import React from 'react';
import { FaStar, FaQuoteRight, FaCheckCircle, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RevealSection from '@/components/ui/RevealSection';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Maricielo Ramos",
            location: "Surco, Lima",
            rating: 5,
            comment: "Increíble. Mi espalda ya no sufre y el envío a Surco fue súper rápido. ¡Un éxito total!",
            product: "Golden Dream Premium",
            date: "Hace 2 días"
        },
        {
            name: "Ricardo Palma",
            location: "Miraflores, Lima",
            rating: 5,
            comment: "Tecnología de otro nivel. El soporte es firme pero muy fresco. Lo mejor que hay en el mercado.",
            product: "Absolut Pocket",
            date: "Hace 1 semana"
        },
        {
            name: "Elena Espinoza",
            location: "San Miguel, Lima",
            rating: 5,
            comment: "Calidad de exportación. Es como dormir en un hotel 5 estrellas todas las noches.",
            product: "Siempre Visco",
            date: "Hace 3 días"
        },
        {
            name: "Javier Ortiz",
            location: "Los Olivos, Lima",
            rating: 5,
            comment: "Atención impecable y el colchón es otro mundo. Se nota la ingeniería desde el primer uso.",
            product: "Kasse Confort",
            date: "Hace 2 semanas"
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-1000 border-t border-gray-100 dark:border-white/5">
            {/* Soft Ambient Textures */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(41,156,71,0.02),transparent_40%)]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                
                {/* 2026 Minimalist Header */}
                <RevealSection className="flex flex-col lg:flex-row items-end justify-between mb-20 md:mb-32 gap-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-vive-500/5 border border-vive-500/10 rounded-sm mb-8">
                            <span className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-pulse"></span>
                            <span className="text-[9px] font-mono font-black text-vive-600 dark:text-vive-400 uppercase tracking-[0.4em]">
                                Proof of Excellence // User Feedback
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.85] tracking-tighter mb-4">
                            Relatos de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 italic font-brand lowercase tracking-normal">
                                transformación
                            </span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed max-w-xl">
                            Experiencias reales de quienes transformaron su descanso con ingeniería peruana de clase mundial.
                        </p>
                    </div>

                    <div className="flex flex-col items-start lg:items-end group cursor-default">
                        <div className="flex items-center gap-2 mb-2">
                            {[1,2,3,4,5].map(i => <FaStar key={i} className="text-vive-500 text-lg" />)}
                        </div>
                        <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">4.9 / 5.0</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-mono">Basado en +2,500 reseñas</span>
                    </div>
                </RevealSection>

                {/* The "Proof Wall" Masonry-inspired Bento */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, idx) => (
                        <RevealSection 
                            key={idx} 
                            delay={idx * 100}
                            className="break-inside-avoid bg-gray-50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:border-vive-500/30 transition-all duration-700 group flex flex-col shadow-sm hover:shadow-2xl hover:shadow-vive-500/5"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <FaQuoteRight className="text-3xl text-gray-200 dark:text-white/5 group-hover:text-vive-500/20 transition-colors duration-700" />
                                <div className="flex flex-col items-end">
                                    <div className="flex gap-0.5 mb-1">
                                        {[1,2,3,4,5].map(i => <FaStar key={i} className="text-vive-500 text-[10px]" />)}
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{t.date}</span>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 font-medium text-base md:text-lg leading-relaxed mb-10 font-text italic">
                                "{t.comment}"
                            </p>

                            <div className="mt-auto pt-8 border-t border-gray-200/50 dark:border-white/5">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tighter font-display">
                                                {t.name}
                                            </h4>
                                            <FaCheckCircle className="text-vive-500 text-[10px]" title="Compra Verificada" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-[10px] text-gray-400" />
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                                                {t.location}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="text-right">
                                        <span className="block text-[8px] font-black text-vive-500 uppercase tracking-widest mb-1 opacity-60">Producto</span>
                                        <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest border border-gray-200 dark:border-white/10 px-2 py-1 rounded-sm">
                                            {t.product}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>
                    ))}

                    {/* Dynamic Aggregator Card */}
                    <RevealSection 
                        delay={400}
                        className="break-inside-avoid bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center border border-white/10 group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-vive-500/20 to-transparent"></div>
                        <div className="relative z-10">
                            <h5 className="text-3xl font-black uppercase tracking-tighter mb-4 font-display">
                                Tu próximo gran <br /> despertar
                            </h5>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-8 font-mono">
                                Garantía de bienestar real
                            </p>
                            <Link 
                                to="/catalogo"
                                className="inline-flex items-center gap-3 px-8 py-3 bg-vive-500 text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-vive-500/20"
                            >
                                Iniciar mi cambio <FaArrowRight />
                            </Link>
                        </div>
                    </RevealSection>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
