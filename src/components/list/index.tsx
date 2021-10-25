import { FC, memo } from 'react'
import { classNames } from 'utils'

export const List = memo(({ children, className }: IList) => {
  return (
    <div className={classNames('w-full col-start', className)} slot="wrapper">
      {children}
    </div>
  )
})
