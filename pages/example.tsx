import { NextPageWithLayout } from '../types/layout'
import DefaultLayout from '../components/layouts/default'
import { ReactElement } from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchPosts } from '../apis/example'
import PostList from '../components/examples/post-list'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <div>
        <PostList></PostList>
      </div>
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

  await queryClient.prefetchQuery('posts', () => fetchPosts())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
