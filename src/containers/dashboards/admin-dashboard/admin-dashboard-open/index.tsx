import { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { classNames } from 'utils/classes'
import { Text } from 'components/text'
import { Button } from 'components/button'
import { useUi } from 'hooks/use-ui'
import { useAuth } from 'hooks/use-auth'
import { ICChevronLeft } from 'icons/chevron-left'

import { AuthDropDown } from './auth-drop-down'
import { PatientDropDown } from './patient-drop-down'
import { AssetDropDown } from './asset-drop-down'
import { AuditDropDown } from './audit-drop-down'

export const AdminDashboardOpen = memo(() => {
  const push = useNavigate()
  const { pathname } = useLocation()
  const { token } = useAuth()
  const { toggleDrawer } = useUi()

  return (
    <div className="w-full flex flex-col space-y-4 px-4 relative">
      {token ? null : <AuthDropDown pathname={pathname} push={push} />}
      <PatientDropDown pathname={pathname} push={push} />
      <AssetDropDown pathname={pathname} push={push} />
      <AuditDropDown pathname={pathname} push={push} />
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
