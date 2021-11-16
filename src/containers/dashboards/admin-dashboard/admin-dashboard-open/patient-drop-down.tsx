import { memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { ICPeoples } from 'icons/peoples'
import { NavLink } from 'react-router-dom'

export const PatientDropDown = memo(({ pathname }: { pathname?: string }) => {
  return (
    <DropDown
      label="Patients"
      icon={() => (
        <NavLink to="/admin/patients">
          <ICPeoples className="w-6 h-6 mx-3 cursor-pointer text-gray-500 dark:text-gray-300 " />
        </NavLink>
      )}
    >
      <NavLink to="/admin/patients">
        <DropDownOption active={pathname === '/admin/patients'}>
          List
        </DropDownOption>
      </NavLink>
      <NavLink to="/admin/patients/form">
        <DropDownOption active={pathname === '/admin/patients/form'}>
          Add
        </DropDownOption>
      </NavLink>
    </DropDown>
  )
})
