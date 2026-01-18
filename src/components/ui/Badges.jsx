import React from 'react';

/**
 * Badge Premium - Minimalist Modern Style
 * Uso: Etiquetas, distintivos, categorías
 */
export const Badge = ({
  children,
  variant = 'dark',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    dark: 'bg-black text-white',
    light: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-transparent',
    success: 'bg-green-500 text-white',
    warning: 'bg-amber-500 text-white',
    error: 'bg-red-500 text-white',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-none
        font-bold uppercase tracking-wider
        transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Pill Badge - Variante redondeada
 */
export const PillBadge = ({
  children,
  variant = 'dark',
  className = '',
  ...props
}) => (
  <Badge
    variant={variant}
    className={`rounded-full ${className}`}
    {...props}
  >
    {children}
  </Badge>
);

/**
 * Counter Badge - Para contadores
 */
export const CounterBadge = ({
  count,
  max = 99,
  className = '',
  ...props
}) => {
  const displayCount = count > max ? `${max}+` : count;

  return (
    <Badge
      variant="dark"
      size="sm"
      className={`min-w-[20px] h-5 flex items-center justify-center text-[10px] ${className}`}
      {...props}
    >
      {displayCount}
    </Badge>
  );
};

/**
 * Status Badge - Para estados
 */
export const StatusBadge = ({
  status = 'active',
  className = '',
  ...props
}) => {
  const statuses = {
    active: { variant: 'success', label: 'Activo' },
    inactive: { variant: 'light', label: 'Inactivo' },
    pending: { variant: 'warning', label: 'Pendiente' },
    error: { variant: 'error', label: 'Error' },
    new: { variant: 'dark', label: 'Nuevo' },
  };

  const config = statuses[status] || statuses.active;

  return (
    <Badge
      variant={config.variant}
      size="sm"
      className={className}
      {...props}
    >
      {config.label}
    </Badge>
  );
};

/**
 * Tag Input - Para tags editables
 */
export const Tag = ({
  label,
  onRemove,
  removable = false,
  className = '',
  ...props
}) => (
  <div
    className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 
      text-gray-900 dark:text-white rounded-none text-xs font-medium
      transition-all duration-300 ${className}`}
    {...props}
  >
    <span>{label}</span>
    {removable && (
      <button
        onClick={onRemove}
        className="ml-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
          transition-colors text-base leading-none"
        type="button"
        aria-label={`Remove ${label}`}
      >
        ×
      </button>
    )}
  </div>
);

export default {
  Badge,
  PillBadge,
  CounterBadge,
  StatusBadge,
  Tag,
};
