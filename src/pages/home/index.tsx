import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  const push = useNavigate()
  useEffect(() => {
    push('/admin/patients')
  }, [])

  return <div className="w-full"></div>
}

export default View
