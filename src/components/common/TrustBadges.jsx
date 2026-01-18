import React from 'react';
import {
  FaTruck,
  FaShieldAlt,
  FaCertificate,
  FaHeadset
} from 'react-icons/fa';

const TrustBadges = ({ className = "", variant = "grid", onBadgeClick }) => {
  const badges = [
    {
      icon: <FaTruck className="w-5 h-5" />,
      title: "Envíos Rápidos",
      subtitle: "24-48h en Lima",
      fullText: "Realizamos envíos en 24-48 horas para Lima Metropolitana. Para provincias, el tiempo estimado es de 3 a 7 días hábiles dependiendo del destino. Contamos con flota propia y agencias aliadas.",
      animation: "slideInLeft"
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: "Compra 100% Segura",
      subtitle: "SSL certificado",
      fullText: "Tu seguridad es nuestra prioridad. Utilizamos encriptación SSL de grado bancario para proteger tus datos. Aceptamos todas las tarjetas y métodos de pago seguros.",
      animation: "slideInUp"
    },
    {
      icon: <FaCertificate className="w-5 h-5" />,
      title: "Garantía de Fábrica",
      subtitle: "Hasta 10 años",
      fullText: "Respaldamos la calidad de nuestros productos con garantías reales: 10 años en estructuras de resortes y 5 años en espumas de alta densidad. Tu inversión está asegurada.",
      animation: "slideInRight"
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
      title: "Soluciones Rápidas",
      subtitle: "Atención inmediata",
      fullText: "Nuestro equipo de soporte está disponible para resolver tus dudas. Ofrecemos cambio inmediato por defectos de fábrica en los primeros 7 días.",
      animation: "slideInBottom"
    }
  ];

  const getAnimationClass = (animation, index) => {
    const animations = {
      slideInLeft: "animate-slide-in-left",
      slideInUp: "animate-slide-in-up",
      slideInRight: "animate-slide-in-right",
      slideInBottom: "animate-slide-in-bottom"
    };
    return animations[animation] || "animate-fade-in";
  };

  if (variant === 'vertical') {
    return (
      <div className={`space-y-2 ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-2 rounded-lg transition-all ${onBadgeClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5' : ''}`}
            onClick={() => onBadgeClick && onBadgeClick(badge)}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="text-gold-500 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-gray-200 group-hover:text-gold-500 transition-colors">
                {badge.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${getAnimationClass(badge.animation, index)}`}
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
        >
          {/* Icon Container - Minimalist */}
          <div className="relative mx-auto w-12 h-12 mb-4 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-gold-500 transition-all duration-300">
            {badge.icon}
          </div>

          {/* Text Content - Clean */}
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {badge.title}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            {badge.subtitle}
          </p>

          {/* Subtle Bottom Line */}
          <div className="mt-3 h-px w-6 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
