import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/primitives/badge'

const meta = {
  title: 'Primitives/Tag',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Tag',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'React',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'TypeScript',
  },
}

export const Categories: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Design</Badge>
      <Badge variant="secondary">Development</Badge>
      <Badge variant="outline">Marketing</Badge>
      <Badge>UI/UX</Badge>
      <Badge variant="secondary">Frontend</Badge>
    </div>
  ),
}
