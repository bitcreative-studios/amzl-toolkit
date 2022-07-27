import { Icon } from '@chakra-ui/react'

const CautionIcon = props => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M12 2L2 22H22L12 2Z" strokeWidth="1.5"></path>
    <path
      fill="none"
      d="M12 19C12.2761 19 12.5 18.7761 12.5 18.5C12.5 18.2239 12.2761 18 12 18C11.7239 18 11.5 18.2239 11.5 18.5C11.5 18.7761 11.7239 19 12 19Z"
      strokeWidth="1.5"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke="#056cf2"
      d="M12 19C12.2761 19 12.5 18.7761 12.5 18.5C12.5 18.2239 12.2761 18 12 18C11.7239 18 11.5 18.2239 11.5 18.5C11.5 18.7761 11.7239 19 12 19Z"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke="#056cf2"
      d="M12 10V15"
    ></path>
  </Icon>
)

export default CautionIcon
