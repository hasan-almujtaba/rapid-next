import { NextPageWithLayout } from '../types/layout.type'
import DefaultLayout from '../components/layouts/default'
import { ReactElement } from 'react'

const Home: NextPageWithLayout = () => {
  return <div>Index</div>
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
