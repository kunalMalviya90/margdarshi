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
                // Indian spiritual color palette
                saffron: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#FF9933', // Primary saffron
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
                spiritual: {
                    blue: '#000080', // Deep blue
                    gold: '#FFD700', // Gold accent
                    lotus: '#FFC0CB', // Lotus pink
                    earth: '#8B4513', // Earthy brown
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                devanagari: ['Noto Sans Devanagari', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'gradient': 'gradient 15s ease infinite',
                'slide-in': 'slideIn 0.5s ease-out',
                'fade-in': 'fadeIn 0.8s ease-in',
            },
            keyframes: {
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 153, 51, 0.8)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-spiritual': 'linear-gradient(135deg, #000080 0%, #FF9933 50%, #FFD700 100%)',
            },
        },
    },
    plugins: [],
}
