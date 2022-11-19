import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

/**
 * Extend NextPage
 * See https://nextjs.org/docs/basic-features/layouts#with-typescript
 */
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

/**
 * Extend AppPros
 */
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

/**
 * Layout component
 */
export interface Layout {
  children: ReactNode
}
