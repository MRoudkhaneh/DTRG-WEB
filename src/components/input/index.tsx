import { memo } from 'react'
import { Error } from 'components/error'
import { classNames } from 'utils/classes'
import { TInput } from './input'

export const inputCoreClassName = (fieldError, withError, size, icon) =>
  classNames(
    fieldError || withError
      ? 'border-2 border-red-400 shadow'
      : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600',
    size === 'large' ? 'h-14 ' : size === 'small' ? 'h-8 text-[13px]' : 'h-12',
    icon ? 'px-10' : 'px-4'
  )

export const inputIconClassName = (label, size) =>
  classNames(
    'absolute  left-3',
    label
      ? size === 'small'
        ? 'top-6'
        : 'top-12'
      : size === 'small'
      ? 'top-2'
      : 'top-4'
  )

export const inputLabelClassName = (size) =>
  classNames(
    ' mb-2 text-light dark:text-dark',
    size === 'small' ? 'text-xs' : 'text-base'
  )

export const inputCoreActualValue = (value) => {
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
}

export const Input = memo((props: TInput) => {
  const { className, label } = props

  return (
    <div className={`w-full col-start relative ${className}`}>
      {label && (
        <label htmlFor={label} className={inputLabelClassName(props.size)}>
          {label}
        </label>
      )}
      <input
        data-testid="input-core"
        id={label}
        type={props.type || 'text'}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={inputCoreActualValue(props.value)}
        onClick={props.onClick}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        className={inputCoreClassName(
          props.error,
          props.withError,
          props.size,
          props.icon
        )}
      />
      {props.icon && (
        <div className={inputIconClassName(label, props.size)}>
          {props.icon()}
        </div>
      )}
      <Error
        error={props.error}
        className={classNames(
          'absolute left-0',
          label ? ' top-[78px]' : 'top-[45px]'
        )}
      />
    </div>
  )
})
