import { FC, memo, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ModalCore } from './modal-core'

let modalRoot = document.getElementById('modal') as any
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  document.body.appendChild(modalRoot)
}

export const Modal: FC<IModal> = memo((props) => {
  const el = useRef(document.createElement('div'))

  useLayoutEffect(() => {
    modalRoot.appendChild(el.current)
    return () => modalRoot.removeChild(el.current)
  }, []) as any
  return createPortal(<ModalCore {...props} />, el.current)
})
