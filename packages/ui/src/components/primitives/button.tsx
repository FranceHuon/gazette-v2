import type { VariantProps } from 'class-variance-authority'
import { cn } from '@gazette-v2/ui/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import * as React from 'react'

const buttonVariants = cva(
  // Classes de base communes à tous les boutons
  'inline-flex items-center cursor-pointer justify-center gap-2.5 whitespace-nowrap font-medium transition-[color,background-color,box-shadow] disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-brand-red/30 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        // Variante par défaut - Votre rouge #E33529 avec texte blanc
        default:
          'bg-brand-red text-white hover:bg-brand-red/90 shadow-sm',
        // Variante outline - Bordure rouge, fond transparent
        outline:
          'border-2 border-brand-red bg-transparent text-brand-red hover:bg-brand-red hover:text-white',
        // Variante ghost - Pas de bordure ni fond
        ghost:
          'text-brand-red hover:bg-brand-red/10',
        // Variante secondary - Pour actions secondaires
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      size: {
        // Taille par défaut - vos dimensions (responsive)
        default:
          'h-12 px-12 py-2 rounded-xl text-sm md:h-[61px] md:px-[72px] md:rounded-2xl md:text-base',
        // Petite taille
        sm:
          'h-10 px-8 py-1.5 rounded-lg text-xs md:h-12 md:px-12 md:rounded-xl md:text-sm',
        // Grande taille
        lg:
          'h-14 px-16 py-2.5 rounded-2xl text-base md:h-[70px] md:px-20 md:rounded-3xl md:text-lg',
        // Bouton icône (carré)
        icon:
          'size-12 rounded-xl md:size-[61px] md:rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
