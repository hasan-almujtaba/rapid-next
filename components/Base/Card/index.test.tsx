import { render } from '@testing-library/react'
import Card from '.'

describe('card', () => {
  it('render as link correctly', () => {
    const { container } = render(<Card href="http://example.com">example</Card>)

    expect(container.firstChild?.nodeName).toEqual('A')
  })

  it('render as div correctly', () => {
    const { container } = render(<Card>example</Card>)

    expect(container.firstChild?.nodeName).toEqual('DIV')
  })
})
