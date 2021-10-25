import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { TCheck } from '../check'

export const CheckCore = memo(
  ({ onClick, className, disabled, ...rest }: Partial<TCheck>): JSX.Element => {
    return (
      <input
        data-testid="check-core"
        type="checkbox"
        className={classNames('w-5 h-5 checked:bg-indigo-600', className)}
        onClick={(e) => !disabled && onClick && onClick(e)}
        {...rest}
      />
    )
  }
)
