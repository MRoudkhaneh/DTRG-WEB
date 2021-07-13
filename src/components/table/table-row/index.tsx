import { FC, memo } from 'react'
import { classNames } from 'utils'
import { useToggle } from 'hooks'

import { TableCell } from '../table-cell'
import { TableRowLoading } from './table-row-loading'

export const TableRow: FC<ITableRow> = memo(
  ({ item, columns, expand, loading, index, length }) => {
    const { open, toggle } = useToggle()

    return (
      <div
        className={classNames(
          'w-full flex flex-col overflow-hidden border-gray-300 dark:border-gray-600',
          loading ? 'opacity-50 ' : 'group',
          index === length - 1 ? '' : 'border-b'
        )}
      >
        {item ? (
          <div
            onClick={() => (expand ? toggle() : {})}
            className={classNames(
              'w-full row-start h-14 px-6 ',
              open
                ? 'bg-blue-100 dark:bg-gray-700'
                : 'hover:bg-gray-300 dark:hover:bg-gray-700',
              expand && 'cursor-pointer'
            )}
          >
            {(columns || []).map((column, index) => (
              <TableCell
                key={index}
                item={item}
                index={index}
                column={column}
                columns={columns}
              />
            ))}
          </div>
        ) : (
          <TableRowLoading columns={columns} />
        )}
        {open && expand ? (
          <div
            className={classNames(
              'w-full row-start p-4 bg-blue-100 dark:bg-gray-700'
            )}
          >
            {expand(item)}
          </div>
        ) : null}
      </div>
    )
  }
)
