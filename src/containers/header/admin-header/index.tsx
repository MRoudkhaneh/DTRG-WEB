import { memo, useMemo } from 'react'
import { classNames } from 'utils/classes'
import { Switch } from 'components/switch'
import { useUi } from 'hooks/use-ui'
import { ICDark } from 'icons/dark'
import { ICLight } from 'icons/light'

export const AdminHeader = memo(() => {
  const {
    toggleDark,
    uiState: {
      theme,
      drawer: { open },
    },
  } = useUi()

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
