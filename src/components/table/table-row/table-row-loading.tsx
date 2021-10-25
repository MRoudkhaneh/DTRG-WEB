import { FC, Fragment, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableRowLoading = memo(({ columns }: ITable) => {
  return (
    <div
      className="w-full row-start h-14 px-6 py-4"
      data-testid="table-skeleton"
    >
      {columns.map((column, index) => (
        <div
          key={index}
          className={classNames(
            'flex flex-row items-end',
            index === columns.length - 1 ? ' justify-end' : 'justify-start',
            column.width
          )}
        >
          {column.head ? (
            <Fragment>
              <div
                className={classNames(
                  'h-6 w-3 rounded-xl bg-gray-300 dark:bg-gray-700'
                )}
              />
              <div
                className={classNames(
                  'h-4 w-3 rounded-xl ml-2 bg-gray-300 dark:bg-gray-700'
                )}
              />
              <div
                className={classNames(
                  'h-2.5 w-16 rounded-xl ml-2 bg-gray-300 dark:bg-gray-700'
                )}
              />
            </Fragment>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
})
