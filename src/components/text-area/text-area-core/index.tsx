import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TextAreatCore: FC<ITextArea> = memo(
  ({
    placeholder,
    name,
    error,
    onChange,
    value,
    size,
    disabled,
    expanded,
    fieldRef,
  }) => {
    return (
      <textarea
        placeholder={placeholder}
        value={value || ''}
        name={name}
        disabled={disabled}
        ref={fieldRef}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          'w-full  rounded flex items-center  focus:outline-none focus:shadow px-4  text-gray-900 bg-white placeholder-gray-500 dark:placeholder-gray-700 dark:bg-gray-400 ',
          error
            ? 'border-2 border-red-400'
            : 'border border-gray-300 focus:ring-2  focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600 dark:focus:ring-2',
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
