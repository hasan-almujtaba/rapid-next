import React, { PropsWithChildren } from 'react'
import { CardProps } from './type'

const Card = (props: CardProps) => {
  const { children, href } = props

  /**
   * Render link (a) if href props defined
   */
  const Component = href ? 'a' : 'div'

  return (
    <Component
      className="group relative rounded-lg border border-gray-200"
      {...(href && { href })}
    >
      <div className="absolute -inset-0.5 rounded-[inherit] bg-gradient-to-r from-blue-600 to-purple-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative h-full w-full rounded-[inherit] bg-white p-4">
        {children}
      </div>
    </Component>
  )
}

const Title = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <h3 className="mb-2 w-fit bg-black from-blue-600 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent transition group-hover:bg-gradient-to-r">
      {children}
    </h3>
  )
}

const Text = (props: PropsWithChildren) => {
  const { children } = props

  return <div className="text-lg">{children}</div>
}

Card.Title = Title

Card.Text = Text

export default Card
