import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { UiProvider } from 'provider/ui-provider'
import { render, screen, waitFor } from '@testing-library/react'
import { PatientAssets } from '..'

const history = createMemoryHistory()

const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    <UiProvider>
      <Router history={history}>{children}</Router>
    </UiProvider>
  </QueryClientProvider>
)

describe('Asset list', () => {
  it('Should render properly', () => {
    render(<PatientAssets />, { wrapper })
    expect(screen.getByText(/assets/i)).toBeVisible()
  })
  it('Should render table properly', async () => {
    render(<PatientAssets />, { wrapper })
    expect(screen.getAllByTestId('table-skeleton').length).toBe(10)
    await waitFor(() => !screen.queryByTestId('table-skeleton'))
    expect(screen.getByText(/no items/i)).toBeInTheDocument()
  })
})
