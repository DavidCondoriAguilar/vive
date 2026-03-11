import React from 'react';

/**
 * Input Premium - Minimalist Modern Style
 * Uso: Campos de búsqueda, formularios
 */
export const PremiumInput = ({
  placeholder = '',
  type = 'text',
  value,
  onChange,
  disabled = false,
  icon: Icon,
  className = '',
  ...props
}) => (
  <div className="relative w-full">
    {Icon && (
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-4 ${Icon ? 'pl-12' : 'pl-4'} py-3 
        border border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-white
        placeholder-gray-400 dark:placeholder-gray-500
        rounded-none
        font-sans text-sm tracking-normal
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-0
        hover:border-gray-400 dark:hover:border-gray-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      {...props}
    />
  </div>
);

/**
 * Textarea Premium - Minimalist Modern Style
 */
export const PremiumTextarea = ({
  placeholder = '',
  value,
  onChange,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    rows={rows}
    className={`w-full px-4 py-3
      border border-gray-300 dark:border-gray-600
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
      placeholder-gray-400 dark:placeholder-gray-500
      rounded-none
      font-sans text-sm tracking-normal
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-0
      hover:border-gray-400 dark:hover:border-gray-500
      disabled:opacity-50 disabled:cursor-not-allowed
      resize-none
      ${className}`}
    {...props}
  />
);

/**
 * Select Premium - Minimalist Modern Style
 */
export const PremiumSelect = ({
  options = [],
  value,
  onChange,
  placeholder = 'Seleccionar...',
  disabled = false,
  className = '',
  ...props
}) => (
  <select
    value={value}
    onChange={onChange}
    disabled={disabled}
    className={`w-full px-4 py-3
      border border-gray-300 dark:border-gray-600
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
      rounded-none
      font-sans text-sm tracking-normal
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-0
      hover:border-gray-400 dark:hover:border-gray-500
      disabled:opacity-50 disabled:cursor-not-allowed
      cursor-pointer
      appearance-none
      ${className}`}
    {...props}
  >
    <option value="">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

/**
 * Checkbox Premium - Minimalist Modern Style
 */
export const PremiumCheckbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="w-5 h-5 border border-gray-300 dark:border-gray-600 
        rounded-none bg-white dark:bg-gray-900
        text-black dark:text-white
        cursor-pointer transition-all duration-300
        focus:ring-2 focus:ring-black/20"
      {...props}
    />
    {label && (
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300
        group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {label}
      </span>
    )}
  </label>
);

/**
 * Radio Premium - Minimalist Modern Style
 */
export const PremiumRadio = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600
        rounded-full bg-white dark:bg-gray-900
        text-black dark:text-white
        cursor-pointer transition-all duration-300
        focus:ring-2 focus:ring-black/20"
      {...props}
    />
    {label && (
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300
        group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {label}
      </span>
    )}
  </label>
);

/**
 * Form Group - Contenedor con etiqueta
 */
export const FormGroup = ({
  label,
  error,
  required = false,
  children,
  className = '',
}) => (
  <div className={`w-full flex flex-col gap-2 ${className}`}>
    {label && (
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )}
    {children}
    {error && (
      <span className="text-xs text-red-500 font-medium mt-1">{error}</span>
    )}
  </div>
);

export default {
  PremiumInput,
  PremiumTextarea,
  PremiumSelect,
  PremiumCheckbox,
  PremiumRadio,
  FormGroup,
};
