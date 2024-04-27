import { createThemes } from 'tw-colors';

import {
  colorsBase,
  colorsDark,
  colorsLight,
  shadows,
  sizesDeep,
  sizesScreen,
  sizesSpacing
} from './src/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      '2xs': sizesScreen['2xs'] + 'px',
      xs: sizesScreen['xs'] + 'px',
      sm: sizesScreen['sm'] + 'px',
      md: sizesScreen['md'] + 'px',
      lg: sizesScreen['lg'] + 'px',
      xl: sizesScreen['xl'] + 'px',
      '2xl': sizesScreen['2xl'] + 'px',
      '3xl': sizesScreen['3xl'] + 'px'
    },
    extend: {
      borderRadius: sizesSpacing,
      borderWidth: sizesSpacing,
      zIndex: sizesDeep,
      inset: sizesSpacing,
      colors: colorsBase,
      spacing: sizesSpacing,
      boxShadow: shadows,
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira)']
      },
      maxWidth: {
        container: sizesScreen['2xl'] + 56 + 'px' // 32px is the padding x
      },
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  plugins: [
    createThemes({
      light: colorsLight,
      dark: colorsDark
    })
  ]
};
