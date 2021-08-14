import { FC, memo } from 'react'
import { drawerClassName } from './helper'

export const Drawer: FC<IDrawer> = memo(({ children, open }) => {
  return (
    <div className={drawerClassName(open)} data-testid="drawer">
      {children && <div>{children}</div>}
    </div>
  )
})
