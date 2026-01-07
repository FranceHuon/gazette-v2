import type { Meta, StoryObj } from '@storybook/react'
import { Heart, Home, Search, Star } from 'lucide-react'
import { Avatar } from '../components/primitives/avatar'
import { Badge } from '../components/primitives/badge'
import { Button } from '../components/primitives/button'
import { Card } from '../components/primitives/card'
import { Input } from '../components/primitives/input'

const meta = {
  title: 'Overview/Atomic Components',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      {/* Buttons */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="secondary">Secondary</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Inputs</h2>
        <div className="grid max-w-md gap-3">
          <Input placeholder="Default input" />
          <Input type="email" placeholder="Email input" />
          <Input type="password" placeholder="Password" showPasswordToggle />
          <Input placeholder="Disabled" disabled />
        </div>
      </section>

      {/* Avatars */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Avatars</h2>
        <div className="flex items-center gap-4">
          <Avatar src="https://i.pravatar.cc/150?img=1" size="sm" />
          <Avatar src="https://i.pravatar.cc/150?img=2" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=3" size="lg" />
          <Avatar src="https://i.pravatar.cc/150?img=4" size="xl" />
          <Avatar fallback="JD" size="lg" />
        </div>
      </section>

      {/* Tags/Badges */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Tags / Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Icons */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Icons</h2>
        <div className="flex items-center gap-6">
          <Home className="size-6" />
          <Search className="size-6" />
          <Heart className="size-6 text-brand-red" />
          <Star className="size-6 text-yellow-500" />
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="font-semibold">Simple Card</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A basic card component with content.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2">
              <Badge>New</Badge>
              <span className="text-xs text-muted-foreground">5 min read</span>
            </div>
            <h3 className="font-semibold">Article Card</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Card with metadata and tags.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/150?img=5" />
              <div>
                <p className="font-medium">Profile Card</p>
                <p className="text-sm text-muted-foreground">With avatar</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Combined Example */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Example: User Profile Card</h2>
        <Card className="max-w-md p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <Avatar src="https://i.pravatar.cc/150?img=10" size="lg" />
              <div>
                <h3 className="font-semibold">Jane Cooper</h3>
                <p className="text-sm text-muted-foreground">Product Designer</p>
                <div className="mt-2 flex gap-2">
                  <Badge variant="secondary">Design</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline">
              <Heart className="size-4" />
            </Button>
          </div>

          <div className="mt-4">
            <Input placeholder="Send a message..." />
          </div>

          <div className="mt-4 flex gap-2">
            <Button className="flex-1" size="sm">
              Follow
            </Button>
            <Button className="flex-1" size="sm" variant="outline">
              Message
            </Button>
          </div>
        </Card>
      </section>
    </div>
  ),
}
