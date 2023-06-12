'use client'

import { Card } from 'components/base'

import { items } from './data'

export const FeatureList = () => {
  return (
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
        <code className="rounded bg-gray-300 px-1">page/index.tsx</code>
      </p>
    </div>
  )
}
