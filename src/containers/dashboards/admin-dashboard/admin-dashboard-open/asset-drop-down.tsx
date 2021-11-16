import { memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { ICEyeFill } from 'icons/eye-fill'
import { NavLink } from 'react-router-dom'

export const AssetDropDown = memo(({ pathname }: { pathname?: string }) => {
  return (
    <DropDown
      label="Assets"
      icon={() => (
        <NavLink to="/admin/assets">
          <ICEyeFill className="w-6 h-6 mx-3 cursor-pointer text-gray-500 dark:text-gray-300 " />
        </NavLink>
      )}
    >
      <NavLink to="/admin/assets">
        <DropDownOption active={pathname === '/admin/assets'}>
          List
        </DropDownOption>
      </NavLink>
    </DropDown>
  )
})
