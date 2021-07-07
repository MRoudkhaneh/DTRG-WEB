import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'

export const Text: FC<IText> = memo(({ className, size, children, slot }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <span
      slot={slot}
      className={`${
        !className ||
        (!className.includes('text') && dark
          ? 'text-gray-400'
          : 'text-gray-600')
      } ${
        size === 'header'
          ? 'text-3xl'
          : size === 'title'
          ? 'text-2xl'
          : 'text-base'
      } ${className}`}
    >
      {children}
    </span>
  )
})
