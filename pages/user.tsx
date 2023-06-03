import { QueryClient, dehydrate } from '@tanstack/react-query'
import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { UserList, getUsers } from 'features/user'
import { NextPageWithLayout } from 'types'

const User: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>

      <UserList />
    </>
  )
}

User.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['users'], getUsers)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default User
