import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const CheckCore: FC<Partial<TCheck>> = memo(
  ({ onClick, className, disabled, ...rest }): JSX.Element => {
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
