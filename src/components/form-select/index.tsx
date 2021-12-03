import { Button } from 'components/button'
import { Error } from 'components/error'
import { useValidation } from 'hooks/use-validation'
import { ICDelete } from 'icons'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { classNames } from 'utils'
import type { TFormSelect } from './types/form-select'

export const FormSelect = memo(
  ({
    label,
    className,
    name,
    size,
    required,
    validation,
    options,
    ...rest
  }: TFormSelect) => {
    const { setValue } = useFormContext()
    const { validate } = useValidation({ required, validation })

    return (
      <Controller
        name={name}
        rules={{ validate }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <div className={classNames('relative w-full col-start', className)}>
            {label && (
              <label
                className={classNames(' mb-2 text-light dark:text-dark')}
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <select
              id={name}
              ref={ref}
              defaultValue={value || ''}
              onChange={onChange}
              className={classNames(
                ' h-12',
                !value && 'text-transparent',
                error
                  ? 'rounded border-2 border-red-400 shadow'
                  : 'rounded border border-light dark:border-dark'
              )}
              {...rest}
            >
              <option disabled hidden value=""></option>
              {options?.map((option) => (
                <option
                  value={option.id}
                  key={option.id}
                  className="text-gray-900"
                >
                  {option.title}
                </option>
              ))}
            </select>
            <div
              className={classNames(
                'flex items-center absolute top-0 right-0  mr-8',
                label ? 'mt-12' : 'mt-4'
              )}
            >
              {value && (
                <Button
                  type="button"
                  className="mr-1"
                  icon
                  onClick={(e) => {
                    e.stopPropagation()
                    setValue(name, '')
                  }}
                >
                  <ICDelete
                    role="delete"
                    className="w-4 h-4 text-red-500  z-30"
                  />
                </Button>
              )}
            </div>
            <Error error={error} className="absolute top-0 left-0 mt-[87px]" />
          </div>
        )}
      />
    )
  }
)
