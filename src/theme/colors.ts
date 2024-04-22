const colorsNeutral = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F8F9FA',
    200: '#F1F3F4',
    300: '#E8EAED',
    400: '#DADCE0',
    500: '#BDC1C6',
    600: '#9AA0A6',
    700: '#80868B',
    800: '#5F6368',
    900: '#3C4043',
    1000: '#2E3134',
    1100: '#282A2D',
    1200: '#202124',
    1300: '#17181B',
    1400: '#0E1013'
  }
};

export const colorsLight = {
  ...colorsNeutral,
  red: '#E51733',
  rose: '#FF3370',
  pink: '#FF33A3',
  sky: '#007DFF',
  ocean: '#2E52E5',
  purple: '#6D29CC',
  cyan: '#14CCCC',
  green: '#51CC14',
  lime: '#A1D916',
  yellow: '#FFB800',
  sunset: '#FF771A',
  volcano: '#FF531A',

  container: '#F1F3F4',
  group: '#FFFFFF',
  children: '#F8F9FA',
  element: '#F1F3F4',
  slight: 'rgba(154,160,166,0.05)',
  subtle: 'rgba(154,160,166,0.1)',
  strong: 'rgba(154,160,166,0.3)',
  bold: 'rgba(154,160,166,0.5)',

  line: {
    slight: 'rgba(154,160,166,0.1)',
    subtle: 'rgba(154,160,166,0.2)',
    strong: 'rgba(154,160,166,0.6)',
    bold: '#9AA0A6',
    interactive: '#0070E5',
    success: '#47B212',
    warning: '#E5A600',
    error: '#CC142D'
  },

  semantic: {
    active: '#007DFF',
    notice: '#FFB800',
    negative: '#E51733',
    positive: '#51CC14'
  },

  primary: '#0E1013',
  secondary: '#80868B',
  tertiary: 'rgba(154,160,166,0.8)',
  quaternary: 'rgba(154,160,166,0.4)',
  success: '#47B212',
  warning: '#E5A600',
  error: '#CC142D',
  link: '#0070E5'
};

export const colorsDark = {
  ...colorsNeutral,
  red: '#E55C6E',
  rose: '#FF80A6',
  pink: '#FF4DAE',
  sky: '#1A8AFF',
  ocean: '#4564E5',
  purple: '#793DCC',
  cyan: '#29CCCC',
  green: '#5FCC29',
  lime: '#A8D92B',
  yellow: '#FFBF1A',
  sunset: '#FF8633',
  volcano: '#FF6633',

  container: '#202124',
  group: '#282A2D',
  children: '#2E3134',
  element: '#3C4043',
  slight: 'rgba(255,255,255,0.02)',
  subtle: 'rgba(255,255,255,0.05)',
  strong: 'rgba(255,255,255,0.15)',
  bold: 'rgba(255,255,255,0.25)',

  line: {
    slight: 'rgba(255,255,255,0.05)',
    subtle: 'rgba(255,255,255,0.1)',
    strong: 'rgba(255,255,255,0.2)',
    bold: 'rgba(255,255,255,0.4)',
    interactive: '#4DA4FF',
    success: '#7ACC52',
    warning: '#FFCD4D',
    error: '#E55C6E'
  },

  semantic: {
    active: '#1A8AFF',
    notice: '#FFBF1A',
    negative: '#E52E47',
    positive: '#5FCC29'
  },

  primary: '#FFFFFF',
  secondary: 'rgba(255,255,255,0.6)',
  tertiary: 'rgba(255,255,255,0.4)',
  quaternary: 'rgba(255,255,255,0.2)',
  success: '#7ACC52',
  warning: '#FFCD4D',
  error: '#E55C6E',
  link: '#4DA4FF'
};
