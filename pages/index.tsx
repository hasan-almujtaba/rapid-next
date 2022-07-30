import { NextPageWithLayout } from '@/types/layout'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import { ReactElement, useEffect, useState } from 'react'
import useStore from '../store'
import { Affix, Box, Button, Text } from '@mantine/core'
import { dehydrate, QueryClient } from 'react-query'
import Head from 'next/head'
import FeatureList from '@/components/FeatureList/FeatureList'
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
          marginTop: '100px',
        })}
      >
        <Text
          sx={() => ({
            fontSize: '50px',
            fontWeight: 'bolder',
          })}
        >
          Next Starter
        </Text>
        <Text sx={() => ({ fontStyle: 'italic', letterSpacing: '0.1em' })}>
          Opinionated react starter built on top of Next JS
        </Text>
        <Button
          sx={() => ({
            marginTop: '10px',
          })}
          component="a"
          href="https://github.com/hasan-almujtaba/next-starter"
          target="_blank"
        >
          Get Started
        </Button>
      </Box>

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
