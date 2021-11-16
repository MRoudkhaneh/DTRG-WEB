import { memo } from 'react'
import { useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation()
  const { token } = useAuth()
  const { toggleDrawer } = useUi()

  return (
    <div className="w-full flex flex-col space-y-4 px-4 relative">
      {token ? null : <AuthDropDown pathname={pathname} />}
      <PatientDropDown pathname={pathname} />
      <AssetDropDown pathname={pathname} />
      <AuditDropDown pathname={pathname} />
      <Text className="fixed bottom-12 self-center text-secondary dark:text-primary">
        DORIS
      </Text>
      <div className="flex flex-row items-center justify-end">
        <Button icon onClick={() => toggleDrawer()} className="fixed bottom-3 ">
          <ICChevronLeft
            id="close"
            className="w-5 h-5 text-gray-500 dark:text-gray-300"
          />
        </Button>
      </div>
    </div>
  )
})
