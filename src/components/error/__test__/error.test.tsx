import { render, screen } from '@testing-library/react'
import { Error } from 'components/error'

describe('Error component', () => {
  it('Should render error properly', () => {
    render(<Error error={{ message: 'Some test error' }} />)
    expect(screen.getByText(/some test error/i)).toHaveClass(
      'text-xs mt-2 text-red-700 dark:text-red-500 '
    )
  })
})
