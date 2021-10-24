import { FC, memo } from 'react'
import { LoaidngBounce } from 'components/loading/bounce'
import { buttonClassName } from './helper'
import { TButton } from './button'

export const Button: FC<Partial<TButton>> = memo(
  ({
    id,
    icon,
    loading,
    disabled,
    className,
    children,
    ...rest
  }): JSX.Element => {
    return (
      <button
        data-testid={id}
        disabled={disabled || loading}
        className={buttonClassName(icon, loading, disabled, className)}
        {...rest}
      >
        {loading ? <LoaidngBounce /> : children}
      </button>
    )
  }
)
