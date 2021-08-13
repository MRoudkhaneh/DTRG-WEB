import { FC, memo } from 'react'
import { LoaidngBounce } from 'components/loading/bounce'
import { buttonClassName } from './helper'

export const Button: FC<IButton> = memo(
  ({
    className,
    children,
    onClick,
    disabled,
    type,
    icon,
    loading,
    onMouseEnter,
    onMouseLeave,
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled || loading}
        className={buttonClassName(icon, loading, disabled, className)}
      >
        {loading ? <LoaidngBounce /> : children}
      </button>
    )
  }
)
