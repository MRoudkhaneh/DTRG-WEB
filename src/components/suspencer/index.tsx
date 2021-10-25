import { Skeleton } from 'components/skeleton'
import { FC, memo, Suspense } from 'react'

export const Suspencer = memo(({ children }: ISuspencer) => {
  return <Suspense fallback={<Skeleton />}>{children}</Suspense>
})
