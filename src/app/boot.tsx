import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from './router'
import { UiProvider } from 'provider'
import { BrowserRouter } from 'react-router-dom'

const Boot = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UiProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UiProvider>
    </QueryClientProvider>
  )
}

export { Boot }
