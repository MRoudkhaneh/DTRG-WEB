import { useUi } from 'hooks/use-ui'
import { ICChevronDown, ICChevronRight } from 'icons'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const DropDownButton: FC<IDropdown> = memo(
  ({ className, icon, label, toggle, open }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <button
        className={classNames(
          'w-full row-between focus:outline-none   ',
          className,
          !open && 'transform hover:opacity-80',
          dark ? 'text-dark' : 'text-light'
        )}
        onClick={() => toggle()}
        role="button"
      >
        <div className="row-items-center">
          {icon && icon()}
          <span
            className={classNames(
              'text-lg ',
              dark ? 'text-dark' : 'text-light'
            )}
          >
            {label}
          </span>
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
