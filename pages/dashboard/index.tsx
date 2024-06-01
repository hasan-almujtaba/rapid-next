import Head from 'next/head'

import { DashboardLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <p>Protected Route</p>
    </>
  )
}

Dashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
