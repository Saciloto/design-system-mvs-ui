import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@mvs-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/saciloto.png',
    alt: 'Mauricio Saciloto',
  },
  argTypes: {
    src: {
      description: 'Image of the avatar',
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const CustomTag: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
