import { Button } from 'components/button'
import { Error } from 'components/error'
import { useValidation } from 'hooks/use-validation'
import { ICChevronDown } from 'icons/chevron-down'
import { ICDelete } from 'icons/delete'
import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { classNames } from 'utils/classes'

export const SelectBoxSingle = memo(
  ({
    children,
    required,
    label,
    className,
    name,
    control,
    setValue,
  }: ISelect) => {
    const { validate } = useValidation({ required })
    return (
      <Controller
        name={name}
        control={control}
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
                'w-full row-between focus:outline-none overflow-hidden cursor-pointer text-gray-900 bg-white dark:bg-gray-400 h-12  px-4 appearance-none',
                error
                  ? 'rounded border-2 border-red-400 shadow'
                  : 'rounded border border-light dark:border-dark',
                !value && 'text-gray-700'
              )}
            >
              <option value="" selected disabled hidden>
                Select an option
              </option>
              {children}
            </select>
            <div className="flex items-center absolute top-0 right-0 mt-12 mr-4 space-x-3">
              {value && setValue && (
                <Button
                  type="button"
                  icon
                  onClick={(e) => {
                    e.stopPropagation()
                    if (setValue) {
                      setValue(name, '')
                    }
                  }}
                >
                  <ICDelete
                    role="delete"
                    className="w-4 h-4 text-red-500  z-30"
                  />
                </Button>
              )}
              <ICChevronDown className="w-4 h-4 text-gray-900" />
            </div>
            <Error error={error} className="absolute top-0 left-0 mt-[87px]" />
          </div>
        )}
      />
    )
  }
)
