import Head from 'next/head'

import { AuthLayout } from 'components/layouts'
import { LoginForm } from 'features/auth'
import { NextPageWithLayout } from 'types'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <LoginForm />
    </>
  )
}

Login.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Login
