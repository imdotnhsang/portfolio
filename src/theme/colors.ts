export const colorsBase = {
  white: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ffffff',
    400: '#ffffff',
    500: '#ffffff',
    600: '#E8E8E8',
    700: '#B5B5B5',
    800: '#8C8C8C',
    900: '#6B6B6B'
  },
  black: {
    50: '#e9e9ea',
    100: '#bbbbbe',
    200: '#9a9b9e',
    300: '#6c6d72',
    400: '#505157',
    500: '#24252d',
    600: '#212229',
    700: '#1a1a20',
    800: '#141419',
    900: '#0f1013'
  },
  red: {
    50: '#feeceb',
    100: '#fcd9d7',
    200: '#faa9a3',
    300: '#f88178',
    400: '#f6695e',
    500: '#f44336',
    600: '#de3d31',
    700: '#ad3026',
    800: '#86251e',
    900: '#661c17'
  },
  pink: {
    50: '#fde9ef',
    100: '#f8b9cf',
    200: '#f598b7',
    300: '#f06896',
    400: '#ed4b82',
    500: '#e91e63',
    600: '#d41b5a',
    700: '#a51546',
    800: '#801136',
    900: '#620d2a'
  },
  purple: {
    50: '#f5e9f7',
    100: '#e0bce7',
    200: '#d19cdb',
    300: '#bd6eca',
    400: '#b052c0',
    500: '#9c27b0',
    600: '#8e23a0',
    700: '#6f1c7d',
    800: '#561561',
    900: '#42104a'
  },
  blue: {
    50: '#e9f5fe',
    100: '#badefb',
    200: '#99cff9',
    300: '#6ab9f7',
    400: '#4dabf5',
    500: '#2196f3',
    600: '#1e89dd',
    700: '#176bad',
    800: '#125386',
    900: '#0e3f66'
  },
  cyan: {
    50: '#e6f8fb',
    100: '#b0eaf2',
    200: '#8ae0eb',
    300: '#54d2e2',
    400: '#33c9dd',
    500: '#00bcd4',
    600: '#00abc1',
    700: '#008597',
    800: '#006775',
    900: '#004f59'
  },
  green: {
    50: '#edf7ee',
    100: '#c8e6c9',
    200: '#addaaf',
    300: '#87c98a',
    400: '#70bf73',
    500: '#4caf50',
    600: '#459f49',
    700: '#367c39',
    800: '#2a602c',
    900: '#204a22'
  },
  lime: {
    50: '#fafceb',
    100: '#f0f4c2',
    200: '#e8efa4',
    300: '#dee87a',
    400: '#d7e361',
    500: '#cddc39',
    600: '#bbc834',
    700: '#929c28',
    800: '#71791f',
    9000: '#565c18'
  },
  yellow: {
    50: '#fffdeb',
    100: '#fff9c2',
    200: '#fff6a5',
    300: '#fff27c',
    400: '#ffef62',
    500: '#ffeb3b',
    600: '#e8d636',
    700: '#b5a72a',
    800: '#8c8120',
    900: '#6b6319'
  },
  orange: {
    50: '#fff5e6',
    100: '#ffdfb0',
    200: '#ffd08a',
    300: '#ffba54',
    400: '#ffad33',
    500: '#ff9800',
    600: '#e88a00',
    700: '#b56c00',
    800: '#8c5400',
    900: '#6b4000'
  },
  brown: {
    50: '#f2eeed',
    100: '#d5cac6',
    200: '#c1b1ab',
    300: '#a58d84',
    400: '#94776d',
    500: '#795548',
    600: '#6e4d42',
    700: '#563c33',
    800: '#432f28',
    900: '#33241e'
  },
  gray: {
    50: '#f5f5f5',
    100: '#e1e1e1',
    200: '#d2d2d2',
    300: '#bebebe',
    400: '#b1b1b1',
    500: '#9e9e9e',
    600: '#909090',
    700: '#707070',
    800: '#575757',
    900: '#424242'
  }
};

export const colorsLight = {
  red: colorsBase.red[600],
  pink: colorsBase.pink[600],
  purple: colorsBase.purple[500],
  blue: colorsBase.blue[500],
  cyan: colorsBase.cyan[600],
  green: colorsBase.green[600],
  lime: colorsBase.lime[600],
  orange: colorsBase.orange[500],
  yellow: colorsBase.yellow[600],
  brown: colorsBase.brown[700]
};

export const colorsDark = {
  red: colorsBase.red[500],
  pink: colorsBase.pink[400],
  purple: colorsBase.purple[200],
  blue: colorsBase.blue[200],
  cyan: colorsBase.cyan[400],
  green: colorsBase.green[400],
  lime: colorsBase.lime[400],
  orange: colorsBase.orange[400],
  yellow: colorsBase.yellow[400],
  brown: colorsBase.brown[400]
};
