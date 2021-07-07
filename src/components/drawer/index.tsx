import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const Drawer: FC<IDrawer> = memo(({ children, open }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div
      className={classNames(
        'fixed top-0 left-0 h-full flex-col shadow-lg trans z-30 ',
        open ? ' w-72' : 'w-20 ',
        dark ? 'bg-gray-900' : 'bg-fade'
      )}
      slot="wrapper"
    >
      {children && <div slot="children">{children}</div>}
    </div>
  )
})
