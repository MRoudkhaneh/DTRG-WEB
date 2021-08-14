import { classNames } from 'utils/classes'

export const datePickerBoxClassName = (error) =>
  classNames(
    ' w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900  h-12  px-4 absolute top-8 right-0 z-0 bg-white dark:bg-gray-400',
    error
      ? 'border-2 border-red-400 shadow'
      : 'border border-gray-300 dark:border-gray-700'
  )

export const datePickerBoxValue = (value, time, defaultValue) =>
  value
    ? time
      ? value.slice(0, 15)
      : value.slice(0, 10)
    : defaultValue
    ? defaultValue
    : 'YYYY-MM-DD'
