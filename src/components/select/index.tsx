import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useToggle, useValidation } from 'hooks'
import { Error } from 'components'
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
          <label
            className={classNames(' mb-2 text-light dark:text-dark')}
            slot="label"
          >
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
                label={label}
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
              <Error error={error} className="absolute top-[42px] left-0" />
            </div>
          )}
        />

        {open && <SelectBackDrop toggle={toggle} />}
      </div>
    )
  }
)
