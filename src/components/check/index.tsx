import { FC, memo, useMemo } from 'react'
import { Controller } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { CheckCore } from './check-core'
import { CheckLabel } from './check-label'

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
              <CheckCore
                id={id}
                disabled={disabled}
                checked={value}
                onChange={(e) => filedChange(e.target.checked)}
                onClick={onClick}
                className={className}
              />

              <CheckLabel label={label} id={id} />
            </div>
          )}
        />
      )
    return (
      <div className="flex items-center space-x-4">
        <CheckCore
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={() => {}}
          onClick={onClick}
          className={className}
        />
        <CheckLabel label={label} id={id} />
      </div>
    )
  }
)
