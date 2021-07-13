import { useUi } from 'hooks/use-ui'
import { classNames } from 'utils/classes'
import { AdminHeader } from 'containers/header/admin-header'
import { AdminDashboard } from 'containers/dashboards/admin-dashboard'

export const AdminLayout = ({ children }) => {
  const {
    uiState: {
      drawer: { open },
    },
  } = useUi()

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
          'w-full trans col-center my-4 px-10 md:px-20',
          open
            ? 'md:transform md:translate-x-72 md:w-[calc(100%-18rem)]'
            : 'md:transform md:translate-x-20 md:w-[calc(100%-5rem)]'
        )}
      >
        {children}
      </div>
    </div>
  )
}
