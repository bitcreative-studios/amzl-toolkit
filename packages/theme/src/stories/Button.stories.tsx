import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
}
export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  children: 'Button',
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  children: 'Deep Dive',
  color: 'secondary.500',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Button',
  colorScheme: 'primary',
}
