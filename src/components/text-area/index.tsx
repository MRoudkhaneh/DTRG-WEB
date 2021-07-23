import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { Error } from 'components/error'
import { classNames } from 'utils/classes'

import { TextAreaLabel } from './text-area-label'
import { TextAreatCore } from './text-area-core'

export const TextArea: FC<ITextArea> = memo((props) => {
  const { required, max, min, className, error, control, name, expanded } =
    props
  const { validate } = useValidation({ required, max, min })

  if (control)
    return (
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({
          field: { onChange, value, ref: fieldRef },
          fieldState: { error },
        }) => (
          <div
            className={classNames(
              'w-full col-start resize-y relative',
              className
            )}
          >
            <TextAreaLabel {...props} />
            <TextAreatCore
              onChange={onChange}
              value={value}
              error={error}
              fieldRef={fieldRef}
              {...props}
            />
            <Error
              error={error}
              className={classNames(
                'absolute  left-0',
                expanded ? 'top-[155px]' : 'top-[75px]'
              )}
            />
          </div>
        )}
      />
    )
  else
    return (
      <div
        className={classNames('w-full col-start resize-y relative', className)}
      >
        <TextAreaLabel {...props} />
        <TextAreatCore {...props} />
        <Error error={error} />
      </div>
    )
})
