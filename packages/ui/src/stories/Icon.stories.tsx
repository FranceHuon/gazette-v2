import type { Meta, StoryObj } from '@storybook/react'
import {
  Heart,
  Home,
  Mail,
  Search,
  Settings,
  Star,
  User,
  Zap,
} from 'lucide-react'

function IconWrapper({ children, name }: { children: React.ReactNode, name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      {children}
      <span className="text-xs text-muted-foreground">{name}</span>
    </div>
  )
}

const meta = {
  title: 'Primitives/Icon',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SingleIcon: Story = {
  render: () => <Heart className="size-6 text-brand-red" />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Heart className="size-4" />
      <Heart className="size-6" />
      <Heart className="size-8" />
      <Heart className="size-12" />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Heart className="size-6 text-brand-red" />
      <Heart className="size-6 text-blue-500" />
      <Heart className="size-6 text-green-500" />
      <Heart className="size-6 text-yellow-500" />
      <Heart className="size-6 text-purple-500" />
    </div>
  ),
}

export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <IconWrapper name="Home">
        <Home className="size-6" />
      </IconWrapper>
      <IconWrapper name="User">
        <User className="size-6" />
      </IconWrapper>
      <IconWrapper name="Mail">
        <Mail className="size-6" />
      </IconWrapper>
      <IconWrapper name="Search">
        <Search className="size-6" />
      </IconWrapper>
      <IconWrapper name="Settings">
        <Settings className="size-6" />
      </IconWrapper>
      <IconWrapper name="Star">
        <Star className="size-6" />
      </IconWrapper>
      <IconWrapper name="Heart">
        <Heart className="size-6" />
      </IconWrapper>
      <IconWrapper name="Zap">
        <Zap className="size-6" />
      </IconWrapper>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2 text-white hover:bg-brand-red/90">
        <Heart className="size-4" />
        Like
      </button>
      <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50">
        <Star className="size-4" />
        Favorite
      </button>
    </div>
  ),
}
