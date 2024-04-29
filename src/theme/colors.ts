export const colorsNeutral = {
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

export const colorsLightAccentColors = {
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
  volcano: '#FF531A'
};

export const colorsLightAccessibleColors = {
  red: '#CC142D',
  rose: '#E52E65',
  pink: '#E52E92',
  sky: '#0070E5',
  ocean: '#2949CC',
  purple: '#5F24B2',
  cyan: '#11B2B2',
  green: '#47B212',
  lime: '#8EBF13',
  yellow: '#E5A600',
  sunset: '#E56B17',
  volcano: '#E54B17'
};

export const colorsDarkAccentColors = {
  red: '#E52E47',
  rose: '#FF4D82',
  pink: '#FF4DAE',
  sky: '#1A8AFF',
  ocean: '#4564E5',
  purple: '#793DCC',
  cyan: '#29CCCC',
  green: '#5FCC29',
  lime: '#A8D92B',
  yellow: '#FFBF1A',
  sunset: '#FF8633',
  volcano: '#FF6633'
};

export const colorsDarkAccessibleColors = {
  red: '#E55C6E',
  rose: '#FF80A6',
  pink: '#FF80C5',
  sky: '#4DA4FF',
  ocean: '#7389E5',
  purple: '#9166CC',
  cyan: '#52CCCC',
  green: '#7ACC52',
  lime: '#B4D957',
  yellow: '#FFCD4D',
  sunset: '#FFA466',
  volcano: '#FF8D66'
};

export const colorsLight = {
  ...colorsNeutral,

  /**
   * Text light colors
   */
  ...colorsLightAccentColors,
  ...colorsLightAccessibleColors,
  primary: '#0E1013',
  secondary: '#80868B',
  tertiary: 'rgba(154,160,166,0.8)',
  quaternary: 'rgba(154,160,166,0.4)',
  inverse: {
    primary: '#FFFFFF',
    secondary: 'rgba(255,255,255,0.6)'
  },
  'on-color': {
    white: '#FFFFFF',
    gray: '#0E1013'
  },
  success: '#47B212',
  warning: '#E5A600',
  error: '#CC142D',
  link: '#0070E5',
  'link-visited': '#5F24B2',
  semantic: {
    active: '#007DFF',
    positive: '#51CC14',
    notice: '#FFB800',
    negative: '#E51733',
    a: {
      active: '#0070E5',
      positive: '#47B212',
      notice: '#E5A600',
      negative: '#CC142D'
    }
  },

  /**
   * Border light colors
   */
  line: {
    ...colorsLightAccessibleColors,
    slight: 'rgba(154,160,166,0.1)',
    subtle: 'rgba(154,160,166,0.2)',
    strong: 'rgba(154,160,166,0.6)',
    bold: '#9AA0A6',
    interactive: '#0070E5',
    success: '#47B212',
    warning: '#E5A600',
    error: '#CC142D'
  },

  /**
   * Background light colors
   */
  color: {
    ...colorsDarkAccentColors,
    ...colorsDarkAccessibleColors,
    primary: '#F1F3F4',
    secondary: '#FFFFFF',
    tertiary: '#F8F9FA',
    quaternary: '#F1F3F4',
    slight: 'rgba(154,160,166,0.05)',
    subtle: 'rgba(154,160,166,0.1)',
    strong: 'rgba(154,160,166,0.3)',
    bold: 'rgba(154,160,166,0.5)',
    inverse: {
      primary: '#202124',
      secondary: '#282A2D'
    }
  }
};

export const colorsDark = {
  ...colorsNeutral,

  /**
   * Text dark colors
   */
  ...colorsDarkAccentColors,
  ...colorsDarkAccessibleColors,
  primary: '#FFFFFF',
  secondary: 'rgba(255,255,255,0.6)',
  tertiary: 'rgba(255,255,255,0.4)',
  quaternary: 'rgba(255,255,255,0.2)',
  inverse: {
    primary: '#0E1013',
    secondary: '#80868B'
  },
  'on-color': {
    white: '#FFFFFF',
    gray: '#0E1013'
  },
  success: '#7ACC52',
  warning: '#FFCD4D',
  error: '#E55C6E',
  link: '#4DA4FF',
  'link-visited': '#A373E5',
  semantic: {
    active: '#1A8AFF',
    positive: '#5FCC29',
    notice: '#FFBF1A',
    negative: '#E52E47',
    a: {
      active: '#4DA4FF',
      positive: '#7ACC52',
      notice: '#FFCD4D',
      negative: '#E55C6E'
    }
  },

  /**
   * Border dark colors
   */
  line: {
    ...colorsDarkAccessibleColors,
    slight: 'rgba(255,255,255,0.05)',
    subtle: 'rgba(255,255,255,0.1)',
    strong: 'rgba(255,255,255,0.2)',
    bold: 'rgba(255,255,255,0.4)',
    interactive: '#4DA4FF',
    success: '#7ACC52',
    warning: '#FFCD4D',
    error: '#E55C6E'
  },

  /**
   * Background dark colors
   */
  color: {
    ...colorsDarkAccentColors,
    ...colorsDarkAccessibleColors,
    primary: '#202124',
    secondary: '#282A2D',
    tertiary: '#2E3134',
    quaternary: '#3C4043',
    slight: 'rgba(255,255,255,0.02)',
    subtle: 'rgba(255,255,255,0.05)',
    strong: 'rgba(255,255,255,0.15)',
    bold: 'rgba(255,255,255,0.25)',
    inverse: {
      primary: '#F1F3F4',
      secondary: '#FFFFFF'
    }
  }
};
