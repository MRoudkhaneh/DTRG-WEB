import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const SelectBoxValue = memo(
  ({ multiple, value, open, label }: ISelect) => {
    if (multiple && value && typeof value === 'object' && value.length > 0)
      return (
        <div
          className={classNames(
            'w-10/12 flex-row justify-start items-center ',
            open && 'opacity-30'
          )}
        >
          {(value || []).map((val, index) => (
            <span className="text-gray-900" key={index}>
              {val}
              {value.length - 1 === index ? ' ' : ' , '}
            </span>
          ))}
        </div>
      )
    else
      return (
        <span
          className={classNames(
            value ? 'text-gray-900' : 'text-gray-500 dark:text-gray-700',
            open && 'opacity-30'
          )}
        >
          {value || `Select ${label}`}
        </span>
      )
  }
)
