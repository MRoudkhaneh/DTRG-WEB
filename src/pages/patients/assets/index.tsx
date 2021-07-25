import { PatientAssets } from 'containers/patients/assets/list'
import { AssetModal } from 'containers/patients/assets/modal'
import { useUi } from 'hooks/use-ui'
import { Fragment } from 'react'

const Assets = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()

  return (
    <Fragment>
      <PatientAssets />
      {open && <AssetModal />}
    </Fragment>
  )
}

export default Assets
