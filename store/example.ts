import { StoreCreator } from '../types/store'

const createExample: StoreCreator = (set) => ({
  count: 0,
  increment: () => {
    set((prev) => ({ count: prev.count + 1 }), false, 'count/increment')
  },
})

export default createExample
