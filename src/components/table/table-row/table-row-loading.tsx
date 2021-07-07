import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TableRowLoading: FC<ITable> = memo(() => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div className="w-full row-start h-[60px] px-6 py-4">
      <div
        className={classNames(
          'h-8 rounded animate-pulse w-full',
          dark ? 'bg-gray-600 ' : 'bg-blue-300'
        )}
      />
    </div>
  )
})
