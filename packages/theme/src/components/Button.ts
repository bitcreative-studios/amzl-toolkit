import {
  darken,
  mode,
  transparentize,
  StyleFunctionProps,
} from '@chakra-ui/theme-tools'

const baseStyle = {
  borderRadius: 'sm',
}

const sizes = {}

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'primary',
    }),
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'secondary',
    }),
  outline: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    bg: mode('white', 'gray.800')(props),
    _hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        transparentize('gray.700', 0.4)(props.theme)
      )(props),
    },
    _checked: {
      bg: mode('gray.100', 'gray.700')(props),
    },
    _active: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  ghost: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    _hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        darken('gray.700', 4)(props.theme)
      )(props),
    },
    _active: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        darken('gray.700', 4)(props.theme)
      )(props),
    },
    _activeLink: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
}

export default { baseStyle, sizes, variants }
