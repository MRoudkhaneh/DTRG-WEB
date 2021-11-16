import { memo, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Toast } from 'components/toast'
import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { routes } from './routes'
import { NotFound } from './not-found'
import { AdminLayout } from 'layouts'

export const Router = memo(() => {
  // const {
  //   uiState: { toast },
  // } = useUi()

  return (
    <BrowserRouter>
      <AdminLayout>
        <Suspense fallback={<Skeleton />}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
        {/*toast.open && <Toast {...toast} />*/}
      </AdminLayout>
    </BrowserRouter>
  )
})
