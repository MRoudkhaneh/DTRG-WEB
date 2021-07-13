import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Page, Toast } from 'components'
import { useUi } from 'hooks'
import { routes } from './routes'
import { Layout } from './layout'
import { memo } from 'react'

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
