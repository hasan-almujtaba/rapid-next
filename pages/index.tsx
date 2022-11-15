import Button from '@/components/Base/Button'
import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types/layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Button
        as={Link}
        href="/about"
      >
        Ley it be
      </Button>
      <div>Home</div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
