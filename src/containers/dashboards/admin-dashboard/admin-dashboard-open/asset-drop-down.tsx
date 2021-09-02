import { FC, memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { classNames } from 'utils/classes'
import { ICEyeFill } from 'icons/eye-fill'

export const AssetDropDown: FC<{
  pathname?: string
  push?: any
  dark?: boolean
}> = memo(({ pathname, push }) => {
  return (
    <DropDown
      label="Assets"
      active={pathname.includes('admin/assets')}
      icon={() => (
        <ICEyeFill
          className={classNames(
            'w-6 h-6 mx-3 cursor-pointer text-gray-500 dark:text-gray-300 '
          )}
          onClick={(e) => {
            e.stopPropagation()
            push('/admin/assets')
          }}
        />
      )}
    >
      <DropDownOption
        onClick={() => push('/admin/assets')}
        active={pathname === '/admin/assets'}
      >
        List
      </DropDownOption>
    </DropDown>
  )
})
