import { Dialog, Transition } from '@headlessui/react'
import { Button } from 'components/button'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'
import { ICClose } from 'icons'
import { ComponentProps, Fragment, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'
import { classNames } from 'utils'

let modalRoot = document.getElementById('modal') as any
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  document.body.appendChild(modalRoot)
}

export type TModal = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: any
  onClose?: (value: any) => void | MouseEventHandler<HTMLButtonElement>
  header?: string
  ref?: any
} & ComponentProps<'dialog'>

const ModalCore = ({ className, children, size, onClose, header }: TModal) => (
  <Transition appear show={true} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={onClose || (() => {})}
    >
      <div className="min-h-screen px-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-70 " />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={classNames(
              'inline-block my-20 overflow-hidden text-left align-middle transition-all transform bg-light dark:bg-dark rounded shadow-2xl',
              size === 'xl'
                ? 'w-10/12'
                : size === 'lg'
                ? 'w-8/12'
                : size === 'md'
                ? 'w-1/2'
                : size === 'sm'
                ? 'w-4/12'
                : 'w-1/2'
            )}
          >
            <Dialog.Title
              as="h3"
              className="flex items-center justify-between p-6"
            >
              {header && (
                <Text
                  className="text-light dark:text-dark justify-self-start"
                  size="title"
                >
                  {header}
                </Text>
              )}
              {onClose && (
                <Tooltip content="Close">
                  <Button
                    icon
                    className="peer justify-self-end"
                    onClick={onClose}
                    role="close"
                    aria-describedby="close-modal"
                    aria-label="Close modal"
                  >
                    <ICClose
                      aria-label="Close modal"
                      role="close"
                      className="w-10 h-10 text-gray-600"
                    />
                  </Button>
                </Tooltip>
              )}
            </Dialog.Title>
            <div className={className}>{children}</div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)

export const Modal = (props: TModal) => {
  return createPortal(<ModalCore {...props} />, modalRoot)
}
