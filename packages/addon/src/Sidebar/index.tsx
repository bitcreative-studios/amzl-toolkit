import React from 'react'
import { createRoot } from 'react-dom/client'
import SidebarPanel from './SidebarPanel'

const container = document.querySelector('#sidebar-panel')
// @ts-ignore
const root = createRoot(container)

root.render(<SidebarPanel />)
