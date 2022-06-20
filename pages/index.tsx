import { NextPageWithLayout } from '../types/layout.type'
import DefaultLayout from '../components/layouts/default'
import { ReactElement, useEffect, useState } from 'react'
import useStore from '../store'
import { Button } from '@mantine/core'
import { dehydrate, QueryClient } from 'react-query'
import { fetchPosts } from '../apis/post'

const Home: NextPageWithLayout = () => {
  const countState = useStore((state) => state.count)
  const incrementCountState = useStore((state) => state.increment)

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(countState)
  }, [countState])

  return (
    <div>
      <div>{count}</div>
      <Button onClick={incrementCountState}>Increment</Button>
    </div>
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

  await queryClient.prefetchQuery('posts', () => fetchPosts())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
