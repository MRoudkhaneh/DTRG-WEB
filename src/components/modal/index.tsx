import { FC, memo } from 'react'
import { createPortal } from 'react-dom'
import { ModalCore } from './modal-core'

let modalRoot = document.getElementById('modal') as any
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  document.body.appendChild(modalRoot)
}

export const Modal: FC<IModal> = memo((props) => {
  return createPortal(<ModalCore {...props} />, modalRoot)
})
