import { StateCreator } from 'zustand'

/**
 * Independent slices
 */
export type BearSlice = {
  bears: number
  addBear: () => void
}

export type FishSlice = {
  fishes: number
  addFish: () => void
}

/**
 * Main Store
 * @see https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern
 */
export type Store = BearSlice & FishSlice

/**
 * Set & Get for independent slices
 */
export type StoreCreator<T> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  T
>
