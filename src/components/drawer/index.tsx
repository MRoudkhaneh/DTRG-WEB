import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const Drawer: FC<IDrawer> = memo(({ children, open }) => {
  return (
    <div
      className={classNames(
        'fixed top-0 left-0 h-full flex-col shadow-lg trans z-30 bg-gray-300 dark:bg-gray-900 ',
        open ? ' w-72' : 'w-20 '
      )}
      slot="wrapper"
    >
      {children && <div slot="children">{children}</div>}
    </div>
  )
})
