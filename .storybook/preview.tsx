import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import '../src/styles/_autoload.scss';
import { colorsDark, colorsLight } from '../src/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light',
    attributeName: 'data-theme'
  })
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: colorsLight.group
        },
        {
          name: 'dark',
          value: colorsDark.group
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <main className={twMerge(inter.variable, 'font-sans')}>
        <Story />
      </main>
    )
  ]
};

export default preview;
