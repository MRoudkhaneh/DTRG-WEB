import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const InputLabel: FC<IInput> = memo(({ label, size }) => {
  if (label)
    return (
      <label
        className={classNames(
          ' mb-2 text-light dark:text-dark',
          size === 'small' ? 'text-xs' : 'text-base'
        )}
      >
        {label}
      </label>
    )
  else return null
})
