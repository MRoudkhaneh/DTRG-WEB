import { memo } from 'react'
import { useHistory, useLocation } from 'react-router'
import { ICMenu, ICPeoples, ICPerson } from 'icons'
import { Button, Text } from 'components'
import { classNames } from 'utils'
import { useAuth, useUi } from 'hooks'

export const AdminDashboardClose = memo(() => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { token } = useAuth()
  const {
    toggleDrawer,
    uiState: { dark },
  } = useUi()

  return (
    <div className="col-center mt-6 relative">
      <div className="col-center space-y-4 ">
        {token ? null : (
          <Button icon onClick={() => push('/authentication/login')}>
            <ICPerson
              className={classNames(
                'w-6 h-6',
                pathname.includes('authentication')
                  ? dark
                    ? 'text-white'
                    : 'text-gray-500'
                  : 'text-gray-400'
              )}
            />
          </Button>
        )}
        <Button icon onClick={() => push('/admin/patients')}>
          <ICPeoples
            className={classNames(
              'w-6 h-6 ',
              pathname.includes('patients')
                ? dark
                  ? 'text-white'
                  : 'text-gray-500'
                : 'text-gray-400'
            )}
          />
        </Button>
      </div>
      <Text
        className={classNames(
          'fixed bottom-12',
          dark ? 'text-primary' : 'text-secondary'
        )}
      >
        DORIS
      </Text>
      <Button icon onClick={() => toggleDrawer()} className="fixed bottom-3">
        <ICMenu
          id="menu"
          className={classNames(
            'w-6 h-6',
            dark ? 'text-gray-300' : 'text-gray-500'
          )}
        />
      </Button>
    </div>
  )
})
