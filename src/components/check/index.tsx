import { FC, memo, useMemo } from 'react'
import { Controller } from 'react-hook-form'
import { classNames } from 'utils/classes'
import { v4 as uuid } from 'uuid'

export const Check: FC<ICheck> = memo(
  ({ onClick, className, disabled, checked, label, control, name }) => {
    const id = useMemo(() => uuid(), [])

    if (control)
      return (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange: filedChange, value } }) => (
            <div className="flex items-center space-x-4">
              <input
                id={id}
                slot="wrapper"
                type="checkbox"
                disabled={disabled}
                checked={value}
                onChange={(e) => filedChange(e.target.checked)}
                className={classNames(
                  'w-5 h-5 checked:bg-indigo-600',
                  className
                )}
              />
              {label && (
                <label className="text-light dark:text-dark" htmlFor={id}>
                  {label}
                </label>
              )}
            </div>
          )}
        />
      )
    return (
      <div className="flex items-center space-x-4">
        <input
          id={id}
          slot="wrapper"
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={() => {}}
          className={classNames('w-5 h-5 checked:bg-indigo-600', className)}
          onClick={(e) => !disabled && onClick && onClick(e)}
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
