import { memo } from 'react'
import { Error } from 'components/error'
import { classNames } from 'utils/classes'

export const TextArea = memo((props: ITextArea) => {
  const { className, error, value, ...rest } = props

  return (
    <div
      className={classNames('w-full col-start resize-y relative', className)}
    >
      {props.label && (
        <label
          className={classNames(
            ' mb-2 text-gray-800 dark:text-gray-300',
            props.size === 'small' ? 'text-xs' : 'text-base'
          )}
        >
          {props.label}
        </label>
      )}
      <textarea
        value={value || ''}
        className={classNames(
          error
            ? 'border-2 border-red-400'
            : 'border border-gray-300 focus:ring-2  focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600 dark:focus:ring-2',
          props.size === 'large'
            ? 'h-14 '
            : props.size === 'small'
            ? 'h-8 text-[13px] min-h-[1.6rem] py-1'
            : props.expanded
            ? 'h-32 min-h-[3rem] pt-2.5'
            : 'h-12 min-h-[3rem] pt-2.5'
        )}
        {...rest}
      />
      <Error error={error} />
    </div>
  )
})
