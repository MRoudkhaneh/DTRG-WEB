import { memo } from 'react'
import { LoaidngBounce } from 'components/loading/bounce'
import { TButton } from './button'
import { classNames } from 'utils'

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
        className={classNames(
          ' flex items-center justify-center rounded focus:outline-none  disabled:opacity-50 ',
          !icon && 'shadow',
          loading
            ? 'cursor-wait '
            : !disabled &&
                'transform hover:-translate-y-1 hover:scale-105 transition-all ease-in duration-400',
          className
        )}
        {...rest}
      >
        {loading ? <LoaidngBounce /> : children}
      </button>
    )
  }
)
