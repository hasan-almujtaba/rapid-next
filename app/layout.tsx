import { PropsWithChildren } from 'react'

import { ReactQueryProvider } from 'components/providers'

import 'styles/global.css'

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
