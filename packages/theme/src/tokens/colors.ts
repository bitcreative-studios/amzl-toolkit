const gray = {
  50: '#EBECF2',
  100: '#D8DAE5',
  200: '#BABDCC',
  300: '#9A9EB2',
  400: '#828699',
  500: '#696C80',
  600: '#515466',
  700: '#3A3D4D',
  800: '#252833',
  900: '#12131A',
}

const primary = {
  50: '#d7fffa',
  100: '#aafcff',
  200: '#7af3ff',
  300: '#48e6ff',
  400: '#1ad7ff',
  500: '#00b6e6',
  600: '#009ab4',
  700: '#007782',
  800: '#004e50',
  900: '#001e20',
}

const secondary = {
  50: '#fff9ef',
  100: '#ffebce',
  200: '#ffdba9',
  300: '#ffac4b',
  400: '#ffb647',
  500: '#ff9c07',
  600: '#e68a00',
  700: '#c57600',
  800: '#9c5e00',
  900: '#5c3700',
}

const colors = {
  gray,
  primary,
  secondary,
  'bg-canvas': {
    default: 'gray.100',
    _dark: 'gray.900',
  },
  'bg-surface': {
    default: 'white',
    _dark: 'gray.800',
  },
  'bg-subtle': {
    default: 'gray.50',
    _dark: 'gray.700',
  },
  'bg-muted': {
    default: 'gray.100',
    _dark: 'gray.600',
  },
  default: {
    default: 'gray.900',
    _dark: 'white',
  },
  inverted: {
    default: 'white',
    _dark: 'gray.900',
  },
  emphasized: {
    default: 'gray.700',
    _dark: 'gray.100',
  },
  muted: {
    default: 'gray.600',
    _dark: 'gray.300',
  },
  subtle: {
    default: 'gray.500',
    _dark: 'gray.400',
  },
  border: {
    default: 'gray.200',
    _dark: 'gray.700',
  },
  accent: {
    default: 'brand.500',
    _dark: 'brand.200',
  },
  success: {
    default: '#D4D94E',
    _dark: '#e6e893',
  },
  error: {
    default: 'red.600',
    _dark: 'red.200',
  },
  'bg-accent': 'brand.600',
  'bg-accent-subtle': 'brand.500',
  'bg-accent-muted': 'brand.400',
  'on-accent': 'white',
  'on-accent-muted': 'brand.50',
  'on-accent-subtle': 'brand.100',
}

export default colors
