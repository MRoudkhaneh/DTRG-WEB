import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const ModalBody = memo(({ children, className }: IModal) => {
  return (
    <div
      className={classNames('w-full h-full overflow-auto', className)}
      slot="body"
    >
      {children}
    </div>
  )
})
