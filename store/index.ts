import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Store } from '../types/store'
import createExample from './example'

/**
 * Create Store
 * See https://github.com/pmndrs/zustand/blob/main/docs/typescript.md
 */
const useStore = create<Store>()(
  devtools(
    persist((...a) => ({
      ...createExample(...a),
    }))
  )
)

export default useStore
