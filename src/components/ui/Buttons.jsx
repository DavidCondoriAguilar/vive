import React from 'react';
import { FaWhatsapp, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';

/**
 * Common styles for premium buttons
 */
const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-[10px]";
const shadowStyles = "shadow-lg hover:shadow-xl active:shadow-md";

/**
 * Primary Button - Deep Black / Premium White
 */
export const PrimaryButton = ({
  children,
  icon: Icon,
  className = '',
  showArrow = false,
  ...props
}) => (
  <button
    {...props}
    className={`${baseStyles} ${shadowStyles} bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-black dark:hover:bg-gray-100 border border-white/10 dark:border-black/5 ${className}`}
  >
    {Icon && <Icon className="mr-3 w-4 h-4 group-hover:scale-110 transition-transform" />}
    <span>{children}</span>
    {showArrow && <FaChevronRight className="ml-3 w-3 h-3 group-hover:translate-x-1 transition-transform" />}
  </button>
);

/**
 * Secondary Button - Elegant Glass/Bordered
 */
export const SecondaryButton = ({
  children,
  icon: Icon,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`${baseStyles} bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-full hover:border-gold-500 hover:text-gold-500 dark:hover:border-gold-500 dark:hover:text-gold-500 ${className}`}
  >
    {Icon && <Icon className="mr-3 w-4 h-4" />}
    <span>{children}</span>
  </button>
);

/**
 * WhatsApp Button - Premium Green
 */
export const WhatsAppButton = ({
  children,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`${baseStyles} ${shadowStyles} bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 shadow-green-500/20 ${className}`}
  >
    <FaWhatsapp className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
    <span>{children}</span>
  </button>
);

/**
 * Standard "Ver Detalle" Button
 * Used across the site for consistency
 */
export const DetailsButton = ({ to, className = '' }) => (
  <Link
    to={to}
    className={`${baseStyles} group bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white px-6 py-3.5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-gold-500/50 hover:text-gold-500 transition-all duration-500 flex-1 ${className}`}
  >
    <span className="tracking-[0.3em]">Ver Detalle</span>
  </Link>
);

/**
 * Standard "Consultar Precio" Button
 * Redirects to WhatsApp with product information
 */
export const PriceInquiryButton = ({ product, size = null, className = '' }) => {
  const message = `Hola Sueño Dorado, estoy interesado(a) en el producto *${product.name}*.\n${size ? `Talla: ${size}\n` : ''}¿Podrían brindarme el precio y disponibilidad?\n\nGracias.`;

  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${shadowStyles} group bg-green-500 text-white px-6 py-3.5 rounded-xl hover:bg-green-600 shadow-green-500/10 flex-1 ${className}`}
    >
      <FaWhatsapp className="mr-2.5 w-4 h-4 group-hover:scale-110 transition-transform" />
      <span>Consultar Precio</span>
    </a>
  );
};

/**
 * "Agregar a Cotización" Icon Button (Small)
 */
export const QuoteIconButton = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden bg-gray-900 dark:bg-zinc-800 hover:bg-gold-500 text-white w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 hover:scale-105 flex-shrink-0 ${className}`}
    title="Agregar a mi Cotización"
  >
    <FaShoppingCart className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
  </button>
);

export default {
  PrimaryButton,
  SecondaryButton,
  WhatsAppButton,
  DetailsButton,
  PriceInquiryButton,
  QuoteIconButton
};
