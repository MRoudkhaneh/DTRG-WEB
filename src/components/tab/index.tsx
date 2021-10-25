import { FC } from 'react'
import { classNames } from 'utils/classes'

import { TabExpand } from './tab-expand'
import { TabActions } from './tab-actions'
import { useTab } from './use-tab'

export const Tab = ({
  children,
  text,
  className,
  expandable = false,
  initialIsOpen = false,
  justify = 'start',
}: ITab) => {
  const { open, onExpand } = useTab({ initialIsOpen, expandable })

  return (
    <div className={classNames('w-full col-center ', className)}>
      <div
        className={classNames(
          'w-full flex items-center py-4 px-4 bg-secondary dark:bg-gray-900 ',
          expandable && 'cursor-pointer',
          expandable ? (open ? 'rounded-t' : 'rounded') : 'rounded-t',
          justify === 'center'
            ? 'justify-center'
            : justify === 'start'
            ? 'justify-between'
            : 'justify-end'
        )}
        onClick={onExpand}
      >
        <span className="text-2xl text-white">{text}</span>
        <TabActions expandable={expandable} open={open} />
      </div>
      <TabExpand expandable={expandable} open={open}>
        {children}
      </TabExpand>
    </div>
  )
}
