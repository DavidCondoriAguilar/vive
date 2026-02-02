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
      fullText: (
        <div className="space-y-4">
          <p className="font-bold text-gold-500 text-xs uppercase tracking-widest">Compromiso De Entrega</p>
          <p className="text-gray-600 dark:text-gray-400">Nuestra logística propia nos permite garantizar entregas en un plazo máximo de <strong>48 horas hábiles</strong> dentro de Lima Metropolitana.</p>
          <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 text-[11px]">
            <p>• Monitoreo en tiempo real vía WhatsApp.</p>
            <p>• Personal capacitado para manipuleo técnico.</p>
            <p>• Embalaje de alta resistencia incluido.</p>
          </div>
        </div>
      ),
      animation: "slideInLeft"
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: "Compra 100% Segura",
      subtitle: "SSL certificado",
      fullText: (
        <div className="space-y-4">
          <p className="font-bold text-gold-500 text-xs uppercase tracking-widest">Protección De Datos</p>
          <p className="text-gray-600 dark:text-gray-400">Nuestra plataforma cuenta con <strong>Certificación SSL de 256 bits</strong>, garantizando que tu información financiera viaje de forma encriptada y segura.</p>
          <div className="flex gap-4 items-center justify-center pt-2">
            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20">PCI Compliant</span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold rounded-full border border-blue-500/20">Secured Entry</span>
          </div>
        </div>
      ),
      animation: "slideInUp"
    },
    {
      icon: <FaCertificate className="w-5 h-5" />,
      title: "Garantía de Fábrica",
      subtitle: "Respaldo Industrial",
      fullText: (
        <div className="space-y-4">
          <p className="font-bold text-gold-500 text-xs uppercase tracking-widest">Respaldo Industrial</p>
          <p className="text-gray-600 dark:text-gray-400">Todos nuestros productos salen de planta con un control de calidad riguroso. Utilizamos espumas de alta densidad y resortes de acero virgen.</p>
          <ul className="text-[11px] text-gray-500 space-y-1 bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
            <li>• <strong>Densidad Real:</strong> Mayor soporte y vida útil.</li>
            <li>• <strong>Acero Certificado:</strong> Estructura indeformable.</li>
            <li>• <strong>Producto Nacional:</strong> 100% fabricación peruana.</li>
          </ul>
        </div>
      ),
      animation: "slideInRight"
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
      title: "Soluciones Rápidas",
      subtitle: "Atención inmediata",
      fullText: (
        <div className="space-y-4">
          <p className="font-bold text-gold-500 text-xs uppercase tracking-widest">Soporte VIP</p>
          <p className="text-gray-600 dark:text-gray-400">No eres un número más. Nuestro equipo de atención post-venta está listo para resolver cualquier requerimiento técnico en tiempo récord.</p>
          <p className="text-[11px] text-gold-500 font-bold italic">Respuesta garantizada en menos de 3 horas vía canales oficiales.</p>
        </div>
      ),
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
