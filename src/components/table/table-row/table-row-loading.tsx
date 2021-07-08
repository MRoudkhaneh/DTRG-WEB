import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TableRowLoading: FC<ITable> = memo(({ columns }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div className="w-full row-start h-14 px-6 py-4">
      {/* <div
        className={classNames(
          'h-8 rounded animate-pulse w-full',
          dark ? 'bg-gray-600 ' : 'bg-blue-300'
        )}
      /> */}
      {columns.map((column, index) => (
        <div
          key={index}
          className={classNames(
            'flex flex-row items-end',
            index === columns.length - 1 ? ' justify-end' : 'justify-start',
            column.width
          )}
        >
          <div
            className={classNames(
              'h-8 w-8 rounded-xl ',
              dark ? 'bg-gray-700' : 'bg-gray-300'
            )}
          />
          <div
            className={classNames(
              'h-6 w-8 rounded-xl ml-2',
              dark ? 'bg-gray-700' : 'bg-gray-300'
            )}
          />
          <div
            className={classNames(
              'h-4 w-24 rounded-xl ml-2',
              dark ? 'bg-gray-700' : 'bg-gray-300'
            )}
          />
        </div>
      ))}
    </div>
  )
})
