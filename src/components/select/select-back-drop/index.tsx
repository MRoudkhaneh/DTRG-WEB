import { FC, memo } from 'react'

export const SelectBackDrop = memo(({ toggle, ref }: ISelect) => {
  return (
    <div
      slot="wrapper"
      ref={ref}
      className="opacity-0 absolute inset-0 z-20"
      onClick={() => toggle()}
    ></div>
  )
})
