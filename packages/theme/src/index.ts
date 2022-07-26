import { extendTheme } from '@chakra-ui/react'
import global from './global'
import * as tokens from './tokens'
import * as components from './components'

// fonts
import '@fontsource/sora/300.css'
import '@fontsource/sora/400.css'
import '@fontsource/sora/600.css'

const theme: Record<string, any> = extendTheme({
  global,
  ...tokens,
  components: { ...components },
})

export default theme
