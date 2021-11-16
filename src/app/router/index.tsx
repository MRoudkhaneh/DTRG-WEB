import { memo, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toast } from 'components/toast'
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
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
      </AdminLayout>
      {toast.open && <Toast {...toast} />}
    </BrowserRouter>
  )
})
