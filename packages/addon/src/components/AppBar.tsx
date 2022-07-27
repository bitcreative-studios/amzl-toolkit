import * as React from 'react'
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import CautionIcon from './icons/CautionIcon'
import {
  AiFillWarning,
  IoSettingsSharp,
  MdFingerprint,
  MdHelpCenter,
} from 'react-icons/all'

const AppBar = ({ connected }) => (
  <Box
    bg="bg-surface"
    px={4}
    py={1}
    borderTopWidth="8px"
    borderColor={connected ? '#FF9900' : 'gray.500'}
  >
    <Stack direction="row" justify="space-between" align="center">
      <Box color="brand.500">
        {connected ? (
          <HStack>
            <Icon as={MdFingerprint} boxSize={6} />
            <Text fontWeight="semibold">VPN Connected</Text>
          </HStack>
        ) : (
          <Button variant="ghost">
            <HStack color="brand.600">
              <Icon as={AiFillWarning} boxSize={6} />
              <Text fontWeight="semibold">Connect To VPN</Text>
            </HStack>
          </Button>
        )}
      </Box>
      <Stack direction="row" spacing="3">
        <IconButton
          variant="ghost"
          size="lg"
          icon={<IoSettingsSharp />}
          aria-label="settings"
        />
        <IconButton
          variant="ghost"
          size="lg"
          icon={<MdHelpCenter />}
          aria-label="help"
        />
        {/*<Button variant="secondary">Contact</Button>*/}
        {/*<Button variant="primary">Invite</Button>*/}
      </Stack>
    </Stack>
  </Box>
)

export default AppBar
