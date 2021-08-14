import { FC, memo } from 'react'
import { datePickerBoxClassName, datePickerBoxValue } from './helper'

export const DatePickerBox: FC<IDatePicker> = memo(
  ({ id, value, time, defaultValue, error }) => {
    return (
      <label
        htmlFor={id}
        className={datePickerBoxClassName(error)}
        data-testid="date-picker-box"
      >
        {datePickerBoxValue(value, time, defaultValue)}
      </label>
    )
  }
)
