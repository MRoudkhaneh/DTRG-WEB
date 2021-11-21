import { memo } from 'react'

export const Grid = memo(({ className, children, cols, gap = '6' }: IGrid) => {
  return (
    <div
      slot="wrapper"
      className={`w-full grid grid-cols-1  ${
        cols
          ? `xl:grid-cols-${cols} md:grid-cols-${cols} lg:grid-cols-${cols}  gap-${gap}`
          : 'xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2  gap-6'
      }   ${className}`}
    >
      {children}
    </div>
  )
})
