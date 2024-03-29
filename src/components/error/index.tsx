import { memo } from 'react'
import { classNames } from 'utils'

export const Error = memo(({ error, className }: IError) => {
  if (error && error.message)
    return (
      <p
        className={classNames(
          ' text-xs mt-2 text-red-700 dark:text-red-500 ',
          className
        )}
        slot="wrapper"
      >
        {error.message}
      </p>
    )
  else return null
})
