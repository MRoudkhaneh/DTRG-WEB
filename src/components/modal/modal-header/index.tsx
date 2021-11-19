import { FC, memo } from 'react'
import { Text } from 'components/text'
import { ICClose } from 'icons/close'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { TModal } from '..'

export const ModalHeader = memo(({ header, onClose, withHeader }: TModal) => {
  if (withHeader)
    return (
      <div className=" w-full row-between pt-6 pb-2 px-8" slot="header">
        {header ? (
          <Text className="text-gray-600" size="title" as="h1">
            {header}
          </Text>
        ) : (
          <div />
        )}
        {onClose && (
          <Tooltip content="Close">
            <Button
              icon
              className="peer"
              onClick={onClose}
              role="close"
              aria-describedby="close-modal"
              aria-label="Close modal"
            >
              <ICClose
                aria-label="Close modal"
                role="close"
                className="w-10 h-10 text-gray-600"
              />
            </Button>
          </Tooltip>
        )}
      </div>
    )
  else return null
})
