import { QueryClient, QueryClientProvider } from 'react-query'
import { UiProvider } from 'provider/ui-provider'
import { Router } from './router'
import { useMemo } from 'react'

const Boot = () => {
  const client = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={client}>
      <UiProvider>
        <Router />
      </UiProvider>
    </QueryClientProvider>
  )
}

export { Boot }
