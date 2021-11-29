import { memo } from 'react'
import { classNames } from 'utils'

export const Drawer = memo(({ children, open, onClose }: IDrawer) => {
  return (
    <div>
      <div
        className={classNames(
          'fixed top-0 left-0 h-full flex-col shadow-lg trans z-[1000] bg-gray-300 dark:bg-gray-900 transition-width duration-500 ease-in-out ',
          open ? ' w-72' : 'w-20 '
        )}
        data-testid="drawer"
      >
        {children && <div>{children}</div>}
      </div>
      {open && (
        <div
          className="fixed inset-0 w-full h-full z-[999] bg-black opacity-30"
          onClick={() => onClose?.()}
        />
      )}
    </div>
  )
})
