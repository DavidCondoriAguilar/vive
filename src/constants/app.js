// Application Constants
export const APP_CONFIG = {
  name: 'Vive',
  version: '2.0.0',
  author: 'David Condori Aguilar',
  year: 2026
};

// Loading Configuration
export const LOADING_CONFIG = {
  initialDelay: 1500, // ms
  textDelay: 600, // ms
  targetProgress: 85, // %
  progressInterval: 100 // ms
};

// SEO Constants
export const SEO_DEFAULTS = {
  title: `Vive - Ingeniería Superior en Descanso | Fábrica Premium`,
  description: `Lideramos la tecnología de descanso en el Perú. Expertos en sistemas de alta permanencia (MP), resortes pocket y ergonomía avanzada. Envío gratis en Lima.`,
  keywords: [
    'vive colchones',
    'tecnologia MP descanso',
    'fabrica colchones peru',
    'sistemas descanso premium',
    'colchones pocket spring',
    'descanso anatomico'
  ],
  canonical: 'https://vive.pe/'
};

// Route Constants
export const ROUTES = {
  HOME: '/',
  CATEGORIES: '/categorias',
  PRODUCTS: '/producto',
  RETURN_POLICY: '/politica-devoluciones'
};

// Breakpoint Constants (Tailwind)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
