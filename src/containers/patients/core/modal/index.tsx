import { memo, Suspense, lazy } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { usePatientModal } from './use-patient-modal'
import { useDialog } from 'hooks/use-dialog'
import { Skeleton } from 'components/skeleton'

const PatientForm = lazy(() =>
  import('../form').then((module) => ({ default: module.PatientForm }))
)
const PatientAdvanceSearch = lazy(() =>
  import('../advance-search').then((module) => ({
    default: module.PatientAdvanceSearch,
  }))
)

export const PatientModal = memo(() => {
  const { deletePatient } = usePatientModal()

  const { mutate } = deletePatient()

  const { dialog, reset } = useDialog()

  switch (dialog.type) {
    case 'patient-edit':
      return (
        <Modal
          size="lg"
          className="px-10 "
          onClose={reset}
          header={
            dialog.data
              ? `Edit ${dialog.data.first_name} ${dialog.data.surename}'s informations`
              : `Edit patient's information`
          }
        >
          <Suspense fallback={<Skeleton />}>
            <PatientForm isEditing editInitials={dialog.data} />
          </Suspense>
        </Modal>
      )

    case 'patient-delete':
      return (
        <Confirm
          type="delete"
          description={
            dialog.data
              ? `You are about to delete ${dialog.data.first_name} ${dialog.data.surename}`
              : 'You are about to delete this patient.'
          }
          onConfirm={() => mutate()}
          onCancel={reset}
        />
      )

    case 'patient-advance-search':
      return (
        <Modal
          size="lg"
          className="px-10 "
          onClose={reset}
          header="Search for patient"
        >
          <Suspense fallback={<Skeleton />}>
            <PatientAdvanceSearch />
          </Suspense>
        </Modal>
      )

    default:
      return null
  }
})
