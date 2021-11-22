import { memo, lazy, useEffect, Suspense } from 'react'
import { Modal } from 'components/modal'
import { Confirm } from 'components/confirm'
import { usePatientModal } from './use-patient-modal'
import { useDialog } from 'hooks/use-dialog'
import { PatientAdvanceSearch } from '../advance-search'
import { Skeleton } from 'components/skeleton'

const PatientForm = lazy(() =>
  import('../form').then((module) => ({ default: module.PatientForm }))
)

export const PatientModal = memo(() => {
  const { deletePatient } = usePatientModal()

  const { dialog, reset } = useDialog()

  useEffect(() => {
    return () => reset()
  }, [])

  if (dialog.open)
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
            <Suspense fallback={<Skeleton size="medium" />}>
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
            onConfirm={() => deletePatient()}
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
            <PatientAdvanceSearch />
          </Modal>
        )

      default:
        return null
    }
  else return null
})
