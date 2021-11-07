import { memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ICMenu } from 'icons/menu'
import { ICPeoples } from 'icons/peoples'
import { ICPerson } from 'icons/person'
import { Text } from 'components/text'
import { Button } from 'components/button'
import { classNames } from 'utils/classes'
import { useUi } from 'hooks/use-ui'
import { useAuth } from 'hooks/use-auth'
import { ICEyeFill } from 'icons/eye-fill'
import { ICActivity } from 'icons/activity'

export const AdminDashboardClose = memo(() => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { token } = useAuth()
  const { toggleDrawer } = useUi()

  return (
    <div className="col-center mt-6 relative">
      <div className="col-center space-y-4 ">
        {token ? null : (
          <Button icon onClick={() => push('/authentication/login')}>
            <ICPerson
              className={classNames(
                'w-6 h-6',
                pathname.includes('authentication')
                  ? 'text-gray-500 dark:text-white'
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
                ? 'text-gray-500 dark:text-white'
                : 'text-gray-400'
            )}
          />
        </Button>
        <Button icon onClick={() => push('/admin/assets')}>
          <ICEyeFill
            className={classNames(
              'w-6 h-6 ',
              pathname.includes('admin/assets')
                ? 'text-gray-500 dark:text-white'
                : 'text-gray-400'
            )}
          />
        </Button>
        <Button icon onClick={() => push('/admin/audits')}>
          <ICActivity
            className={classNames(
              'w-6 h-6 ',
              pathname.includes('admin/audits')
                ? 'text-gray-500 dark:text-white'
                : 'text-gray-400'
            )}
          />
        </Button>
      </div>
      <Text
        className={classNames(
          'fixed bottom-12 text-secondary dark:text-primary'
        )}
      >
        DORIS
      </Text>
      <Button icon onClick={() => toggleDrawer()} className="fixed bottom-3">
        <ICMenu
          id="menu"
          className={classNames('w-6 h-6 text-gray-500 dark:text-gray-300')}
        />
      </Button>
    </div>
  )
})
