import { QueryClient, QueryClientProvider } from 'react-query'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { UiProvider } from 'provider'
import { Router } from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
})

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
})

const Boot = () => (
  <QueryClientProvider client={queryClient}>
    <UiProvider>
      <Router />
    </UiProvider>
  </QueryClientProvider>
)

export { Boot }
