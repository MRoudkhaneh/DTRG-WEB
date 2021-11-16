import { QueryClient, QueryClientProvider } from 'react-query'
import { UiProvider } from 'provider/ui-provider'
import { Router } from './router'
import { RecoilRoot } from 'recoil'

const Boot = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UiProvider>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </UiProvider>
    </QueryClientProvider>
  )
}

export { Boot }
