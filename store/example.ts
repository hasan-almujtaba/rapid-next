import { StoreCreator } from '../types/store'

/**
 * Create independent slice
 * @param set - Set new value
 * @param get - Get value from store
 */
const createExample: StoreCreator = (set, get) => ({
  count: 0,
  increment: () => {
    set((prev) => ({ count: prev.count + 1 }), false, 'count/increment')
  },
})

export default createExample
