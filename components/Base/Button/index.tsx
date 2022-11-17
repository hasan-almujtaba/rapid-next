import { PolymorphicRef } from '@/types/component'
import clsx from 'clsx'
import { ElementType, forwardRef } from 'react'
import { ButtonComponent, ButtonProps } from './type'

const Button: ButtonComponent = forwardRef(function Button<
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
      className={clsx(
        className ?? undefined,
        'group',
        `btn btn-${variant} btn-${colorScheme}`
      )}
    >
      {variant === 'outlined' ? textWrapper : children}
    </Component>
  )
})

export default Button
