import { Button } from 'components/button'
import { LoaidngBounce } from 'components/loading'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'
import { ICClose } from 'icons'
import { ComponentProps, memo, MouseEventHandler, Suspense } from 'react'
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
  onClose?: () => void | MouseEventHandler<HTMLButtonElement>
  header?: string
  ref?: any
} & ComponentProps<'dialog'>

const ModalCore = memo(
  ({ children, onClose, className, size, slot, role, id, header }: TModal) => {
    return (
      <div
        className="fixed inset-0 row-items-start z-40 pt-10 md:pt-32 "
        slot={slot}
        id={id}
        role={role}
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
          <div className=" w-full row-between pt-6 pb-2 px-8" slot="header">
            {header ? (
              <Text className="text-gray-600" size="title">
                {header}
              </Text>
            ) : (
              <div />
            )}
            {onClose && (
              <Tooltip content="Close">
                <Button icon className="peer" onClick={onClose}>
                  <ICClose role="close" className="w-10 h-10 text-gray-600" />
                </Button>
              </Tooltip>
            )}
          </div>
          <div
            className={classNames('w-full h-full overflow-auto', className)}
            slot="body"
          >
            <Suspense
              fallback={
                <div className="w-full grid place-items-center py-32">
                  <LoaidngBounce size="medium" />
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </div>
        <div
          slot="back-drop"
          className="fixed inset-0 bg-black opacity-80 z-40"
          onClick={() => onClose?.()}
        />
      </div>
    )
  }
)

export const Modal = (props: TModal) => {
  return createPortal(<ModalCore {...props} />, modalRoot)
}
