import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from './router'
import { RecoilRoot } from 'recoil'

const Boot = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export { Boot }
