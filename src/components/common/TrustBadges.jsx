import React from 'react';

const TrustBadges = ({ className = "", showSecurity = false }) => {
  const mainBadges = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Envíos Rápidos",
      subtitle: "24-48h en Lima"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Compra 100% Segura",
      subtitle: "SSL certificado"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Garantía de Fábrica",
      subtitle: "Hasta 10 años"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Soluciones Rápidas",
      subtitle: "Atención inmediata"
    }
  ];

  const securityBadges = [
    {
      icon: "🔒",
      title: "SSL 256-bit",
      subtitle: "Encriptación bancaria",
      color: "from-green-400 to-green-600"
    },
    {
      icon: "🛡️",
      title: "Pago Seguro",
      subtitle: "Visa, Mastercard, Yape",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: "🏆",
      title: "Certificado ISO",
      subtitle: "Calidad garantizada",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: "⭐",
      title: "4.8/5 Calificación",
      subtitle: "+1000 reseñas",
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  const badges = showSecurity ? securityBadges : mainBadges;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="group flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.color || 'from-gold-400 to-gold-600'} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 text-lg`}>
            {typeof badge.icon === 'string' ? badge.icon : badge.icon}
          </div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            {badge.title}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {badge.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
