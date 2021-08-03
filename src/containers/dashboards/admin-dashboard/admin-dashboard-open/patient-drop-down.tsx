import { FC, memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { ICPeoples } from 'icons/peoples'
import { classNames } from 'utils/classes'

export const PatientDropDown: FC<{
  pathname?: string
  push?: any
  dark?: boolean
}> = memo(({ pathname, push }) => {
  return (
    <DropDown
      label="Patients"
      active={pathname.includes('patients')}
      icon={() => (
        <ICPeoples
          className={classNames(
            'w-6 h-6 mx-3 cursor-pointer text-gray-500 dark:text-gray-300 '
          )}
          onClick={(e) => {
            e.stopPropagation()
            push('/admin/patients')
          }}
        />
      )}
    >
      <DropDownOption
        onClick={() => push('/admin/patients')}
        active={pathname === '/admin/patients'}
      >
        List
      </DropDownOption>
      <DropDownOption
        onClick={() => push('/admin/patients/form')}
        active={pathname === '/admin/patients/form'}
      >
        Add
      </DropDownOption>
    </DropDown>
  )
})
