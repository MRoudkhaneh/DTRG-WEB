import { PatientAssets } from 'containers/patients/assets/list'
import { AssetModal } from 'containers/patients/assets/modal'
import { RecoilRoot } from 'recoil'

const Assets = () => {
  return (
    <RecoilRoot>
      <PatientAssets />
      <AssetModal />
    </RecoilRoot>
  )
}

export default Assets
