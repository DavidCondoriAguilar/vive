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
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F4C430',
                    50: '#FBF8EF',
                    100: '#F7F1DF',
                    200: '#EEE2C0',
                    300: '#E4D1A0',
                    400: '#F4C430',
                    500: '#D4AF37',
                    600: '#B08E22',
                    700: '#8A6F1B',
                    800: '#645014',
                    900: '#3E320C',
                },
                dream: {
                    50: '#F4F4F5',
                    100: '#E4E4E7',
                    200: '#E5E7EB',
                    500: '#71717A',
                    800: '#18181B',
                    900: '#0a0a0a',
                    950: '#020203',
                    /* Sophisticated dark palette */
                    'dark-bg': '#0F0F0F',
                    'dark-surface': '#1A1A1A',
                    'dark-elevated': '#252525',
                    'dark-border': '#2A2A2A',
                    'dark-text': '#E5E5E5',
                    'dark-text-secondary': '#A0A0A0',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                brand: ['Montserrat', 'sans-serif'], // Professional & Established
                display: ['Outfit', 'sans-serif'], // Friendly & Modern Premium
                futuristic: ['Montserrat', 'sans-serif'], // Alias for compatibility during transition
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
