import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { useToggle } from 'hooks/use-toggle'

import { TableCell } from '../table-cell'
import { TableRowLoading } from './table-row-loading'

export const TableRow: FC<ITableRow> = memo(
  ({
    item,
    columns,
    expand,
    loading,
    index,
    length,
    onRowClick,
    expanded = { id: null },
  }) => {
    const { open, toggle } = useToggle((): boolean =>
      item ? item.id === expanded.id : false
    )

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
            data-testid="table-row"
            onClick={() => {
              if (expand) toggle()
              if (onRowClick) onRowClick(item)
            }}
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
                key={column.key}
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
