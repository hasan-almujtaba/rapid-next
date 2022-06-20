import { GetState, SetState } from 'zustand'
import { Store } from '../types/store'

const createExample = (set: SetState<Store>, get: GetState<Store>) => ({
  count: 0,
  increment: () => {
    set((prev) => ({ count: prev.count + 1 }))
  },
})

export default createExample
