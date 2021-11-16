import { classNames } from 'utils/classes'
import { AdminHeader } from 'containers/header/admin-header'
import { AdminDashboard } from 'containers/dashboards/admin-dashboard'
import { useRecoilValue } from 'recoil'
import { drawerAtom } from 'provider/recoil/atoms'

export const AdminLayout = ({ children }) => {
  const open = useRecoilValue(drawerAtom)

  return (
    <div
      className={classNames(
        'fixed inset-0 overflow-y-auto overflow-x-hidden bg-light dark:bg-dark'
      )}
    >
      <AdminDashboard />
      <AdminHeader />
      <div
        className={classNames(
          'w-full col-center my-4  transition-padding duration-500 ease-in-out',
          open ? 'pl-72' : 'pl-20'
        )}
      >
        <div className="px-20 w-full">{children}</div>
      </div>
    </div>
  )
}
