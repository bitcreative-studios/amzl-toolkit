import React from 'react'
import { theme } from '@chakra-ui/pro-theme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import SidebarPanel from './SidebarPanel'
import '@fontsource/sora/300.css'
import '@fontsource/sora/400.css'
import '@fontsource/sora/600.css'

const container = document.querySelector('#sidebar-panel')
// @ts-ignore
const root = createRoot(container)
const customTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.cyan },
    fonts: {
      heading: 'Sora, -apple-system, system-ui, sans-serif',
      body: 'Sora, -apple-system, system-ui, sans-serif',
    },
    shadows: {
      1: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
      2: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
      3: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
      4: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
      5: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
      6: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)',
    },
  },
  theme
)
root.render(
  <ChakraProvider theme={customTheme}>
    <SidebarPanel />
  </ChakraProvider>
)
