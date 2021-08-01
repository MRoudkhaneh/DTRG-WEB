import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { useToggle } from 'hooks/use-toggle'
import { Error } from 'components/error'
import { classNames } from 'utils/classes'

import { SelectBackDrop } from './select-back-drop'
import { SelectBox } from './select-box'
import { SelectDropBox } from './select-drop-box'
import { SelectBoxSingle } from './select-box-single'

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

    if (multiple)
      return (
        <div
          className={classNames('w-full col-start', className)}
          slot="wrapper"
        >
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
            render={({
              field: { onChange, value, ref: fieldRef },
              fieldState: { error },
            }) => (
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
                  fieldRef={fieldRef}
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
    else
      return (
        <SelectBoxSingle
          name={name}
          control={control}
          required={required}
          className={className}
          label={label}
          setValue={setValue}
        >
          {children}
        </SelectBoxSingle>
      )
  }
)
