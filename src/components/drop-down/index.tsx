import { FC, memo } from 'react'
import { useToggle } from 'hooks/use-toggle'
import { classNames } from 'utils/classes'

import { DropDownButton } from './drop-down-button'
import { DropDownBox } from './drop-down-box'

export const DropDown = memo(
  ({ className, label, children, active = false, icon }: IDropdown) => {
    const { open, toggle } = useToggle(active)

    return (
      <div className={classNames('col-full')} id="drop-down">
        <DropDownButton
          toggle={toggle}
          className={className}
          icon={icon}
          label={label}
          open={open}
        />
        <DropDownBox open={open}>{children}</DropDownBox>
      </div>
    )
  }
)
