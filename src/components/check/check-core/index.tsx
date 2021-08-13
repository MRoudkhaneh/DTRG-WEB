import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const CheckCore: FC<ICheck> = memo(
  ({ id, disabled, checked, onClick, className, onChange }): JSX.Element => {
    return (
      <input
        id={id}
        data-testid="check-core"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className={classNames('w-5 h-5 checked:bg-indigo-600', className)}
        onClick={(e) => !disabled && onClick && onClick(e)}
      />
    )
  }
)
