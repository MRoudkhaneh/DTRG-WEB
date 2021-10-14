import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { ICChevronDown } from 'icons/chevron-down'
import { ICChevronRight } from 'icons/chevron-right'

export const DropDownButton: FC<IDropdown> = memo(
  ({ className, icon, label, toggle, open }) => {
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

        {open ? (
          <ICChevronDown className="w-3 h-3" role="close" id="close" />
        ) : (
          <ICChevronRight className="w-3 h-3 " />
        )}
      </button>
    )
  }
)
