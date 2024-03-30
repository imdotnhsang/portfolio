import { createThemes } from 'tw-colors';
import {
  colorsBase,
  colorsDark,
  colorsLight,
  sizesDeep,
  sizesSpacing
} from './src/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: sizesSpacing,
      borderWidth: sizesSpacing,
      zIndex: sizesDeep,
      inset: sizesSpacing,
      colors: colorsBase
    }
  },
  plugins: [
    createThemes({
      light: colorsLight,
      dark: colorsDark
    })
  ]
};
