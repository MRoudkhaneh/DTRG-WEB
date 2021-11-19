import { FC, memo } from 'react'
import { TModal } from '..'

export const ModalBackDrop = memo(({ onClose }: TModal) => {
  return (
    <div
      role="none"
      className="fixed inset-0 bg-black opacity-80 z-40"
      onClick={onClose}
    />
  )
})
