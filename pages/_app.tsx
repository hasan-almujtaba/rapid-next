import { GetServerSidePropsContext } from 'next'
import { AppPropsWithLayout } from '../types/layout'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { useState } from 'react'
import { getCookie, setCookies } from 'cookies-next'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const App = ({
  Component,
  pageProps,
  preferredColorScheme,
}: AppPropsWithLayout & { preferredColorScheme: ColorScheme }) => {
  /**
   * React Query Configuration
   */
  const [queryClient] = useState(() => new QueryClient())

  /**
   * Use the layout defined at the page level, if available
   */
  const getLayout = Component.getLayout ?? ((page) => page)

  /**
   * Detect user's preferred color scheme
   */
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            theme={{ colorScheme }}
            withNormalizeCSS
          >
            {getLayout(<Component {...pageProps} />)}
          </MantineProvider>
        </ColorSchemeProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

/**
 * Get the user's preferred color scheme from the cookie
 */
App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  preferredColorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})

export default App
