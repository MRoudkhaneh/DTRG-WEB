import { memo, Fragment } from 'react'
import { classNames } from 'utils/classes'
import { useToggle } from 'hooks/use-toggle'
import { TableCell } from '../table-cell'

export const TableRow = memo(
  ({
    item,
    columns,
    expand,
    loading,
    index,
    length,
    onRowClick,
    expanded = { id: null },
  }: ITableRow) => {
    const { open, toggle } = useToggle((): boolean =>
      item ? item.id === expanded.id : false
    )

    return (
      <Fragment>
        <tr
          className={classNames(
            'w-full row-start h-14 px-6  overflow-hidden border-gray-300 dark:border-gray-600',
            loading ? 'opacity-50 ' : 'group',
            index === length - 1 ? '' : 'border-b',
            expand && 'cursor-pointer',
            open
              ? 'bg-blue-100 dark:bg-gray-700'
              : 'hover:bg-gray-300 dark:hover:bg-gray-700'
          )}
          onClick={() => {
            if (expand) toggle()
            if (onRowClick) onRowClick(item)
          }}
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
        </tr>
        {open && expand && (
          <tr
            className={classNames(
              'w-full row-start p-4 bg-blue-100 dark:bg-gray-700'
            )}
          >
            {expand(item)}
          </tr>
        )}
      </Fragment>
    )
  }
)
