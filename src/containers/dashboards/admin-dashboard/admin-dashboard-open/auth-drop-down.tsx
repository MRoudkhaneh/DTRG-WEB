import { memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { ICPerson } from 'icons/person'
import { NavLink } from 'react-router-dom'

export const AuthDropDown = memo(({ pathname }: { pathname?: string }) => {
  return (
    <DropDown
      label="Sign in"
      icon={() => (
        <NavLink to="/authentication/login">
          <ICPerson className="w-6 h-6 mx-3  cursor-pointer text-gray-500 dark:text-gray-300" />
        </NavLink>
      )}
    >
      <NavLink to="/authentication/login">
        <DropDownOption active={pathname === '/authentication/login'}>
          Login
        </DropDownOption>
      </NavLink>
      <NavLink to="/authentication/register">
        <DropDownOption active={pathname === '/authentication/register'}>
          Register
        </DropDownOption>
      </NavLink>
      <NavLink to="/authentication/password">
        <DropDownOption active={pathname === '/authentication/password'}>
          Password Recovery
        </DropDownOption>
      </NavLink>
    </DropDown>
  )
})
