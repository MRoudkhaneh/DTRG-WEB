import { useValidation } from 'hooks/use-validation'
import { memo } from 'react'
import { Controller } from 'react-hook-form'
import moment from 'moment'
import { classNames } from 'utils'
import { Error } from 'components/error'
import DatePickerReact from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const datePickerBoxClassName = (error: TFormDatePicker['error']) =>
  classNames(
    ' w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900  h-12  px-4 absolute top-8 right-0 z-0 bg-white dark:bg-gray-400',
    error
      ? 'border-2 border-red-400 shadow'
      : 'border border-gray-300 dark:border-gray-700'
  )

const datePickerBoxValue = (
  value: TFormDatePicker['value'],
  time?: boolean,
  defaultValue?: string
) =>
  value
    ? time
      ? value.slice(0, 15)
      : value.slice(0, 10)
    : defaultValue
    ? defaultValue
    : 'YYYY-MM-DD'

export const FormDatePicker = memo(
  ({
    name,
    className,
    required,
    later,
    validation,
    label,
    year,
    defaultValue,
    time,
  }: TFormDatePicker) => {
    const { validate } = useValidation({
      required,
      later,
      validation,
    })

    return (
      <Controller
        name={name}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className={classNames('w-full col-start relative', className)}>
            {label && (
              <label className=" mb-2 text-light dark:text-dark">{label}</label>
            )}
            <Error error={error} className=" absolute left-0 top-20 mt-1" />
            <DatePickerReact
              id={name}
              closeOnScroll={true}
              placeholderText="Click here"
              dateFormat="yyyy/MM/dd"
              showYearPicker={year}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className=" z-50 opacity-0"
              showTimeSelect={time}
              onChange={(date: any) =>
                onChange(moment(date).format().slice(0, 10))
              }
            />
            <label
              htmlFor={name}
              className={datePickerBoxClassName(error)}
              data-testid="date-picker-box"
            >
              {datePickerBoxValue(value, time, defaultValue)}
            </label>
          </div>
        )}
      />
    )
  }
)
