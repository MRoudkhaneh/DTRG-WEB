import { FC, memo } from 'react'
import { ICWrapper, TIcon } from './wrapper'

export const ICFilter = memo(({ className, onClick }: TIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
    </ICWrapper>
  )
})
