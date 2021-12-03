import { memo } from 'react'
import { Controller } from 'react-hook-form'
import { TFormCheckBox } from './types/form-checkbox'

export const FormCheckBox = memo(
  ({ label, name, disabled, ...rest }: TFormCheckBox): JSX.Element => {
    return (
      <Controller
        name={name}
        render={({ field: { onChange, value } }) => (
          <div className="flex items-center space-x-4">
            <input
              id={label}
              data-testid="check-core"
              type="checkbox"
              className="w-5 h-5 checked:bg-indigo-600"
              checked={value || false}
              onChange={(e) => !disabled && onChange(e.target.checked)}
              {...rest}
            />

            {label && (
              <label className="text-light dark:text-dark" htmlFor={label}>
                {label}
              </label>
            )}
          </div>
        )}
      />
    )
  }
)
