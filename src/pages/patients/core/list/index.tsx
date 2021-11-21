import { Suspense } from 'react'
import { Skeleton } from 'components/skeleton'
import { PatientList } from 'containers/patients/core/list'
import { PatientModal } from 'containers/patients/core/modal'
import { RecoilRoot } from 'recoil'

const Patients = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<Skeleton />}>
        <PatientList />
        <PatientModal />
      </Suspense>
    </RecoilRoot>
  )
}

export default Patients
