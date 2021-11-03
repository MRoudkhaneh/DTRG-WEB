import { classNames } from 'utils/classes'

export const inputCoreClassName = (fieldError, withError, size, icon) =>
  classNames(
    fieldError || withError
      ? 'border-2 border-red-400 shadow'
      : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600',
    size === 'large' ? 'h-14 ' : size === 'small' ? 'h-8 text-[13px]' : 'h-12',
    icon ? 'px-10' : 'px-4'
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
