import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'
import { LoaidngProgress } from 'components'

export const TableHead: FC<ITableHead> = memo(({ columns, loading }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div className="w-full flex flex-col">
      <div
        className={classNames(
          'w-full row-start  py-4 px-6  rounded-t ',
          dark ? 'border-primary ' : 'border-secondary',
          loading ? '' : 'border-b-2'
        )}
      >
        {(columns || []).map((column, index) => (
          <div
            className={classNames(
              'flex items-center ',
              index === columns.length - 1 ? ' justify-end' : 'justify-start',
              column.width
            )}
            key={index}
          >
            <span
              className={classNames(dark ? 'text-primary' : 'text-secondary')}
            >
              {column.head}
            </span>
          </div>
        ))}
      </div>
      {loading && <LoaidngProgress />}
    </div>
  )
})
