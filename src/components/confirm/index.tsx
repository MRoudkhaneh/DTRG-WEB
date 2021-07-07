import { Modal, Button } from 'components'
import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'
import { ConfirmActions } from './confirm-actions'
import { ConfirmBody } from './confirm-body'

export const Confirm: FC<IConfirm> = memo(
  ({
    onConfirm,
    onCancel,
    description,
    title = 'Are You Sure?',
    loading = false,
  }) => {
    const {
      uiState: { dark },
    } = useUi()
    return (
      <Modal
        size="sm"
        className={classNames(
          'col-center px-4 md:px-10 xl:px-26 py-10 ',
          dark ? 'bg-gray-800' : 'bg-white'
        )}
        slot="dialog"
      >
        <ConfirmBody title={title} description={description} dark={dark} />
        <ConfirmActions
          onCancel={onCancel}
          onConfirm={onConfirm}
          loading={loading}
        />
      </Modal>
    )
  }
)
