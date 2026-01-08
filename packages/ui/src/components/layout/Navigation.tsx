import { Button } from '@gazette-v2/ui/components/primitives/button'
import { Separator } from '@gazette-v2/ui/components/primitives/separator'
import { Sheet, SheetContent, SheetTrigger } from '@gazette-v2/ui/components/primitives/sheet'
import { cn } from '@gazette-v2/ui/lib/utils'
import { Menu, X } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router'

export interface NavigationItem {
  to: string
  label: string
}

export interface NavigationSection {
  items: NavigationItem[]
  separator?: boolean
}

interface NavigationProps {
  brand: React.ReactNode
  sections?: NavigationSection[]
  className?: string
}

const defaultSections: NavigationSection[] = []

export function Navigation({ brand, sections = defaultSections, className }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className={cn('container mx-auto flex h-14 items-center justify-between gap-8 px-4', className)}>
      {/* Logo/Brand */}
      <div className="flex items-center gap-6">
        {brand}
      </div>

      {/* Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex items-center gap-2 text-brand-red transition-all duration-300 hover:scale-110 hover:text-red-600">
            <Menu className="h-5 w-5" />
            <span className="font-bold uppercase tracking-wider">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md" hideCloseButton>
          <div className="flex h-full flex-col">
            {/* Close Button */}
            <div className="pb-4">
              <button
                onClick={closeMenu}
                className="ml-auto flex items-center justify-end gap-3 text-xl font-bold uppercase tracking-wider text-brand-red transition-all duration-300 hover:scale-110 hover:text-red-600"
              >
                Fermer
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 space-y-2 pt-6">
              {sections.map((section, sectionIndex) => {
                const sectionKey = section.items.map(item => item.to).join('-')

                return (
                  <React.Fragment key={sectionKey}>
                    {section.separator && sectionIndex > 0 && (
                      <Separator className="my-4" />
                    )}
                    {section.items.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={closeMenu}
                        className="block py-4 text-center text-3xl font-bold uppercase tracking-wider text-brand-red transition-all duration-300 hover:scale-110 hover:text-red-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </React.Fragment>
                )
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
Navigation.displayName = 'Navigation'
