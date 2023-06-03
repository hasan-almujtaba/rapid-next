import { ElementType, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { PolymorphicRef } from 'types'

import { ButtonComponent, ButtonProps } from './type'

export const Button: ButtonComponent = forwardRef(function Button<
  C extends ElementType
>(properties: ButtonProps<C>, reference: PolymorphicRef<C>) {
  const {
    as,
    children,
    className,
    variant = 'filled',
    colorScheme = 'primary',
    ...rest
  } = properties

  /**
   * Set component wrapper
   * default to button
   */
  const Component = as || 'button'

  /**
   * Text wrapper for outlined variant
   */
  const textWrapper = (
    <span className="relative inset-0 rounded-[inherit] bg-white px-5 py-2.5 transition-colors hover:text-white group-hover:bg-opacity-0">
      {children}
    </span>
  )

  return (
    <Component
      ref={reference}
      {...rest}
      className={twMerge(
        'group',
        `btn btn-${variant} btn-${colorScheme}`,
        className
      )}
    >
      {variant === 'outlined' ? textWrapper : children}
    </Component>
  )
})
