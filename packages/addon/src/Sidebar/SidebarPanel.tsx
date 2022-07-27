import React from 'react'
import {
  Box,
  Container,
  Divider,
  HStack,
  LinkBox,
  SimpleGrid,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import AppHeader from '../components/AppHeader'
import { Stat } from '../components/Stat'
import ExpandableStat from '../components/ExpandableStat'
import StatWithProgressBar from '../components/StatWithProgressBar'
import EmployeeCard from '../components/EmployeeCard'

export type SidebarPanelProps = {}
const volumeCumulativeData = {
  label: 'Total Volume',
  value: '71,887',
  delta: { value: '320', isUpwardsTrend: true },
}
const volumeAggregateData = [
  {
    label: 'CYCLE_1',
    value: '71,887',
    delta: { value: '321', isUpwardsTrend: true },
    showTrend: true,
  },
  {
    label: 'AD_HOC_1',
    value: '107',
    delta: { value: '2.3%', isUpwardsTrend: true },
  },
  {
    label: 'RTS_1',
    value: '69',
    delta: { value: '0.1%', isUpwardsTrend: false },
  },
]

const routeCumulativeData = {
  label: 'Total Routes',
  value: '218',
  delta: { value: '10', isUpwardsTrend: false },
}
const routeAggregateData = [
  {
    label: 'CYCLE_1',
    value: '71,887',
    delta: { value: '321', isUpwardsTrend: true },
    showTrend: true,
  },
  {
    label: 'AD_HOC_1',
    value: '107',
    delta: { value: '2.3%', isUpwardsTrend: true },
  },
  {
    label: 'RTS_1',
    value: '69',
    delta: { value: '0.1%', isUpwardsTrend: false },
  },
]

// Data for StatWithProgressBar
const benchMarkData = [
  { shortLabel: 'RTS', label: 'Returned To Station', value: 1, limit: 3 },
  {
    shortLabel: 'PNOV',
    label: 'Packages Not On Vehicle',
    value: 1240,
    limit: 10000,
  },
  // { label: 'Contacts', value: 120, limit: 500 },
]

// Employee Data
const associates = [
  {
    employeeId: 183774030,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    status: 'soft',
    name: 'Segun Adebayo',
    currentLaborCoding: 'UI Engineer',
  },
  {
    employeeId: 183774030,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    status: 'direct',
    name: 'Segun Adebayo',
    currentLaborCoding: 'UI Engineer',
  },
  {
    employeeId: 183774030,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    status: 'soft',
    name: 'Segun Adebayo',
    currentLaborCoding: 'UI Engineer',
  },
  {
    employeeId: 183774030,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    status: 'tot',
    name: 'Segun Adebayo',
    currentLaborCoding: 'UI Engineer',
  },
  {
    employeeId: 183774030,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    status: 'tot',
    name: 'Segun Adebayo',
    currentLaborCoding: 'UI Engineer',
  },
]

const StatDetails = ({ stats }) => (
  <Box as="section" py={{ base: '4', md: '8' }}>
    <Box
      bg="bg-surface"
      borderRadius="sm"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        divider={<StackDivider />}
        spacing="0"
      >
        {stats.map((stat, id) => (
          <Stat key={id} flex="1" {...stat} />
        ))}
      </Stack>
    </Box>
  </Box>
)

const SidebarPanel = ({}: SidebarPanelProps) => {
  return (
    <Box>
      <AppHeader connected={true} />
      <Stack mt={5} direction="column" spacing={4}>
        <Stack>
          <Container>
            <Stack spacing="1">
              <Text fontSize="xl" fontWeight="semibold" color="orange.400">
                Benchmarks
              </Text>
              <Text color="muted" fontSize="sm">
                An overview of station data
              </Text>
            </Stack>
          </Container>
          <Box as="section" py={{ base: '4', md: '8' }}>
            <Container>
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                gap={{ base: '5', md: '6' }}
              >
                {benchMarkData.map((stat, id) => (
                  <StatWithProgressBar key={id} {...stat} />
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        </Stack>
        <Stack>
          <Container>
            <HStack>
              <Divider />
              <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
                Metrics
              </Text>
              <Divider />
            </HStack>
          </Container>
          <Box as="section" py={{ base: '4', md: '8' }}>
            <Container>
              <ExpandableStat {...volumeCumulativeData}>
                <StatDetails stats={volumeAggregateData} />
              </ExpandableStat>
            </Container>
          </Box>
          <Box as="section" py={{ base: '4', md: '8' }}>
            <Container>
              <ExpandableStat {...routeCumulativeData}>
                <StatDetails stats={routeAggregateData} />
              </ExpandableStat>
            </Container>
          </Box>
        </Stack>
        <Stack>
          <Container>
            <HStack>
              <Divider />
              <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
                Associates
              </Text>
              <Divider />
            </HStack>
          </Container>
          <Container>
            <Stack spacing={4}>
              {associates.map(associate => (
                <EmployeeCard {...associate} />
              ))}
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Box>
  )
}

export default SidebarPanel
