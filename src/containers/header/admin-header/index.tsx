import { memo, useCallback, useState } from 'react'
import { Switch } from 'components/switch'
import { ICDark } from 'icons/dark'
import { ICLight } from 'icons/light'
import { Tooltip } from 'components/tooltip'
import { Button } from 'components/button'
import { ICPersonDash } from 'icons/person-dash'
import { useNavigate, useLocation } from 'react-router-dom'

export const AdminHeader = memo(() => {
  const [dark, setDark] = useState(true)

  const push = useNavigate()

  const { pathname } = useLocation()

  const toggleDark = useCallback((payload) => {
    if (payload) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setDark(payload)
  }, [])

  return (
    <header className="row-between h-20 pr-4 md:pr-10 px-2 w-full">
      <div />
      <div className="flex items-center">
        {!pathname.includes('authentication') && (
          <Tooltip content="Logout">
            <Button
              icon
              className="mr-6 peer"
              onClick={() => {
                localStorage.removeItem('token')
                push('/authentication/login')
              }}
            >
              <ICPersonDash className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </Button>
          </Tooltip>
        )}
        {dark && <ICLight className="w-5 h-5 text-gray-300 mr-2" />}
        <Switch
          onChange={(value) => toggleDark(value)}
          checked={dark}
          size="small"
        />
        {!dark && <ICDark className="w-5 h-5 text-gray-600 -ml-2" />}
      </div>
    </header>
  )
})
