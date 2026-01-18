import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

const ConversionCTA = ({
  title = "Transforma tu Descanso Hoy",
  subtitle = "Descuentos exclusivos por tiempo limitado",
  buttonText = "Ver Catálogo",
  buttonLink = "/",
  urgency = true,
  className = ""
}) => {
  const waLink = getWhatsAppLink("Hola Sueño Dorado, me gustaría recibir asesoría personalizada para transformar mi descanso.");

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${className}`}>
      {/* 2026 Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 via-white to-gold-50/50 dark:from-zinc-950 dark:via-black dark:to-zinc-950" />
      <div className="absolute inset-0 dream-dots opacity-30 dark:opacity-20" />
      <div className="absolute inset-0 dream-noise" />

      <div className="relative container mx-auto max-w-4xl text-center z-10">
        {/* Urgency Badge */}
        {urgency && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse-subtle">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            OFERTA POR TIEMPO LIMITADO
          </div>
        )}

        {/* Main Content */}
        <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
          {title}
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <PrimaryButton
            onClick={() => window.location.href = buttonLink}
            className="sm:w-auto"
          >
            {buttonText}
          </PrimaryButton>

          <SecondaryButton
            onClick={() => window.open(waLink, '_blank')}
            className="sm:w-auto"
          >
            Contactar
          </SecondaryButton>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Envío GRATIS en Lima</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Garantía de 10 años</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Pago seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionCTA;
