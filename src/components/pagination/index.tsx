import { FC, memo, useMemo } from 'react'
import { Button } from 'components'
import { classNames } from 'utils'

export const Pagination: FC<IPagination> = memo(
  ({ className, total, page, onPaginate, disabled }) => {
    const totalPages = useMemo(
      () =>
        total % 10 > 0 ? Math.floor(total / 10) + 1 : Math.floor(total / 10),
      [total]
    )

    const pages = useMemo(
      () => Array.from(new Array(totalPages)).map((item, index) => index),
      [page, total]
    )

    if (totalPages > 1)
      return (
        <div
          className={`w-full flex items-center justify-end ${className}`}
          slot="wrapper"
        >
          <div />
          {pages.map((item, index) => (
            <Button
              key={index}
              onClick={() => onPaginate(item + 1)}
              disabled={disabled}
              className={classNames(
                'w-8 h-8  mr-2 disabled:opacity-30',
                page === item + 1
                  ? 'bg-secondary text-white'
                  : ' dark:text-gray-300 dark:bg-gray-600'
              )}
            >
              {item + 1}
            </Button>
          ))}
        </div>
      )
    else return null
  }
)
