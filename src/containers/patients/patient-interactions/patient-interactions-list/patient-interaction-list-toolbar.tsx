import { FC, memo } from 'react'
import { ICPlus } from 'icons'
import { Button, Text, Toolbar, Tooltip } from 'components'
import { useUi } from 'hooks'
import { useLocation } from 'react-router-dom'

export const PatientinteractionListToolbar: FC<{ onSearch?: any }> = memo(
  () => {
    const { toggleDialog } = useUi()
    const {
      state: { patient },
    } = useLocation() as any

    return (
      <Toolbar>
        <Text
          size="title"
          className="w-3/4 flex flex-col items-start "
          slot="start"
        >
          {`${patient}'s interactions`}
        </Text>
        <div className="flex items-center justify-end w-1/4 " slot="end">
          <Tooltip content="Create">
            <Button
              icon
              className="peer"
              onClick={(e) => {
                e.stopPropagation()
                toggleDialog({
                  open: true,
                  type: 'patient-interactions-form',
                })
              }}
            >
              <ICPlus className="w-10 h-10 text-secondary" />
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    )
  }
)
