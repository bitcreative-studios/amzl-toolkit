import { mode } from '@chakra-ui/theme-tools'
import { ComponentStyleConfig } from '@chakra-ui/react'

const baseStyle: ComponentStyleConfig['baseStyle'] = props => ({
  label: {
    color: 'muted',
    fontWeight: 'medium',
  },
  control: {
    bg: mode('white', 'gray.800')(props),
    borderRadius: 'sm',
  },
})

const sizes: ComponentStyleConfig['sizes'] = {
  md: {
    label: {
      fontSize: 'sm',
    },
  },
}

const checkboxStyleConfig: ComponentStyleConfig = {
  baseStyle,
  sizes,
}

export default checkboxStyleConfig
