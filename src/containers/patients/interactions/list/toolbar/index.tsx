import { FC, memo } from 'react'
import { ICPlus, ICArrowLeft } from 'icons'
import { Button, Text, Toolbar, Tooltip } from 'components'
import { useUi } from 'hooks'
import { useHistory, useLocation } from 'react-router-dom'
import { usePatientInteractionList } from '../use-patient-interactien-list'

export const PatientinteractionListToolbar: FC<{ onSearch?: any }> = memo(
  () => {
    const { queryKey } = usePatientInteractionList()
    const { toggleDialog } = useUi()
    const {
      state: { patient },
    } = useLocation() as any
    const { push } = useHistory()

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
          <Tooltip content="Go back">
            <Button
              className="peer"
              onClick={() => push('/admin/patients')}
              icon
            >
              <ICArrowLeft className="w-7 h-7 text-primary" />
            </Button>
          </Tooltip>
          <Tooltip content="Create">
            <Button
              icon
              className="peer"
              onClick={(e) => {
                e.stopPropagation()
                toggleDialog({
                  open: true,
                  type: 'patient-interactions-form',
                  queryKey,
                })
              }}
            >
              <ICPlus className="w-10 h-10 text-primary" />
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    )
  }
)
