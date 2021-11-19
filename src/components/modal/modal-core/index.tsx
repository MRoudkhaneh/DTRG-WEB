import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { TModal } from '..'

import { ModalBackDrop } from '../modal-back-drop'
import { ModalBody } from '../modal-body'
import { ModalHeader } from '../modal-header'

export const ModalCore = memo(
  ({ children, onClose, className, size, id, header, withHeader }: TModal) => {
    return (
      <div
        className="fixed inset-0 row-items-start z-40 pt-10 md:pt-32 "
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="modal"
      >
        <div
          slot="modal"
          className={classNames(
            'col-center z-50 rounded overflow-hidden max-h-[85%] bg-light dark:bg-dark animate-fade-in-up  ',
            size === 'xl'
              ? 'w-10/12'
              : size === 'lg'
              ? 'w-10/12 lg:w-8/12'
              : size === 'md'
              ? 'w-10/12 lg:w-1/2'
              : size === 'sm'
              ? 'w-10/12 lg:w-4/12'
              : 'w-10/12 lg:w-1/2'
          )}
        >
          <ModalHeader
            withHeader={withHeader}
            header={header}
            onClose={onClose}
          />
          <ModalBody className={className}>{children}</ModalBody>
        </div>
        <ModalBackDrop onClose={onClose} />
      </div>
    )
  }
)
