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
      spacing: sizesSpacing,
      boxShadow: {
        focus: '1px 1px 3px 0px #54d2e2, -1px -1px 3px 0px #54d2e2',
        focusDrk: '1px 1px 3px 0px #00abc1, -1px -1px 3px 0px #00abc1'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira)']
      },
      maxWidth: {
        container: sizesScreen['2xl'] + 32 + 'px' // 32px is the padding x
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
