/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': '#121213',
        'text-main': 'rgb(255,255,255)',
      },
      height: {
        'header-height': 'var(--header-height)',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(-5%)' },
          '30%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-7.5%)' },
          '70%': { transform: 'translateX(7.5%)' },
          '90%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' },
        },
        flip: {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'shaking-letters': 'shake 250ms ease-in-out',
        'flipping-letters': 'flip 450ms ease-out',
      },
      fontFamily: {
        helveticaRegular: ['Helvetica Neue', 'sans-serif'],
        helveticaBold: ['Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
