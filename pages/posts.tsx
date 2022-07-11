import { NextPageWithLayout } from '../types/layout'
import DefaultLayout from '@/components/DefaulLayout/DefaultLayout'
import { ReactElement } from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchPosts } from '@/apis/post'
import PostList from '@/components/PostList/PostList'
import Head from 'next/head'

const Posts: NextPageWithLayout = () => {
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

Posts.getLayout = (page: ReactElement) => {
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

export default Posts
