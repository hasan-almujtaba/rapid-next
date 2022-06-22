import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  /**
   * Inject getInitialProps
   * See https://mantine.dev/theming/next/#adding-to-existing-nextjs-project
   */
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
