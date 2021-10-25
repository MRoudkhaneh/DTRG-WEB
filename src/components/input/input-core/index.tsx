import { FC, memo } from 'react'
import { TInput } from '../input'
import { inputCoreActualValue, inputCoreClassName } from './helper'

export const InputCore = memo((props: TInput) => {
  if (props.control)
    return (
      <input
        data-testid="input-core"
        type={props.type}
        name={props.name}
        ref={props.fieldRef}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.fieldValue || ''}
        onClick={props.onClick}
        onChange={props.fieldChange}
        className={inputCoreClassName(
          props.fieldError,
          props.withError,
          props.size,
          props.icon
        )}
      />
    )
  else
    return (
      <input
        data-testid="input-core"
        type={props.type}
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
    )
})
