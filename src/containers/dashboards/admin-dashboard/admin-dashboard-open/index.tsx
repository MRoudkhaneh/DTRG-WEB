import { memo } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useAuth, useUi } from 'hooks'
import { Button, Text } from 'components'
import { ICChevronLeft } from 'icons'

import { AuthDropDown } from './auth-drop-down'
import { PatientDropDown } from './patient-drop-down'
import { classNames } from 'utils/classes'

export const AdminDashboardOpen = memo(() => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { token } = useAuth()
  const { toggleDrawer } = useUi()

  return (
    <div className="w-full flex flex-col space-y-4 px-4 relative">
      {token ? null : <AuthDropDown pathname={pathname} push={push} />}
      <PatientDropDown pathname={pathname} push={push} />
      <Text
        className={classNames(
          'fixed bottom-12 self-center text-secondary dark:text-primary'
        )}
      >
        DORIS
      </Text>
      <div className="flex flex-row items-center justify-end">
        <Button icon onClick={() => toggleDrawer()} className="fixed bottom-3 ">
          <ICChevronLeft
            id="close"
            className={classNames('w-5 h-5 text-gray-500 dark:text-gray-300')}
          />
        </Button>
      </div>
    </div>
  )
})
