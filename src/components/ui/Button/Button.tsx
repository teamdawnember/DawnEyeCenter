import type { ComponentPropsWithoutRef } from 'react'
import './Button.css'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'md' | 'sm'

type ButtonProps = {
  variant?: Variant
  size?: Size
  /** Renders an anchor when set, a button otherwise. */
  href?: string
} & ComponentPropsWithoutRef<'button'>

const VARIANT_CLASS: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  outline: 'btn-outline',
}

const SIZE_CLASS: Record<Size, string> = {
  md: '',
  sm: 'btn-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = ['btn', VARIANT_CLASS[variant], SIZE_CLASS[size], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
