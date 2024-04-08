import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import '../src/styles/_autoload.scss';
import { colorsDark, colorsLight } from '../src/theme';

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
  }
};

export default preview;
