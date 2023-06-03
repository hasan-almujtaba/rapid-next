import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { FeatureList } from 'features/information'
import { NextPageWithLayout } from 'types'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <FeatureList />
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
