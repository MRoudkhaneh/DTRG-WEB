import { memo } from 'react'
import { classNames } from 'utils/classes'

export const TableHead = memo(({ columns, loading }: ITableHead) => {
  return (
    <thead className="w-full flex flex-col">
      <tr
        className={classNames(
          'w-full row-start  py-4 px-6  rounded-t border-b-2 border-secondary dark:border-primary',
          loading && 'animate-pulse200'
        )}
      >
        {(columns || []).map((column, index) => (
          <th
            className={classNames(
              'flex items-center ',
              index === columns.length - 1 ? ' justify-end' : 'justify-start',
              column.width
            )}
            key={index}
          >
            <span className={classNames('text-secondary dark:text-primary')}>
              {column.head}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  )
})
