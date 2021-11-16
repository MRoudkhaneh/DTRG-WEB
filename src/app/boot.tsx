import { QueryClient, QueryClientProvider } from 'react-query'
import { UiProvider } from 'provider/ui-provider'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { AdminLayout } from 'layouts'

const Boot = () => (
  <QueryClientProvider client={new QueryClient()}>
    <UiProvider>
      <BrowserRouter>
        <AdminLayout>
          <Router />
        </AdminLayout>
      </BrowserRouter>
    </UiProvider>
  </QueryClientProvider>
)

export { Boot }
