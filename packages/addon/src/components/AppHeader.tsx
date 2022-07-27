import React from 'react'
import { Box, Divider, Select, VStack } from '@chakra-ui/react'
import AppBar from './AppBar'

export type AppHeaderProps = {}

// TODO: pull connected to global
const AppHeader = ({ connected }: AppHeaderProps) => {
  return (
    <Box boxShadow="sm">
      <AppBar connected={connected} />
      <Divider />
      <Box bg="white" py={3} px={2}>
        <Select placeholder="Select tool">
          <option value="option1">RTS Debrief</option>
          <option value="option2">PNOV</option>
          <option value="option3">Missing Packages</option>
          <option value="option3">Package Management</option>
        </Select>
      </Box>
    </Box>
  )
}

export default AppHeader
