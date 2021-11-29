import { memo, useMemo } from 'react'
import { classNames } from 'utils'
import { v4 as uuid } from 'uuid'
import { TCheck } from './types/check'

export const Check = memo(
  ({ label, className, ...rest }: Partial<TCheck>): JSX.Element => {
    const id = useMemo(() => uuid(), [])

    return (
      <div className={classNames('flex items-center space-x-4', className)}>
        <input
          id={id}
          type="checkbox"
          className="w-5 h-5 checked:bg-indigo-600"
          onChange={() => {}}
          {...rest}
        />
        {label && (
          <label className="text-light dark:text-dark" htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    )
  }
)
