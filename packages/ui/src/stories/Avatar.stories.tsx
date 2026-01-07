import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../components/primitives/avatar'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'John Doe',
  },
}

export const WithFallback: Story = {
  args: {
    fallback: 'JD',
  },
}

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    size: 'sm',
    alt: 'Small avatar',
  },
}

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'md',
    alt: 'Medium avatar',
  },
}

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    size: 'lg',
    alt: 'Large avatar',
  },
}

export const ExtraLarge: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    size: 'xl',
    alt: 'Extra large avatar',
  },
}

export const FallbackSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="SM" size="sm" />
      <Avatar fallback="MD" size="md" />
      <Avatar fallback="LG" size="lg" />
      <Avatar fallback="XL" size="xl" />
    </div>
  ),
}
