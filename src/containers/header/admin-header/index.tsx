import { memo } from 'react'
import { classNames } from 'utils'
import { Button, Menu, Switch } from 'components'
import { useAuth, useUi } from 'hooks'
import { useHistory } from 'react-router'
import { ICDark, ICLight } from 'icons'

export const AdminHeader = memo(() => {
  const { push } = useHistory()
  const { token } = useAuth()
  const {
    toggleDark,
    uiState: {
      dark,
      drawer: { open },
    },
  } = useUi()

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
        {token && (
          <Button
            icon
            className={classNames(
              'text-sm  w-16 h-8 mr-4',
              dark
                ? 'text-gray-300 bg-gray-600 rounded'
                : 'text-gray-700 bg-gray-300 rounded'
            )}
            onClick={() => {
              localStorage.removeItem('token')
              push('/authentication/login')
            }}
          >
            Logout
          </Button>
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
