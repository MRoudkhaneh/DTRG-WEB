import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TabExpand = memo(({ expandable, children, open }: ITab) => {
  if (expandable && open)
    return (
      <div
        className={classNames(
          'w-full px-10 py-8 rounded-b bg-white dark:bg-gray-700 '
        )}
      >
        {children}
      </div>
    )
  else if (!expandable)
    return (
      <div
        className={classNames(
          'w-full px-10 py-8 rounded-b bg-white dark:bg-gray-700'
        )}
      >
        {children}
      </div>
    )
  else return null
})
