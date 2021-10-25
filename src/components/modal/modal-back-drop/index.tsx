import { FC, memo } from 'react'

export const ModalBackDrop = memo(({ onClose }: IModal) => {
  return (
    <div
      slot="back-drop"
      className="fixed inset-0 bg-black opacity-80 z-40"
      onClick={onClose}
    />
  )
})
