import { memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { ICActivity } from 'icons/activity'
import { NavLink } from 'react-router-dom'

export const AuditDropDown = memo(({ pathname }: { pathname?: string }) => {
  return (
    <DropDown
      label="Audit log"
      icon={() => (
        <NavLink to="/admin/audits">
          <ICActivity className="w-6 h-6 mx-3 cursor-pointer text-gray-500 dark:text-gray-300 " />
        </NavLink>
      )}
    >
      <NavLink to="/admin/audits">
        <DropDownOption active={pathname === '/admin/audits'}>
          List
        </DropDownOption>
      </NavLink>
    </DropDown>
  )
})
