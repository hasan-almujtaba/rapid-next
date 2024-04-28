import { Card, CardDescription, CardTitle } from 'components/ui/card'

import { items } from './data'

export const FeatureList = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-0">
      <h1 className="mb-3 text-center text-3xl font-medium lg:text-5xl">
        Welcome to Next Starter!
      </h1>

      <p className="mb-7 text-center text-lg">
        A Starter project for starting new React JS development with common
        features already preconfigured out of the box.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, key) => (
          <Card
            key={key}
            className="border-slate-300 p-4"
            asChild
          >
            <a
              href={item.href}
              target="_blank"
            >
              <CardTitle className="mb-1">{item.title}</CardTitle>
              <CardDescription>{item.text}</CardDescription>
            </a>
          </Card>
        ))}
      </div>

      <p className="mt-5 text-center">
        Get started by editing{' '}
        <code className="rounded bg-gray-800 p-0.5 text-white">
          page/index.tsx
        </code>
      </p>
    </div>
  )
}
