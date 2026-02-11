import React from 'react';
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María Gutiérrez",
      location: "Lima, Perú",
      rating: 5,
      comment: "El mejor colchón que he comprado. Mi dolor de espalda desapareció en una semana. Vale cada sol invertido.",
      product: "Golden Dream Premium"
    },
    {
      name: "Carlos Rodríguez",
      location: "Arequipa, Perú",
      rating: 5,
      comment: "Como vendedor, los colchones de Vive me dan las mejores comisiones y mis clientes siempre quedan satisfechos.",
      product: "Absolut Pocket"
    },
    {
      name: "Ana Fernández",
      location: "Cusco, Perú",
      rating: 5,
      comment: "La calidad es impresionante. Después de 5 años sigue como nuevo. La garantía real cumple lo que promete.",
      product: "Siempre Viscoelástico"
    },
    {
      name: "Luis Mendoza",
      location: "Piura, Perú",
      rating: 5,
      comment: "Fabrica directa = mejor precio. Compré para mi hotel y mis huéspedes felicitan la calidad del descanso.",
      product: "Venta por Mayor"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-vive-500' : 'text-gray-300 dark:text-gray-600'
          }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-1000">
      {/* Editorial Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-vive-600/[0.015] via-transparent to-vive-400/[0.015] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Refined Minimalist Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-vive-600 dark:text-vive-500 font-black text-[9px] uppercase tracking-[0.4em]">Opiniones Reales // Vive</span>
            <div className="h-px w-10 bg-vive-600/20"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 leading-none tracking-tighter uppercase">
            Voces que <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 italic font-light lowercase">garantizan</span> <br className="md:hidden" /> Excelencia
          </h2>

          <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto font-text">
            Ingeniería que transforma vidas. <span className="text-gray-900 dark:text-white font-bold">Historias reales</span> de bienestar certificado por nuestros usuarios.
          </p>
        </div>

        {/* Compact Elite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Verified Card: Compact Layout */}
              <div className="relative bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-vive-500/30 hover:shadow-xl shadow-gray-200/30 dark:shadow-none h-full flex flex-col justify-between group/card overflow-hidden">

                <div className="relative z-10">
                  {/* Status Node */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest border border-gray-100 dark:border-white/5 px-2 py-0.5 rounded-sm">Reseña Verificada</span>
                  </div>

                  {/* Compact Quote */}
                  <blockquote className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-8 italic">
                    "{testimonial.comment}"
                  </blockquote>
                </div>

                {/* Metadata Column */}
                <div className="relative z-10 pt-6 border-t border-gray-50 dark:border-white/5">
                  <h4 className="font-display font-black text-gray-900 dark:text-white text-xs uppercase tracking-widest mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-mono uppercase tracking-widest mb-3">
                    {testimonial.location}
                  </p>
                  <div className="inline-block px-2 py-1 bg-vive-600/5 border border-vive-600/10 rounded-sm">
                    <span className="text-[8px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-widest">{testimonial.product}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist CTA */}
        <div className="text-center">
          <Link
            to="/venta-por-mayor"
            className="group relative inline-flex items-center gap-4 bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <span className="relative z-10 font-black text-[10px] uppercase tracking-[0.3em]">Negocios y Mayoristas</span>
            <FaArrowRight className="relative z-10 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
