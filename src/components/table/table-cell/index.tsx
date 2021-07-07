import { useUi } from 'hooks'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <div
        slot="wrapper"
        className={classNames(
          'flex items-center',
          index === columns.length - 1 ? ' justify-end' : 'justify-start',
          column.width
        )}
      >
        {column.render ? (
          column.render(item)
        ) : (
          <span
            className={classNames(
              ' text-lg',
              dark ? 'text-gray-100' : 'text-gray-600'
            )}
          >
            {item[column.key]}
          </span>
        )}
      </div>
    )
  }
)
