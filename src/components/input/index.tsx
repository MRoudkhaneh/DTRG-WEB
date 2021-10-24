import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { Error } from 'components/error'

import { InputLabel } from './input-label'
import { InputCore } from './input-core'
import { InputIcon } from './input-icon'
import { classNames } from 'utils/classes'
import { TInput } from './input'

export const Input: FC<TInput> = memo((props) => {
  const {
    required,
    max,
    min,
    later,
    error,
    className,
    validation,
    precent,
    control,
    name,
    hours,
    minutes,
    number,
    label,
  } = props
  const { validate } = useValidation({
    required,
    max,
    min,
    later,
    validation,
    precent,
    hours,
    minutes,
    number,
  })

  if (control)
    return (
      <Controller
        name={name}
        rules={{ validate }}
        control={control}
        render={({
          field: { onChange: fieldChange, value: fieldValue, ref: fieldRef },
          fieldState: { error: fieldError },
        }) => (
          <div className={`w-full col-start relative ${className}`}>
            <InputLabel {...props} />
            <InputCore
              validate={validate}
              fieldChange={fieldChange}
              fieldValue={fieldValue}
              fieldError={fieldError}
              fieldRef={fieldRef}
              {...props}
            />

            <InputIcon {...props} />
            <Error
              error={fieldError}
              className={classNames(
                'absolute left-0',
                label ? ' top-[78px]' : 'top-[45px]'
              )}
            />
          </div>
        )}
      />
    )
  else
    return (
      <div className={`w-full col-start relative ${className}`}>
        <InputLabel {...props} />
        <InputCore validate={validate} {...props} />
        <InputIcon {...props} />
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
