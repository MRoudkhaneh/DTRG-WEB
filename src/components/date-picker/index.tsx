import { FC, memo, useMemo } from 'react'
import { Controller } from 'react-hook-form'
import DatePickerReact from 'react-datepicker'
import { Error } from 'components'
import { useUi, useValidation } from 'hooks'
import { classNames } from 'utils'
import { v4 as uuid } from 'uuid'

import 'react-datepicker/dist/react-datepicker.css'

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
    const id = useMemo(() => uuid(), [])

    if (control)
      return (
        <Controller
          control={control}
          name={name}
          rules={{ validate }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className={`w-full col-start relative ${className}`}>
              {label && (
                <label
                  className={classNames(' mb-2 text-light dark:text-dark')}
                >
                  {label}
                </label>
              )}
              <Error error={error} className="pt-[49px]" />
              <DatePickerReact
                onChange={(date) => {
                  const array = date.toLocaleDateString().split('/')
                  if (time)
                    onChange(
                      `${array[2]}-${array[0]}-${
                        array[1]
                      } ${date.getHours()}:${date.getMinutes()}`
                    )
                  else onChange(`${array[2]}-${array[0]}-${array[1]}`)
                }}
                closeOnScroll={true}
                placeholderText="Click here"
                dateFormat="yyyy/MM/dd"
                showYearPicker={year}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className=" z-50 opacity-0"
                showTimeSelect={time}
                id={id}
              />

              <label
                htmlFor={id}
                className={classNames(
                  ' w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900  h-12  px-4 absolute top-8 right-0 z-0 bg-white dark:bg-gray-400',
                  error
                    ? 'border-2 border-red-400 shadow'
                    : 'border border-gray-300 dark:border-gray-700'
                )}
              >
                {value
                  ? time
                    ? value.slice(0, 15)
                    : value.slice(0, 10)
                  : defaultValue
                  ? defaultValue
                  : 'YYYY-MM-DD'}
              </label>
            </div>
          )}
        />
      )
    else return null
  }
)
