/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        md: '3px 3px 6px rgba(0, 0, 0, 0.7)',
        lg: '5px 5px 10px rgba(0, 0, 0, 0.8)',
      },
      colors: {
        aiff: '#008080',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
