import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TextAreaLabel: FC<IInput> = memo(({ label, size }) => {
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
