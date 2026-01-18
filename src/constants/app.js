// Application Constants
export const APP_CONFIG = {
  name: 'Sueño Dorado',
  version: '1.0.0',
  author: 'David Condori Aguiar',
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
  title: `${APP_CONFIG.name} - Fábrica de Colchones Premium en Lima | Envío Gratis`,
  description: `Fabrica peruana de colchones premium con hasta 10 años de garantía. Colchones pocket, viscoelásticos y spring. Envío gratis en Lima.`,
  keywords: [
    'colchones peru',
    'fabrica colchones lima',
    'colchones premium',
    'colchones pocket',
    'colchones viscoelasticos',
    'colchones spring'
  ],
  canonical: 'https://suenodorado.pe/'
};

// Route Constants
export const ROUTES = {
  HOME: '/',
  CATEGORIES: '/categorias',
  PRODUCTS: '/producto',
  OFFERS: '/ofertas',
  BLOG: '/blog',
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