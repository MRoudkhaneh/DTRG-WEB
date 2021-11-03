import { FC, memo } from 'react'
import { Button } from 'components/button'
import { ICChevronDown } from 'icons/chevron-down'
import { ICChevronUp } from 'icons/chevron-up'
import { ICDelete } from 'icons/delete'

export const SelectBoxActions = memo(
  ({ multiple, value, setValue, name, open }: ISelect) => {
    return (
      <div className=" flex items-center ">
        {multiple
          ? value &&
            !open &&
            value.length > 0 && (
              <Button
                type="button"
                className="mr-2"
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
                className="mr-2"
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
        <Button icon type="button" className="mr-[12px]">
          {open ? (
            <ICChevronUp
              className="w-[13px] h-[13px] text-gray-600"
              role="arrow-down"
            />
          ) : (
            <ICChevronDown
              className="w-[13px] h-[13px] text-gray-600"
              role="arrow-down"
            />
          )}
        </Button>
      </div>
    )
  }
)
