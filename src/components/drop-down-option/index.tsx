import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const DropDownOption: FC<IDropdownOption> = memo(
  ({ children, onClick, active }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <span
        slot="wrapper"
        className={classNames(
          active
            ? 'text-blue-400 font-semibold'
            : dark
            ? ' text-gray-300'
            : 'text-gray-500',
          ' cursor-pointer hover:opacity-80 px-4 pt-3 text-sm'
        )}
        onClick={onClick}
      >
        {children}
      </span>
    )
  }
)
