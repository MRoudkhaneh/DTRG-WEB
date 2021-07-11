import { FC, memo } from 'react'
import { useValidation } from 'hooks'
import { Error } from 'components'
import { classNames } from 'utils'

import { TextAreaLabel } from './text-area-label'
import { TextAreatCore } from './text-area-core'
import { TextAreaInteractive } from './text-area-interactive'
import { Controller } from 'react-hook-form'

export const TextArea: FC<ITextArea> = memo((props) => {
  const { required, max, min, className, error, control, name } = props
  const { validate } = useValidation({ required, max, min })

  if (control)
    return (
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
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
              {...props}
            />
            <Error error={error} className="absolute top-[75px] left-0" />
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
