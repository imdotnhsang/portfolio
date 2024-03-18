import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [
    createThemes({
      light: {
        black: '#01080E',
        white: '#FFFFFF',
        gray: '#607B96',
        sunset: '#FEA55F',
        cyan: '#43D9AD',
        brown: '#E99287',
        violet: '#C98BDF',
        green: '#3C9D93',
        purple: '#4D5BCE'
      },
      dark: {
        black: '#01080E',
        white: '#FFFFFF',
        gray: '#607B96',
        sunset: '#FEA55F',
        cyan: '#43D9AD',
        brown: '#E99287',
        violet: '#C98BDF',
        green: '#3C9D93',
        purple: '#4D5BCE'
      }
    })
  ]
};
