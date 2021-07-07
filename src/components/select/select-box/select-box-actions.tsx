import { Button } from 'components'
import { ICChevronDown, ICDelete, ICChevronUp } from 'icons'
import { FC, memo } from 'react'

export const SelectBoxActions: FC<ISelect> = memo(
  ({ multiple, value, setValue, name, open }) => {
    return (
      <div className=" flex items-center space-x-2">
        {multiple
          ? value &&
            !open &&
            value.length > 0 && (
              <Button
                type="button"
                icon
                onClick={(e) => {
                  e.stopPropagation()
                  if (setValue) {
                    setValue(name, '')
                  }
                }}
              >
                <ICDelete
                  role="delete"
                  className="w-4 h-4 text-red-500  z-30"
                />
              </Button>
            )
          : value &&
            !open && (
              <Button
                type="button"
                icon
                onClick={(e) => {
                  e.stopPropagation()
                  if (setValue) {
                    setValue(name, '')
                  }
                }}
              >
                <ICDelete
                  role="delete"
                  className="w-4 h-4 text-red-500  z-30 "
                />
              </Button>
            )}
        <Button icon type="button">
          {open ? (
            <ICChevronUp className="w-4 h-4 text-gray-500" role="arrow-down" />
          ) : (
            <ICChevronDown
              className="w-4 h-4 text-gray-500"
              role="arrow-down"
            />
          )}
        </Button>
      </div>
    )
  }
)
