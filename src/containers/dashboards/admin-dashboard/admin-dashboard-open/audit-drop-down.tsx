import { FC, memo } from 'react'
import { DropDown } from 'components/drop-down'
import { DropDownOption } from 'components/drop-down-option'
import { classNames } from 'utils/classes'
import { ICEyeFill } from 'icons/eye-fill'
import { ICActivity } from 'icons/activity'

export const AuditDropDown = memo(
  ({ pathname, push }: { pathname?: string; push?: any; dark?: boolean }) => {
    return (
      <DropDown
        label="Audits"
        active={pathname.includes('admin/audits')}
        icon={() => (
          <ICActivity
            className={classNames(
              'w-6 h-6 mx-3 cursor-pointer text-gray-500 dark:text-gray-300 '
            )}
            onClick={(e) => {
              e.stopPropagation()
              push('/admin/audits')
            }}
          />
        )}
      >
        <DropDownOption
          onClick={() => push('/admin/audits')}
          active={pathname === '/admin/audits'}
        >
          List
        </DropDownOption>
      </DropDown>
    )
  }
)
