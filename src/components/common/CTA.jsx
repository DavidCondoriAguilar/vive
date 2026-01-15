import React from 'react';
import { Link } from 'react-router-dom';

const ConversionCTA = ({ 
  title = "Transforma tu Descanso Hoy",
  subtitle = "Descuentos exclusivos por tiempo limitado",
  buttonText = "Ver Catálogo",
  buttonLink = "/",
  urgency = true,
  className = ""
}) => {
  return (
    <section className={`relative py-16 px-6 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto max-w-4xl text-center">
        {/* Urgency Badge */}
        {urgency && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse-subtle">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            OFERTA POR TIEMPO LIMITADO
          </div>
        )}

        {/* Main Content */}
        <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
          {title}
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Link 
            to={buttonLink}
            className="premium-button inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            {buttonText}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-full border-2 border-gold-500 hover:bg-gold-50 dark:hover:bg-gold-900/20 transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contar con Asesor
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>Envío GRATIS en Lima</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>Garantía de 10 años</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>Pago seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionCTA;
