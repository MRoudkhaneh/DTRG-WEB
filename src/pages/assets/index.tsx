import { Skeleton } from 'components/skeleton'
import { PatientAssets } from 'containers/patients/assets/list'
import { AssetModal } from 'containers/patients/assets/modal'
import { useUi } from 'hooks/use-ui'
import { Suspense } from 'react'

const Assets = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()

  return (
    <Suspense fallback={<Skeleton />}>
      <PatientAssets />
      {open && <AssetModal />}
    </Suspense>
  )
}

export default Assets
