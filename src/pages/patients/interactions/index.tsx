import { Skeleton } from 'components/skeleton'
import { Suspense } from 'react'
import { PatientInteractionsList } from 'containers/patients/interactions/list'
import { PatientInteractionsModal } from 'containers/patients/interactions/modal'
import { useDialog } from 'hooks/use-dialog'

const PatientInteractions = () => {
  const {
    dialog: { open },
  } = useDialog()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientInteractionsList />
      {open && <PatientInteractionsModal />}
    </Suspense>
  )
}

export default PatientInteractions
