
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const VideoShowcase = () => {
  const features = [
    "Tecnología de descanso avanzada",
    "Insumos 100% de primera calidad",
    "Maestros artesanos expertos",
    "Garantía real directo de fábrica"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000"
                alt="Artesanía y Calidad"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-gold-500">
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">Calidad Peruana</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-gold-500/30 rounded-3xl hidden lg:block"></div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                Nuestra Esencia
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                Donde la <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-yellow-600">Tradición</span> se une con la Innovación
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                En Sueño Dorado, no solo fabricamos colchones; creamos experiencias de descanso. Cada pieza es el resultado de décadas de experiencia, combinando la maestría de nuestros artesanos peruanos con la última tecnología en confort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-gold-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold transition-all hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Conoce Nuestra Historia
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default VideoShowcase;
