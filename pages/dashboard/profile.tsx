import Head from 'next/head'

import { DashboardLayout } from 'components/layouts'
import { ChangePasswordForm, PersonalInformationForm } from 'features/auth'
import { NextPageWithLayout } from 'types'

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="divide-y divide-white/5">
        <PersonalInformationForm />

        <ChangePasswordForm />
      </div>
    </>
  )
}

Dashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
