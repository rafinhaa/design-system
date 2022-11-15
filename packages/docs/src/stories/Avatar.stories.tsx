import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@codeheart/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
