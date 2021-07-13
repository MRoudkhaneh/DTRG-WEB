import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const InputIcon: FC<IInput> = memo(({ label, icon, size }) => {
  if (icon)
    return (
      <div
        className={classNames(
          'absolute  left-3',
          label
            ? size === 'small'
              ? 'top-6'
              : 'top-12'
            : size === 'small'
            ? 'top-2'
            : 'top-4'
        )}
      >
        {icon()}
      </div>
    )
  else return null
})
