import { useEffect } from 'react'
import { useHistory } from 'react-router'

const View = () => {
  const { push } = useHistory()
  // useEffect(() => {
  //   push('/admin/patients')
  // }, [])

  return (
    <div className="w-full">
      <button onClick={() => push('/authentication/login')}>go</button>
    </div>
  )
}

export default View
