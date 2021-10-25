import { FC, memo } from 'react'
import { datePickerBoxClassName, datePickerBoxValue } from './helper'

export const DatePickerBox = memo(
  ({ id, value, time, defaultValue, error }: IDatePicker) => {
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
