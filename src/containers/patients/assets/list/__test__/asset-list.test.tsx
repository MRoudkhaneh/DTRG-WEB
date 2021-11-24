import { render, screen, waitFor } from '@testing-library/react'
import { wrapper } from 'test'
import { PatientAssets } from '..'

describe('Asset list', () => {
  it('Should render properly', () => {
    // render(<PatientAssets />, { wrapper })
    // expect(screen.getByText(/assets/i)).toBeVisible()
  })
  // it('Should render table properly', async () => {
  //   render(<PatientAssets />, { wrapper })
  //   expect(screen.getAllByTestId('table-skeleton').length).toBe(10)
  //   await waitFor(() => !screen.queryByTestId('table-skeleton'))
  //   expect(screen.getByText(/no items/i)).toBeInTheDocument()
  // })
})
