import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Drawer } from 'components/drawer'
import Logo from 'assets/images/logo.jpg'

import { AdminDashboardOpen } from './admin-dashboard-open'
import { AdminDashboardClose } from './admin-dashboard-close'

export const AdminDashboard = memo(() => {
  const push = useNavigate()
  const [drawer, setDrawer] = useState(false)

  return (
    <Drawer open={drawer}>
      <div className="w-full row-center mt-2 mb-6 ">
        <img
          className="w-14 h-14 cursor-pointer"
          src={Logo}
          alt="Logo"
          onClick={() => push('/admin/patients')}
        />
      </div>
      {drawer ? (
        <AdminDashboardOpen setDrawer={setDrawer} />
      ) : (
        <AdminDashboardClose setDrawer={setDrawer} />
      )}
    </Drawer>
  )
})
