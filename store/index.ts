import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Store } from '../types/store'
import createCount from './count'

/**
 * Create Store
 * @see https://github.com/pmndrs/zustand/blob/main/docs/typescript.md#interdependent-slices-pattern
 */
const useStore = create<Store>()(
  devtools(
    persist(
      (...a) => ({
        ...createCount(...a),
      }),
      {
        name: 'zustand',
      }
    )
  )
)

export default useStore
