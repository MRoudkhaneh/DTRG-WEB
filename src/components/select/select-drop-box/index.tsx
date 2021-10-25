import { cloneElement, FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const SelectDropBox = memo(
  ({ onChange, children, toggle, multiple, value, ref }: ISelect) => {
    return (
      <div
        className={classNames(
          'w-full col-start min-h-[3rem] max-h-60 overflow-y-auto rounded-b px-4  z-50 pt-18px absolute top-1px border-r-2 border-b-2 border-l-2  border-indigo-400 bg-white dark:bg-gray-400'
        )}
        ref={ref}
        slot="wrapper"
      >
        {children.length
          ? children.map((child, index) =>
              cloneElement(child, {
                onChange,
                toggle,
                key: index,
                multiple,
                state: value,
              })
            )
          : cloneElement(children, {
              onChange,
              toggle,
              multiple,
              state: value,
            })}
      </div>
    )
  }
)
