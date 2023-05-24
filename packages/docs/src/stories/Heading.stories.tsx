import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@mvs-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      story:
        'Por padrão o heading sempre será uma `h2`, mas podemos alterar isso com a propriedade `as`',
    },
  },
}
