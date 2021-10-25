import { FC, memo } from 'react'
import { drawerClassName } from './helper'

export const Drawer = memo(({ children, open }: IDrawer) => {
  return (
    <div className={drawerClassName(open)} data-testid="drawer">
      {children && <div>{children}</div>}
    </div>
  )
})
