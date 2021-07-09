import { memo, useEffect, useState } from 'react'
import { classNames } from 'utils/classes'

const flexes = [
  'w-1/12',
  'w-1/6',
  'w-1/4',
  'w-1/3',
  'w-5/12',
  'w-1/2',
  'w-7/12',
  'w-2/3',
  'w-3/4',
  'w-5/6',
  'w-11/12',
  'w-full',
]

export const LoaidngProgress = memo(() => {
  const [state, setstate] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === 11) setstate(0)
      else setstate(state + 1)
    }, 300)
    return () => {
      clearInterval(interval)
    }
  }, [state])

  return (
    <div className="w-full">
      <div className={classNames('w-full flex h-[2px] bg-gray-100 trans')}>
        <div
          className={classNames('bg-primary h-[2px] trans', flexes[state])}
        />
      </div>
    </div>
  )
})
