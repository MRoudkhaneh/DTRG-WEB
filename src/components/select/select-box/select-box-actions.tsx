import { FC, memo } from 'react'
import { Button } from 'components/button'
import { ICChevronDown } from 'icons/chevron-down'
import { ICChevronUp } from 'icons/chevron-up'
import { ICDelete } from 'icons/delete'

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
            <ICChevronUp className="w-4 h-4 text-gray-900" role="arrow-down" />
          ) : (
            <ICChevronDown
              className="w-4 h-4 text-gray-900"
              role="arrow-down"
            />
          )}
        </Button>
      </div>
    )
  }
)
