import { FC, memo } from 'react'
import { classNames } from 'utils'

export const DropDownOption = memo(
  ({ children, onClick, active }: IDropdownOption) => {
    return (
      <span
        slot="wrapper"
        className={classNames(
          active
            ? 'text-blue-400 font-semibold  '
            : 'text-light dark:text-dark',
          ' cursor-pointer hover:opacity-80 px-4 pt-3 text-sm'
        )}
        onClick={onClick}
      >
        {children}
      </span>
    )
  }
)
