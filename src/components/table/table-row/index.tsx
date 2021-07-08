import { FC, memo } from 'react'
import { classNames } from 'utils'
import { useToggle, useUi } from 'hooks'

import { TableCell } from '../table-cell'
import { TableRowLoading } from './table-row-loading'

export const TableRow: FC<ITableRow> = memo(
  ({ item, columns, expand, loading, index, length }) => {
    const { open, toggle } = useToggle()
    const {
      uiState: { dark },
    } = useUi()

    return (
      <div
        className={classNames(
          'w-full flex flex-col   group ',
          loading && ' animate-pulse',
          index === length - 1 ? '' : 'border-b border-gray-300'
        )}
      >
        {item ? (
          <div
            onClick={() => (expand ? toggle() : {})}
            className={classNames(
              'w-full row-start py-4 px-6 ',
              open
                ? dark
                  ? 'bg-gray-700'
                  : 'bg-blue-100'
                : dark
                ? 'hover:bg-gray-700'
                : 'hover:bg-gray-100',
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
              'w-full row-start p-4 ',
              dark ? 'bg-gray-700' : 'bg-blue-100'
            )}
          >
            {expand(item)}
          </div>
        ) : null}
      </div>
    )
  }
)
