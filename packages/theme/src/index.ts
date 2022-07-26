import {
  extendTheme,
  withDefaultSize,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import global from './global'
import * as tokens from './tokens'
import * as components from './components'

// fonts
import '@fontsource/sora/300.css'
import '@fontsource/sora/400.css'
import '@fontsource/sora/600.css'

const baseTheme: Record<string, any> = {
  global,
  ...tokens,
  components: { ...components },
}

const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'primary' }),
  withDefaultSize({
    size: 'sm',
    components: ['Button', 'Badge'],
  }),
  baseTheme
)

export default theme
