import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TextAreatCore: FC<ITextArea> = memo(
  ({ placeholder, name, error, onChange, value, size, disabled, expanded }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          'w-full  rounded flex items-center  focus:outline-none focus:shadow px-4  text-gray-900 ',
          error
            ? 'border-2 border-red-400'
            : dark
            ? 'border border-gray-700 focus:ring-2  focus:ring-indigo-600'
            : 'border border-gray-300 focus:ring-2  focus:ring-indigo-400',
          dark ? 'bg-gray-400 placeholder-gray-700' : 'placeholder-gray-500',
          size === 'large'
            ? 'h-14 '
            : size === 'small'
            ? 'h-8 text-[13px] min-h-[1.6rem] py-1'
            : expanded
            ? 'h-32 min-h-[3rem] pt-2.5'
            : 'h-12 min-h-[3rem] pt-2.5'
        )}
      />
    )
  }
)
