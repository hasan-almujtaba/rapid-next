import { BearSlice, StoreCreator } from '../types/store'

/**
 * Create independent slice
 * @param set - Set new value
 * @param get - Get value from store
 */
const createPost: StoreCreator<BearSlice> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
})

export default createPost
