import { FC, memo } from 'react'
import { classNames } from 'utils'

export const Drawer: FC<IDrawer> = memo(({ children, open }) => {
  return (
    <div
      className={classNames(
        'fixed top-0 left-0 h-full flex-col shadow-2xl trans z-30 bg-[#002242]',
        open ? ' w-72' : 'w-20 '
      )}
      slot="wrapper"
    >
      {children && <div slot="children">{children}</div>}
    </div>
  )
})
