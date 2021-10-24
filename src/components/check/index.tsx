import { FC, memo, useMemo } from 'react'
import { Controller } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { TCheck } from './check'
import { CheckCore } from './check-core'
import { CheckLabel } from './check-label'

export const Check: FC<Partial<TCheck>> = memo(
  ({ label, control, name, ...rest }): JSX.Element => {
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
                checked={value}
                onChange={(e) => filedChange(e.target.checked)}
                {...rest}
              />

              <CheckLabel label={label} id={id} />
            </div>
          )}
        />
      )
    return (
      <div className="flex items-center space-x-4">
        <CheckCore id={id} onChange={() => {}} {...rest} />
        <CheckLabel label={label} id={id} />
      </div>
    )
  }
)
