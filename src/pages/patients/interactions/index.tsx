import { Skeleton } from 'components/skeleton'
import { useUi } from 'hooks/use-ui'
import { lazy, Suspense } from 'react'
import { PatientInteractionsList } from 'containers/patients/interactions/list'

const PatientInteractionsModal = lazy(() =>
  import('containers/patients/interactions/modal').then((module) => ({
    default: module.PatientInteractionsModal,
  }))
)

const PatientInteractions = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()
  return (
    <Suspense fallback={<Skeleton />}>
      <PatientInteractionsList />
      {open && <PatientInteractionsModal />}
    </Suspense>
  )
}

export default PatientInteractions
