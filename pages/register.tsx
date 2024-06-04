import Head from 'next/head'

import { AuthLayout } from 'components/layouts'
import { RegisterForm } from 'features/auth'
import { NextPageWithLayout } from 'types'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <RegisterForm />
    </>
  )
}

Login.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Login
