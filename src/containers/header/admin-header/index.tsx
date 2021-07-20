import { memo, useMemo } from 'react'
import { classNames } from 'utils/classes'
import { Switch } from 'components/switch'
import { useUi } from 'hooks/use-ui'
import { ICDark } from 'icons/dark'
import { ICLight } from 'icons/light'
import { Tooltip } from 'components/tooltip'
import { Button } from 'components/button'
import { ICPersonDash } from 'icons/person-dash'
import { useHistory, useLocation } from 'react-router-dom'

export const AdminHeader = memo(() => {
  const {
    toggleDark,
    uiState: {
      theme,
      drawer: { open },
    },
  } = useUi()

  const { push } = useHistory()

  const { pathname } = useLocation()

  const dark = useMemo(() => theme === 'dark', [theme])

  return (
    <header
      className={classNames(
        'row-between h-20 pr-4 md:pr-10 px-2',
        open
          ? 'md:transform md:translate-x-72 md:w-[calc(100%-18rem)]'
          : 'md:transform md:translate-x-20 md:w-[calc(100%-5rem)]'
      )}
    >
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
