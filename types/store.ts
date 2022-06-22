import { StateCreator } from 'zustand'

export interface Example {
  count: number
  increment: () => void
}

export type Store = Example

export type StoreCreator = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
>
