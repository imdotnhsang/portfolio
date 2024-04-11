import { createThemes } from 'tw-colors';

import {
  colorsBase,
  colorsDark,
  colorsLight,
  sizesDeep,
  sizesScreen,
  sizesSpacing
} from './src/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      '2xs': sizesScreen['2XS'] + 'px',
      xs: sizesScreen['XS'] + 'px',
      sm: sizesScreen['SM'] + 'px',
      md: sizesScreen['MD'] + 'px',
      lg: sizesScreen['LG'] + 'px',
      xl: sizesScreen['XL'] + 'px',
      '2xl': sizesScreen['2XL'] + 'px',
      '3xl': sizesScreen['3XL'] + 'px'
    },
    extend: {
      borderRadius: sizesSpacing,
      borderWidth: sizesSpacing,
      zIndex: sizesDeep,
      inset: sizesSpacing,
      colors: colorsBase,
      boxShadow: {
        focus: `1px 1px 3px 0px ${colorsBase.cyan[300]}, -1px -1px 3px 0px ${colorsBase.cyan[300]}`,
        focusDrk: `1px 1px 3px 0px ${colorsBase.cyan[600]}, -1px -1px 3px 0px ${colorsBase.cyan[600]}`
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira)']
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
