import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TableHead: FC<ITableHead> = memo(({ columns, loading }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div
      className={classNames(
        'w-full row-start  border-b-2  py-4 px-6  rounded-t ',
        dark ? 'border-primary ' : 'border-secondary',
        loading && 'opacity-30 animate-bounce'
      )}
    >
      {(columns || []).map((column, index) => (
        <div
          className={classNames(
            'flex items-center ',
            index === columns.length - 1 ? ' justify-end' : 'justify-start',
            column.width
          )}
          key={index}
        >
          <span
            className={classNames(dark ? 'text-primary' : 'text-secondary')}
          >
            {column.head}
          </span>
        </div>
      ))}
    </div>
  )
})
