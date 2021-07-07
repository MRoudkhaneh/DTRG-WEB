import { useUi } from 'hooks/use-ui'
import { FC, memo, useMemo } from 'react'
import { classNames } from 'utils'

export const InputCore: FC<IInput> = memo(
  ({
    placeholder,
    type,
    name,
    disabled,
    value,
    onClick,
    error,
    withError,
    size,
    fieldValue,
    fieldError,
    fieldChange,
    icon,
    onChange,
    control,
  }) => {
    const actualValue = useMemo(() => {
      switch (typeof value) {
        case 'string':
          return value
        case 'object':
          if (value && value.length) {
            return value.join(',')
          } else return ''
        default:
          break
      }
    }, [value])

    const {
      uiState: { dark },
    } = useUi()

    if (control)
      return (
        <input
          slot="input"
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={fieldValue}
          onClick={onClick}
          onChange={(e) => fieldChange(e.target.value)}
          className={classNames(
            ' w-full  rounded focus:outline-none focus:shadow  text-gray-900  ',
            dark ? 'bg-gray-400 placeholder-gray-700' : 'placeholder-gray-500',
            fieldError || withError
              ? 'border-2 border-red-400 shadow'
              : disabled
              ? 'bg-gray-300'
              : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400',
            size === 'large'
              ? 'h-14 '
              : size === 'small'
              ? 'h-8 text-[10px]'
              : 'h-12',
            icon ? 'px-10' : 'px-4'
          )}
        />
      )
    else
      return (
        <input
          slot="input"
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={actualValue}
          onClick={onClick}
          onChange={onChange}
          className={classNames(
            ' w-full  rounded focus:outline-none focus:shadow  text-gray-900 placeholder-gray-500 ',
            dark && 'bg-gray-400',
            error || withError
              ? 'border-2 border-red-400 shadow'
              : disabled
              ? 'bg-gray-300'
              : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400',
            size === 'large'
              ? 'h-14 '
              : size === 'small'
              ? 'h-8 text-[10px]'
              : 'h-12',
            icon ? 'px-10' : 'px-4'
          )}
        />
      )
  }
)
