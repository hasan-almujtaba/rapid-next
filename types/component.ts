import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react'

/**
 * Valid html element to pass
 */
type AsProperty<C extends ElementType> = {
  as?: C
}

/**
 * Props to omit from element props so no duplicate props
 */
type PropertiesToOmit<C extends ElementType, P> = keyof (AsProperty<C> & P)

/**
 * Polymorphic component without ref
 */
export type PolymorphicComponentProp<
  C extends ElementType,
  Properties = Record<string, unknown>
> = PropsWithChildren<Properties & AsProperty<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropertiesToOmit<C, Properties>>

/**
 * Get element type from generic for ref
 */
export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref']

/**
 * Polymorphic component with ref (forwardRef)
 */
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Properties = Record<string, unknown>
> = PolymorphicComponentProp<C, Properties> & { ref?: PolymorphicRef<C> }
