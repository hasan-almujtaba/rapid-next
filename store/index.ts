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
    persist(
      (set, get) => ({
        ...createExample(set, get),
      }),
      { name: 'next-zustand' }
    )
  )
)

export default useStore
