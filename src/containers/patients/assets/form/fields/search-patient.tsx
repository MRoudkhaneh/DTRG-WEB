import { FormSearchBox } from 'components/form-searchbox'
import { memo } from 'react'
import { useLocation } from 'react-router'
import { Api } from 'utils'

export const SearchPatient = memo(() => {
  const { pathname } = useLocation()
  if (!pathname.includes('patient'))
    return (
      <FormSearchBox
        url={Api.patients}
        label="Owner"
        name="owner"
        placeholder="Search for patients"
        required
      />
    )
  return null
})
