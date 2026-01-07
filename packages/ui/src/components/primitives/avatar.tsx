import { cn } from '@gazette-v2/ui/lib/utils'
import * as React from 'react'

export interface AvatarProps extends React.ComponentProps<'div'> {
  /**
   * URL de l'image
   */
  src?: string
  /**
   * Texte alternatif
   */
  alt?: string
  /**
   * Initiales à afficher si pas d'image
   */
  fallback?: string
  /**
   * Taille de l'avatar
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
  xl: 'size-16 text-lg',
}

export function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  const showFallback = !src || imageError

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary font-medium text-secondary-foreground',
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {!showFallback && (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="size-full object-cover"
        />
      )}
      {showFallback && fallback && (
        <span className="uppercase">{fallback}</span>
      )}
    </div>
  )
}
