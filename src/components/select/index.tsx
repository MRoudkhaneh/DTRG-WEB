import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useToggle, useValidation } from 'hooks'
import { Input, Button, Error } from 'components'
import { classNames } from 'utils'

import { SelectBackDrop } from './select-back-drop'
import { SelectBox } from './select-box'
import { SelectDropBox } from './select-drop-box'

export const Select: FC<ISelect> = memo(
  ({
    label,
    control,
    className,
    name,
    children,
    required,
    multiple,
    setValue,
  }) => {
    const { open, toggle } = useToggle()
    const { validate } = useValidation({ required })

    return (
      <div className={classNames('w-full col-start', className)} slot="wrapper">
        {label && (
          <label className="text-gray-800 mb-2" slot="label">
            {label}
          </label>
        )}

        <Controller
          name={name}
          control={control}
          rules={{ validate }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className={`w-full flex-col relative`} slot="controlled">
              <SelectBox
                onChange={onChange}
                toggle={toggle}
                value={value}
                error={error}
                multiple={multiple}
                setValue={setValue}
                name={name}
                open={open}
              />
              {open && (
                <SelectDropBox
                  onChange={onChange}
                  toggle={toggle}
                  value={value}
                  multiple={multiple}
                >
                  {children}
                </SelectDropBox>
              )}
              <Error error={error} />
            </div>
          )}
        />

        {open && <SelectBackDrop toggle={toggle} />}
      </div>
    )
  }
)
