import { memo } from 'react'
import { ICMenu } from 'icons/menu'
import { ICPeoples } from 'icons/peoples'
import { ICPerson } from 'icons/person'
import { Text } from 'components/text'
import { Button } from 'components/button'
import { classNames } from 'utils/classes'
import { useAuth } from 'hooks/use-auth'
import { ICEyeFill } from 'icons/eye-fill'
import { ICActivity } from 'icons/activity'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'provider/recoil/atoms'

export const AdminDashboardClose = memo(() => {
  const { token } = useAuth()
  const [_, setDrawer] = useRecoilState(drawerAtom)

  return (
    <div className="col-center mt-6 relative">
      <div className="col-center space-y-4 ">
        {token ? null : (
          <NavLink
            to="/authentication/login"
            className={({ isActive }) =>
              isActive ? 'text-gray-500 dark:text-white' : 'text-gray-400'
            }
          >
            <Button icon>
              <ICPerson className="w-6 h-6" />
            </Button>
          </NavLink>
        )}
        <NavLink
          to="/admin/patients"
          className={({ isActive }) =>
            isActive ? 'text-gray-500 dark:text-white' : 'text-gray-400'
          }
        >
          <Button icon>
            <ICPeoples className="w-6 h-6 " />
          </Button>
        </NavLink>
        <NavLink
          to="admin/assets"
          className={({ isActive }) =>
            isActive ? 'text-gray-500 dark:text-white' : 'text-gray-400'
          }
        >
          <Button icon>
            <ICEyeFill className="w-6 h-6 " />
          </Button>
        </NavLink>
        <NavLink
          to="/admin/audits"
          className={({ isActive }) =>
            isActive ? 'text-gray-500 dark:text-white' : 'text-gray-400'
          }
        >
          <Button icon>
            <ICActivity className="w-6 h-6 " />
          </Button>
        </NavLink>
      </div>
      <Text
        className={classNames(
          'fixed bottom-12 text-secondary dark:text-primary'
        )}
      >
        DORIS
      </Text>
      <Button
        icon
        onClick={() => setDrawer((prev) => !prev)}
        className="fixed bottom-3"
      >
        <ICMenu
          id="menu"
          className={classNames('w-6 h-6 text-gray-500 dark:text-gray-300')}
        />
      </Button>
    </div>
  )
})
