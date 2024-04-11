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
      boxShadow: {
        focus: `1px 1px 3px 0px ${colorsBase.cyan[300]}, -1px -1px 3px 0px ${colorsBase.cyan[300]}`,
        focusDrk: `1px 1px 3px 0px ${colorsBase.cyan[600]}, -1px -1px 3px 0px ${colorsBase.cyan[600]}`
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira)']
      },
      maxWidth: {
        container: sizesScreen['2xl'] + 32 + 'px' // 32px is the padding x
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
