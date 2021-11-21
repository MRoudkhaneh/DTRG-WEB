import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toast } from 'components/toast'
import { Skeleton } from 'components/skeleton'
import { routes } from './routes'
import { NotFound } from './not-found'
import { AdminLayout } from 'layouts'

export const Router = memo(() => (
  <AdminLayout>
    <Suspense fallback={<Skeleton />}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
    <Toast />
  </AdminLayout>
))
