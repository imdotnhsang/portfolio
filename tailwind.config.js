import { createThemes } from 'tw-colors';

import {
  boxShadow,
  nestedColorsDark,
  nestedColorsLight,
  screens,
  spacing,
  zIndex
} from './src/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      '2xs': screens['2xs'] + 'px',
      xs: screens['xs'] + 'px',
      sm: screens['sm'] + 'px',
      md: screens['md'] + 'px',
      lg: screens['lg'] + 'px',
      xl: screens['xl'] + 'px',
      '2xl': screens['2xl'] + 'px',
      '3xl': screens['3xl'] + 'px'
    },
    extend: {
      zIndex,
      spacing,
      boxShadow,
      inset: spacing,
      borderWidth: spacing,
      borderRadius: spacing,
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira)']
      },
      maxWidth: {
        container: screens['2xl'] + 56 + 'px' // 28px is the padding x
      },
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  plugins: [
    createThemes({
      light: nestedColorsLight,
      dark: nestedColorsDark
    })
  ]
};
