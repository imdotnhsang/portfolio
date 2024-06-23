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

export const colorsLight = {
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

export const colorsLightAccessible = {
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

export const colorsDark = {
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

export const colorsDarkAccessible = {
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

export const nestedColorsLight = {
  ...colorsNeutral,

  ...colorsLight,
  a: {
    ...colorsLightAccessible
  },
  primary: colorsNeutral.gray[1400],
  secondary: colorsNeutral.gray[700],
  tertiary: 'rgba(154,160,166,0.8)', // colorsNeutral.gray[600] 80%
  quaternary: 'rgba(154,160,166,0.4)', // colorsNeutral.gray[600] 40%
  inverse: {
    primary: colorsNeutral.white,
    secondary: 'rgba(255,255,255,0.6)' // colorsNeutral.white 60%
  },
  'on-color': {
    white: colorsNeutral.white,
    gray: colorsNeutral.gray[1400]
  },
  success: colorsLightAccessible.green,
  warning: colorsLightAccessible.yellow,
  error: colorsLightAccessible.red,
  link: colorsLightAccessible.sky,
  'link-visited': colorsLightAccessible.purple,
  semantic: {
    active: colorsLight.sky,
    positive: colorsLight.green,
    notice: colorsLight.yellow,
    negative: colorsLight.red,
    a: {
      active: colorsLightAccessible.sky,
      positive: colorsLightAccessible.green,
      notice: colorsLightAccessible.yellow,
      negative: colorsLightAccessible.red
    }
  },
  'brand-main': colorsLight.red,
  'a-brand-main': colorsLightAccessible.red,
  'brand-sub': colorsLight.sky,
  'a-brand-sub': colorsLightAccessible.sky,

  fill: {
    ...colorsLight,
    a: {
      ...colorsLightAccessible
    },
    primary: colorsNeutral.gray[200],
    secondary: colorsNeutral.white,
    tertiary: colorsNeutral.gray[100],
    quaternary: colorsNeutral.white,
    inverse: {
      primary: colorsNeutral.gray[1200],
      secondary: colorsNeutral.gray[1100]
    },
    slight: 'rgba(154,160,166,0.05)', // colorsNeutral.gray[600] 5%
    subtle: 'rgba(154,160,166,0.1)', // colorsNeutral.gray[600] 10%
    strong: 'rgba(154,160,166,0.3)', // colorsNeutral.gray[600] 30%
    bold: 'rgba(154,160,166,0.5)', // colorsNeutral.gray[600] 50%

    'brand-main': colorsLight.red,
    'a-brand-main': colorsLightAccessible.red,
    'brand-sub': colorsLight.sky,
    'a-brand-sub': colorsLightAccessible.sky
  },

  stroke: {
    ...colorsLightAccessible,
    slight: 'rgba(154,160,166,0.1)', // colorsNeutral.gray[600] 10%
    subtle: 'rgba(154,160,166,0.2)', // colorsNeutral.gray[600] 20%
    strong: 'rgba(154,160,166,0.6)', // colorsNeutral.gray[600] 60%
    bold: colorsNeutral.gray[600],
    interactive: colorsLightAccessible.sky,
    success: colorsLightAccessible.green,
    warning: colorsLightAccessible.yellow,
    error: colorsLightAccessible.red,

    'brand-main': colorsLightAccessible.red,
    'brand-sub': colorsLightAccessible.sky
  }
};

export const nestedColorsDark = {
  ...colorsNeutral,

  ...colorsDark,
  a: {
    ...colorsDarkAccessible
  },
  primary: colorsNeutral.white,
  secondary: 'rgba(255,255,255,0.6)', // colorsNeutral.white 60%
  tertiary: 'rgba(255,255,255,0.4)', // colorsNeutral.white 40%
  quaternary: 'rgba(255,255,255,0.2)', // colorsNeutral.white 20%
  inverse: {
    primary: colorsNeutral.gray[1400],
    secondary: colorsNeutral.gray[700]
  },
  'on-color': {
    white: colorsNeutral.white,
    gray: colorsNeutral.gray[1400]
  },
  success: colorsDarkAccessible.green,
  warning: colorsDarkAccessible.yellow,
  error: colorsDarkAccessible.red,
  link: colorsDarkAccessible.sky,
  'link-visited': colorsDarkAccessible.purple,
  semantic: {
    active: colorsDark.sky,
    positive: colorsDark.green,
    notice: colorsDark.yellow,
    negative: colorsDark.red,
    a: {
      active: colorsDarkAccessible.sky,
      positive: colorsDarkAccessible.green,
      notice: colorsDarkAccessible.yellow,
      negative: colorsDarkAccessible.red
    }
  },
  'brand-main': colorsDark.red,
  'a-brand-main': colorsDarkAccessible.red,
  'brand-sub': colorsDark.sky,
  'a-brand-sub': colorsDarkAccessible.sky,

  fill: {
    ...colorsDark,
    a: {
      ...colorsDarkAccessible
    },
    primary: colorsNeutral.gray[1200],
    secondary: colorsNeutral.gray[1100],
    tertiary: colorsNeutral.gray[1000],
    quaternary: colorsNeutral.gray[900],
    inverse: {
      primary: colorsNeutral.gray[200],
      secondary: colorsNeutral.white
    },
    slight: 'rgba(255,255,255,0.02)', // colorsNeutral.white 2%
    subtle: 'rgba(255,255,255,0.05)', // colorsNeutral.white 5%,
    strong: 'rgba(255,255,255,0.15)', // colorsNeutral.white 15%
    bold: 'rgba(255,255,255,0.25)', // colorsNeutral.white 25

    'brand-main': colorsDarkAccessible.red,
    'a-brand-main': colorsDarkAccessible.red,
    'brand-sub': colorsDarkAccessible.sky,
    'a-brand-sub': colorsDarkAccessible.sky
  },

  stroke: {
    ...colorsDarkAccessible,
    slight: 'rgba(255,255,255,0.05)', // colorsNeutral.white 5%
    subtle: 'rgba(255,255,255,0.1)', // colorsNeutral.white 10%
    strong: 'rgba(255,255,255,0.2)', // colorsNeutral.white 20%
    bold: 'rgba(255,255,255,0.4)', // colorsNeutral.white 40%
    interactive: colorsDarkAccessible.sky,
    success: colorsDarkAccessible.green,
    warning: colorsDarkAccessible.yellow,
    error: colorsDarkAccessible.red,

    'brand-main': colorsDarkAccessible.red,
    'brand-sub': colorsDarkAccessible.sky
  }
};
