import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TabExpand: FC<ITab> = memo(({ expandable, children, open }) => {
  const {
    uiState: { dark },
  } = useUi()

  if (expandable && open)
    return (
      <div
        className={classNames(
          'w-full px-10 py-8 rounded-b  ',
          dark ? 'bg-gray-700' : 'bg-white'
        )}
      >
        {children}
      </div>
    )
  else if (!expandable)
    return (
      <div
        className={classNames(
          'w-full px-10 py-8 rounded-b',
          dark ? 'bg-gray-700' : 'bg-white'
        )}
      >
        {children}
      </div>
    )
  else return null
})
