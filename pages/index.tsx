import Card from '@/components/Base/Card'
import Default from '@/layouts/Default'
import { NextPageWithLayout } from '@/types/layout'
import Head from 'next/head'
import React, { ReactElement } from 'react'

const items = [
  {
    title: 'React Framework →',
    text: 'Learn more about Next.js features and API.',
    href: 'https://nextjs.org/docs',
  },
  {
    title: 'Fetching Library →',
    text: 'Learn more about React Query features and API.',
    href: 'https://tanstack.com/query/v4',
  },
  {
    title: 'State Library →',
    text: 'Learn more about Zustand features and API.',
    href: 'https://github.com/pmndrs/zustand/wiki',
  },
  {
    title: 'CSS Framework →',
    text: 'Learn more about Tailwind CSS features and API.',
    href: 'https://tailwindcss.com',
  },
  {
    title: 'Headless Component →',
    text: 'Learn more about Headless UI features and API.',
    href: 'https://headlessui.com',
  },
  {
    title: 'Authentication →',
    text: 'Learn more about Next Auth features and API.',
    href: 'https://next-auth.js.org',
  },
]

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-0">
        <h1 className="mb-3 text-center text-3xl font-medium lg:text-5xl">
          Welcome to{' '}
          <a
            href="https://github.com/hasan-almujtaba/next-starter"
            className="bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent"
          >
            Next Starter
          </a>
          !
        </h1>

        <p className="mb-7 text-center text-lg">
          A Starter project for starting new React JS development with common
          features already preconfigured out of the box
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, key) => (
            <Card
              key={key}
              href={item.href}
            >
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card>
          ))}
        </div>

        <p className="mt-5 text-center">
          Get started by editing{' '}
          <code className="rounded bg-gray-300 px-1">pages/index.tsx</code>
        </p>
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Default>{page}</Default>
}

export default Home
