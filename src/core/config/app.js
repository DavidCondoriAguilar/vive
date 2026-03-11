export const APP_CONFIG = {
  name: 'Vive',
  version: '1.2.0',
  description: 'Tecnología avanzada en descanso y fabricación nacional premium',

  // Asset paths
  assets: {
    logos: {
      main: '/src/assets/images/logos/vive.png',
      alt: '/src/assets/images/logos/only-logo.png',
      brand: '/src/assets/images/logos/brand.png'
    },
    images: {
      products: '/src/assets/images/products/',
      banners: '/src/assets/images/banners/',
      icons: '/src/assets/images/icons/'
    }
  },

  // Component paths for easier imports
  components: {
    common: '/src/components/common/',
    layout: '/src/components/layout/',
    features: '/src/features/'
  }
};
