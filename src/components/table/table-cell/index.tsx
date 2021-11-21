import { memo } from 'react'
import { classNames } from 'utils/classes'

export const TableCell = memo(
  ({ column, index, item, columns }: ITableCell) => {
    return (
      <td
        slot="wrapper"
        className={classNames(
          'flex items-center',
          index === columns.length - 1 ? ' justify-end' : 'justify-start',
          column.width
        )}
      >
        {column.render ? (
          column.render(item)
        ) : item[column.key] ? (
          <span className={classNames('text-gray-600 dark:text-gray-100')}>
            {item[column.key]}
          </span>
        ) : (
          <span className={classNames('text-gray-600 dark:text-gray-100')}>
            N/A
          </span>
        )}
      </td>
    )
  }
)
