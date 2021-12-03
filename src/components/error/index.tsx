import { classNames } from 'utils'

export const Error = ({ error, className }: IError) => {
  if (error && error.message)
    return (
      <p
        className={classNames(
          ' text-xs mt-2 text-red-700 dark:text-red-500 ',
          className
        )}
      >
        {error.message}
      </p>
    )
  else return null
}
