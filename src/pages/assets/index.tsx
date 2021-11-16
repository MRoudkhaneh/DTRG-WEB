import { Skeleton } from 'components/skeleton'
import { PatientAssets } from 'containers/patients/assets/list'
import { AssetModal } from 'containers/patients/assets/modal'
import { useDialog } from 'hooks/use-dialog'
import { Suspense } from 'react'

const Assets = () => {
  const {
    dialog: { open },
  } = useDialog()

  return (
    <Suspense fallback={<Skeleton />}>
      <PatientAssets />
      {open && <AssetModal />}
    </Suspense>
  )
}

export default Assets
