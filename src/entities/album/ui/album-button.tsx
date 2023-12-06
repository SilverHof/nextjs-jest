import { ButtonHTMLAttributes, FC } from 'react'

export type Size = 'small' | 'medium' | 'large'
export type Variant = 'contained' | 'outlined' | 'text' | 'icon' | 'border-icon'
export type Color = 'primary' | 'secondary'

export interface AlbumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: Variant
  color?: Color
  fullWidth?: boolean
  href?: string
}

export const AlbumButton: FC<AlbumButtonProps> = (
  { children, size = 'medium', variant = 'contained', color = 'primary', fullWidth = false, type, href, ...rest },
  ref
) => {
  const sizeClassName = size
    ? 'small'
    : 'flex items-center px-2 py-4 bg-black text-white'
    ? 'medium'
    : 'flex items-center px-4 py-6 bg-black text-white'

  const variantClassName = variant
    ? "contained"
    : ""
    ? "outlined"
    : ""
    ? "text"
    : ""
    ? "icon"
    : ""
    ? "border-icon"
    : ""

  return (
    <button className={`${sizeClassName} ${variantClassName}`} type={type} {...rest}>
      {children}
    </button>
  )
}
