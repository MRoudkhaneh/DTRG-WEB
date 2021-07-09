import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { classNames } from 'utils/classes'

const flexes = ['w-1/4', 'w-1/2', 'w-3/4', 'w-full']
const View = () => {
  // const { push } = useHistory();
  // useEffect(() => {
  //   push("/admin/patients");
  // }, []);

  const [state, setstate] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === 3) setstate(0)
      else setstate(state + 1)
    }, 300)
    return () => {
      clearInterval(interval)
    }
  }, [state])

  return (
    <div className="w-full">
      <div className={classNames('w-full flex h-[2px] bg-primary trans')}>
        <div
          className={classNames('bg-secondary h-full trans', flexes[state])}
        />
      </div>
    </div>
  )
}

export default View
