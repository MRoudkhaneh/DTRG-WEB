import { FC, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useUi } from 'hooks/use-ui'
import { ICPlus } from 'icons/plus'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

import { usePatientInteractionList } from '../use-patient-interactien-list'

export const PatientinteractionListToolbar = memo(() => {
  const { queryKey } = usePatientInteractionList()
  const { toggleDialog } = useUi()
  const navigate = useNavigate()
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
        <Tooltip content="Go back">
          <Button className="peer" onClick={() => navigate(-1)} icon>
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
})
