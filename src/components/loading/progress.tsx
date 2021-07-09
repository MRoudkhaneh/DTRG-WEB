import { useUi } from 'hooks/use-ui'
import { memo, useEffect, useState } from 'react'
import { classNames } from 'utils/classes'

const flexes = ['w-1/5', 'w-1/3', 'w-1/2', 'w-2/3', 'w-full']

export const LoaidngProgress = memo(() => {
  const [state, setstate] = useState(0)
  const {
    uiState: { dark },
  } = useUi()

  const interval = setInterval(() => {
    if (state === 4) setstate(0)
    else setstate(state + 1)
  }, 700)

  useEffect(() => {
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      <div
        className={classNames(
          'w-full flex h-[2px]',
          dark ? 'bg-gray-800' : 'bg-gray-100'
        )}
      >
        <div
          className={classNames(
            ' h-[2px]',
            dark ? 'bg-primary' : 'bg-secondary',
            flexes[state]
          )}
        />
      </div>
    </div>
  )
})
