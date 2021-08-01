import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { DatePickerCore } from './date-picker-core'

export const DatePicker: FC<IDatePicker> = memo(
  ({
    name,
    className,
    required,
    later,
    validation,
    label,
    control,
    year,
    defaultValue,
    time,
  }) => {
    const { validate } = useValidation({
      required,
      later,
      validation,
    })

    if (control)
      return (
        <Controller
          control={control}
          name={name}
          rules={{ validate }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <DatePickerCore
              onChange={onChange}
              value={value}
              error={error}
              className={className}
              label={label}
              defaultValue={defaultValue}
              time={time}
              year={year}
            />
          )}
        />
      )
    else return null
  }
)
