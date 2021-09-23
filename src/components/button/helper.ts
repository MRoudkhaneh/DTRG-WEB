import { classNames } from 'utils/classes'

export const buttonClassName = (icon, loading, disabled, className) =>
  classNames(
    ' flex items-center justify-center rounded focus:outline-none  disabled:opacity-50 ',
    !icon && 'shadow',
    loading
      ? 'cursor-wait '
      : !disabled &&
          'transform hover:-translate-y-1 hover:scale-105 transition-all ease-in duration-400',
    className
  )
