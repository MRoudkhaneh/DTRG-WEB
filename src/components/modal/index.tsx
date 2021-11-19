import { ComponentProps, FC, memo, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'
import { ModalCore } from './modal-core'

let modalRoot = document.getElementById('modal') as any
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  modalRoot.setAttribute('title', 'dialog')
  document.body.appendChild(modalRoot)
}

export type TModal = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: any
  onClose?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  header?: string
  withHeader?: boolean
  ref?: any
} & ComponentProps<'dialog'>

export const Modal = memo((props: TModal) => {
  return createPortal(<ModalCore {...props} />, modalRoot)
})
