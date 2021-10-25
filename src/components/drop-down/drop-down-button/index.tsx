import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { ICChevronRight } from 'icons/chevron-right'

export const DropDownButton = memo(
  ({ className, icon, label, toggle, open }: IDropdown) => {
    return (
      <button
        className={classNames(
          'w-full row-between focus:outline-none text-light dark:text-dark  ',
          className,
          !open && 'transform hover:opacity-80'
        )}
        onClick={() => toggle()}
        role="button"
      >
        <div className="row-items-center">
          {icon && icon()}
          <div
            className={classNames(
              'text-lg text-light dark:text-dark whitespace-nowrap '
            )}
          >
            {label}
          </div>
        </div>

        <ICChevronRight
          className={classNames(
            'w-3 h-3 transition-all duration-300 ease-in-out',
            open && 'transform rotate-90'
          )}
          role="close"
          id="close"
        />
      </button>
    )
  }
)
