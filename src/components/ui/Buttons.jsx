import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Botón Primario - Negro con texto blanco
 * Uso: Acciones principales como "Comprar", "Ver Detalles"
 */
export const PrimaryButton = ({ 
  children, 
  icon: Icon, 
  className = '', 
  showArrow = true,
  ...props 
}) => (
  <button
    {...props}
    className={`group relative inline-flex items-center justify-center bg-black text-white uppercase 
    tracking-widest px-8 py-3 rounded-none transition-all duration-300 hover:bg-gray-900 
    active:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black 
    disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {Icon && <Icon className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />}
    <span>{children}</span>
    {showArrow && (
      <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 
      transition-all duration-300">
        →
      </span>
    )}
  </button>
);

/**
 * Botón Secundario - Transparente con borde
 * Uso: Acciones secundarias como "Ficha Técnica", "Ver Especificaciones"
 */
export const SecondaryButton = ({ 
  children, 
  icon: Icon, 
  className = '', 
  showArrow = true,
  ...props 
}) => (
  <button
    {...props}
    className={`group relative inline-flex items-center justify-center bg-transparent 
    border border-gray-300 text-black uppercase tracking-widest px-8 py-3 rounded-none 
    transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 
    active:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 
    disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {Icon && <Icon className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />}
    <span>{children}</span>
    {showArrow && (
      <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 
      transition-all duration-300">
        →
      </span>
    )}
  </button>
);

/**
 * Botón WhatsApp - Verde con contacto directo
 * Uso: Contacto por WhatsApp (solo icono)
 */
export const WhatsAppButton = ({ 
  className = '', 
  ...props 
}) => (
  <button
    {...props}
    className={`group relative inline-flex items-center justify-center bg-[#25D366] 
    text-white px-4 py-3 rounded-none transition-all duration-300 
    hover:bg-[#20ba61] active:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-[#25D366] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    title="Contactar por WhatsApp"
  >
    <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
  </button>
);

/**
 * Botón de Enlace - Estilo texto con efecto hover minimalista
 * Uso: Enlaces secundarios
 */
export const LinkButton = ({ 
  children, 
  icon: Icon, 
  className = '', 
  ...props 
}) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center text-black uppercase tracking-widest 
    transition-all duration-300 hover:opacity-60 focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-black disabled:opacity-30 disabled:cursor-not-allowed ${className}`}
  >
    {Icon && <Icon className="mr-2" />}
    <span className="border-b border-transparent hover:border-black transition-all duration-300">
      {children}
    </span>
  </button>
);

/**
 * Botón de Carrito - Para agregar productos
 * Uso: Agregar al carrito
 */
export const CartButton = ({ 
  children = 'Agregar al carrito', 
  className = '', 
  showArrow = true,
  ...props 
}) => (
  <button
    {...props}
    className={`group relative inline-flex items-center justify-center bg-black text-white 
    uppercase tracking-widest px-8 py-3 rounded-none transition-all duration-300 
    hover:bg-gray-900 active:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    <span>{children}</span>
    {showArrow && (
      <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 
      transition-all duration-300">
        →
      </span>
    )}
  </button>
);

/**
 * Componente para agrupar botones con espaciado automático
 * Uso: Contenedor para múltiples botones
 */
export const ButtonGroup = ({ children, className = '', direction = 'row', ...props }) => (
  <div
    {...props}
    className={`flex ${direction === 'row' ? 'flex-row' : 'flex-col'} gap-3 ${className}`}
  >
    {children}
  </div>
);

export default {
  PrimaryButton,
  SecondaryButton,
  WhatsAppButton,
  LinkButton,
  CartButton,
  ButtonGroup,
};
