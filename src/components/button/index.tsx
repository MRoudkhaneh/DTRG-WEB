import { memo } from 'react'
import { LoaidngBounce } from 'components/loading/bounce'
import { buttonClassName } from './helper'
import { TButton } from './button'

export const Button = memo(
  ({
    id,
    icon,
    loading,
    disabled,
    className,
    children,
    ...rest
  }: Partial<TButton>): JSX.Element => {
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
