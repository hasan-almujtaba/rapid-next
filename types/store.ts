import { StateCreator } from 'zustand'

/**
 * Independent slices
 */
export interface CountSlice {
  count: number
  increment: () => void
}

/**
 * Main Store
 * @see https://github.com/pmndrs/zustand/blob/main/docs/typescript.md#independent-slices-pattern
 */
export type Store = CountSlice

/**
 * Set & Get for independent slices
 */
export type StoreCreator<T> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  T
>
