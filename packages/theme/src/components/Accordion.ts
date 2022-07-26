import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const parts: ComponentMultiStyleConfig['parts'] = [
  'button',
  'container',
  'root',
  'panel',
  'icon',
]

const baseStyle: ComponentMultiStyleConfig['baseStyle'] = props => ({
  button: {
    color: mode('primary.500', 'secondary.500')(props),
  },
})

const defaultProps = {
  allowMultiple: true,
}

const accordionStyleConfig = { parts, baseStyle, defaultProps }
export default accordionStyleConfig
