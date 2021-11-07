import { memo, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Toast } from 'components/toast'
import { Page } from 'components/page'
import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { AdminLayout } from 'layouts/admin'
import { routes } from './routes'
import { NotFound } from './not-found'

export const Router = memo(() => {
  const {
    uiState: { toast },
  } = useUi()

  return (
    <BrowserRouter>
      <AdminLayout>
        <Suspense fallback={<Skeleton />}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route}>
                <Page route={route} />
              </Route>
            ))}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </AdminLayout>
      {toast.open && <Toast {...toast} />}
    </BrowserRouter>
  )
})
