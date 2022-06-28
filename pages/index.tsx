import { NextPageWithLayout } from '../types/layout'
import DefaultLayout from '../components/layouts/default'
import { ReactElement, useEffect, useState } from 'react'
import useStore from '../store'
import { Affix, Box, Button, Text } from '@mantine/core'
import { dehydrate, QueryClient } from 'react-query'
import Head from 'next/head'
import FeatureList from '../components/features/FeatureList'
import Link from 'next/link'

const Home: NextPageWithLayout = () => {
  /**
   * Bind state from zustand
   */
  const countState = useStore((state) => state.count)
  const incrementCountState = useStore((state) => state.increment)

  /**
   * Local state
   */
  const [count, setCount] = useState(0)

  /**
   * Set data from state to local state on mounted
   */
  useEffect(() => {
    setCount(countState)
  }, [countState])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        sx={() => ({
          textAlign: 'center',
        })}
      >
        <h1>Next Starter</h1>
        <Text sx={() => ({ fontStyle: 'italic' })}>
          Opinionated react starter built on top of Next JS
        </Text>
      </Box>

      <FeatureList />

      <Link href="/example">
        <Text
          sx={() => ({
            cursor: 'pointer',
            textAlign: 'center',
            marginTop: '10px',
            '&:hover': {
              textDecorationLine: 'underline',
            },
          })}
        >
          See example in action
        </Text>
      </Link>

      <Affix position={{ bottom: 25, right: 20 }}>
        <Button
          onClick={incrementCountState}
          radius={100}
          sx={() => ({
            height: '60px',
            width: '60px',
          })}
        >
          {count}
        </Button>
      </Affix>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

/**
 * dehydrateState for react-query
 * WARNING: Always return dehydrated state object in every page component.
 */
export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
