import { FC, memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { ICPerson } from 'icons/person'
import { classNames } from 'utils/classes'

export const AuthDropDown: FC<{
  pathname?: string
  push?: any
  dark?: boolean
}> = memo(({ pathname, push, dark }) => {
  return (
    <DropDown
      label="Sign in"
      active={pathname.includes('authentication')}
      icon={() => (
        <ICPerson
          className={classNames(
            'w-6 h-6 mx-3  cursor-pointer text-gray-500 dark:text-gray-300'
          )}
          onClick={(e) => {
            e.stopPropagation()
            push('/authentication/login')
          }}
        />
      )}
    >
      <DropDownOption
        onClick={() => push('/authentication/login')}
        active={pathname === '/authentication/login'}
      >
        Login
      </DropDownOption>
      <DropDownOption
        onClick={() => push('/authentication/register')}
        active={pathname === '/authentication/register'}
      >
        Register
      </DropDownOption>
      <DropDownOption
        onClick={() => push('/authentication/password')}
        active={pathname === '/authentication/password'}
      >
        Password Recovery
      </DropDownOption>
    </DropDown>
  )
})
