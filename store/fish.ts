import { FishSlice, StoreCreator } from '../types/store'

/**
 * Create independent slice
 * @param set - Set new value
 * @param get - Get value from store
 */
const createPost: StoreCreator<FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})

export default createPost
