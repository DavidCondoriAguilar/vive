import React from 'react';

/**
 * Card Premium - Minimalist Modern Style
 * Uso: Contenedor general con estilos consistentes
 */
export const PremiumCard = ({
  children,
  hover = true,
  border = true,
  padding = true,
  className = '',
  ...props
}) => (
  <div
    className={`
      ${padding ? 'p-6' : ''}
      ${border ? 'border border-gray-200 dark:border-dream-dark-border' : ''}
      bg-white dark:bg-dream-dark-surface
      rounded-2xl
      transition-all duration-300
      ${hover ? 'hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

/**
 * Product Card - Premium con imagen y acciones
 */
export const ProductCard = ({
  image,
  name,
  badge,
  onViewDetails,
  onWhatsApp,
  className = '',
}) => (
  <PremiumCard hover className={`flex flex-col h-full ${className}`}>
    {/* Imagen */}
    <div className="relative mb-6 overflow-hidden bg-gray-100 dark:bg-dream-dark-surface aspect-square">
      {badge && (
        <div className="absolute top-4 left-4 z-10 bg-black dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
          {badge}
        </div>
      )}
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <span className="text-4xl">🛏️</span>
        </div>
      )}
    </div>

    {/* Contenido */}
    <div className="flex flex-col flex-grow">
      <h3 className="font-sans font-bold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider line-clamp-2">
        {name}
      </h3>

      {/* Precio */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-lg font-black text-gray-900 dark:text-white">
          Consultar precio
        </span>
      </div>

      {/* Botones */}
      <div className="mt-auto flex gap-3">
        <button
          onClick={onViewDetails}
          className="flex-1 px-4 py-3 bg-black dark:bg-white text-white dark:text-black text-xs uppercase font-bold tracking-wider rounded-2xl
            transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-200 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
        >
          Ver Detalles
        </button>
        <button
          onClick={onWhatsApp}
          className="px-4 py-3 bg-[#25D366] text-white rounded-2xl
            transition-all duration-300 hover:bg-[#20ba61] active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          title="Contactar por WhatsApp"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.413 1.237-3.356 2.466-1.646 2.11-2.615 4.876-2.605 7.802.003 1.585.23 3.139.67 4.613l-1.447 5.694 5.847-1.48c1.433.857 3.076 1.309 4.797 1.311h.004c5.571 0 10.106-4.582 10.106-10.15 0-2.703-1.04-5.23-2.923-7.134-1.881-1.906-4.394-2.954-7.093-2.954z" />
          </svg>
        </button>
      </div>
    </div>
  </PremiumCard>
);

/**
 * Info Card - Tarjeta de información con icono
 */
export const InfoCard = ({
  icon,
  title,
  description,
  className = '',
}) => (
  <PremiumCard className={className}>
    <div className="text-center">
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase text-sm tracking-wider">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  </PremiumCard>
);

/**
 * Feature Card - Tarjeta con características
 */
export const FeatureCard = ({
  icon,
  title,
  items = [],
  className = '',
}) => (
  <PremiumCard className={className}>
    <div className="flex gap-4">
      {icon && <div className="text-2xl flex-shrink-0">{icon}</div>}
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3 uppercase text-sm tracking-wider">
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
              <span className="text-black dark:text-white mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PremiumCard>
);

export default {
  PremiumCard,
  ProductCard,
  InfoCard,
  FeatureCard,
};
