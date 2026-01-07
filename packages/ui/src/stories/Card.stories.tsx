import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../components/primitives/card'

const meta = {
  title: 'Primitives/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-[350px] p-6',
    children: (
      <>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          This is a simple card component with some content inside.
        </p>
      </>
    ),
  },
}

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="Mountain"
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold">Mountain View</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Beautiful landscape photography of mountains during sunset.
        </p>
      </div>
    </Card>
  ),
}

export const ArticleCard: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-brand-red px-2 py-1 text-xs text-white">
          New
        </span>
        <span className="text-xs text-muted-foreground">5 min read</span>
      </div>
      <h3 className="text-lg font-semibold">Getting Started with React</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Learn the fundamentals of React and start building modern web applications.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <div className="size-8 rounded-full bg-gray-200" />
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">Jan 7, 2026</p>
        </div>
      </div>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[280px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        alt="Product"
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">Premium Headphones</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          High-quality audio experience
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">$299</span>
          <button type="button" className="rounded-lg bg-brand-red px-4 py-2 text-sm text-white hover:bg-brand-red/90">
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  ),
}
