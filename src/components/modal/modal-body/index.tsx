import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { TModal } from '..'

export const ModalBody = memo(({ children, className }: TModal) => {
  return (
    <div
      className={classNames('w-full h-full overflow-auto', className)}
      slot="body"
    >
      {children}
    </div>
  )
})
