import { darken, mode, transparentize } from '@chakra-ui/theme-tools'
import { ComponentStyleConfig } from '@chakra-ui/react'

const baseStyle: ComponentStyleConfig['baseStyle'] = {
  borderRadius: 'sm',
}

const sizes: ComponentStyleConfig['sizes'] = {}

const variants: ComponentStyleConfig['variants'] = {
  primary: props =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'primary',
    }),
  secondary: props =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'secondary',
    }),
  outline: props => ({
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
  ghost: props => ({
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

const buttonStyleConfig: ComponentStyleConfig = { baseStyle, sizes, variants }

export default buttonStyleConfig
