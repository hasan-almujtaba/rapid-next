import '../styles/globals.css'
import { AppPropsWithLayout } from '../types/layout.type'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  /**
   * Use the layout defined at the page level, if available
   */
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
export default App
