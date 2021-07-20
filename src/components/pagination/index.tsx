import { FC, memo, useMemo } from 'react'
import { Button } from 'components/button'
import { classNames } from 'utils/classes'
import { ICChevronLeft } from 'icons/chevron-left'
import { ICChevronRight } from 'icons/chevron-right'

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
          className={`w-full flex items-center justify-end space-x-4 ${className}`}
          slot="wrapper"
        >
          <div />
          {page != 1 && (
            <Button
              disabled={disabled}
              onClick={() => onPaginate(1)}
              className={classNames(
                'w-6 h-6 disabled:opacity-30 bg-secondary text-white text-sm'
              )}
            >
              {1}
            </Button>
          )}
          <Button
            icon
            disabled={page == 1}
            onClick={() => onPaginate(page - 1)}
          >
            <ICChevronLeft className="w-4 h-4 text-primary" />
          </Button>
          <div
            className={classNames(
              ' disabled:opacity-30 text-gray-600 dark:text-gray-300 text-sm '
            )}
          >
            {page}
          </div>
          <Button
            icon
            disabled={totalPages == page}
            onClick={() => onPaginate(page + 1)}
          >
            <ICChevronRight className="w-4 h-4  text-primary" />
          </Button>
          {page != pages.length && (
            <Button
              onClick={() => onPaginate(pages.length)}
              disabled={disabled}
              className={classNames(
                'w-6 h-6 disabled:opacity-30 bg-secondary text-white text-sm'
              )}
            >
              {pages.length}
            </Button>
          )}
          {/*pages.map((item, index) => (
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
              ))*/}
        </div>
      )
    else return null
  }
)
