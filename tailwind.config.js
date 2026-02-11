/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                vive: {
                    DEFAULT: '#299C47',
                    hover: '#1F7A36',
                    light: '#3FA861',
                    50: '#E8F5EC',
                    100: '#D4EEDD',
                    200: '#A8D4BB',
                    300: '#7CBA99',
                    400: '#50A177',
                    500: '#299C47',
                    600: '#1F7A36',
                    700: '#165825',
                    800: '#0D3614',
                    900: '#041403',
                },
                neutral: {
                    DEFAULT: '#F2F2F2',
                    50: '#FFFFFF',
                    100: '#F9FAFB',
                    200: '#F2F2F2',
                    300: '#E5E7EB',
                    400: '#D1D5DB',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2933',
                    900: '#111827',
                },
            },
            fontFamily: {
                // Professional Typography 2026 - Luxury & Trust
                serif: ['Source Serif Pro', 'Georgia', 'serif'], // Elegante tradicional para lujo
                brand: ['Playfair Display', 'Source Serif Pro', 'serif'], // Premium sofisticado
                display: ['Space Grotesk', 'Playfair Display', 'sans-serif'], // Moderno impactante
                sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'], // Limpio y moderno - NUEVO DEFAULT
                body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'], // Altamente legible - NUEVO DEFAULT
                heading: ['Space Grotesk', 'Playfair Display', 'sans-serif'], // Encabezados autoritarios
                // Nuevos defaults para toda la web
                default: ['Inter', 'Manrope', 'system-ui', 'sans-serif'], // Fuente principal global
                text: ['Inter', 'Manrope', 'system-ui', 'sans-serif'], // Para texto general
                button: ['Inter', 'Manrope', 'system-ui', 'sans-serif'], // Tipografía para botones
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'shimmer': 'shimmer 3s infinite linear',
                'slide-right': 'slideRight 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'rotate-180': 'rotate180 0.5s ease-in-out',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'modal-up': 'modalUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                fadeInUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                rotate180: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(180deg)' },
                },
                modalUp: {
                    '0%': { transform: 'translateY(100px) scale(0.9)', opacity: '0' },
                    '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
