import { memo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Toast } from 'components/toast'
import { Page } from 'components/page'
import { useUi } from 'hooks/use-ui'
import { routes } from './routes'
import { Layout } from './layout'

export const Router = memo(() => {
  const {
    uiState: { toast },
  } = useUi()

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route}>
              <Page route={route} />
            </Route>
          ))}
        </Switch>
      </Layout>
      {toast.open && <Toast {...toast} />}
    </BrowserRouter>
  )
})
