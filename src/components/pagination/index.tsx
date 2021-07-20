import { FC, memo, useMemo } from 'react'
import { Button } from 'components/button'
import { classNames } from 'utils/classes'

export const Pagination: FC<IPagination> = memo(
  ({ className, page, onPaginate, disabled, total }) => {
    const totalPages = useMemo(() => Math.ceil(total / 10), [total])

    const pages = useMemo(
      () => Array.from(new Array(totalPages)).map((item, index) => index),
      [totalPages]
    )

    const startPage = useMemo(
      () =>
        totalPages <= 10
          ? 1
          : page <= 6
          ? 1
          : page + 4 >= totalPages
          ? totalPages - 9
          : page - 5,
      [page, totalPages]
    )

    const endPage = useMemo(
      () =>
        totalPages <= 10
          ? totalPages
          : page <= 6
          ? 10
          : page + 4 >= totalPages
          ? totalPages
          : page + 4,
      [page, totalPages]
    )

    if (totalPages > 1)
      return (
        <div
          className={`w-full flex items-center justify-end ${className}`}
          slot="wrapper"
        >
          <div />

          <Button
            onClick={() => onPaginate(1)}
            disabled={disabled}
            className={classNames(
              'w-8 h-8  disabled:opacity-30 mr-6',
              page === 1
                ? 'bg-secondary text-white'
                : ' dark:text-gray-300 dark:bg-gray-600'
            )}
          >
            {1}
          </Button>
          {pages.slice(startPage, endPage - 1).map((item, index) => (
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
          <Button
            onClick={() => onPaginate(totalPages)}
            disabled={disabled}
            className={classNames(
              'w-8 h-8  disabled:opacity-30 ml-6',
              page === totalPages
                ? 'bg-secondary text-white'
                : ' dark:text-gray-300 dark:bg-gray-600'
            )}
          >
            {totalPages}
          </Button>
        </div>
      )
    else return null
  }
)
