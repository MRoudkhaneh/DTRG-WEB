import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TextAreatCore: FC<ITextArea> = memo(
  ({ placeholder, name, error, onChange, value }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          'w-full min-h-[3rem] h-12  rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-700 placeholder-gray-500',
          error
            ? 'border-2 border-red-400'
            : 'border border-gray-300 focus:ring-2  focus:ring-indigo-400',
          dark && 'bg-gray-400'
        )}
      />
    )
  }
)
