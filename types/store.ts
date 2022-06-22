import { StateCreator } from 'zustand'

/**
 * Independent slices
 */
export interface Example {
  count: number
  increment: () => void
}

/**
 * Main Store
 */
export type Store = Example

/**
 * Set & Get for independent slices
 * See https://github.com/pmndrs/zustand/blob/main/docs/typescript.md#independent-slices-pattern
 */
export type StoreCreator = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
>
