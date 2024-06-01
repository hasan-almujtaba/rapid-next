import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { AppPropsWithLayout } from 'types'

import 'styles/global.css'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  /**
   * React Query Configuration
   */
  const [queryClient] = useState(() => new QueryClient())

  /**
   * Use the layout defined at the page level, if available
   * @see https://nextjs.org/docs/basic-features/layouts
   */
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
