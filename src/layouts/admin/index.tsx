import { AdminDashboard, AdminHeader } from 'containers'
import { useUi } from 'hooks'
import { classNames } from 'utils'

export const AdminLayout = ({ children }) => {
  const {
    uiState: {
      dark,
      drawer: { open },
    },
  } = useUi()

  return (
    <div
      className={classNames(
        'fixed inset-0 overflow-y-auto overflow-x-hidden',
        dark ? 'bg-dark' : 'bg-light'
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
