import {
  Avatar,
  Badge,
  Box,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'

const employeeData = {
  employeeId: 183774030,
  avatarUrl: 'https://bit.ly/sage-adebayo',
  status: 'Coded',
  name: 'Segun Adebayo',
  currentLaborCoding: 'UI Engineer',
}

type LaborTrackingStatus = 'soft' | 'direct' | 'tot'
interface EmployeeCardProps {
  employeeId: number
  avatarUrl: string
  status: LaborTrackingStatus
  name: string
  currentLaborCoding: string
}

const EmployeeCard = ({
  employeeId,
  avatarUrl,
  status,
  name,
  currentLaborCoding,
}: EmployeeCardProps) => {
  let badgeColor = undefined
  switch (status) {
    case 'soft':
      badgeColor = 'pink'
      break
    case 'direct':
      badgeColor = 'blue'
      break
    case 'tot':
      badgeColor = 'blackAlpha'
      break
  }

  return (
    <LinkBox py={3} px={2} boxShadow={1} bg="bg-canvas">
      <Flex>
        <Avatar src={avatarUrl} />
        <Box ml="3">
          <Text fontWeight="bold">
            <LinkOverlay href="#">
              {name}
              <Badge ml="1" colorScheme={badgeColor}>
                {status}
              </Badge>
            </LinkOverlay>
          </Text>
          <Text fontSize="sm">{currentLaborCoding}</Text>
        </Box>
      </Flex>
    </LinkBox>
  )
}
export default EmployeeCard
