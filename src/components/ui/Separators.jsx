import React from 'react';

/**
 * Divider Premium - Línea separadora
 * Uso: Separar secciones
 */
export const Divider = ({
  variant = 'horizontal',
  className = '',
  ...props
}) => {
  const variants = {
    horizontal: 'h-px w-full bg-gray-200 dark:bg-gray-700',
    vertical: 'w-px h-full bg-gray-200 dark:bg-gray-700',
  };

  return (
    <div
      className={`${variants[variant]} ${className}`}
      {...props}
    />
  );
};

/**
 * Section Separator - Espacio entre secciones
 */
export const SectionSeparator = ({
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
  };

  return (
    <div className={`${sizes[size]} ${className}`} {...props} />
  );
};

/**
 * Spacer - Espaciador flexible
 */
export const Spacer = ({
  size = 'md',
  direction = 'vertical',
  className = '',
  ...props
}) => {
  const sizes = {
    xs: { vertical: 'h-2', horizontal: 'w-2' },
    sm: { vertical: 'h-4', horizontal: 'w-4' },
    md: { vertical: 'h-6', horizontal: 'w-6' },
    lg: { vertical: 'h-8', horizontal: 'w-8' },
    xl: { vertical: 'h-12', horizontal: 'w-12' },
  };

  const sizeClass = direction === 'vertical' 
    ? sizes[size].vertical 
    : sizes[size].horizontal;

  return <div className={`${sizeClass} ${className}`} {...props} />;
};

/**
 * Text Separator - Separador con texto
 */
export const TextSeparator = ({
  text,
  className = '',
  ...props
}) => (
  <div className={`flex items-center gap-4 ${className}`} {...props}>
    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
      {text}
    </span>
    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
  </div>
);

export default {
  Divider,
  SectionSeparator,
  Spacer,
  TextSeparator,
};
