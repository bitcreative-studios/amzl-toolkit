import {
  Box,
  BoxProps,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMoreVertical,
} from 'react-icons/fi'

interface Props extends BoxProps {
  label: string
  value: string
  delta: {
    value: string
    isUpwardsTrend: boolean
  }
  showTrend?: boolean
}

const StatTrendDetails = ({ isUpwardsTrend, value }) => (
  <HStack spacing="1" fontWeight="medium">
    <Icon
      color={isUpwardsTrend ? 'success' : 'error'}
      as={isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
      boxSize="5"
    />
    <Text color={isUpwardsTrend ? 'success' : 'error'}>{value}</Text>
    <Text color="muted">vs last week</Text>
  </HStack>
)
export const Stat = (props: Props) => {
  const { label, value, delta, showTrend = false, ...boxProps } = props
  return (
    <Box px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }} {...boxProps}>
      <Stack>
        <HStack justify="space-between">
          <Text fontSize="sm" color="muted">
            {label}
          </Text>
          <Icon as={FiMoreVertical} boxSize="5" color="muted" />
        </HStack>
        <Stack spacing="4">
          <Heading size="xs">{value}</Heading>
          {showTrend && (
            <StatTrendDetails
              isUpwardsTrend={delta.isUpwardsTrend}
              value={delta.value}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  )
}
