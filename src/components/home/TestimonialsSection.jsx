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
      comment: "Como vendedor, los colchones de Sueño Dorado me dan las mejores comisiones y mis clientes siempre quedan satisfechos.",
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
        className={`w-4 h-4 ${
          i < rating ? 'text-gold-500' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500/[0.03] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-6 mb-8">
            <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.4em]">Testimonios</span>
            <div className="h-[1px] w-20 bg-gradient-to-r from-gold-200 to-transparent"></div>
            <span className="text-gray-400 dark:text-gray-500 font-black text-[9px] uppercase tracking-widest">Clientes Reales</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-[0.85] tracking-tighter uppercase">
            Voces que <span className="text-gold-500 italic font-light">Confían</span> <br />
            <span className="text-gray-400 dark:text-gray-500">en Nuestra</span> <br />
            <span className="text-gold-500">Calidad</span>
          </h2>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto">
            Descubre por qué miles de peruanos confían su descanso a Sueño Dorado. Historias reales de clientes que transformaron su calidad de vida.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaQuoteLeft className="w-4 h-4 text-white" />
              </div>

              {/* Testimonial Card */}
              <div className="relative bg-white dark:bg-black border border-gray-100 dark:border-white/20 rounded-3xl p-8 hover:border-gold-500/50 transition-all duration-300 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <blockquote className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.comment}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-100 dark:border-white/10 pt-6">
                  <div className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-gold-500 font-medium">
                    {testimonial.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/venta-por-mayor"
            className="inline-flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-gold-500/20 hover:-translate-y-1 hover:scale-105"
          >
            Únete a Vendedores Exitosos
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
