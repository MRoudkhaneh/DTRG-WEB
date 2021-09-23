import { classNames } from 'utils/classes'

export const drawerClassName = (open) =>
  classNames(
    'fixed top-0 left-0 h-full flex-col shadow-lg trans z-30 bg-gray-300 dark:bg-gray-900 transition-width duration-500 ease-in-out ',
    open ? ' w-72' : 'w-20 '
  )
