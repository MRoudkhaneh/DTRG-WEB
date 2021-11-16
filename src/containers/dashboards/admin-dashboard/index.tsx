import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Drawer } from 'components/drawer'
import Logo from 'assets/images/logo.jpg'

import { AdminDashboardOpen } from './admin-dashboard-open'
import { AdminDashboardClose } from './admin-dashboard-close'
import { useRecoilValue } from 'recoil'
import { drawerAtom } from 'provider/recoil/atoms'

export const AdminDashboard = memo(() => {
  const push = useNavigate()
  const open = useRecoilValue(drawerAtom)

  return (
    <Drawer open={open}>
      <div className="w-full row-center mt-2 mb-6 ">
        <img
          className="w-14 h-14 cursor-pointer"
          src={Logo}
          alt="Logo"
          onClick={() => push('/admin/patients')}
        />
      </div>
      {open ? <AdminDashboardOpen /> : <AdminDashboardClose />}
    </Drawer>
  )
})
