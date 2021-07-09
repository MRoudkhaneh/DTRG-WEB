import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'
import { SelectBoxActions } from './select-box-actions'
import { SelectBoxValue } from './select-box-value'

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, open, label }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <div
        role="toggler"
        onClick={() => toggle()}
        className={classNames(
          ' w-full row-between focus:outline-none overflow-hidden cursor-pointer text-gray-900 ',
          open
            ? 'rounded-t border-t-2 border-r-2 border-l-2 border-indigo-400'
            : error
            ? 'rounded border-2'
            : 'rounded border ',
          multiple && value ? 'min-h-[3rem]  py-2 pl-2 pr-4' : 'h-12  px-4',
          error
            ? ' border-red-400 shadow'
            : dark
            ? 'border-dark'
            : ' border-light',
          dark ? 'bg-gray-400' : 'bg-white'
        )}
      >
        <SelectBoxValue
          multiple={multiple}
          value={value}
          open={open}
          label={label}
          dark={dark}
        />
        <SelectBoxActions
          multiple={multiple}
          value={value}
          setValue={setValue}
          name={name}
          open={open}
        />
      </div>
    )
  }
)
