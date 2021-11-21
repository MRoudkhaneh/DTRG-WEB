import { memo } from 'react'
import { classNames } from 'utils/classes'

export const DropDownBox = memo(({ open, children }: IDropdown) => {
  return (
    <div
      className={classNames(
        'w-full  rounded',
        open ? ' h-auto min-h-10' : 'h-0'
      )}
    >
      {open && (
        <div className="flex flex-col pl-8 pt-1" slot="children">
          {children}
        </div>
      )}
    </div>
  )
})
