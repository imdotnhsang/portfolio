import { createThemes } from 'tw-colors';

const widthSizes = {
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  4.5: '1.125rem',
  5: '1.25rem',
  5.5: '1.375rem',
  6: '1.5rem',
  6.5: '1.625rem',
  7: '1.75rem',
  7.5: '1.875rem',
  8: '2rem',
  8.5: '2.125rem',
  9: '2.25rem',
  9.5: '2.375rem',
  10: '2.5rem'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: widthSizes,
      borderWidth: widthSizes,
      boxShadow: {
        'border-white': 'inset 0 0 0 1px #FFFFFF',
        'border-black-bold': 'inset 0 0 0 1px #01080E',
        'border-black-slight': 'inset 0 0 0 1px #1C2B3A',
        'border-brown': 'inset 0 0 0 1px #FEA55F'
      }
    }
  },
  plugins: [
    createThemes({
      light: {
        line: '#1E2D3D',
        'black-bold': '#01080E',
        'black-strong': '#011221',
        'black-subtle': '#011627',
        'black-slight': '#1C2B3A',
        gray: '#607B96',
        blue: '#3C9D93',
        violet: '#4D5BCE',
        white: '#FFFFFF',
        brown: '#FEA55F',
        cyan: '#43D9AD',
        pink: '#E99287',
        purple: '#C98BDF',

        base: {
          line: '#1E2D3D',
          'black-bold': '#01080E',
          'black-subtle': '#011221',
          'black-slight': '#011627',
          gray: '#607B96',
          blue: '#3C9D93',
          violet: '#4D5BCE',
          white: '#FFFFFF',
          brown: '#FEA55F',
          cyan: '#43D9AD',
          pink: '#E99287',
          purple: '#C98BDF'
        },
        'base-d': {
          line: '#1E2D3D',
          'black-bold': '#01080E',
          'black-subtle': '#011221',
          'black-slight': '#011627',
          gray: '#607B96',
          blue: '#3C9D93',
          violet: '#4D5BCE',
          white: '#FFFFFF',
          brown: '#FEA55F',
          cyan: '#43D9AD',
          pink: '#E99287',
          purple: '#C98BDF'
        }
      },
      dark: {
        line: '#1E2D3D',
        'black-bold': '#01080E',
        'black-strong': '#011221',
        'black-subtle': '#011627',
        'black-slight': '#1C2B3A',
        gray: '#607B96',
        blue: '#3C9D93',
        violet: '#4D5BCE',
        white: '#FFFFFF',
        brown: '#FEA55F',
        cyan: '#43D9AD',
        pink: '#E99287',
        purple: '#C98BDF',

        base: {
          line: '#1E2D3D',
          'black-bold': '#01080E',
          'black-strong': '#011221',
          'black-subtle': '#011627',
          'black-slight': '#1C2B3A',
          gray: '#607B96',
          blue: '#3C9D93',
          violet: '#4D5BCE',
          white: '#FFFFFF',
          brown: '#FEA55F',
          cyan: '#43D9AD',
          pink: '#E99287',
          purple: '#C98BDF'
        },
        'base-d': {
          line: '#1E2D3D',
          'black-bold': '#01080E',
          'black-strong': '#011221',
          'black-subtle': '#011627',
          'black-slight': '#1C2B3A',
          gray: '#607B96',
          blue: '#3C9D93',
          violet: '#4D5BCE',
          white: '#FFFFFF',
          brown: '#FEA55F',
          cyan: '#43D9AD',
          pink: '#E99287',
          purple: '#C98BDF'
        }
      }
    })
  ]
};
