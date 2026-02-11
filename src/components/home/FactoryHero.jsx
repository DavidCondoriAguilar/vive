import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import { FaArrowRight, FaIndustry } from 'react-icons/fa';

const FactoryHero = () => {
  const ctaLink = getWhatsAppLink("Hola, estoy interesado en comprar colchones directamente de fábrica.");

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern/factory-pattern.png')] opacity-[0.05]"></div>
      
      {/* Industrial Elements */}
      <div className="absolute top-10 right-10 text-gray-700/20">
        <FaIndustry className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 left-10 text-gray-700/20">
        <FaIndustry className="w-24 h-24" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-20 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
            Fabricamos colchones en
            <span className="block text-vive-400 mt-2">Perú</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8">
            Venta directa de fábrica
          </p>

          {/* Submessage */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-vive-400 rounded-full"></span>
              Espuma y resortes
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-vive-400 rounded-full"></span>
              Mayor y menor
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-vive-400 rounded-full"></span>
              Lima y provincias
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/catalogo"
              className="group inline-flex items-center gap-3 bg-vive-500 hover:bg-vive-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Comprar ahora
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-transparent border-2 border-vive-400 text-vive-400 hover:bg-vive-400 hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Cotizar por mayor
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div>Años fabricando</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div>Colchones vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div>Garantía directa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryHero;
