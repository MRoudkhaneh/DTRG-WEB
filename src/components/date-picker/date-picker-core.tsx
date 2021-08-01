import { FC, useEffect, useMemo, useRef } from 'react'
import { Error } from 'components/error'
import { classNames } from 'utils/classes'
import DatePickerReact from 'react-datepicker'
import { v4 as uuid } from 'uuid'

import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerCore: FC<IDatePicker> = ({
  className,
  value,
  label,
  error,
  year,
  time,
  onChange,
  defaultValue,
}) => {
  const ref = useRef(null)
  const id = useMemo(() => uuid(), [])
  useEffect(() => {
    error && ref.current.scrollIntoView()
  }, [error])

  return (
    <div className={`w-full col-start relative ${className}`} ref={ref}>
      {label && (
        <label className={classNames(' mb-2 text-light dark:text-dark')}>
          {label}
        </label>
      )}
      <Error error={error} className=" absolute left-0 top-2 mt-20" />
      <DatePickerReact
        id={id}
        closeOnScroll={true}
        placeholderText="Click here"
        dateFormat="yyyy/MM/dd"
        showYearPicker={year}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className=" z-50 opacity-0"
        showTimeSelect={time}
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
  )
}
