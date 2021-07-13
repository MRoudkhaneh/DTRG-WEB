import { Skeleton } from 'components/skeleton'
import { FC, memo, Suspense } from 'react'

export const Suspencer: FC<ISuspencer> = memo(({ children }) => {
  return <Suspense fallback={<Skeleton />}>{children}</Suspense>
})
