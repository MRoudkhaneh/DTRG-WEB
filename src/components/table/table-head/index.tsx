import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TableHead: FC<ITableHead> = memo(({ columns }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div
      className={classNames(
        'w-full row-start  border-b-2  py-4 px-6  rounded-t ',
        dark ? 'border-primary ' : 'border-secondary'
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
