import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Progress,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

interface StatWithProgressBarProps {
  label: string
  value: number
  limit: number
  shortLabel: string
}
const StatWithProgressBar = (props: StatWithProgressBarProps) => {
  const { shortLabel, label, value, limit, ...boxProps } = props
  return (
    <LinkBox bg="bg-surface" boxShadow={2} {...boxProps}>
      <Box px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
        <Stack>
          <Stack spacing={0}>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              <LinkOverlay href="#">{shortLabel}</LinkOverlay>
            </Text>
            <Text fontSize="xs" color="muted">
              {label}
            </Text>
          </Stack>
          <Stack direction="row" align="baseline">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              {value}
            </Heading>
            <Text aria-hidden fontWeight="semibold" color="muted">
              / {limit}
            </Text>
            <Box srOnly>out of {limit}</Box>
          </Stack>
        </Stack>
      </Box>
      <Progress
        value={(value / limit) * 100}
        size="xs"
        borderRadius="none"
        bg="bg-surface"
      />
    </LinkBox>
  )
}
export default StatWithProgressBar
