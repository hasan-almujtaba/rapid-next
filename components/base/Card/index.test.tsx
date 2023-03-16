import { render, screen } from '@testing-library/react'

import { Card } from '.'

describe('card', () => {
  it('render as link correctly', () => {
    render(<Card href="http://example.com">example</Card>)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('render as div correctly', () => {
    render(<Card>example</Card>)

    expect(screen.getByText('example').hasAttribute('href')).toBe(false)
  })
})
