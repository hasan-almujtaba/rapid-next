import { PolymorphicComponentPropWithRef } from '@/types/component'
import { ElementType, ReactElement } from 'react'

/**
 * Custom props
 */
type Props = {
  variant?: 'filled' | 'outlined'
  colorScheme?: 'primary' | 'secondary'
}

/**
 * Component props with ref
 */
export type ButtonProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<C, Props>

/**
 * Component type to make polymorphic component typing work
 */
export type ButtonComponent = <C extends ElementType = 'button'>(
  props: ButtonProps<C>
) => ReactElement | null
