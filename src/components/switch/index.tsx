import { useToggle } from 'hooks/use-toggle'
import { memo } from 'react'
import { classNames } from 'utils'

export const Switch = memo(
  ({
    className,
    size,
    checked,
    onChange,
    disabled,
    withError,
    label,
  }: ISwitch) => {
    const { open, toggle } = useToggle(checked)
    return (
      <div
        className={classNames(
          'flex items-center overflow-hidden',
          className,
          size === 'small' ? 'h-12' : 'h-20'
        )}
      >
        <div className="row-between mr-4">
          {disabled ? (
            <div
              className={classNames(
                'flex items-center justify-center  rounded-full text-white',
                size === 'small' ? 'h-7 w-14 text-sm' : 'h-8 w-16',
                checked
                  ? 'bg-green-500 text-green-200'
                  : 'bg-red-500 text-red-300'
              )}
            >
              {checked ? 'Yes' : 'No'}
            </div>
          ) : (
            <div
              className={classNames(
                'flex items-center justify-between  rounded-full  px-1 border border-indigo-600  ',
                open
                  ? 'bg-indigo-400 '
                  : withError
                  ? 'bg-red-400 '
                  : 'bg-gray-400 ',
                disabled ? ' cursor-default' : 'cursor-pointer',
                size === 'small' ? 'h-7 w-14' : 'h-8 w-16'
              )}
              onClick={() => {
                if (!disabled) {
                  onChange?.(!open)
                  toggle()
                }
              }}
            >
              {open && <div />}

              <div
                className={classNames(
                  ' rounded-full border   ',
                  open
                    ? 'bg-secondary border-indigo-700 '
                    : withError
                    ? 'bg-red-600 border-red-700'
                    : 'bg-gray-600 border-gray-700',
                  size === 'small' ? 'w-5 h-5' : 'w-6 h-6'
                )}
              />
              {!open && <div />}
            </div>
          )}
        </div>
        <span
          className={classNames(
            size === 'small' ? 'text-[11px]' : ' text-sm lg:text-base',
            withError
              ? 'text-red-700 dark:text-red-500'
              : 'text-light dark:text-dark'
          )}
        >
          {label}
        </span>
      </div>
    )
  }
)
