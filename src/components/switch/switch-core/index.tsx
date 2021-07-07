import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'
import { SwitchBox } from '../switch-box'

export const SwitchCore: FC<ISwitch> = memo(
  ({ className, onChange, size, disabled, withError, label, checked }) => {
    const {
      uiState: { dark },
    } = useUi()

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
            <SwitchBox
              onChange={onChange}
              size={size}
              disabled={disabled}
              withError={withError}
              checked={checked}
            />
          )}
        </div>
        <span
          className={classNames(
            size === 'small' ? 'text-[11px]' : ' text-sm lg:text-base',
            withError
              ? dark
                ? 'text-red-500'
                : 'text-red-700'
              : dark
              ? 'text-gray-300'
              : 'text-gray-800'
          )}
        >
          {label}
        </span>
      </div>
    )
  }
)
