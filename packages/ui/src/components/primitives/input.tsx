import { cn } from '@gazette-v2/ui/lib/utils'
import { Eye, EyeOff } from 'lucide-react'
import * as React from 'react'

interface InputProps extends React.ComponentProps<'input'> {
  /**
   * Afficher le bouton de toggle pour les mots de passe
   */
  showPasswordToggle?: boolean
}

function Input({
  className,
  type,
  showPasswordToggle = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  // Si showPasswordToggle est true, on gère le type dynamiquement
  const inputType = showPasswordToggle
    ? (showPassword ? 'text' : 'password')
    : type

  const input = (
    <input
      type={inputType}
      data-slot="input"
      className={cn(
        // Base styles
        'flex w-full min-w-0 text-base',
        // Dimensions responsives : plus petit sur mobile, 62px sur desktop
        'h-12 px-3 py-3 md:h-[62px] md:px-4 md:py-4',
        // Padding à droite si password toggle
        showPasswordToggle && 'pr-12 md:pr-14',
        // Border radius responsive : 12px mobile, 16px desktop
        'rounded-xl md:rounded-2xl',
        // Votre bordure rouge #E33529
        'border border-brand-red',
        // Styles de fond et texte
        'bg-background text-foreground',
        'placeholder:text-muted-foreground',
        // Taille de texte responsive
        'text-sm md:text-base',
        // États focus
        'outline-none transition-[color,box-shadow]',
        'focus-visible:border-brand-red focus-visible:ring-brand-red/20 focus-visible:ring-[3px]',
        // État disabled
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )

  // Si pas de toggle, retourner juste l'input
  if (!showPasswordToggle) {
    return input
  }

  // Sinon, wrapper avec le bouton
  return (
    <div className="relative">
      {input}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={cn(
          'absolute right-3 top-1/2 -translate-y-1/2',
          'md:right-4',
          'text-muted-foreground hover:text-foreground',
          'transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20 rounded-md',
          'size-5 md:size-6',
        )}
        tabIndex={-1}
        aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
      >
        {showPassword
          ? (
              <EyeOff className="size-full" />
            )
          : (
              <Eye className="size-full" />
            )}
      </button>
    </div>
  )
}

export { Input }
