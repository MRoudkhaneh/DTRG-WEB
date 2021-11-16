import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toast } from 'components/toast'
import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { routes } from './routes'
import { NotFound } from './not-found'

export const Router = memo(() => {
  const {
    uiState: { toast },
  } = useUi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route element={<NotFound />} />
      </Routes>
      {toast.open && <Toast {...toast} />}
    </Suspense>
  )
})
