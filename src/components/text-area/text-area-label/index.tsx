import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TextAreaLabel = memo(({ label, size }: IInput) => {
  if (label)
    return (
      <label
        className={classNames(
          ' mb-2 text-gray-800 dark:text-gray-300',
          size === 'small' ? 'text-xs' : 'text-base'
        )}
      >
        {label}
      </label>
    )
  else return null
})
