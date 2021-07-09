import { FC, memo, useMemo } from 'react'
import { Button } from 'components'
import { classNames } from 'utils'
import { useUi } from 'hooks/use-ui'

export const Pagination: FC<IPagination> = memo(
  ({ className, total, page, onPaginate, disabled }) => {
    const totalPages = useMemo(
      () =>
        total % 10 > 0 ? Math.floor(total / 10) + 1 : Math.floor(total / 10),
      [total]
    )

    const pages = useMemo(
      () => Array.from(new Array(totalPages)).map((item, index) => index),
      // .slice(page === 1 ? 0 : page - 2, page === 1 ? 5 : page + 4)
      // .filter((item) => (totalPages > 1 ? item !== totalPages - 1 : true)),

      [page, total]
    )

    const {
      uiState: { dark },
    } = useUi()
    if (totalPages > 1)
      return (
        <div
          className={`w-full flex items-center justify-end ${className}`}
          slot="wrapper"
        >
          <div />
          {/*Math.floor(total / 10) > 1 && (
          <div className="row-items-center">
            {page > 2 && (
              <>
                <Button
                  onClick={() => onPaginate(1)}
                  disabled={disabled}
                  className={classNames(
                    'w-8 h-8  disabled:opacity-30',
                    page === 1
                      ? 'bg-secondary text-white'
                      : dark && 'bg-gray-600 text-gray-300'
                  )}
                >
                  1
                </Button>
                <span className={classNames('mx-4', dark && 'text-gray-400')}>
                  {' '}
                </span>
              </>
                  )*/}

          {pages.map((item, index) => (
            <Button
              key={index}
              onClick={() => onPaginate(item + 1)}
              disabled={disabled}
              className={classNames(
                'w-8 h-8  mr-2 disabled:opacity-30',
                page === item + 1
                  ? 'bg-secondary text-white'
                  : dark && 'bg-gray-600 text-gray-300'
              )}
            >
              {item + 1}
            </Button>
          ))}

          {/*Math.floor(total / 10) > 2 && (
              <>
                <span className={classNames('mx-4', dark && 'text-gray-400')}>
                  {' '}
                </span>
                <Button
                  onClick={() => onPaginate(totalPages)}
                  disabled={disabled}
                  className={classNames(
                    'w-8 h-8  disabled:opacity-30',
                    page === totalPages
                      ? 'bg-secondary text-white'
                      : dark && 'bg-gray-600 text-gray-300'
                  )}
                >
                  {totalPages}
                </Button>
              </>
                  )}
          </div>
                  )*/}
        </div>
      )
    else return null
  }
)
