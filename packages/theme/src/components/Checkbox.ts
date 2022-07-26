import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: 'muted',
    fontWeight: 'medium',
  },
  control: {
    bg: mode('white', 'gray.800')(props),
    borderRadius: 'sm',
  },
})

const sizes = {
  md: {
    label: {
      fontSize: 'sm',
    },
  },
}

const defaultProps = {
  colorScheme: 'primary',
}

export default {
  baseStyle,
  sizes,
  defaultProps,
}
