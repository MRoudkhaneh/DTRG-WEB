import { FC, memo } from 'react'
import { Button } from 'components/button'
import { classNames } from 'utils/classes'

const pager = (total, page) => {
  const totalPages = Math.ceil(total / 10)

  const pages = Array.from(new Array(totalPages)).map((item, index) => index)

  const startPage =
    totalPages <= 10
      ? 1
      : page <= 6
      ? 1
      : page + 4 >= totalPages
      ? totalPages - 9
      : page - 5

  const endPage =
    totalPages <= 10
      ? totalPages
      : page <= 6
      ? 10
      : page + 4 >= totalPages
      ? totalPages
      : page + 4

  return pages.slice(startPage, endPage - 1)
}

export const Pagination: FC<IPagination> = memo(
  ({ className, page, onPaginate, disabled, total }) => {
    if (Math.ceil(total / 10) > 1)
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
              'w-8 h-8  disabled:opacity-30 mr-2',
              page === 1
                ? 'bg-secondary text-white'
                : ' dark:text-gray-300 dark:bg-gray-600'
            )}
          >
            {1}
          </Button>
          {pager(total, page).map((item, index) => (
            <Button
              key={item}
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
            onClick={() => onPaginate(Math.ceil(total / 10))}
            disabled={disabled}
            className={classNames(
              'w-8 h-8  disabled:opacity-30',
              page === Math.ceil(total / 10)
                ? 'bg-secondary text-white'
                : ' dark:text-gray-300 dark:bg-gray-600'
            )}
          >
            {Math.ceil(total / 10)}
          </Button>
        </div>
      )
    else return null
  }
)
