import { heroui } from '@heroui/theme';
import forms from '@tailwindcss/forms';
import twScrollbarHide from 'tailwind-scrollbar-hide';
import motion from 'tailwindcss-motion';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './node_modules/@heroui/theme/dist/components/(button|tabs|code|input).js',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            colors: {
                'neon-carrot': {
                    DEFAULT: '#F7A501',
                    50: '#FFF6E6',
                    100: '#FFEECC',
                    200: '#FFDB94',
                    300: '#FECA62',
                    400: '#FEB92F',
                    500: '#F7A501',
                    600: '#C68401',
                    700: '#936201',
                    800: '#614000',
                    900: '#332200',
                    950: '#191100',
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, heroui(), motion, twScrollbarHide],
};
