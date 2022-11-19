import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('render element correctly', () => {
    render(
      <Button
        as="a"
        href="http://example.com"
      >
        Example
      </Button>
    )

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'http://example.com'
    )
  })

  it('render correct variant and color scheme', () => {
    render(<Button colorScheme="secondary">Example</Button>)

    expect(screen.getByRole('button')).toHaveClass(
      'btn btn-filled btn-secondary'
    )
  })
})
