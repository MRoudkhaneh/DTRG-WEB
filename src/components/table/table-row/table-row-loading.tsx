import { useUi } from 'hooks/use-ui'
import { FC, Fragment, memo } from 'react'
import { classNames } from 'utils'

export const TableRowLoading: FC<ITable> = memo(({ columns }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div className="w-full row-start h-14 px-6 py-4">
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
                  'h-6 w-3 rounded-xl ',
                  dark ? 'bg-gray-700' : 'bg-gray-300'
                )}
              />
              <div
                className={classNames(
                  'h-4 w-3 rounded-xl ml-2',
                  dark ? 'bg-gray-700' : 'bg-gray-300'
                )}
              />
              <div
                className={classNames(
                  'h-2.5 w-16 rounded-xl ml-2',
                  dark ? 'bg-gray-700' : 'bg-gray-300'
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
