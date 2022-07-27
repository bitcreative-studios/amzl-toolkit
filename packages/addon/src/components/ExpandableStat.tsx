import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMoreVertical,
} from 'react-icons/fi'

interface Props {
  label: string
  value: string
  delta: {
    value: string
    isUpwardsTrend: boolean
  }
  children: React.ReactNode
}
const ExpandableStat = (props: Props) => {
  const { children, label, value, delta, ...boxProps } = props
  return (
    <Box bg="bg-surface" borderRadius="sm" boxShadow="2" {...boxProps}>
      <Box px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
        <Stack>
          <HStack justify="space-between">
            <Text fontSize="sm" color="muted">
              {label}
            </Text>
            <Icon as={FiMoreVertical} boxSize="5" color="muted" />
          </HStack>
          <HStack justify="space-between">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              {value}
            </Heading>
            <Badge
              variant="subtle"
              colorScheme={delta.isUpwardsTrend ? 'green' : 'red'}
            >
              <HStack spacing="1">
                <Icon
                  as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
                />
                <Text>{delta.value}</Text>
              </HStack>
            </Badge>
          </HStack>
        </Stack>
      </Box>
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bg="blackAlpha.50" pb={4}>
              {children}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  )
}

export default ExpandableStat
