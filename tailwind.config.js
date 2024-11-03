/** @type {import('tailwindcss').Config} */
import tailwindAnimate from 'tailwindcss-animate';

export default {
    content: ['./index.html', './src/**/*.{html, js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                FS: 'FS',
                Watermelon: 'Watermelon',
                Suit: 'Suit',
                GW: 'GW',
            },
        },
        keyframes: {
            'bg-position': {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '100% 50%' },
            },
        },
    },
    plugins: [tailwindAnimate],
};
