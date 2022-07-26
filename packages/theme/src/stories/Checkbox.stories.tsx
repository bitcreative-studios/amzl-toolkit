import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Elements/Checkbox',
  component: Checkbox,
  argTypes: {},
}
export default meta

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  // variant: 'primary',
  // children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  colorScheme: 'secondary',
  // variant: 'primary',
  // children: 'Button',
}
