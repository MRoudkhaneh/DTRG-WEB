import { FC, memo } from 'react'
import { classNames } from 'utils'
import { useToggle } from 'hooks'

import { TableCell } from '../table-cell'
import { TableRowLoading } from './table-row-loading'

export const TableRow: FC<ITableRow> = memo(
  ({ item, columns, expand, loading }) => {
    const { open, toggle } = useToggle()

    return (
      <div
        className={classNames(
          'w-full flex flex-col border-b border-gray-300  group ',
          loading && 'opacity-50'
        )}
      >
        {item ? (
          <div
            onClick={() => (expand ? toggle() : {})}
            className={classNames(
              'w-full row-start py-4 px-6 ',
              open ? 'bg-blue-100' : 'hover:bg-gray-100',
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
          <div className="w-full row-start p-4 bg-blue-100">{expand(item)}</div>
        ) : null}
      </div>
    )
  }
)
